import Link from "next/link"
import type { BlogPost } from "@/types"
import PostCard from "@/components/post-card"
import SectionTitle from "@/components/section-title"
import { Button } from "@/components/ui/button"

// Mock data for latest posts
const latestPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo desarrollar una mentalidad de crecimiento",
    excerpt:
      "Descubre las claves para cultivar una mentalidad que te permita superar obstáculos y alcanzar tus metas personales y profesionales.",
    date: "21 Mayo, 2025",
    category: "Desarrollo Personal",
    imageUrl: "/placeholder.svg?height=300&width=600",
    slug: "como-desarrollar-mentalidad-crecimiento",
  },
  {
    id: "2",
    title: "Estrategias efectivas para la gestión del tiempo",
    excerpt:
      "Aprende a organizar tu tiempo de manera eficiente para aumentar tu productividad y reducir el estrés en tu día a día.",
    date: "15 Mayo, 2025",
    category: "Productividad",
    imageUrl: "/placeholder.svg?height=300&width=600",
    slug: "estrategias-gestion-tiempo",
  },
  {
    id: "3",
    title: "El poder de la comunicación asertiva",
    excerpt: "Explora cómo la comunicación asertiva puede transformar tus relaciones personales y profesionales.",
    date: "10 Mayo, 2025",
    category: "Comunicación",
    imageUrl: "/placeholder.svg?height=300&width=600",
    slug: "poder-comunicacion-asertiva",
  },
]

export default function LatestPosts() {
  return (
    <section className="py-20 border-t border-primary-blue/30">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-white">Últimos Artículos</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
          >
            <Link href="/blog">Ver todos los artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
