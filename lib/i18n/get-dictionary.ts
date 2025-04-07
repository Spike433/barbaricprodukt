import 'server-only'
import { Locale, dictionaries } from './dictionariy'

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}