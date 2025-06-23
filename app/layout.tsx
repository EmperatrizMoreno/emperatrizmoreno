import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Emperatriz Moreno | Blog Personal",
  description:
    "Descubre insights, reflexiones y herramientas para tu crecimiento personal y profesional con Emperatriz Moreno.",
  keywords: "Emperatriz Moreno, crecimiento personal, coaching, desarrollo profesional, blog",
  generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
        <SpeedInsights />
      </body>
    </html>
  );
}
