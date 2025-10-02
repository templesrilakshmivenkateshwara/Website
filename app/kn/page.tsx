import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { HomeGalleryStrip } from "@/components/home-gallery-strip"

export default function HomeKN() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HomeGalleryStrip lang="kn" />
      <Footer />
    </main>
  )
}
