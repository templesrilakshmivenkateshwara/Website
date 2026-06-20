"use client"

import { usePathname } from "next/navigation"
import { switchLocalePath, type Locale } from "@/lib/i18n"
import { stripSiteBasePath } from "@/lib/utils"

export function LanguageSwitch() {
  const pathname = usePathname() || "/"
  const cleanPath = stripSiteBasePath(pathname)

  // Detect current locale from pathname
  let current: Locale = 'en'
  if (cleanPath.startsWith('/kn')) current = 'kn'
  if (cleanPath.startsWith('/hi')) current = 'hi'

  const locales: Locale[] = ["en", "kn", "hi"]

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const href = switchLocalePath(cleanPath, l)
        const active = l === current
        return (
          <a
            key={l}
            href={href}
            className={`px-2 py-1 rounded text-sm transition-colors ${
              active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {l.toUpperCase()}
          </a>
        )
      })}
    </div>
  )
}
