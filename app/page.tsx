"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Service categories with placeholder images
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
    image: "/placeholder.svg?height=600&width=800&text=Gumirani elementi",
    description: "Specijalizirani elementi otporni na koroziju za siguran transport agresivnih tekućina.",
  },
  {
    id: "alu-pvc",
    title: "Alu i PVC stolarija",
    image: "/placeholder.svg?height=600&width=800&text=Alu i PVC stolarija",
    description: "Visokokvalitetna aluminijska i PVC stolarija za sve vrste objekata.",
  },
  {
    id: "oprema-gradevinarstvo",
    title: "Oprema za građevinarstvo",
    image: "/placeholder.svg?height=600&width=800&text=Oprema za građevinarstvo",
    description: "Profesionalna oprema i alati za građevinsku industriju.",
  },
  {
    id: "industrijska-oprema",
    title: "Industrijska oprema",
    image: "/placeholder.svg?height=600&width=800&text=Industrijska oprema",
    description: "Specijalizirana oprema za različite industrijske procese i postrojenja.",
  },
  {
    id: "oprema-more",
    title: "Oprema za more",
    image: "/placeholder.svg?height=600&width=800&text=Oprema za more",
    description: "Oprema i komponente za pomorsku industriju i nautiku.",
  },
  {
    id: "poljoprivreda",
    title: "Strojevi za poljoprivredu i voćarstvo",
    image: "/placeholder.svg?height=600&width=800&text=Poljoprivredni strojevi",
    description: "Specijalizirani strojevi i oprema za poljoprivrednu proizvodnju.",
  },
  {
    id: "eko-oprema",
    title: "Eko oprema komunalna",
    image: "/placeholder.svg?height=600&width=800&text=Eko oprema",
    description: "Ekološka oprema za komunalne službe i održavanje javnih površina.",
  },
  {
    id: "urbana-oprema",
    title: "Urbana oprema",
    image: "/placeholder.svg?height=600&width=800&text=Urbana oprema",
    description: "Oprema za uređenje i opremanje javnih i urbanih prostora.",
  },
]

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % serviceCategories.length)
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  // Navigation functions
  const goToSlide = (index: number) => {
    setActiveIndex(index)
    // Reset autoplay timer when manually changing slides
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      setIsAutoplay(true)
    }
  }

  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? serviceCategories.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % serviceCategories.length)
  }

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">Barbarić Produkt</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Specijalizirani za proizvodnju i obradu proizvoda od metala, plastike i gume
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-industrial-blue text-white font-medium shadow-lg hover:bg-industrial-blue/90 transition-colors"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-industrial-blue">Naše usluge</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Pružamo širok spektar usluga u proizvodnji i obradi metala, plastike i gume za različite industrije
          </p>

          {/* Carousel */}
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={sliderRef}
          >
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-[500px] transition-all duration-500 ease-in-out">
                {serviceCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                    )}
                  >
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-white/90 max-w-2xl mb-4">{category.description}</p>
                      <Link
                        href={`/services#${category.id}`}
                        className="inline-flex items-center px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors w-fit"
                      >
                        Saznajte više
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors rounded-full p-2 text-white"
              aria-label="Prethodni"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors rounded-full p-2 text-white"
              aria-label="Sljedeći"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {serviceCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-industrial-blue w-6" : "bg-gray-300 hover:bg-gray-400",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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
      <section className="py-16 bg-gradient-to-r from-industrial-blue to-primary text-white">
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

