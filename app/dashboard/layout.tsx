import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard | Emperatriz Moreno",
  description: "Panel de control personal",
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-navy-gradient text-white flex">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
} 