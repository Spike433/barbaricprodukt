"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Language options
const languages = [
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])

  const handleLanguageChange = (lang: any) => {
    setCurrentLang(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://i.postimg.cc/HsmzZWqq/logo.png"
                alt="Barbarić Produkt Logo"
                width={120}
                height={120}
                className="mr-4 mt-6 mb-4"
                priority
              />
              <div className="text-left text-sm mt-6 mb-4">
                <span>za proizvodnju, trgovinu, usluge obrade metala i plastike</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Početna" },
              { href: "/aboutus", label: "O nama" },
              { href: "/production", label: "Proizvodnja" },
              { href: "/services", label: "Usluge" },
              { href: "/contact", label: "Kontakt" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-industrial-blue",
                  pathname === link.href ? "text-industrial-blue border-b-2 border-industrial-blue pb-1" : ""
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language selector - Desktop */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium hover:text-industrial-blue transition-colors"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <span className="mr-1">{currentLang.flag}</span>
                <span className="mr-1">{currentLang.code.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background border z-50">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={cn(
                          "flex items-center w-full px-4 py-2 text-sm text-left hover:bg-muted",
                          currentLang.code === lang.code ? "bg-industrial-blue/10 text-industrial-blue" : ""
                        )}
                        onClick={() => handleLanguageChange(lang)}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <nav className="flex flex-col space-y-4 p-4">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-industrial-blue",
                pathname === link.href ? "text-industrial-blue border-b-2 border-industrial-blue pb-1" : ""
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Language selector - Mobile */}
          <div className="border-t pt-4 mt-2">
            <p className="text-xs text-muted-foreground mb-2">Select Language</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={cn(
                    "flex items-center px-3 py-1 text-sm rounded-md border",
                    currentLang.code === lang.code
                      ? "bg-industrial-blue/10 text-industrial-blue border-industrial-blue/30"
                      : "hover:bg-muted"
                  )}
                  onClick={() => {
                    handleLanguageChange(lang)
                    setIsMenuOpen(false)
                  }}
                >
                  <span className="mr-1">{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}