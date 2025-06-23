import type { BlogPost } from "@/types"
import PostCard from "@/components/post-card"
import SectionTitle from "@/components/section-title"

// Mock data for blog posts
const posts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo desarrollar una mentalidad de crecimiento",
    excerpt:
      "Descubre las claves para cultivar una mentalidad que te permita superar obstáculos y alcanzar tus metas personales y profesionales.",
    date: "21 Mayo, 2025",
    category: "Desarrollo Personal",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "como-desarrollar-mentalidad-crecimiento",
  },
  {
    id: "2",
    title: "Estrategias efectivas para la gestión del tiempo",
    excerpt:
      "Aprende a organizar tu tiempo de manera eficiente para aumentar tu productividad y reducir el estrés en tu día a día.",
    date: "15 Mayo, 2025",
    category: "Productividad",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "estrategias-gestion-tiempo",
  },
  {
    id: "3",
    title: "El poder de la comunicación asertiva",
    excerpt: "Explora cómo la comunicación asertiva puede transformar tus relaciones personales y profesionales.",
    date: "10 Mayo, 2025",
    category: "Comunicación",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "poder-comunicacion-asertiva",
  },
  {
    id: "4",
    title: "Mindfulness: Vivir en el presente",
    excerpt:
      "Descubre cómo la práctica del mindfulness puede ayudarte a reducir la ansiedad y mejorar tu bienestar general.",
    date: "5 Mayo, 2025",
    category: "Bienestar",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "mindfulness-vivir-presente",
  },
  {
    id: "5",
    title: "Liderazgo consciente en tiempos de cambio",
    excerpt: "Aprende a liderar con empatía y visión en entornos cambiantes y desafiantes.",
    date: "1 Mayo, 2025",
    category: "Liderazgo",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "liderazgo-consciente-tiempos-cambio",
  },
  {
    id: "6",
    title: "Construyendo relaciones auténticas",
    excerpt:
      "Explora las claves para desarrollar conexiones genuinas y significativas en todos los ámbitos de tu vida.",
    date: "25 Abril, 2025",
    category: "Relaciones",
    imageUrl: "/skadi1.jpg?height=300&width=600",
    slug: "construyendo-relaciones-autenticas",
  },
]

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle className="text-white">Blog</SectionTitle>
      <p className="text-gray-light text-lg mb-12 max-w-3xl mx-auto text-center">
        Explora mis artículos sobre desarrollo personal, liderazgo, productividad y más.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
