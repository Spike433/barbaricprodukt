import { en } from "./en"
import { hr } from "./hr"
import { de } from "./de"

export const dictionaries = {
  en,
  hr,
  de,
}

export type Locale = keyof typeof dictionaries

