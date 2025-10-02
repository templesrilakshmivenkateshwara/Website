import { Button } from "@/components/ui/button"
import { MandalaBackground } from "./mandala-background"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center spiritual-gradient">
      <MandalaBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/scraped/home/home__sri-lakshmi-venkateshwara-swamy__01.png"
            alt="Temple Logo"
            className="h-16 w-auto mx-auto mb-6 drop-shadow"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Sri Lakshmi Venkateshwara Swamy Temple
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            A sacred space for worship, community, and spiritual growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="px-8 py-3 text-lg font-medium">
            <Link href="/contact">Visit Us Today</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg font-medium bg-transparent">
            <Link href="/events">View Events</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Daily Prayers</h3>
            <p className="text-muted-foreground">Morning and evening aarti ceremonies</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Cultural Events</h3>
            <p className="text-muted-foreground">Festivals and celebrations throughout the year</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Community</h3>
            <p className="text-muted-foreground">A welcoming space for all devotees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
