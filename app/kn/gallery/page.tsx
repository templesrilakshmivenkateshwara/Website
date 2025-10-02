import { Navigation } from "@/components/navigation"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function GalleryKN() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GallerySection lang="kn" />
      <Footer />
    </main>
  )
}
