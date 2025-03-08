"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Language options
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-industrial-blue"
              >
                <path
                  d="M8 4C8 2.89543 8.89543 2 10 2H22C23.1046 2 24 2.89543 24 4V28C24 29.1046 23.1046 30 22 30H10C8.89543 30 8 29.1046 8 28V4Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path
                  d="M4 10C2.89543 10 2 10.8954 2 12V20C2 21.1046 2.89543 22 4 22H28C29.1046 22 30 21.1046 30 20V12C30 10.8954 29.1046 10 28 10H4Z"
                  fill="currentColor"
                />
                <circle cx="16" cy="16" r="6" fill="white" />
              </svg>
              <span className="ml-2 text-xl font-bold text-industrial-blue">Barbarić</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-industrial-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-industrial-blue transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-industrial-blue transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-industrial-blue transition-colors">
              Contact
            </Link>

            {/* Language selector - Desktop */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium hover:text-industrial-blue transition-colors"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <Globe className="h-4 w-4 mr-1" />
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
                          currentLang.code === lang.code ? "bg-industrial-blue/10 text-industrial-blue" : "",
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
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className="text-sm font-medium hover:text-industrial-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-industrial-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-industrial-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-industrial-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

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
                      : "hover:bg-muted",
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

