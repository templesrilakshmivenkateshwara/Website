export type Locale = 'en' | 'kn' | 'hi'

export const supportedLocales: Locale[] = ['en', 'kn', 'hi']

export function isLocale(input?: string | null): input is Locale {
  return !!input && (supportedLocales as string[]).includes(input)
}

export function normalizeLocale(input?: string | null): Locale {
  return isLocale(input) ? input : 'en'
}

export function withLocalePath(locale: Locale, path: string): string {
  const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH?.replace(/\/+$/, '') || ''
  // EN is default at root without prefix
  if (locale === 'en') return `${basePath}${path}`
  // Ensure path begins with /
  const clean = path.startsWith('/') ? path : `/${path}`
  // Avoid double-prefix if already has /kn or /hi
  if (clean.startsWith('/kn/') || clean === '/kn') return clean
  if (clean.startsWith('/hi/') || clean === '/hi') return clean
  // Inject prefix
  return `${basePath}/${locale}${clean}`.replace(/\/+$/, '')
}

export function switchLocalePath(currentPath: string, target: Locale): string {
  // currentPath like '/', '/gallery', '/kn/events', '/hi/contact'
  // Remove any leading locale prefixes
  const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH?.replace(/\/+$/, '') || ''
  let p = currentPath
  if (basePath && p.startsWith(basePath)) p = p.slice(basePath.length) || '/'
  if (p.startsWith('/kn')) p = p.replace(/^\/kn(\/|$)/, '/')
  if (p.startsWith('/hi')) p = p.replace(/^\/hi(\/|$)/, '/')
  if (!p.startsWith('/')) p = `/${p}`
  return withLocalePath(target, p)
}
