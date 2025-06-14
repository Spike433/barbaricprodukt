"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcher from './locale-switcher'
import ReactCountryFlag from "react-country-flag"

export default function Header() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('Header')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation items using translations
  const navItems = [
    { href: "/", label: t('navItems.home') },
    { href: "/about", label: t('navItems.about') },
    { href: "/products", label: t('navItems.products') },
    { href: "/services", label: t('navItems.services') },
    { href: "/contact", label: t('navItems.contact') },
  ]

  // Flag component for the current locale
  const CurrentLocaleFlag = () => {
    return locale === 'en' ? (
      <ReactCountryFlag countryCode="GB" svg style={{ width: '1.2em', height: '1.2em' }} />
    ) : (
      <ReactCountryFlag countryCode="HR" svg style={{ width: '1.2em', height: '1.2em' }} />
    )
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
              <div className="text-left text-sm mt-6 mb-4 hidden sm:block">
                <span>{t('companyDescription')}</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-industrial-blue",
                  pathname === `/${locale}${link.href}` ? "text-industrial-blue border-b-2 border-industrial-blue pb-1" : ""
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language selector - Desktop */}
            <div className="relative ml-4">
              <div className="inline-flex items-center">
                <CurrentLocaleFlag />
                <LocaleSwitcher />
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-industrial-blue py-2",
                pathname === `/${locale}${link.href}` ? "text-industrial-blue border-b-2 border-industrial-blue pb-1" : ""
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Language selector - Mobile */}
          <div className="border-t pt-4 mt-2">            
            <div className="flex">
              <div className="inline-flex items-center gap-2 border rounded-md px-3 py-1 w-full">
                <CurrentLocaleFlag />
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}