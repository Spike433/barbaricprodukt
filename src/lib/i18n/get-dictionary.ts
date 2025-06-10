import 'server-only'
import { Locale, dictionaries } from './dictionary'

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}