import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/scraped/home/home__sri-lakshmi-venkateshwara-swamy__01.png"
                alt="Temple Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-foreground">Sri Lakshmi Venkateshwara Swamy Temple</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Shri Lakshmi Venkateshwara Swami Charitable Trust,
              <br />
              Gottikere, Turuvekere Taluq, Tumkur Dist. Karnataka - 572 227
              <br />
              Phone: 08139 - 200504 &nbsp;|&nbsp; Mobile: 63639 95694
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</a></li>
              <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Panchaamritha Abhisheka</li>
              <li>Suprabhata Seva</li>
              <li>Special Festival Pujas</li>
              <li>Homa Services</li>
              <li>Community Programs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary" /> for our spiritual community
          </p>
          <p className="text-sm text-muted-foreground mt-2">© 2025 Sri Lakshmi Venkateshwara Swamy Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
