import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const siteUrl = new URL(`${protocol}://${host}`);
  const title = "Muro de Acoso de Jorge Eliécer Laverde";
  const description =
    "Informe central, publicaciones enlazadas y documentos aportados sobre Jorge Eliécer Laverde.";
  const socialImage = new URL("/og.png", siteUrl).toString();

  return {
    metadataBase: siteUrl,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
