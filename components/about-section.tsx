import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"

export default function AboutSection() {
  return (
    <section className="py-20 border-t border-primary-blue/30">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-white">Conoce a Emperatriz Moreno</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-secondary-blue">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Emperatriz Moreno"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gray-light mb-6">
              Soy una apasionada del desarrollo personal y profesional con más de 10 años de experiencia ayudando a
              personas a descubrir su potencial y alcanzar sus metas.
            </p>
            <p className="text-gray-light mb-6">
              Mi misión es proporcionar herramientas, insights y reflexiones que inspiren a otros a crecer,
              transformarse y vivir una vida plena y con propósito.
            </p>
            <Button
              asChild
              variant="outline"
              className="self-start border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
            >
              <Link href="/sobre-mi">Leer más sobre mí</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
