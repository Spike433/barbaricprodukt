import { dictionaries, type Locale } from "./dictionaries"

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale]
}

