"use client";

import { FormEvent, useEffect, useState } from "react";

type UploadedImage = {
  key: string;
  name: string;
  uploadedAt: string;
  url: string;
};

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024;

async function fetchUploadedImages(): Promise<UploadedImage[]> {
  const response = await fetch("/api/uploads", { cache: "no-store" });
  const payload = (await response.json()) as {
    images?: UploadedImage[];
    error?: string;
  };

  if (!response.ok) {
    throw new Error(payload.error || "No fue posible cargar el muro.");
  }

  return payload.images ?? [];
}

export function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function loadImages() {
    try {
      setImages(await fetchUploadedImages());
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No fue posible cargar el muro.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let active = true;

    void fetchUploadedImages()
      .then((uploadedImages) => {
        if (active) setImages(uploadedImages);
      })
      .catch((error: unknown) => {
        if (active) {
          setMessage(error instanceof Error ? error.message : "No fue posible cargar el muro.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  function selectFiles(selected: FileList | null) {
    const next = Array.from(selected ?? []).slice(0, MAX_FILES);
    const invalid = next.find(
      (file) => !file.type.startsWith("image/") || file.size > MAX_FILE_SIZE,
    );

    if (invalid) {
      setMessage("Cada archivo debe ser una imagen de máximo 8 MB.");
      setFiles([]);
      return;
    }

    setFiles(next);
    setMessage(next.length ? `${next.length} imagen${next.length > 1 ? "es" : ""} lista${next.length > 1 ? "s" : ""} para publicar.` : "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!files.length || !authorized || uploading) return;

    setUploading(true);
    setMessage("Publicando imágenes…");

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    try {
      const response = await fetch("/api/uploads", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(payload.error || "No fue posible publicar las imágenes.");

      setFiles([]);
      setAuthorized(false);
      setMessage("Las imágenes ya aparecen en el muro.");
      const input = document.querySelector<HTMLInputElement>("#image-files");
      if (input) input.value = "";
      await loadImages();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No fue posible publicar las imágenes.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <section className="uploads section-shell" id="aportes">
      <div className="uploads-heading">
        <p className="eyebrow">03 — Aportes al muro</p>
        <h2>Carga una<br /><span>imagen.</span></h2>
        <p>
          Selecciona hasta seis imágenes por envío. Después de publicarlas,
          aparecerán en esta misma sección para las personas con acceso al sitio.
        </p>
      </div>

      <form className="upload-form" onSubmit={handleSubmit}>
        <label className="drop-zone" htmlFor="image-files">
          <span className="upload-plus" aria-hidden="true">+</span>
          <strong>Seleccionar imágenes</strong>
          <small>JPG, PNG, WEBP o GIF · máximo 8 MB por archivo</small>
          <input
            id="image-files"
            name="images"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            onChange={(event) => selectFiles(event.target.files)}
          />
        </label>

        {files.length > 0 && (
          <ul className="selected-files" aria-label="Imágenes seleccionadas">
            {files.map((file) => (
              <li key={`${file.name}-${file.size}`}>
                <span>{file.name}</span>
                <small>{(file.size / 1024 / 1024).toFixed(1)} MB</small>
              </li>
            ))}
          </ul>
        )}

        <label className="authorization-check">
          <input
            type="checkbox"
            checked={authorized}
            onChange={(event) => setAuthorized(event.target.checked)}
          />
          <span>Confirmo que tengo autorización para compartir estas imágenes.</span>
        </label>

        <button type="submit" disabled={!files.length || !authorized || uploading}>
          {uploading ? "Publicando…" : "Publicar en el muro"}
          <span aria-hidden="true">↗</span>
        </button>

        <p className="upload-status" role="status" aria-live="polite">{message}</p>
      </form>

      <div className="community-wall" aria-live="polite">
        <div className="community-wall-heading">
          <p>Imágenes publicadas</p>
          <span>{images.length.toString().padStart(2, "0")} registros</span>
        </div>

        {loading ? (
          <p className="empty-wall">Cargando aportes…</p>
        ) : images.length === 0 ? (
          <p className="empty-wall">Aún no hay imágenes publicadas. La primera puede ser la tuya.</p>
        ) : (
          <div className="community-grid">
            {images.map((image, index) => (
              <figure className="community-image" key={image.key}>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <img src={image.url} alt={image.name || `Imagen aportada ${index + 1}`} loading="lazy" />
                </a>
                <figcaption>
                  <span>Aporte {(index + 1).toString().padStart(2, "0")}</span>
                  <small>{new Date(image.uploadedAt).toLocaleDateString("es-CO")}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
