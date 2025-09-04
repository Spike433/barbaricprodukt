import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { getMessages } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  // Croatian metadata
  if (locale === "hr") {
    return {
      title: "Barbarić Produkt | Industrijska oprema, čelične konstrukcije, gumirani ventili",
      description:
        "Barbarić Produkt d.o.o. - vodeća tvrtka za industrijsku opremu, čelične konstrukcije, gumirane ventile, PVC i alu stolariju, komunalnu opremu i opremu za more. Bravarija, strojna obrada, softverska rješenja.",
      keywords: [
        "industrijska oprema",
        "čelične konstrukcije",
        "gumirani ventili",
        "PVC stolarija",
        "alu stolarija",
        "komunalna oprema",
        "oprema za more",
        "bravarija",
        "strojna obrada",
        "softverska rješenja",
        "antikorozivna zaštita",
        "limarski radovi",
        "prerada plastičnih masa",
        "Barbarić Produkt",
        "Ivanić-Grad",
        "Hrvatska",
        "proizvodnja",
        "trgovina",
        "usluge",
      ],
      authors: [{ name: "Barbarić Produkt" }],
      openGraph: {
        title: "Barbarić Produkt | Industrijska oprema i čelične konstrukcije",
        description:
          "Vodeća tvrtka za industrijsku opremu, čelične konstrukcije, gumirane ventile i komunalnu opremu u Hrvatskoj.",
        url: "https://www.barbaricprodukt.com/",
        siteName: "Barbarić Produkt",
        locale: "hr_HR",
        type: "website",
        images: [
          {
            url: "https://www.barbaricprodukt.hr/og-image-hr.jpg",
            width: 1200,
            height: 630,
            alt: "Barbarić Produkt - Industrijska oprema",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Barbarić Produkt | Industrijska oprema",
        description: "Vodeća tvrtka za industrijsku opremu, čelične konstrukcije i gumirane ventile u Hrvatskoj.",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: "https://www.barbaricprodukt.com/",
        languages: {
          hr: "https://www.barbaricprodukt.com/",
          en: "https://www.barbaricprodukt.com/en",
        },
      },
      other: {
        "geo.region": "HR-03",
        "geo.placename": "Ivanić-Grad",
        "geo.position": "45.7042;16.3906",
        ICBM: "45.7042, 16.3906",
      },
    }
  }

  // English metadata
  return {
    title: "Barbarić Produkt | Industrial Equipment, Steel Structures, Rubber-lined Valves",
    description:
      "Barbarić Produkt d.o.o. - leading company for industrial equipment, steel structures, rubber-lined valves, PVC and aluminum joinery, communal equipment and marine equipment. Metalwork, machining, software solutions.",
    keywords: [
      "industrial equipment",
      "steel structures",
      "rubber-lined valves",
      "PVC joinery",
      "aluminum joinery",
      "communal equipment",
      "marine equipment",
      "metalwork",
      "machining",
      "software solutions",
      "anti-corrosion protection",
      "sheet metal work",
      "plastic processing",
      "Barbarić Produkt",
      "Ivanić-Grad",
      "Croatia",
      "manufacturing",
      "trade",
      "services",
    ],
    authors: [{ name: "Barbarić Produkt" }],
    openGraph: {
      title: "Barbarić Produkt | Industrial Equipment & Steel Structures",
      description:
        "Leading company for industrial equipment, steel structures, rubber-lined valves and communal equipment in Croatia.",
      url: "https://www.barbaricprodukt.com/en",
      siteName: "Barbarić Produkt",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.barbaricprodukt.com/og-image-en.jpg",
          width: 1200,
          height: 630,
          alt: "Barbarić Produkt - Industrial Equipment",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Barbarić Produkt | Industrial Equipment",
      description: "Leading company for industrial equipment, steel structures and rubber-lined valves in Croatia.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "https://www.barbaricprodukt.com/en",
      languages: {
        hr: "https://www.barbaricprodukt.com/",
        en: "https://www.barbaricprodukt.com/en",
      },
    },
    other: {
      "geo.region": "HR-03",
      "geo.placename": "Ivanić-Grad",
      "geo.position": "45.7042;16.3906",
      ICBM: "45.7042, 16.3906",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbarić Produkt d.o.o.",
              url: "https://www.barbaricprodukt.com",
              logo: "https://www.barbaricprodukt.com/logo.png",
              description:
                locale === "hr"
                  ? "Vodeća tvrtka za industrijsku opremu, čelične konstrukcije, gumirane ventile i komunalnu opremu"
                  : "Leading company for industrial equipment, steel structures, rubber-lined valves and communal equipment",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Žutička ulica 30",
                addressLocality: "Ivanić-Grad",
                postalCode: "10310",
                addressCountry: "HR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+385-91-282-3375",
                contactType: "customer service",
                availableLanguage: ["Croatian", "English"],
              },
              sameAs: ["https://www.barbaricprodukt.com"],
              foundingDate: "2008",
              numberOfEmployees: "10-15",
              industry: "Industrial Equipment Manufacturing",
              keywords:
                locale === "hr"
                  ? "industrijska oprema, čelične konstrukcije, gumirani ventili, PVC stolarija, alu stolarija, komunalna oprema"
                  : "industrial equipment, steel structures, rubber-lined valves, PVC joinery, aluminum joinery, communal equipment",
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Barbarić Produkt d.o.o.",
              image: "https://www.barbaricprodukt.com/logo.png",
              telephone: "+385-91-282-3375",
              email: "barbaric.produkt@barbaricprodukt.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Žutička ulica 30",
                addressLocality: "Ivanić-Grad",
                postalCode: "10310",
                addressCountry: "HR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.7042,
                longitude: 16.3906,
              },
              url: "https://www.barbaricprodukt.com",
              openingHours: "Mo-Fr 07:00-15:00",
              priceRange: "$$",
              servesCuisine: null,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "25",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="pt-16">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
