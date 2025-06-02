import HeroSection from "@/components/hero-section"
import LatestPosts from "@/components/latest-posts"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-px w-3/4 mx-auto bg-gray-200" />
      <LatestPosts />
      <div className="h-px w-3/4 mx-auto bg-gray-200" />
      <AboutSection />
    </>
  )
}
