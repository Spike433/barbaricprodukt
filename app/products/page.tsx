import ProductPageClient from "@/components/client-component";
import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Proizvodnja | Barbarić Produkt",
  description: "Specijalizirani proizvodi: čelične konstrukcije, alu i PVC stolarija, industrijska oprema i više. Visokokvalitetna proizvodnja u Hrvatskoj.",
  keywords: [
    "čelične konstrukcije",
    "alu stolarija",
    "PVC stolarija",
    "gumificirani elementi",
    "plastificirani elementi",
    "oprema za more",    
    "industrijska oprema",
    "proizvodnja Hrvatska",
    "Barbarić Produkt"
  ],
  openGraph: {
    title: "Proizvodnja | Barbarić Produkt",
    description: "Visokokvalitetna proizvodnja čeličnih konstrukcija i industrijske opreme u Hrvatskoj",
    url: "https://www.barbaricprodukt.hr/proizvodnja",
    siteName: "Barbarić Produkt",
    images: [
      {
        url: "https://i.postimg.cc/HsmzZWqq/logo.png",
        width: 800,
        height: 600,
        alt: "Barbarić Produkt Logo",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

export default function ProductPage() {
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
              Proizvodnja
            </h1>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Proizvodimo čelične konstrukcije, gumificirane i plastificirane elemente, alu i PVC stolariju, industrijsku opremu i opremu za more. Obrađujemo metal i plastiku te radimo po individualnoj narudžbi.
            </p>
          </div>
        </header>
              
         {/* Client-side component */}
         <ProductPageClient />
      </div>
    </main>
  )
}