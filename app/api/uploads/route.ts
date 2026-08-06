import { list, put } from "@vercel/blob";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_FILES = 5;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

function getErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key) {
      if (!key.startsWith("uploads/")) {
        return Response.json({ error: "Archivo no válido." }, { status: 400 });
      }

      const result = await list({
        prefix: key,
        limit: 1,
      });

      const blob = result.blobs.find((item) => item.pathname === key);

      if (!blob) {
        return Response.json(
          { error: "Imagen no encontrada." },
          { status: 404 },
        );
      }

      const fileResponse = await fetch(blob.url);

      return new Response(fileResponse.body, {
        status: fileResponse.status,
        headers: {
          "content-type":
            blob.contentType ??
            fileResponse.headers.get("content-type") ??
            "application/octet-stream",
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    }

    const result = await list({
      prefix: "uploads/",
      limit: 100,
    });

    const images = result.blobs
      .sort(
        (a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime(),
      )
      .map((blob) => ({
        key: blob.pathname,
        name:
          blob.pathname.split("/").pop() ??
          "Imagen aportada",
        uploadedAt: blob.uploadedAt.toISOString(),
        url: `/api/uploads?key=${encodeURIComponent(blob.pathname)}`,
      }));

    return Response.json(
      { images },
      {
        headers: {
          "cache-control": "no-store",
        },
      },
    );
  } catch (error) {
    return Response.json(
      {
        error: getErrorMessage(
          error,
          "No fue posible cargar las imágenes.",
        ),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const files = formData
      .getAll("images")
      .filter(
        (value): value is File =>
          typeof File !== "undefined" && value instanceof File,
      );

    if (!files.length) {
      return Response.json(
        { error: "Selecciona al menos una imagen." },
        { status: 400 },
      );
    }

    if (files.length > MAX_FILES) {
      return Response.json(
        {
          error: `Puedes publicar máximo ${MAX_FILES} imágenes por envío.`,
        },
        { status: 400 },
      );
    }

    for (const file of files) {
      if (!ALLOWED_TYPES.has(file.type) || file.size > MAX_FILE_SIZE) {
        return Response.json(
          {
            error:
              "Cada archivo debe ser JPG, PNG, WEBP o GIF y pesar máximo 8 MB.",
          },
          { status: 400 },
        );
      }
    }

    const uploaded = [];

    for (const file of files) {
      const extension =
        file.type === "image/jpeg"
          ? "jpg"
          : file.type.split("/")[1];

      const key = `uploads/${Date.now()}-${crypto.randomUUID()}.${extension}`;

      const blob = await put(key, file, {
        access: "public",
        addRandomSuffix: false,
        contentType: file.type,
        customMetadata: {
          originalName: file.name.slice(0, 180),
        },
      });

      uploaded.push({
        key: blob.pathname,
        url: `/api/uploads?key=${encodeURIComponent(blob.pathname)}`,
      });
    }

    return Response.json({ uploaded }, { status: 201 });
  } catch (error) {
    return Response.json(
      {
        error: getErrorMessage(
          error,
          "No fue posible publicar las imágenes.",
        ),
      },
      { status: 500 },
    );
  }
}