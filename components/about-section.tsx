import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle className="text-white">Conoce a Emperatriz Moreno</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          <div className="flex justify-center">
            <Image
              alt="Emperatriz Moreno"
              className="rounded-full object-cover"
              height={400}
              src="/skadi1.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="text-gray-light mb-6 text-center md:text-left">
              Soy una apasionada del desarrollo personal y profesional con más de 10 años de experiencia ayudando a
              personas a descubrir su potencial y alcanzar sus metas.
            </p>
            <p className="text-gray-light mb-6 text-center md:text-left">
              Mi misión es proporcionar herramientas, insights y reflexiones que inspiren a otros a crecer,
              transformarse y vivir una vida plena y con propósito.
            </p>
            <Button
              asChild
              variant="outline"
              className="self-center md:self-start border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
            >
              <Link href="/sobre-mi">Leer más sobre mí</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
