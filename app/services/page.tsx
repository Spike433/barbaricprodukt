import type { Metadata } from "next"
import ServiceCard from "@/components/service-card"

export const metadata: Metadata = {
  title: "Barbarić Produkt | Usluge",
  description: "Pregled svih usluga koje nudi Barbarić Produkt d.o.o. - zavarivanje, bravarija, strojna obrada i više.",
}

// Define service categories and their items
const services = [ 
  {
    id: "pjeskarenje",
    title: "PJESKARENJE",
    items: [],
  }, 
  {
    id: "bravarija",
    title: "BRAVARIJA",
    items: [],
  }, 
  {
    id: "rezanje",
    title: "REZANJE",
    items: [
      { id: "plinsko", title: "PLINSKO" },
      { id: "plazma", title: "PLAZMA" },
    ],
  },
  {
    id: "savijanje",
    title: "SAVIJANJE",
    items: [
      { id: "kutno", title: "KUTNO" },
      { id: "kruzno", title: "KRUŽNO" },
    ],
  },
  {
    id: "zavarivanje",
    title: "ZAVARIVANJE",
    items: [
      { id: "rel", title: "REL" },
      { id: "mig-mag", title: "MIG MAG" },
      { id: "tig", title: "TIG" },
      { id: "plinsko-zavarivanje", title: "PLINSKO" },
    ],
  },  
  {
    id: "antikorozivna-zastita",
    title: "ANTIKOROZIVNA ZAŠTITA",
    items: [
      { id: "bojanje", title: "BOJANJE" },
      { id: "gumiranje", title: "GUMIRANJE" },
      { id: "plastificiranje", title: "PLASTIFICIRANJE" },
    ],
  },  
  {
    id: "limarski-radovi",
    title: "LIMARSKI RADOVI",
    items: [
      {
        id: "gradevinska-limarija",
        title: "GRAĐEVINSKA LIMARIJA",
        subitems: [
          { id: "pokrovi", title: "POKROVI" },
          { id: "fasade", title: "FASADE" },
        ],
      },
      { id: "izolaterska-limarija", title: "IZOLATERSKA LIMARIJA" },
    ],
  },
  {
    id: "prerada-plasticnih-masa",
    title: "PRERADA PLASTIČNIH MASA",
    items: [
      { id: "roto-lijev", title: "ROTO LIJEV" },
      { id: "zavarivanje-plastike", title: "ZAVARIVANJE" },
      { id: "laminiranje", title: "LAMINIRANJE" },
    ],
  },
  {
    id: "odrzavanje",
    title: "ODRŽAVANJE INDUSTRIJSKIH POSTROJENJA",
    items: [],
  },  
  {
    id: "strojna-obrada",
    title: "STROJNA OBRADA METALA I NEMETALA",
    items: [
      { id: "tokarenje", title: "TOKARENJE" },
      { id: "glodanje", title: "GLODANJE" },
      { id: "busenje", title: "BUŠENJE" },
      { id: "stancanje", title: "ŠTANCANJE" },
    ],
  },
  {
    id: "softverska-rjesenja",
    title: "SOFTVERSKA RJEŠENJA",
    items: [
      // web, mobilne aplikacije, industrijski softver, automatizacija postrojenja, kuce
      { id: "web", title: "WEB APLIKACIJE" },
      { id: "mobilne-aplikacije", title: "MOBILNE APLIKACIJE" },
      { id: "industrijski-softver", title: "INDUSTRIJSKI SOFTVER" },
      { id: "automatizacija-postrojenja", title: "AUTOMATIZACIJA POSTROJENJA" },
      { id: "kuce", title: "KUĆE" },
    ]
  },  
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue ">
            Usluge
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Barbarić Produkt d.o.o. pruža širok spektar usluga u metalnoj industriji, od bravarije i zavarivanja do
            strojne obrade i održavanja industrijskih postrojenja.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} items={service.items} />
            ))}
          </div>

          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-industrial-blue mb-4">Zatražite ponudu</h2>
            <p className="mb-6">
              Za više informacija o našim uslugama ili za dobivanje ponude, molimo vas da nas kontaktirate putem našeg
              obrasca za kontakt ili direktno putem telefona.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-industrial-blue to-primary text-white font-medium shadow hover:from-industrial-blue/90 hover:to-primary/90 transition-colors"
              >
                Kontaktirajte nas
              </a>
              <a
                href="tel:+385 91 282-3375"
                className="inline-flex items-center px-6 py-3 rounded-md border border-industrial-blue/30 text-industrial-blue font-medium hover:bg-industrial-blue/5 transition-colors"
              >
                +385 91 282-3375
              </a>
              <a
                href="tel:+385 91 200-8801"
                className="inline-flex items-center px-6 py-3 rounded-md border border-industrial-blue/30 text-industrial-blue font-medium hover:bg-industrial-blue/5 transition-colors"
              >
                +385 91 200-8801
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

