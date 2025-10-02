import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Contact</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Reach the temple office for information and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="h-5 w-5" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Shri Lakshmi Venkateshwara Swami Charitable Trust,
                  <br />
                  Gottikere, Turuvekere Taluq,
                  <br />
                  Tumkur Dist. Karnataka - 572 227
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Phone className="h-5 w-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  08139 - 200504
                  <br />
                  63639 95694
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map / Placeholder */}
          <div className="rounded-lg border border-border p-6 bg-card text-muted-foreground">
            Temple location map or directions can be placed here.
          </div>
        </div>
      </div>
    </section>
  )
}
