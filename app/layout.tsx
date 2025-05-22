import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emperatriz Moreno | Blog Personal",
  description:
    "Descubre insights, reflexiones y herramientas para tu crecimiento personal y profesional con Emperatriz Moreno.",
  keywords: "Emperatriz Moreno, crecimiento personal, coaching, desarrollo profesional, blog",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-navy-gradient text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
