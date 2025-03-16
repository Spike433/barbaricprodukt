"use client"

import Image from "next/image"
import Link from "next/link"

const serviceCategories = [
  {
    id: "celicne-konstrukcije",
    title: "Čelične konstrukcije",
    image: "https://i.postimg.cc/4dXgCZ62/9.jpg",
    description: "Izrada i montaža čeličnih konstrukcija za različite namjene.",
  },
  {
    id: "gumirani-elementi",
    title: "Gumirani i plastificirani čelinčni elementi za transport kiselina i lužina",
    image: "https://i.postimg.cc/zf1TRN6j/2.jpg",
    description: "Specijalizirani elementi otporni na koroziju za siguran transport agresivnih tekućina.",
  },
  {
    id: "alu-pvc",
    title: "Alu i PVC stolarija",
    image: "https://i.postimg.cc/JnwVW2gg/3.jpg",
    description: "Visokokvalitetna aluminijska i PVC stolarija za sve vrste objekata.",
  },
  {
    id: "oprema-gradevinarstvo",
    title: "Oprema za građevinarstvo",
    image: "https://i.postimg.cc/8c2hKtvD/1.jpg",
    description: "Profesionalna oprema i alati za građevinsku industriju.",
  },
  {
    id: "industrijska-oprema",
    title: "Industrijska oprema",
    image: "https://i.postimg.cc/1zhpcCQK/31.jpg",
    description: "Specijalizirana oprema za različite industrijske procese i postrojenja.",
  },
  {
    id: "oprema-more",
    title: "Oprema za more",
    image: "https://i.postimg.cc/j5vNB6pB/4.jpg",
    description: "Oprema i komponente za pomorsku industriju i nautiku.",
  },
  {
    id: "poljoprivreda",
    title: "Strojevi za poljoprivredu i voćarstvo",
    image: "https://i.postimg.cc/YqYZnLWf/14.jpg",
    description: "Specijalizirani strojevi i oprema za poljoprivrednu proizvodnju.",
  },
  {
    id: "eko-oprema",
    title: "Komunalna eko oprema",
    image: "https://i.postimg.cc/Pxkkm8K7/30.jpg",
    description: "Ekološka oprema za komunalne službe i održavanje javnih površina.",
  },
  {
    id: "urbana-oprema",
    title: "Urbana oprema",
    image: "https://i.postimg.cc/L4yjXF9r/0.jpg",
    description: "Oprema za uređenje i opremanje javnih i urbanih prostora.",
  },
]

export default function HomePage() {

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[70vh] min-h-[500px]">
        <Image
          src="https://i.postimg.cc/4dXgCZ62/9.jpg"
          alt="Čelične konstrukcije - Barbarić Produkt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end items-center text-center pb-8">
            <div className="bg-industrial-blue bg-opacity-60 pt-4 pb-4 rounded-3xl shadow-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl drop-shadow-md">
                Barbarić Produkt
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
                Specijalizirani za proizvodnju i obradu proizvoda od metala, plastike i gume
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-industrial-blue">Naše kategorije usluga</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Link
                href={`/services#${category.id}`}
                key={category.id}
                className="group bg-white rounded-xl "
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-0"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-industrial-blue transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-gradient-to-r from-industrial-blue to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Spremni smo za vašu viziju</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Bez obzira na veličinu ili složenost vašeg projekta, naš tim stručnjaka je spreman pomoći vam u realizaciji.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-industrial-blue font-medium shadow hover:bg-gray-100 transition-colors"
            >
              Zatražite ponudu
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Saznajte više o nama
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

