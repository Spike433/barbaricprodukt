import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.barbaricprodukt.com"

  // Define all pages that should be in sitemap
  const pages = ["", "/about", "/products", "/services"]

  // Generate sitemap entries for each locale and page
  const sitemapEntries: MetadataRoute.Sitemap = []

  routing.locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = locale === "hr" ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            hr: locale === "hr" ? url : `${baseUrl}${page}`,
            en: locale === "en" ? url : `${baseUrl}/en${page}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
