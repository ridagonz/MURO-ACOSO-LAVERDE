import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("declares the finished site's metadata and main sections", async () => {
  const [layout, page] = await Promise.all([
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
  ]);

  assert.match(layout, /Muro de Acoso de Jorge Eli(?:é|\u00e9)cer Laverde/);
  assert.match(page, /id="fuentes"/);
  assert.match(page, /id="muro"/);
  assert.match(page, /<ImageUploader \/>/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
});

test("keeps every curated image referenced by the home page", async () => {
  const page = await readFile(new URL("app/page.tsx", projectRoot), "utf8");
  const imagePaths = [
    "public/campana/contralor-laverde-1.jpeg",
    "public/campana/contralor-laverde-2.jpeg",
    "public/evidencias/captura-1.png",
    "public/evidencias/captura-2.png",
    "public/evidencias/captura-3.png",
  ];

  for (const path of imagePaths) {
    await access(new URL(path, projectRoot));
    assert.match(page, new RegExp(path.replace("public", "").replaceAll(".", "\\.")));
  }
});

test("declares the image upload storage binding", async () => {
  const hosting = JSON.parse(
    await readFile(new URL(".openai/hosting.json", projectRoot), "utf8"),
  );

  assert.equal(hosting.r2, "UPLOADS");
});
