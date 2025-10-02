import { Navigation } from "@/components/navigation"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsSection />
      <Footer />
    </main>
  )
}
