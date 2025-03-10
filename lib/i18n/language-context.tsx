"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/router"
import type { Locale, dictionaries } from "./dictionaries"
import { getDictionary } from "./get-dictionary"

type LanguageContextType = {
  locale: Locale
  dictionary: typeof dictionaries.en
  changeLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale = "en" }: { children: ReactNode; initialLocale?: Locale }) {
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>(initialLocale as Locale)
  const [dictionary, setDictionary] = useState(() => getDictionary(initialLocale as Locale))

  // Update locale when router.locale changes
  useEffect(() => {
    if (router.locale && router.locale !== locale) {
      setLocale(router.locale as Locale)
      setDictionary(getDictionary(router.locale as Locale))
    }
  }, [router.locale, locale])

  const changeLocale = (newLocale: Locale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return <LanguageContext.Provider value={{ locale, dictionary, changeLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

