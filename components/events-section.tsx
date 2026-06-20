import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { pickSevaItems } from "@/lib/scraped"

export function EventsSection({ lang = 'en' as Locale }: { lang?: Locale }) {
  const events = pickSevaItems(lang)

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">Seva offerings and recurring rituals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative bg-muted/30">
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </div>
              <CardHeader className="text-center items-center">
                <CardTitle className="text-xl text-foreground text-center min-h-[4.5rem] flex items-center justify-center">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-1 flex-col text-center">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{event.description}</p>

                <Button className="w-full mt-auto">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
