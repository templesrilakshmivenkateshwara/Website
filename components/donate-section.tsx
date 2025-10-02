import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Building, Users, BookOpen } from "lucide-react"

export function DonateSection() {
  const donationOptions = [
    {
      icon: Heart,
      title: "General Donation",
      description: "Support daily temple operations, maintenance, and community services",
      amount: "Any amount",
    },
    {
      icon: Building,
      title: "Temple Maintenance",
      description: "Help us maintain and improve temple facilities",
      amount: "Your choice",
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Support cultural events, outreach, and community services",
      amount: "Your choice",
    },
    {
      icon: BookOpen,
      title: "Educational Initiatives",
      description: "Support Sanskrit classes, spiritual workshops, and youth programs",
      amount: "Your choice",
    },
  ]

  return (
    <section id="donate" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Support Our Temple</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Your generous donations help us maintain our sacred space, support community programs, and continue our
            spiritual mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{option.description}</p>
                  <p className="text-primary font-semibold mb-4">{option.amount}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Make a Difference Today</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Every contribution helps us serve the community better. Please contact the temple office for donation
            details and receipts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href="/contact">Contact Temple Office</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
              <a href="/events">View Sevas</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
