import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSiteBasePath() {
  return process.env.NEXT_PUBLIC_SITE_BASE_PATH?.replace(/\/+$/, '') || ''
}

export function stripSiteBasePath(pathname: string) {
  const basePath = getSiteBasePath()
  if (!basePath) return pathname
  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname
}

export function sitePath(path: string) {
  const basePath = getSiteBasePath()
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${clean}` || clean
}
