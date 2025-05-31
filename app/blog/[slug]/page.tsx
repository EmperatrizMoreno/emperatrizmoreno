import { promises as fs } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import SectionTitle from "@/components/section-title"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.txt`)

  try {
    const content = await fs.readFile(filePath, 'utf8')
    const title = content.split('\n')[0].replace('# ', '')

    return (
      <section className="container mx-auto px-4 py-16">
        <SectionTitle className="text-white">{title}</SectionTitle>
        <div className="max-w-4xl mx-auto mt-12 prose prose-lg prose-invert">
          <div className="text-gray-light whitespace-pre-wrap">{content}</div>
        </div>
      </section>
    )
  } catch (error) {
    notFound()
  }
} 