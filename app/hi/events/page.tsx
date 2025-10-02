import { Navigation } from "@/components/navigation"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"

export default function EventsHI() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsSection lang="hi" />
      <Footer />
    </main>
  )
}
