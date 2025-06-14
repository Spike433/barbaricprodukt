import ProductPageClient from "@/components/client-component";
import type { Metadata } from "next";
import { useTranslations } from 'next-intl';

// SEO Metadata
export const metadata: Metadata = {
  title: "Barbarić Produkt | Proizvodnja industrijskih rješenja u Hrvatskoj",
  description: "Proizvodimo visokokvalitetne čelične konstrukcije, industrijske ventile, gumirane elemente, PVC/alu stolariju, opremu za more i komunalne proizvode. 30+ godina iskustva u proizvodnji i montaži.",
  keywords: [
    "industrijska oprema",
    "čelične konstrukcije",
    "gumirani ventili",
    "PVC stolarija",
    "alu stolarija",
    "komunalna oprema",
    "oprema za more",
    "montažne hale",
    "rezervoari za kiseline",
    "proizvodnja Hrvatska",
    "čelični izmjenjivači",
    "separatori ulja",
    "urbana oprema",
    "pontoni i kajaci",
    "Barbarić Produkt"
  ],
  openGraph: {
    title: "Barbarić Produkt | Vodeći proizvođač industrijskih rješenja",
    description: "Specijalizirani proizvodi za industriju, graditeljstvo i komunalne usluge - od čeličnih konstrukcija do opreme za more",
    url: "https://www.barbaricprodukt.hr/proizvodnja",
    siteName: "Barbarić Produkt d.o.o.",
    images: [
      {
        url: "https://i.postimg.cc/HsmzZWqq/logo.png",
        width: 1200,
        height: 630,
        alt: "Barbarić Produkt - Proizvodnja industrijskih rješenja",
      },
      {
        url: "https://i.postimg.cc/43QSNPhF/1.png",
        width: 1200,
        height: 630,
        alt: "Montažne čelične hale proizvodnje Barbarić Produkt",
      }
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbarić Produkt | Industrijska rješenja po mjeri",
    description: "Proizvodnja čeličnih konstrukcija, industrijskih ventila i specijalizirane opreme u Hrvatskoj",
    images: ["https://i.postimg.cc/HsmzZWqq/logo.png"]
  },
  alternates: {
    canonical: "https://www.barbaricprodukt.hr/proizvodnja",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.barbaricprodukt.hr"),
  category: "manufacturing",
};

export default function ProductPage() {
  const t = useTranslations('Header');

  return (
    <main className="min-h-screen bg-background">
      <div className="container relative mx-auto px-4">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbarić Produkt",
              url: "https://www.barbaricprodukt.hr/",
              logo: "https://i.postimg.cc/HsmzZWqq/logo.png",
              description: "Barbarić Produkt d.o.o. za proizvodnju, trgovinu i usluge",
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
                email: "barbaricprodukt@barbaricprodukt.hr",
                contactType: "Customer Service",
              },
            }),
          }}
        />
        
        {/* Hero Section with semantic HTML */}
        <header className="container relative mx-auto px-4 py-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
              {t('navItems.products')}
            </h1>            
          </div>
        </header>
              
         {/* Client-side component */}
         <ProductPageClient />
      </div>
    </main>
  )
}