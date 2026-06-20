import { Card } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { pickGalleryItems } from "@/lib/scraped"
import { ImagePreview } from "@/components/image-preview"

export function HomeGalleryStrip({ lang = 'en' as Locale }: { lang?: Locale }) {
  const images = pickGalleryItems(lang, 6)
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Highlights</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <Card key={i} className="overflow-hidden rounded-xl bg-muted/30 py-0 gap-0">
              <ImagePreview
                src={img.src || '/placeholder.svg'}
                alt={img.alt || img.title || 'Temple image'}
                title={img.title || img.alt}
                description={img.description}
                aspectClassName="aspect-square"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
