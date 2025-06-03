"use client"

import Image from "next/image"
import Link from "next/link"
import { generateBlurPlaceholder } from "../lib/utils"

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
          style={{ objectPosition: "30% 30%" }}
          priority
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end items-center text-center pb-8">
            <div className=" bg-opacity-60 pt-4 pb-4 rounded-3xl shadow-lg">
              <Image
                src="https://i.postimg.cc/HsmzZWqq/logo.png"
                alt="Barbarić Produkt Logo"
                width={500}
                height={500}                
                priority                
                className="mx-auto"
              />              
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {/* Industrijska oprema */}
            <Link
              href="/products#industrijskaOprema"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/1zhpcCQK/31.jpg"
                    alt="Industrijska oprema"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Industrijska oprema
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Specijalizirana oprema za različite industrijske procese i postrojenja.
                </p>
              </div>
            </Link>

            {/* Čelične konstrukcije */}
            <Link
              href="/products#celicneKonstrukcije"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/4dXgCZ62/9.jpg"
                    alt="Čelične konstrukcije"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Čelične konstrukcije
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Izrada i montaža čeličnih konstrukcija za različite namjene.
                </p>
              </div>
            </Link>

            {/* Alu i PVC stolarija */}
            <Link
              href="/products#aluPvcStolarija"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/JnwVW2gg/3.jpg"
                    alt="Alu i PVC stolarija"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Alu i PVC stolarija
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Visokokvalitetna aluminijska i PVC stolarija za sve vrste objekata.
                </p>
              </div>
            </Link>

            {/* Oprema za građevinarstvo */}
            <Link
              href="/products#opremaZaGradevinarstvo"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                    alt="Oprema za građevinarstvo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Oprema za građevinarstvo
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Profesionalna oprema i alati za građevinsku industriju.
                </p>
              </div>
            </Link>

            {/* Gumirani čelinčni elementi */}
            <Link
              href="/products#gumirani-celicni-elementi"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/zf1TRN6j/2.jpg"
                    alt="Gumirani i plastificirani čelinčni elementi za transport kiselina i lužina"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Gumirani i plastificirani čelinčni elementi za transport kiselina i lužina
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Specijalizirani elementi otporni na koroziju za siguran transport agresivnih tekućina.
                </p>
              </div>
            </Link>

            {/* Strojevi za poljoprivredu i voćarstvo */}
            <Link
              href="/products#strojeviZaPoljoprivreduIVocarstvo"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/YqYZnLWf/14.jpg"
                    alt="Strojevi za poljoprivredu i voćarstvo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Strojevi za poljoprivredu i voćarstvo
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Specijalizirani strojevi i oprema za poljoprivrednu proizvodnju.
                </p>
              </div>
            </Link>

            {/* Urbana oprema */}
            <Link
              href="/products#urbanaOprema"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/L4yjXF9r/0.jpg"
                    alt="Urbana oprema"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Urbana oprema
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Oprema za uređenje i opremanje javnih i urbanih prostora.
                </p>
              </div>
            </Link>

            {/* Komunalna eko oprema */}
            <Link
              href="/products#ekoOpremaKomunalna"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/Pxkkm8K7/30.jpg"
                    alt="Komunalna eko oprema"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Komunalna eko oprema
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Ekološka oprema za komunalne službe i održavanje javnih površina.
                </p>
              </div>
            </Link>

            {/* Oprema za more */}
            <Link
              href="/products#opremaZaMore"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <div className="absolute inset-3 rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                    alt="Oprema za more"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(400, 400)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors">
                  Oprema za more
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  Oprema i komponente za pomorsku industriju i nautiku.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-industrial-blue/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Spremni smo za vašu viziju</h2>
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