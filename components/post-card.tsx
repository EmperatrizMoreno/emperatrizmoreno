import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur-sm border-primary-blue/30">
      <div className="relative h-48 w-full">
        <Image src={post.imageUrl || "/emperatrizmoreno/skadi1.jpg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-secondary-blue text-white text-xs font-medium px-2 py-1 rounded">
          {post.category}
        </div>
      </div>

      <CardHeader className="pb-2">
        <Link href={`/blog/${post.slug}`} className="text-white hover:text-accent-blue transition-colors">
          <h3 className="text-xl font-bold">{post.title}</h3>
        </Link>
        <p className="text-sm text-gray-light">{post.date}</p>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-light">{post.excerpt}</p>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
        >
          <Link href={`/blog/${post.slug}`}>Leer más</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
