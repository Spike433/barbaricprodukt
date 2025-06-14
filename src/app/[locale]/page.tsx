"use client"

import Image from "next/image"
import Link from "next/link"
import { generateBlurPlaceholder } from "../../lib/utils"
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  
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
            <div className="bg-opacity-60 rounded-3xl shadow-lg ml-12">
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
            {t('productCategories')}
          </h2>
          <div>
            {/* Čelične konstrukcije */}
            <section className="w-full mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
            href="/products#celicneKonstrukcije" 
            className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
            >
            <div className="flex gap-3 p-3 min-h-[300px]"> {/* Increased minimum height */}
            <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Taller aspect ratio */}
            <Image
            src="https://i.postimg.cc/DwbFLxf6/8.jpg"
            alt="Čelične konstrukcije 1"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectPosition: '40% 32%' }}
            />
            </div>
            <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Matching ratio */}
            <Image
            src="https://i.postimg.cc/4dXgCZ62/9.jpg"
            alt="Čelične konstrukcije 2"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                      {t('steelStructures')}
                    </h3>
                  </div>
            </Link>              
              <Link
                href="/products#aluPvcStolarija"
                className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="flex p-3 min-h-[336px]"> {/* Increased height container */}
                  <div className="w-full relative  rounded-md overflow-hidden"> {/* Portrait ratio */}
                    <Image
                      src="https://i.postimg.cc/JnwVW2gg/3.jpg"
                      alt="Alu i PVC stolarija"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectPosition: '40% 20%' }}
                    />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                        {t('aluminumJoinery')}
                      </h3>                
                    </div>
                </Link>
                </section>

                {/* Industrijski proizovdi */}
                <section className="mb-8">
              <Link 
                href="/products#industrijskaOprema" 
                className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="flex gap-3 p-3 min-h-[300px]"> {/* Increased minimum height */}
                  <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Taller aspect ratio */}
                    <Image
                      src="https://i.postimg.cc/1zhpcCQK/31.jpg"
                      alt="Oprema za more 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Consistent ratio */}
                    <Image
                      src="https://i.postimg.cc/RVhQMJdw/28.jpg"
                      alt="Oprema za more 2"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Same ratio */}
                    <Image
                      src="https://i.postimg.cc/7LqSY7nN/25-5.jpg"
                      alt="Oprema za more 3"
                      fill
                      className="object-cover object-[20%_40%] group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                      style={{ objectPosition: "40% 43%" }} 
                    />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                    {t('industrialEquipment')}
                  </h3>                
                </div>
              </Link>
            </section>

            <section className="w-full mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Komunalna eko oprema */}
          <Link 
            href="/products#ekoOpremaKomunalna" 
            className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:col-span-2"
          >
            <div className="flex gap-3 p-3 min-h-[400px]"> {/* Added min-height */}
              <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Changed aspect ratio */}
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
              <div className="w-1/2 relative aspect-[4/3] rounded-md overflow-hidden"> {/* Changed aspect ratio */}
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
                {t('communalEcoEquipment')}
              </h3>
            </div>
          </Link>

          {/* Gumirani čelični ventili */}
          <Link
            href="/products#gumiraniCelici"
            className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="flex p-3 min-h-[400px]"> {/* Added min-height */}
              <div className="w-full relative aspect-[4/3] rounded-md overflow-hidden"> {/* Changed aspect ratio */}
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
                {t('rubberizedSteelValves')}
              </h3>                
            </div>
          </Link>
            </section>
            
            {/* Oprema za more */}
            <section className="mb-8">
              <Link 
                href="/products#opremaZaMore" 
                className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="flex gap-3 p-3">
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/XJBBbfmJ/4logo.png"
                      alt="Oprema za more 1"
                      fill
                      className="object-cover object-[20%_40%] group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/0N1Nqkp0/1.png"
                      alt="Oprema za more 2"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/WpWgnn6k/7.jpg"
                      alt="Oprema za more 3"
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-industrial-blue transition-colors text-center">
                    {t('marineEquipment')}
                  </h3>                
                </div>
              </Link>
            </section>
          
            {/* Urbana oprema */}
            <section className="mb-8">
            <Link                
              href="/products#urbanaOprema"
              className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex gap-3 p-3 h-80"> {/* Increased height here */}
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/L4yjXF9r/0.jpg"
                    alt="Urbana oprema 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                    loading="lazy"
                    style={{ objectPosition: '40% 60%' }}
                  />
                </div>
                <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src="https://i.postimg.cc/tRnSdjJ3/urbana1.png"
                    alt="Urbana oprema 2"
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
                    src="https://i.postimg.cc/Px03XMqF/urbana2logo.png"
                    alt="Urbana oprema 3"
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
                  {t('urbanEquipment')}
                </h3>                
              </div>
            </Link>
          </section>

            {/* Oprema za građevinarstvo */}
            <section className="mb-8">   
              <Link                
                href="/products#opremaZaGradevinarstvo"
                className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="flex gap-3 p-3">
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                      alt="Građevinska oprema 1"
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
                      alt="Građevinska oprema 2"
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_BLUR_HASH]"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/FFf8MYKB/6logo.png"
                      alt="Građevinska oprema 3"
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
                    {t('constructionEquipment')}
                  </h3>                
                </div>
              </Link>
            </section>

            {/* Roto ljevi plastični proizvodi */}
            <section className="mb-8">
              <Link                              
                href="/products#strojeviZaPoljoprivreduIVocarstvo"
                className="group bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="flex gap-3 p-3">
                  <div className="w-1/2 relative aspect-video rounded-md overflow-hidden">
                    <Image
                      src="https://i.postimg.cc/nLC1WNWb/4.jpg"
                      alt="Roto ljevi proizvodi 1"
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
                      alt="Roto ljevi proizvodi 2"
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
                      alt="Roto ljevi proizvodi 3"
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
                    {t('rotationalMolding')}
                  </h3>                
                </div>
              </Link>
            </section>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-industrial-blue/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{t('ctaTitle')}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t('ctaText')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-industrial-blue font-medium shadow hover:bg-gray-100 transition-colors"
            >
              {t('requestQuote')}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}