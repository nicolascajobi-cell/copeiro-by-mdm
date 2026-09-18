import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copeiro | by MDM",
  description: "Organize campeonatos de futebol, futsal e Fut7 de forma simples.",
  applicationName: "Copeiro",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#07110d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
