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
    images: ["https://i.postimg.cc/FK5vZ074/10.jpg","https://i.postimg.cc/YS6HyjWm/11.jpg"],
    subheaders: [
      { 
        id: "montazne-hale", 
        title: "Montažne hale, hangari i garaže", 
        content: "Montazne hale su izdržljive i kvalitetne, te se koriste u raznim industrijama.", 
        images: ["https://i.postimg.cc/pTktR7kW/12.jpg", "https://i.postimg.cc/CMmFgZ6G/5.jpg"] 
      },
      {
        id: "kuce",
        title: "Mobilne kuće, stambeni i industrijski objekti",
        content: "Mobilne kuće su izdržljive i kvalitetne, te se koriste u raznim industrijama.",
        images: ["https://i.postimg.cc/136hf4MY/21.jpg"]
      },
      { 
        id: "panoramsko-dizalo", 
        title: "Panoramsko dizalo, paviljon", 
        content: "Panoramsko dizalo je izdržljivo i kvalitetno, te se koristi u raznim industrijama.", 
        images: ["https://i.postimg.cc/vTHbnMDx/4.jpg", "https://i.postimg.cc/QMkTZRYY/6.jpg"] 
      },
      {
        id: "krovista",
        title: "Krovišta, krovni prozori, kupole, svjetlarnici",
        content: "Krovišta su izdržljiva i kvalitetna, te se koriste u raznim industrijama.",
        images: ["https://i.postimg.cc/qMqpMk99/6.jpg","https://i.postimg.cc/pTv22KHZ/2.jpg",
        "https://i.postimg.cc/wvk933xd/3.jpg", "https://i.postimg.cc/44LT0Dmw/14.jpg"]
      },
      {     
        id: "ograde",
        title: "Ograde za balkone, kuće, industriju, rešetkaste zaštite za prozore i vrata",
        content: "Ograde su izdržljive i kvalitetne, te se koriste u raznim industrijama.",
        images: [
          "https://i.postimg.cc/WbdPc5ZV/17.jpg", 
          "https://i.postimg.cc/8PxgpLd6/18.jpg", 
          "https://i.postimg.cc/FKgMVqMy/20.jpg"]
      }
    ],
  },
  {
    id: "urbanaOprema",
    title: "Urbana oprema",
    content: "Nudimo širok asortiman urbane opreme koja je izdržljiva, kvalitetna i prilagodljiva vašim potrebama.",
    images: ["https://i.postimg.cc/placeholder.jpg"],
    subheaders: [
      { 
        id: "klupa-a", 
        title: "Klupe, koševi za otpadke, jarboli za zastave, stalci za bicikle", 
        content: "Klupa dužine 2 m. Klupa izrađena od čeličnih profila zaštićena temeljnom i završnom bojom po želji naručioca, obložena drvenim platicama zaštićenim lazurom za drvo ili boji po želji.", 
        images: ["https://i.postimg.cc/L4yjXF9r/0.jpg","https://i.postimg.cc/GhVYFPsK/1.jpg", 
        "https://i.postimg.cc/fTJmSqkk/2.jpg","https://i.postimg.cc/MT6j6dh6/7.jpg","https://i.postimg.cc/q7vg3zv0/3.jpg"] 
      },
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
    subheaders: [        
        { 
          id: "segmentna-podizna-vrata", 
          title: "Segmentna podizna vrata, jednokrilna, klizna, automatska vrata", 
          content: "Segmentna podizna vrata koja pružaju sigurnost i funkcionalnost za različite industrijske i komercijalne prostore.", 
          images: ["https://i.postimg.cc/FzmMYJhV/4.jpg", "https://i.postimg.cc/MTykZYJG/2.jpg"] 
        },
        { 
          id: "podizne-rampe", 
          title: "Podizne rampe", 
          content: "Podizne rampe koje omogućavaju lakši pristup i manipulaciju teretom u različitim okruženjima.", 
          images: ["https://i.postimg.cc/m2ZxRMXb/6.jpg"] 
        },
        { 
          id: "prozori", 
          title: "Staklene fasade, prozori", 
          content: "Staklene fasade koje pružaju moderan izgled i energetsku efikasnost za vaše zgrade. Kvalitetni prozori izrađeni od aluminija i PVC-a, dostupni u različitim dimenzijama i dizajnima.", 
          images: ["https://i.postimg.cc/JnwVW2gg/3.jpg", "https://i.postimg.cc/WpwRQS7W/5.jpg"] 
        },
        { 
          id: "zimski-vrtovi", 
          title: "Zimski vrtovi", 
          content: "Zimski vrtovi koji omogućavaju uživanje u prirodi tokom cijele godine, izrađeni od kvalitetnih materijala.", 
          images: ["https://i.postimg.cc/brTKkNJc/1.jpg"] 
        }
      ],
    },
  {
    id: "opremaZaMore",
    title: "Oprema za more",
    content:
      "Proizvodimo opremu za more, kao što su pontoni, staze, kajak, te razne druge proizvode.",
    subheaders: [
      { 
        id: "oprema-za-more-pontoni", 
        title: "Pontoni", 
        content: `
          PONTONI ZA SUNČANJE
          KATAMARANI
          RIBOGOILIŠTA
          VEZOVI ZA ČAMCE

          OSNOVNA VELIĆINA PONTONA 2 X 4 M

          MODULI SUNČALIŠTA SA PRISTUPNIM STAZAMA

          Plovci 970x620x340 mm

          Pontoni su izrađeni od osnovne čelične konstrukcije, vruče cinčani i završno obojeni.
          Na osnovnu čeličnu konstrukciju se montiraju plastićni plovci velićine 
          dužina 970 mm, širina 340 i visina 620 mm punjenim zrakom ili pjenom otpornom na upijanje vode.
          Formiranje velićine pontona se vrši po želji namjene i velićine tako da se po dužini nižu plovci dužine 970 mm te broj redova širine plovka 340 mm. ćineći tako cijelinu željenog pontona.
          Osnovni model je izrađen u dva reda po 4 plovka koji ćine velićinu 3,9x2 m.
          tako formirani plovci mogu činiti željeni oblik prema skici ili želji.
          Veza sa kopnom i međusobno se povezuju gibljivom stazom širine 1, 2 m.
          
          Na pontone ugrađujemo 
          -mehanizme za bicikliranje
          -jedra
          -motore za kombinaciju katamarana
          -komoru pod vodom

          Ovom kombinacijom mogu se formirati ribogoilišta.
          Ukoliko dođe do oštećenja plovka, lako se zamjeni novim.
        `, 
        images: ["https://i.postimg.cc/j5vNB6pB/4.jpg", "https://i.postimg.cc/C1wkvrQj/2.jpg", "https://i.postimg.cc/d02Gjc4s/3.jpg"],    
      },
      { 
        id: "oprema-za-more-staze", 
        title: "Staze", 
        content: "Staze su izdržljive i kvalitetne, te se koriste u raznim industrijama." 
      },
      { 
        id: "oprema-za-more-kajak", 
        title: "Kajak", 
        content: "Kajak je izdržljiv i kvalitetan, te se koristi u raznim industrijama.", 
        images: ["https://i.postimg.cc/TPMrb3jN/1.jpg"]
      },      
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
    content: "Proizvodimo eko opremu komunalnu, kao što su kontejneri, separatori, tankvane, te razne druge proizvode.",
    images: ["/placeholder.svg?height=500&width=500"],
    subheaders: [
        {
            id: "eko-oprema-komunalna-kontejneri",
            title: "Komunalni, rolo kontejneri",
            content: "Otvoreni i zatvoreni kontejneri od 5, 7 i 10 m³, kao i plastične kante za smeće kapaciteta 60, 100, 200 i 300 litara.",
            images: ["https://i.postimg.cc/GpGWhmrx/9.jpg", "https://i.postimg.cc/k4FPwXpg/1.jpg", "https://i.postimg.cc/Gt7NSBJd/13.jpg"]            
        },
        {
            id: "kontejner-elektronski-otpad",
            title: "Kontejner za elektronski otpad",
            content: "Kontejner kapaciteta 7 m³, specijaliziran za odlaganje elektronskog otpada i krpa.",
            images: ["https://i.postimg.cc/CxX0x28S/31.jpg", "https://i.postimg.cc/d0CYk9Rd/32.jpg"]
        },
        {
            id: "septic-tank-separatori",
            title: "Septičke jame i separatori",
            content: "Septičke jame različitih kapaciteta, te separatori ulja i masti (800 L) u jednokomornim, dvokomornim i trokomornim varijantama.",
            images: ["https://i.postimg.cc/XqL3N7fz/26.jpg", "https://i.postimg.cc/v8tGtXJt/27.jpg", "https://i.postimg.cc/WbpTWgjL/28.jpg"]
        },
        {
            id: "rezervoari-otpadno-ulje",
            title: "Rezervoari za otpadno ulje, tehnološku kanalizaciju",
            content: "Plastične posude i rezervoari sa duplom stijenkom za skladištenje otpadnog ulja, kapaciteta do 20 m³. Rezervoari kapaciteta 35 m³, te rezervoari za otpadno ulje sa tankvanom od 1.000 do 20.000 litara.",
            images: ["https://i.postimg.cc/RFT2KpW3/11.jpg", "https://i.postimg.cc/d1MJ4fQ4/23.jpg", "https://i.postimg.cc/pVCtFrj0/4.jpg", "https://i.postimg.cc/VvLpR9tK/12.jpg"]            
        },
        {
          id: "tankvane-regali",
          title: "Tankvane i regali za bačve",
          content: "Tankvane različitih vrsta, uključujući tankvane sa kotačima za jednostavan transport, kao i regale za bačve sa tankvanom, dostupne u otvorenim i zatvorenim verzijama. Regali sa pumpom omogućuju efikasno punjenje i doziranje, dok regali sa tankvanom podržavaju punjenje, pražnjenje i precizno doziranje tekućina.",
          images: ["https://i.postimg.cc/Kj0SSpFX/3.jpg", "https://i.postimg.cc/2SbpMxKJ/5.jpg", "https://i.postimg.cc/5NkdsrnL/8.jpg"
            ,"https://i.postimg.cc/K86X2MXY/7.jpg", "https://i.postimg.cc/vTsHHNpc/15.jpg"]
        }
    ]
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
function generateBlurPlaceholder(width: number, height: number, color = "e4e4e7", borderRadius = 10): string {
  // Create a simple SVG with the specified dimensions, color, and rounded corners
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${color}" rx="${borderRadius}" ry="${borderRadius}"/>
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
                            blurDataURL={generateBlurPlaceholder(400, 400)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 p-9 rounded-lg card-gradient"
                    >
                      <h3 className="text-xl font-medium mb-3">{subheader.title}</h3>
                      <p>
                        {subheader.content}
                      </p>  
                      {subheader?.images && (
                    <div className="flex flex-wrap">
                      {subheader.images.map((image, index) => (
                        <div key={index} className="w-1/3 p-2">
                          <Image
                            src={image}
                            width={400}
                            height={400}
                            alt={`${section.title} - Detailed illustration of our ${section.title.toLowerCase()} at Barbarić Produkt`}
                            className="object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(400, 400)}
                          />
                        </div>
                      ))}
                    </div>
                  )}                      
                    </div>
                  ))}                  
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

