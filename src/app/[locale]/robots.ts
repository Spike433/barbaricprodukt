import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/_next/", "/api/"],
    },
    sitemap: "https://www.barbaricprodukt.com/sitemap.xml",
    host: "https://www.barbaricprodukt.com",
  }
}
