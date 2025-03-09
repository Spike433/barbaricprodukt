import type { Metadata } from "next"
import Image from "next/image"
import ClientSideNavigation from "@/components/client-side-navigation"
import { Section } from "./types"

// Define sections with their content
const sections: Section[] = [
  {
    id: "celicneKonstrukcije",
    title: "Čelićne konstrukcije",
    content:
      "Proizvodimo čelične konstrukcije za razne namjene. Naši proizvodi su kvalitetni i izdržljivi, te se koriste u raznim industrijama.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
    ],
  },
  {
    id: "strojogradnja",
    title: "Strojogradnja",
    content:
      "Naša strojogradnja obuhvaća proizvodnju strojeva za poljoprivredu, mesnu industriju, te razne druge industrije.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
    ],
  },
  {
    id: "ograde",
    title: "Ograde",
    content:
      "Proizvodimo ograde za razne namjene. Naše ograde su kvalitetne i izdržljive, te se koriste u raznim industrijama.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
    ],
  },
  {
    id: "aluPvcStolarija",
    title: "Alu i PVC stolarija",
    content:
      "Proizvodimo alu i PVC stolariju za razne namjene. Naša stolarija je kvalitetna i izdržljiva, te se koristi u raznim industrijama.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [      
      
    ],
  },
  {
    id: "opremaZaMore",
    title: "Oprema za more",
    content:
      "Proizvodimo opremu za more, kao što su pontoni, staze, kajak, te razne druge proizvode.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
      { id: "oprema-za-more-pontoni", title: "Pontoni", content: "Pontoni su izdržljivi i kvalitetni, te se koriste u raznim industrijama."  },
      { id: "oprema-za-more-staze", title: "Staze", content: "Staze su izdržljive i kvalitetne, te se koriste u raznim industrijama." },
      { id: "oprema-za-more-kajak", title: "Kajak", content: "Kajak je izdržljiv i kvalitetan, te se koristi u raznim industrijama." },      
    ],
  },
  {
    id: "strojeviZaPoljoprivreduIVocarstvo",
    title: "Strojevi za poljoprivredu i voćarstvo",
    content:
      "Proizvodimo strojeve za poljoprivredu i voćarstvo, kao što su prskalice i atomizeri.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
      { id: "strojevi-za-poljoprivredu-i-vocarstvo-prskalice", title: "Prskalice", content: "Prskalice su izdržljive i kvalitetne, te se koriste u raznim industrijama." },
      { id: "strojevi-za-poljoprivredu-i-vocarstvo-atomizeri", title: "Atomizeri", content: "Atomizeri su izdržljivi i kvalitetni, te se koriste u raznim industrijama." },      
    ],
  },
  {
    id: "opremaZaMesnuIndustriju",
    title: "Oprema za mesnu industriju",
    content:
      "Proizvodimo opremu za mesnu industriju, kao što su mesoreznice, mljevenice, te razne druge proizvode.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [],
  },
  {
    id: "ekoOpremaKomunalna",
    title: "Eko oprema komunalna",
    content:
      "Proizvodimo eko opremu komunalnu, kao što su kontejneri, separatori, tankvane, te razne druge proizvode.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
      { id: "eko-oprema-komunalna-kontejneri", title: "Kontejneri", content: "Kontejneri su izdržljivi i kvalitetni, te se koriste u raznim industrijama." },
      { id: "eko-oprema-komunalna-separatori", title: "Separatori", content: "Separatori su izdržljivi i kvalitetni, te se koriste u raznim industrijama." },
      { id: "eko-oprema-komunalna-tankvane", title: "Tankvane", content: "Tankvane su izdržljive i kvalitetne, te se koriste u raznim industrijama." },      
    ],
  },
  {
    id: "urbanaOprema",
    title: "Urbana oprema",
    content:
      "Proizvodimo urbnu opremu, kao što su klupe i koševi za parkove, kandelaberi, stajališta autobusa, te razne druge proizvode.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
      { id: "urbana-oprema-klupe-i-kosevi-za-parkove", title: "Klupe i koševi za parkove", content: "Klupe i koševi za parkove su izdržljivi i kvalitetni, te se koriste u raznim industrijama." },
      { id: "urbana-oprema-kandelaberi", title: "Kandelaberi", content: "Kandelaberi su izdržljivi i kvalitetni, te se koriste u raznim industrijama." },
      { id: "urbana-oprema-stajalista-autobusa", title: "Stajališta autobusa", content: "Stajališta autobusa su izdržljiva i kvalitetna, te se koriste u raznim industrijama." },      
    ],
  },
]

export const metadata: Metadata = {
  title: "Barbarić Produkt | Home",
  description:
    "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
}

// Helper function to generate blur data URL for placeholder
function generateBlurPlaceholder(width: number, height: number, color = "e4e4e7"): string {
  // Create a simple SVG with the specified dimensions and color
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${color}"/>
    </svg>
  `
  // Convert SVG to base64
  const toBase64 =
    typeof window === "undefined"
      ? (str: string) => Buffer.from(str).toString("base64")
      : (str: string) => window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(svg)}`
}

// JSON-LD structured data for better SEO
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container relative mx-auto px-4 py-16">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbarić Produkt",
              url: "https://www.barbaricprodukt.hr/",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SIkE1iKtjUIZEdiNFuJ5AcRdJA8HlJ.png",
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

        {/* Hero section with new gradient */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">Barbarić Produkt d.o.o</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
             za proizvodnju, trgovinu i usluge          
          </p>
        </section>        

        <div className="flex flex-col lg:flex-row">
          {/* Main content - Server-side rendered for SEO */}
          <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue">{section.title}</h2>
                <div className="space-y-4">
                  <p>{section.content}</p>                  

                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 p-4 rounded-lg card-gradient"
                    >
                      <h3 className="text-xl font-medium mb-3">{subheader.title}</h3>
                      <p>
                        {subheader.content}
                      </p>                                            
                    </div>
                  ))}

                  {section?.images && (
                    <div className="flex flex-wrap">
                      {section.images.map((image, index) => (
                        <div key={index} className="w-1/3 p-2">
                          <Image
                            src={image}
                            width={200}
                            height={200}
                            alt={`${section.title} - Detailed illustration of our ${section.title.toLowerCase()} at Barbarić Produkt`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(200, 200)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Client-side navigation component */}
          <ClientSideNavigation sections={sections} />
        </div>
      </div>
    </main>
  )
}

