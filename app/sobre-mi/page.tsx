import SectionTitle from "@/components/section-title"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle className="text-white">Sobre Mí</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-secondary-blue">
            <Image src="/placeholder.svg?height=400&width=400" alt="Emperatriz Moreno" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Emperatriz Moreno</h2>
          <p className="text-gray-light mb-4">
            Soy una apasionada del desarrollo personal y profesional con más de 10 años de experiencia ayudando a
            personas a descubrir su potencial y alcanzar sus metas.
          </p>
          <p className="text-gray-light mb-4">
            Mi misión es proporcionar herramientas, insights y reflexiones que inspiren a otros a crecer, transformarse
            y vivir una vida plena y con propósito.
          </p>
          <p className="text-gray-light mb-4">
            A través de este blog, comparto mi conocimiento y experiencia en temas como liderazgo, productividad,
            comunicación efectiva, mindfulness y desarrollo personal.
          </p>
          <p className="text-gray-light">
            Mi enfoque se basa en la autenticidad, la empatía y el aprendizaje continuo. Creo firmemente que todos
            tenemos el poder de crear la vida que deseamos.
          </p>
        </div>
      </div>
    </section>
  )
}
