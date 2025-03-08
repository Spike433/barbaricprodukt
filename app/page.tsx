import type { Metadata } from "next"
import Image from "next/image"
import ClientSideNavigation from "@/components/client-side-navigation"

// Define sections with their content
const sections = [
  {
    id: "features",
    title: "Features",
    content:
      "Our product comes with a wide range of features designed to make your life easier. From automated workflows to intelligent suggestions, we've got you covered.",
    image: "/placeholder.svg?height=500&width=500",
    subheaders: [
      { id: "features-automation", title: "Automation" },
      { id: "features-integration", title: "Integration" },
      { id: "features-analytics", title: "Analytics" },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content:
      "Getting started is easy! Simply sign up for an account, complete your profile, and you're ready to go. Our intuitive interface makes it simple to navigate and find what you need.",
    subheaders: [
      { id: "getting-started-signup", title: "Sign Up Process" },
      { id: "getting-started-profile", title: "Profile Setup" },
      { id: "getting-started-first-steps", title: "First Steps" },
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    content:
      "Our comprehensive documentation provides detailed information about how to use our product. Whether you're a beginner or an advanced user, you'll find the information you need.",
    image: "/placeholder.svg?height=500&width=500",
    subheaders: [
      { id: "documentation-guides", title: "User Guides" },
      { id: "documentation-api", title: "API Reference" },
      { id: "documentation-examples", title: "Examples" },
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
                  <p className="text-muted-foreground">{section.content}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>

                  {section.subheaders.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 p-4 rounded-lg card-gradient"
                    >
                      <h3 className="text-xl font-medium mb-3">{subheader.title}</h3>
                      <p>
                        This section covers everything you need to know about {subheader.title.toLowerCase()}. We
                        provide detailed explanations and examples to help you understand and implement these concepts
                        effectively.
                      </p>
                      <p className="mt-2">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                      </p>
                    </div>
                  ))}

                  {section.image && (
                    <div className="my-6 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        width={500}
                        height={500}
                        alt={`${section.title} - Detailed illustration of our ${section.title.toLowerCase()} at Barbarić Produkt`}
                        className="w-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 500)}
                      />
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

