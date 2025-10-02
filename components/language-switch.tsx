"use client"

import { usePathname } from "next/navigation"
import { switchLocalePath, type Locale } from "@/lib/i18n"

export function LanguageSwitch() {
  const pathname = usePathname() || "/"

  // Detect current locale from pathname
  let current: Locale = 'en'
  if (pathname.startsWith('/kn')) current = 'kn'
  if (pathname.startsWith('/hi')) current = 'hi'

  const locales: Locale[] = ["en", "kn", "hi"]

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const href = switchLocalePath(pathname, l)
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
