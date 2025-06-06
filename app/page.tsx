"use client"

import Image from "next/image"
import Link from "next/link"
import { generateBlurPlaceholder } from "../lib/utils"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[90vh] min-h-[500px]">
  <Image
    src="https://i.postimg.cc/4dXgCZ62/9.jpg"
    alt="Čelične konstrukcije"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
    placeholder="blur"
    blurDataURL={generateBlurPlaceholder(400, 400)}
    loading="lazy"
    style={{ objectPosition: "40% 94%" }} 
  />
  <div className="absolute inset-0">
    <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <div className="bg-opacity-60 rounded-3xl shadow-lg -mt-40 ml-12 transform -rotate-3">
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
          <div>
          <section className="w-full mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Čelične konstrukcije - Combined two images */}
            <Link 
              href="/products#celicneKonstrukcije" 
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
              <div className="flex gap-3 p-3">
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/DwbFLxf6/8.jpg"
                    alt="Čelične konstrukcije 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/4dXgCZ62/9.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  ČELIČNE KONSTRUKCIJE
                </h3>
              </div>
            </Link>

            {/* Aluminijska stolarija - Now with matching padding */}
            <Link
              href="/products#aluPvcStolarija"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex p-3"> {/* Added flex container with p-3 to match */}
                <div className="w-full relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/JnwVW2gg/3.jpg"
                    alt="Alu i PVC stolarija"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  ALUMINIJSKA STOLARIJA
                </h3>                
              </div>
            </Link>
          </section>
            {/* Industrijska oprema */}
            <section className="w-full mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Komunalna eko oprema - Combined two images */}
          <Link 
            href="/products#ekoOpremaKomunalna" 
            className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
          >
            <div className="flex gap-3 p-3">
              <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                <Image
                  src="https://i.postimg.cc/Gt7NSBJd/13.jpg"
                  alt="Komunalna eko oprema 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                  loading="lazy"
                />
              </div>
              <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                <Image
                  src="https://i.postimg.cc/vTsHHNpc/15.jpg"
                  alt="Komunalna eko oprema 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                KOMUNALNA EKO OPREMA
              </h3>
            </div>
          </Link>

            {/* Gumirani čelični ventili - Single image */}
            <Link
              href="/products#gumiraniCelici"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex p-3">
                <div className="w-full relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/BbwLXH0D/industrijski-Proizvodi.png"
                    alt="Gumirani čelični membranski ventili, nepovratni ventili, cijevni elementi i rezervoari"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  GUMIRANI ČELIČNI MEMBRANSKI VENTILI, NEPOVRATNI VENTILI, CIJEVNI ELEMENTI I REZERVOARI
                </h3>                
              </div>
            </Link>
          </section>

          {/* Oprema za more */}
            <Link 
              href="/products#opremaZaMore" 
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
              <div className="flex gap-3 p-3">
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                    alt="Čelične konstrukcije 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/0N1Nqkp0/1.png"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/WpWgnn6k/7.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  OPREMA ZA MORA JEZERA RIJEKA - KAMPOVE <br/> PONTONI ,SUNČALIŠTA,VEZOVI ZA ČAMCE,KATAMARANI
                </h3>                
              </div>
            </Link>
        
             {/* Urbana oprema */}
             <Link                
              href="/products#urbanaOprema"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
              <div className="flex gap-3 p-3">
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/L4yjXF9r/0.jpg"
                    alt="Čelične konstrukcije 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/tRnSdjJ3/urbana1.png"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/yYqfvb3w/urbana2.png"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  URBANA OPREMA
                </h3>                
              </div>
            </Link>
             
             {/* Oprema za građevinarstvo */}
             <Link                
              href="/products#opremaZaGradevinarstvo"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
              <div className="flex gap-3 p-3">
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                    alt="Čelične konstrukcije 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/ncmKjf8L/4.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/mDrNtcRx/6.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                  GRAĐEVINSKA OPREMA
                </h3>                
              </div>
            </Link>

            <Link                              
              href="/products#strojeviZaPoljoprivreduIVocarstvo"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
              <div className="flex gap-3 p-3">
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/nLC1WNWb/4.jpg"
                    alt="Čelične konstrukcije 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/cJHDSvrz/32.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/PfLBDRf7/13.jpg"
                    alt="Čelične konstrukcije 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                ROTO LJEV-PLASTIČNI PROIZVODI
                </h3>                
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