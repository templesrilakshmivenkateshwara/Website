import { Card } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { pickGalleryItems } from "@/lib/scraped"
import { ImagePreview } from "@/components/image-preview"

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
              className="h-full overflow-hidden rounded-xl border border-border shadow-sm py-0 gap-0"
            >
              <div className="p-4 pb-0">
                <ImagePreview
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt || image.title || "Gallery image"}
                  title={image.title || image.alt}
                  description={image.description}
                  aspectClassName="aspect-[4/3]"
                />
              </div>
              {(image.title || image.alt || image.description) && (
                <div className="p-4 pt-3">
                  {(image.title || image.alt) && (
                    <h3 className="text-sm font-medium text-foreground text-center">{image.title || image.alt}</h3>
                  )}
                  {image.description && (
                    <p className="mt-1 text-xs text-muted-foreground text-center">
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
