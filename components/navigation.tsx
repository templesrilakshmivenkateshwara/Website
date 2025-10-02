"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitch } from "@/components/language-switch"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() || "/"
  const prefix = pathname.startsWith('/kn') ? '/kn' : pathname.startsWith('/hi') ? '/hi' : ''
  const currentPath = (pathname.replace(/^\/(kn|hi)(?=\/|$)/, '') || '/')

  const isHindi = pathname.startsWith('/hi')
  const navItems = [
    { key: 'home', name: isHindi ? 'मुखपृष्ठ' : 'Home', href: "/" },
    { key: 'about', name: isHindi ? 'हमारे बारे में' : 'About', href: "/about" },
    { key: 'gallery', name: isHindi ? 'गैलरी' : 'Gallery', href: "/gallery" },
    { key: 'events', name: isHindi ? 'सेवा' : 'Events', href: "/events" },
    { key: 'contact', name: isHindi ? 'संपर्क' : 'Contact', href: "/contact" },
    { key: 'donate', name: isHindi ? 'दान' : 'Donate', href: "/donate" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href={`${prefix || '/'}`} className="flex items-center space-x-3">
            <img
              src="/scraped/home/home__sri-lakshmi-venkateshwara-swamy__01.png"
              alt="Temple Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-foreground">Sri Lakshmi Venkateshwara Swamy Temple</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.href
              return (
                <a
                  key={item.key}
                  href={`${prefix}${item.href}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors duration-200 font-medium px-2 py-1 rounded ${
                    isActive ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
            <LanguageSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => {
                const isActive = currentPath === item.href
                return (
                  <a
                    key={item.key}
                    href={`${prefix}${item.href}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block px-3 py-2 transition-colors duration-200 font-medium rounded ${
                      isActive ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              })}
              <div className="px-3 py-2">
                <LanguageSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
