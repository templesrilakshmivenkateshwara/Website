import { Card } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { pickGalleryItems } from "@/lib/scraped"

export function GallerySection({ lang = 'en' as Locale }: { lang?: Locale }) {
  const galleryImages = pickGalleryItems(lang)

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {lang === 'hi' ? 'मंदिर गैलरी' : 'Temple Gallery'}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'हमारे मंदिर जीवन की झलकियों के माध्यम से हमारे पवित्र स्थल की सुंदरता और शांति का अनुभव करें'
              : 'Explore the beauty and serenity of our sacred space through these glimpses of our temple life'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden bg-transparent">
                <div className="w-full aspect-[4/3]">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || image.title || 'Gallery image'}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"/>
                </div>
              </div>
              {(image.title || image.alt || image.description) && (
                <div className="p-3">
                  {(image.title || image.alt) && (
                    <h3 className="text-sm font-medium text-foreground truncate">{image.title || image.alt}</h3>
                  )}
                  {image.description && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
