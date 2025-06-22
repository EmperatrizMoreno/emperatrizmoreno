"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith("/dashboard");

  return (
    <div className={`${inter.className} bg-navy-gradient text-white min-h-screen flex flex-col`}>
      {!hideHeaderFooter && <Header />}
      <main className={hideHeaderFooter ? "" : "flex-grow pt-20"}>{children}</main>
      {!hideHeaderFooter && <div className="h-px w-3/4 mx-auto bg-gray-200" />}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
} 