"use client"
import type { Metadata } from "next"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import ClientSideNavigation from "@/components/client-side-navigation"
import { Picture, Section } from "../types"
import { generateBlurPlaceholder } from "../../lib/utils"
import { sections } from "@/lib/constants"

// export const metadata: Metadata = {
//   title: "Barbarić Produkt | Home",
//   description:
//     "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
// }

export default function ProductPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<Picture[]>([])
  
  const openGallery = useCallback((images: Picture[], index: number, subheaderTitle: string) => {
    setCurrentImages(images)
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'auto'
  }, [])

  const navigateImages = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? currentImages.length - 1 : prev - 1
      )
    } else {
      setCurrentImageIndex(prev => 
        prev === currentImages.length - 1 ? 0 : prev + 1
      )
    }
  }, [currentImages.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeGallery()
    } else if (e.key === 'ArrowLeft') {
      navigateImages('prev')
    } else if (e.key === 'ArrowRight') {
      navigateImages('next')
    }
  }, [closeGallery, navigateImages])

  useEffect(() => {
    if (isGalleryOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isGalleryOpen, handleKeyDown])
  console.log("Current Image:", currentImages[currentImageIndex]);
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
        <div className="container relative mx-auto px-4 py-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
              Proizvodnja
            </h1>

            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Proizvodimo čelične konstrukcije, gumificirane i plastificirane elemente, alu i PVC stolariju, industrijsku opremu i opremu za more. Obrađujemo metal i plastiku te radimo po individualnoj narudžbi.
            </p>
          </div>
        </div>
              
        <div className="flex flex-col lg:flex-row">
          {/* Navigation first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 w-full lg:w-[30%] mb-6 lg:mb-0 lg:pl-4">
            <ClientSideNavigation sections={sections} />
          </div>
          
          {/* Main content second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-[70%] lg:pr-2">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue">{section.title}</h2>
                <div className="space-y-4">
                  <p className="ml-4">{section.content}</p>                                    
                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
                    >
                      <h3 className="text-xl font-medium mb-3 text-industrial-blue">{subheader.title}</h3>
                      <p className="ml-4 mb-2">
                        {subheader.content}
                      </p>  
                      {subheader?.images && (
                        <div className="flex flex-wrap p-4">
                          {subheader.images.map((image, index) => (
                            <div 
                              key={index} 
                              className="w-full sm:w-1/2 md:w-1/3 p-2 cursor-pointer"
                              onClick={() => openGallery(subheader.images!, index, subheader.title)}
                            >
                              <div className="w-full h-[250px] relative overflow-hidden rounded-lg">
                                <Image
                                  src={image.src}
                                  fill
                                  alt={image.title}
                                  className="object-cover hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL={generateBlurPlaceholder(250, 0)}
                                  sizes="(max-width: 250px) 100vw, 250px"
                                />
                              </div>
                              <p className="mt-2 text-sm font-medium text-center">{image.title}</p>
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
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && currentImages.length > 0 && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    onClick={closeGallery}
  >
    <button 
      className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
      onClick={closeGallery}
      aria-label="Close gallery"
    >
      &times;
    </button>
    
    <div 
      className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Title above image */}
      <div className="bg-black bg-opacity-30 text-white text-center py-2 rounded-t-md">
        <h1 className="text-2xl font-medium">{currentImages[currentImageIndex].title}</h1>        
      </div>            
      
      {/* Image container with fixed height and rounded corners */}
      <div className="relative w-full h-[65vh] overflow-hidden rounded-md">
        <Image
          src={currentImages[currentImageIndex].src}
          alt={currentImages[currentImageIndex].title}
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Description below image */}
      <div className="bg-black bg-opacity-30 text-white text-center py-4 px-10 rounded-b-md">
        <p className="text-sm md:text-base max-h-32 overflow-y-auto mb-2 scrollbar-black">
          {currentImages[currentImageIndex].description}
        </p>
        {/* Image counter moved here */}
        <div className="text-white text-sm">
          {currentImageIndex + 1} / {currentImages.length}
        </div>           
      </div>
      
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button 
          onClick={(e) => {
            e.stopPropagation()
            navigateImages('prev')
          }}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all"
          aria-label="Previous image"
        >
          &#10094;
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation()
            navigateImages('next')
          }}
          className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all"
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
)}
      </div>
    </main>
  )
}