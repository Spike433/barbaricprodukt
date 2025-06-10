import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <Header />
//         <div className="pt-16">{children}</div>
//       </body>
//     </html>
//   )
// }

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className="scroll-smooth">      
      <body className={inter.className}>
        <NextIntlClientProvider>
           <Header />
         <div className="pt-16">{children}</div>
        </NextIntlClientProvider>
       </body>
    </html>    
  );
}



import './globals.css'