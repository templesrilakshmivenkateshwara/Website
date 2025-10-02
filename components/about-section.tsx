import { Card } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n"
import { getAbout } from "@/lib/content"

export async function AboutSection({ lang = 'en' as Locale }: { lang?: Locale }) {
  const about = await getAbout(lang)

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {lang === 'hi' ? 'मंदिर के बारे में' : lang === 'kn' ? 'ದೇವಾಲಯದ ಬಗ್ಗೆ' : 'About the Temple'}
          </h2>
        </div>

        <div className="space-y-14">
          {about.sections.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">{sec.title}</h3>
              {sec.body.split(/\n\n+/).map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sec.images.slice(0, 4).map((src, i) => (
                    <Card key={i} className="overflow-hidden">
                      <img src={src} alt={sec.title} className="w-full h-64 object-cover" />
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
