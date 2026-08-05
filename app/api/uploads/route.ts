import { env } from "cloudflare:workers";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

function getBucket(): R2Bucket {
  const bucket = (env as unknown as { UPLOADS?: R2Bucket }).UPLOADS;
  if (!bucket) throw new Error("El almacenamiento de imágenes no está disponible.");
  return bucket;
}

export async function GET(request: Request) {
  try {
    const bucket = getBucket();
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key) {
      if (!key.startsWith("uploads/")) {
        return Response.json({ error: "Archivo no válido." }, { status: 400 });
      }

      const object = await bucket.get(key);
      if (!object) return Response.json({ error: "Imagen no encontrada." }, { status: 404 });

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set("etag", object.httpEtag);
      headers.set("cache-control", "public, max-age=31536000, immutable");
      headers.set("x-content-type-options", "nosniff");
      return new Response(object.body, { headers });
    }

    const listed = await bucket.list({ prefix: "uploads/", limit: 100 });
    const images = listed.objects
      .sort((a, b) => b.uploaded.getTime() - a.uploaded.getTime())
      .map((object) => ({
        key: object.key,
        name: object.customMetadata?.originalName ?? "Imagen aportada",
        uploadedAt: object.uploaded.toISOString(),
        url: `/api/uploads?key=${encodeURIComponent(object.key)}`,
      }));

    return Response.json(
      { images },
      { headers: { "cache-control": "no-store" } },
    );
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "No fue posible cargar las imágenes." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const bucket = getBucket();
    const formData = await request.formData();
    const files = formData.getAll("images").filter((value): value is File => value instanceof File);

    if (!files.length) {
      return Response.json({ error: "Selecciona al menos una imagen." }, { status: 400 });
    }
    if (files.length > MAX_FILES) {
      return Response.json({ error: `Puedes publicar máximo ${MAX_FILES} imágenes por envío.` }, { status: 400 });
    }

    for (const file of files) {
      if (!ALLOWED_TYPES.has(file.type) || file.size > MAX_FILE_SIZE) {
        return Response.json(
          { error: "Cada archivo debe ser JPG, PNG, WEBP o GIF y pesar máximo 8 MB." },
          { status: 400 },
        );
      }
    }

    const uploaded = [];
    for (const file of files) {
      const extension = file.type === "image/jpeg" ? "jpg" : file.type.split("/")[1];
      const key = `uploads/${Date.now()}-${crypto.randomUUID()}.${extension}`;
      await bucket.put(key, file.stream(), {
        httpMetadata: { contentType: file.type },
        customMetadata: { originalName: file.name.slice(0, 180) },
      });
      uploaded.push({ key, url: `/api/uploads?key=${encodeURIComponent(key)}` });
    }

    return Response.json({ uploaded }, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "No fue posible publicar las imágenes." },
      { status: 500 },
    );
  }
}
