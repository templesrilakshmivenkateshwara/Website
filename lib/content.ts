import type { Locale } from '@/lib/i18n'
import scraped from '@/data/scraped-assets.json'
import { toPublicPath } from '@/lib/scraped'
import hiCache from '@/data/hi-translation-cache.json'

interface Section {
  title: string
  body: string
  images: string[]
}

interface AboutContent {
  sections: Section[]
}

type Root = typeof scraped & { assets: Array<{ image_local: string; pages: Array<{ page: string; language: string; title_nearby?: string; text_nearby?: string }> }> }

const titleMatch = (s?: string) => (s || '').toLowerCase()
const textMatch = (s?: string) => (s || '').trim()

function translateParagraph(text: string, lang: Locale): string {
  if (lang !== 'hi') return text
  const cache = hiCache as Record<string, string>
  return cache[text] || text
}

export async function getAbout(lang: Locale): Promise<AboutContent> {
  const root = scraped as Root

  const aboutAssets = root.assets.filter(a =>
    a.pages.some(p => p.page.toLowerCase().includes('about'))
  )

  // Fallback: if no explicit about pages found, pull from home pages
  const pool = aboutAssets.length ? aboutAssets : root.assets.filter(a => a.pages.some(p => p.page.toLowerCase().includes('home')))

  const sectionsMap: Record<string, Section> = {}

  function ensureSection(key: string, title: string) {
    if (!sectionsMap[key]) {
      sectionsMap[key] = { title, body: '', images: [] }
    }
    return sectionsMap[key]
  }

  for (const asset of pool) {
    // prefer language match
    const page = asset.pages.find(p => p.language === lang) || asset.pages[0]
    const t = titleMatch(page.title_nearby)
    const isConstruction = /construction|history|build/i.test(t)
    const isFeatures = /feature|special/i.test(t)

    const key = isConstruction ? 'construction' : isFeatures ? 'features' : 'overview'
    const title = isConstruction ? 'Temple Construction' : isFeatures ? 'Special Features' : 'Overview'

    const sec = ensureSection(key, title)
    let text = textMatch(page.text_nearby)
    if (text) text = translateParagraph(text, lang)
    if (text && !sec.body.includes(text)) {
      sec.body += (sec.body ? '\n\n' : '') + text
    }
    // attach image only when the source page is actually an About page
    if (asset.image_local && page.page.toLowerCase().includes('about')) {
      const publicPath = toPublicPath(asset.image_local)
      // exclude logo from about images
      if (!/home__sri-lakshmi-venkateshwara-swamy__01\.png$/i.test(publicPath)) {
        if (!sec.images.includes(publicPath)) sec.images.push(publicPath)
      }
    }
  }

  const sections = Object.values(sectionsMap)
  if (!sections.length) {
    // Empty fallback
    return { sections: [{ title: 'About', body: 'Content coming soon.', images: [] }] }
  }
  return { sections }
}
