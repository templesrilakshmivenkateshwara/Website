import type { Locale } from '@/lib/i18n'
import scraped from '@/data/scraped-assets.json'

// Types that match scraped-assets.json
interface ScrapedPageEntry {
  page: string
  page_url: string
  language: string
  alt: string
  title_nearby: string
  text_nearby: string
  context_html_snippet?: string
  original_image_url?: string
  full_image_url?: string
}

export interface ScrapedAssetMerged {
  id: string
  image_local: string
  image_url_preferred?: string
  dedup_hash?: string
  pages: ScrapedPageEntry[]
}

interface ScrapedRoot {
  generatedAt: string
  count: number
  assets: ScrapedAssetMerged[]
}

const data = scraped as ScrapedRoot

export function toPublicPath(imageLocal: string): string {
  // imageLocal is like "images/scraped/events/events-en__...jpg"
  // We copy under Next.js public/ as /scraped/... so strip leading "images/"
  const norm = imageLocal.replace(/\\/g, '/').replace(/^images\//, '')
  return `/${norm}`
}

function bestEntryForLang(asset: ScrapedAssetMerged, lang: Locale): ScrapedPageEntry | undefined {
  // Prefer exact lang, else any
  return asset.pages.find(p => p.language === lang) || asset.pages[0]
}

// Simple heuristics to split gallery-worthy images
function isGalleryCandidate(a: ScrapedAssetMerged): boolean {
  return a.pages.some(p => p.page.startsWith('gallery') || p.page.startsWith('home') || p.page.startsWith('about'))
}

export function pickGalleryItems(lang: Locale, limit?: number) {
  const items = data.assets
    .filter(isGalleryCandidate)
    // Exclude known logo asset from gallery
    .filter(a => !/home__sri-lakshmi-venkateshwara-swamy__01\.png$/i.test(a.image_local.replace(/\\/g, '/')))
    .map(a => {
      const pe = bestEntryForLang(a, lang)
      return {
        src: toPublicPath(a.image_local),
        alt: pe?.alt || '',
        title: pe?.title_nearby || '',
        description: pe?.text_nearby || '',
      }
    })
  return typeof limit === 'number' ? items.slice(0, limit) : items
}

export function pickSevaItems(lang: Locale, limit?: number) {
  const items = data.assets
    .filter(a => a.pages.some(p => p.page.startsWith('events')))
    // Exclude known logo asset just in case it was tagged
    .filter(a => !/home__sri-lakshmi-venkateshwara-swamy__01\.png$/i.test(a.image_local.replace(/\\/g, '/')))
    .map(a => {
      const pe = bestEntryForLang(a, lang)
      return {
        title: pe?.title_nearby || pe?.alt || 'Seva',
        description: pe?.text_nearby || '',
        image: toPublicPath(a.image_local),
      }
    })
  return typeof limit === 'number' ? items.slice(0, limit) : items
}
