import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function AboutEN() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutSection lang="en" />
      <Footer />
    </main>
  )
}
