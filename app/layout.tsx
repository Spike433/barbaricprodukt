import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barbarić Produkt | Manufacturing, Trade and Services",
  description:
    "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
  keywords: ["Barbarić Produkt", "manufacturing", "trade", "services", "Croatia", "Ivanić-Grad"],
  authors: [{ name: "Barbarić Produkt" }],
  openGraph: {
    title: "Barbarić Produkt | Manufacturing, Trade and Services",
    description:
      "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
    url: "https://www.barbaricprodukt.hr/",
    siteName: "Barbarić Produkt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbarić Produkt | Manufacturing, Trade and Services",
    description:
      "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.barbaricprodukt.hr/",
    languages: {
      en: "https://www.barbaricprodukt.hr/en",
      hr: "https://www.barbaricprodukt.hr/",
      de: "https://www.barbaricprodukt.hr/de",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
import Footer from "@/components/footer"
