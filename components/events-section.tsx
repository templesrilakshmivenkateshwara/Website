import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { pickSevaItems } from "@/lib/scraped"
import { ImagePreview } from "@/components/image-preview"

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
            <Card key={index} className="overflow-hidden rounded-xl hover:shadow-lg transition-shadow duration-300 h-full flex flex-col py-0 gap-0">
              <div className="p-4 pb-0">
                <ImagePreview
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  title={event.title}
                  description={event.description}
                  aspectClassName="aspect-[4/3]"
                />
              </div>
              <CardHeader className="text-center items-center pt-4">
                <CardTitle className="text-xl text-foreground text-center min-h-[4.5rem] flex items-center justify-center">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-1 flex-col text-center pb-6">
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
