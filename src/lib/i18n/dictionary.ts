// lib/i18n/dictionary.ts
import 'server-only'

export type Locale = 'en' | 'hr' | 'de'

// We enumerate all dictionaries here for better typechecking
export const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  hr: () => import('./dictionaries/hr.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
}