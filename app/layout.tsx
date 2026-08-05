import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muro de Acoso de Jorge Eliécer Laverde",
  description:
    "Archivo ciudadano de publicaciones, capturas y fuentes públicas sobre Jorge Eliécer Laverde.",
};

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
