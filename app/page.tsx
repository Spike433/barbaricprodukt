"use client"

import Image from "next/image"
import Link from "next/link"
import { generateBlurPlaceholder } from "../lib/utils"

const serviceCategories = [
  {
    id: "celicneKonstrukcije",
    title: "Čelične konstrukcije",
    image: "https://i.postimg.cc/4dXgCZ62/9.jpg",
    description: "Izrada i montaža čeličnih konstrukcija za različite namjene.",
  },
  {
    id: "gumirani-celicni-elementi",
    title: "Gumirani i plastificirani čelinčni elementi za transport kiselina i lužina",
    image: "https://i.postimg.cc/zf1TRN6j/2.jpg",
    description: "Specijalizirani elementi otporni na koroziju za siguran transport agresivnih tekućina.",
  },
  {
    id: "aluPvcStolarija",
    title: "Alu i PVC stolarija",
    image: "https://i.postimg.cc/JnwVW2gg/3.jpg",
    description: "Visokokvalitetna aluminijska i PVC stolarija za sve vrste objekata.",
  },
  {
    id: "opremaZaGradevinarstvo",
    title: "Oprema za građevinarstvo",
    image: "https://i.postimg.cc/8c2hKtvD/1.jpg",
    description: "Profesionalna oprema i alati za građevinsku industriju.",
  },
  {
    id: "industrijskaOprema",
    title: "Industrijska oprema",
    image: "https://i.postimg.cc/1zhpcCQK/31.jpg",
    description: "Specijalizirana oprema za različite industrijske procese i postrojenja.",
  },
  {
    id: "opremaZaMore",
    title: "Oprema za more",
    image: "https://i.postimg.cc/j5vNB6pB/4.jpg",
    description: "Oprema i komponente za pomorsku industriju i nautiku.",
  },
  {
    id: "strojeviZaPoljoprivreduIVocarstvo",
    title: "Strojevi za poljoprivredu i voćarstvo",
    image: "https://i.postimg.cc/YqYZnLWf/14.jpg",
    description: "Specijalizirani strojevi i oprema za poljoprivrednu proizvodnju.",
  },
  {
    id: "ekoOpremaKomunalna",
    title: "Komunalna eko oprema",
    image: "https://i.postimg.cc/Pxkkm8K7/30.jpg",
    description: "Ekološka oprema za komunalne službe i održavanje javnih površina.",
  },
  {
    id: "urbanaOprema",
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
            <div className=" bg-opacity-60 pt-4 pb-4 rounded-3xl shadow-lg">
              <Image
                src="https://i.postimg.cc/HsmzZWqq/logo.png"
                alt="Barbarić Produkt Logo"
                width={700}
                height={700}
                
                priority
              />
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
                Specijalizirani za proizvodnju i obradu proizvoda od metala, plastike i gume
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-industrial-blue md:text-4xl">
            Naše kategorije proizvoda
          </h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
  {serviceCategories.map((category) => (
    <Link
      href={`/products#${category.id}`}
      key={category.id}
      className="group bg-white rounded-t-xl hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-t-xl p-0.4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={generateBlurPlaceholder(400, 400)}
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {category.description}
        </p>
      </div>
    </Link>
  ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {serviceCategories.map((category) => (
            <Link
              href={`/products#${category.id}`}
              key={category.id}
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Image container with padding - the key is here */}
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden"> {/* This div creates the spacing */}
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {category.description}
                </p>
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
  );
}