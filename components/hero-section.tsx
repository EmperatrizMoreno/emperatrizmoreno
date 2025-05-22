import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="text-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements to enhance the gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(65,105,225,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Bienvenida al Blog de Emperatriz Moreno</h1>
          <p className="text-xl md:text-2xl text-gray-light mb-8">
            Descubre insights, reflexiones y herramientas para tu crecimiento personal y profesional.
          </p>
          <Button asChild size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
            <Link href="/blog">Explorar Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
