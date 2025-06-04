//"use client";

//import { useGallery } from "@/hooks/use-gallery";
//import ImageGallery from "@/components/image-gallery";
import ClientSideNavigation from "@/components/client-side-navigation";

import { sections } from "@/lib/constants";
import Image from "next/image";
import { generateBlurPlaceholder } from "@/lib/utils";

export default function ProductPageClient() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* Navigation */}
        <nav className="order-1 lg:order-2 w-full lg:w-[30%] mb-6 lg:mb-0 lg:pl-4" aria-label="Sekcije proizvoda">
          <ClientSideNavigation sections={sections} />
        </nav>
        
        {/* Main content */}
        <article className="order-2 lg:order-1 w-full lg:w-[70%] lg:pr-2">
          {/* ČELIČNE KONSTRUKCIJE Section */}
          <section
            id="celicneKonstrukcije"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              ČELIČNE KONSTRUKCIJE
            </h2>
            <div className="space-y-4">
              {/* Montažne hale subsection */}
              <div
                id="montazne-hale"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/L5CRB7ZC/1.jpg"
                        fill
                        alt="MONTAŽNE HALE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MONTAŽNE HALE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/pTktR7kW/12.jpg"
                        fill
                        alt="AVIONSKI HANGAR"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      HANGARI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/CMmFgZ6G/5.jpg"
                        fill
                        alt="GARAŽA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GARAŽE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/4dXgCZ62/9.jpg"
                        fill
                        alt="ČELINČNE KONSTRUKCIJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ČELINČNE KONSTRUKCIJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/YS6HyjWm/11.jpg"
                        fill
                        alt="ČELIČNE KONSTRUKCIJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ČELIČNE KONSTRUKCIJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/vTHbnMDx/4.jpg"
                        fill
                        alt="PANORAMSKO DIZALO"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PANORAMSKO DIZALO
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/FK5vZ074/10.jpg"
                        fill
                        alt="ČELIČNE KONSTRUKCIJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ČELIČNE KONSTRUKCIJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/DwbFLxf6/8.jpg"
                        fill
                        alt="ČELIČNE KONSTRUKCIJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KROVIŠTA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/XqzSyCTt/15.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Staklene i limene fasade subsection */}
              <div
                id="stakleneILimeneFasade"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                <div className="relative overflow-hidden rounded-lg h-[250px]">
                  <Image
                    src="https://i.postimg.cc/Bb6f6gwx/13.jpg"
                    fill
                    alt="FASADE STAKLENE LIMENE"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={generateBlurPlaceholder(250, 0)}
                    sizes="(max-width: 250px) 100vw, 250px"
                    itemProp="image"
                  />
                </div>
                <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                  <div>FASADE STAKLENE</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LIMENE</div>
                </figcaption>
              </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/NfnBK3tL/7.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/qMqpMk99/6.jpg"
                        fill
                        alt="KROVIŠTA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KROVIŠTA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/44LT0Dmw/14.jpg"
                        fill
                        alt="KROVNI PROZORI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KROVNI PROZORI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/pTv22KHZ/2.jpg"
                        fill
                        alt="KROVNE KUPOLE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KROVNE KUPOLE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/wvk933xd/3.jpg"
                        fill
                        alt="SVJETLARNICI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      SVJETLARNICI
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="w-full space-y-8">
  {/* Industrijska vrata section */}
  <div className="mt-8 mb-6 pl-9 pt-4 text-center">
    <h2 className="text-2xl font-bold mb-4">Industrijaska vrata klizna podizna automatska</h2>
    <h2 className="text-2xl font-bold mb-4">Ulazna automatska dvokrilna i klizna vrata automatska</h2>    
  </div>

  {/* Ograde i podovi subsection */}
  <div id="ogradeIPodovi" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">    
    <div className="flex flex-wrap">
      {/* Ograde content */}
      <div className="w-full md:w-1/2 space-y-2 p-4 font-medium">
        <div className="text-lg font-semibold">OGRADE</div>
        <div className="ml-4 text-lg">Balkonske</div>
        <div className="ml-4 text-lg">Kućne</div>
        <div className="ml-4 text-lg">Industrijske</div>
        <div className="ml-4 text-lg">Rešetkaste zaštite za prozore i vrata</div>
      </div>

     
      </div>
  </div>
</div>

              {/* Ograde i podovi subsection */}
              <div
                id="ogradeIPodovi"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/8PxgpLd6/18.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/WbdPc5ZV/17.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/QM3L5syN/19.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  <div className="w-full md:w-1/2 space-y-2 p-20 font-medium">
                    <div className="text-lg">RASVIJETNA TIJELA</div>
                    <div className="text-lg">KANDELABERI</div>
                    <div className="text-lg">KLUPE ZA PARKOVE</div>
                    <div className="text-lg">KOŠEVI ZA SMEĆE</div>
                    <div className="text-lg">REKLAMNI PANOI</div>
                    <div className="text-lg">STUPOVI ZA ZASTAVE</div>
                    
                    <div className="mt-4 text-lg">KONTEINERI</div>
                    <div className="ml-8 text-lg">STAMBENI</div>
                    <div className="ml-8 text-lg">INDUSTRIJSKI</div>
                    
                    <div className="mt-8 text-lg">KIOSCI</div>
                  </div>
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[500px]">
                      <Image
                        src="https://i.postimg.cc/FKgMVqMy/20.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>                  
                </div>
              </div>

              {/* Kuće subsection */}
              <div
                id="kuce"
                className="mt-8 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/136hf4MY/21.jpg"
                        fill
                        alt="MODULARNE -MOBILNE KUĆE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="ml-10 mt-2 text-xl font-medium text-left" itemProp="caption">
                      <strong>MODULARNE -MOBILNE KUĆE</strong>
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pontoni i katamarani subsection */}
              <div
                id="pontoniKatamarani"
                className="mt-2 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                        fill
                        alt="PONTONI I KATAMARANI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="ml-1 mt-2 text-xl font-medium text-left" itemProp="caption">
                      <strong>PONTONI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KATAMARANI</strong>
                    </figcaption>
                  </figure>
                </div>
              </div>

            </div>
          </section>

          {/* ALUMINIJSKA STOLARIJA Section */}
          <section
            id="aluPvcStolarija"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
            ALU STOLARIJA <br/> PVC STOLARIJA

            </h2>
            <div className="space-y-4">
              {/* Segmentna podizna vrata subsection */}
              <div
                id="segmentnaPodiznaVrata"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/MTykZYJG/2.jpg"
                        fill
                        alt="DVOKRINAI JEDNOKRILNA KLIZNA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      DVOKRILNA JEDNOKRILNA KLIZNA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/FzmMYJhV/4.jpg"
                        fill
                        alt="AUTOMATSKA VRATA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      AUTOMATSKA VRATA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/m2ZxRMXb/6.jpg"
                        fill
                        alt="PODIZNE RAMPE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    SEGMENTNA PODIZNA VRATA   PODIZNE RAMPE
                     </figcaption>
                  </figure>
                </div>
              </div>

              {/* Prozori subsection */}
              <div
                id="prozori"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/JnwVW2gg/3.jpg"
                        fill
                        alt="PROZORI STAKLENE STIJENE FASADE OD PANELA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PROZORI <br/> STAKLENE STIJENE <br/> FASADE OD PANELA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/WpwRQS7W/5.jpg"
                        fill
                        alt="STAKLENE FASADE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      STAKLENE FASADE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/brTKkNJc/1.jpg"
                        fill
                        alt="ZIMSKI VRTOVI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ZIMSKI VRTOVI
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* INDUSTRIJSKA OPREMA Section */}
          <section
            id="industrijskaOprema"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              INDUSTRIJSKA OPREMA
            </h2>
            <div className="mt-8 pl-9 pt-4 text-left ml-20">
              <h2 className="text-2xl font-bold mb-4">INOX ARMATURE</h2>              
            </div>
            <div className="space-y-4">
            <div id="inoxArmature" className="mt-8 mb-6 scroll-mt-24 pl-9">
  <div className="flex flex-col md:flex-row">
    {/* Image on the left */}
    <figure className="w-full md:w-1/1" itemScope itemType="https://schema.org/ImageObject">
      <div className="relative overflow-hidden rounded-lg h-[500px]">
        <Image
          src="https://i.postimg.cc/L5bPqvDL/2.jpg"
          fill
          alt="INOX ARMATURE"
          className="object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
          placeholder="blur"
          blurDataURL={generateBlurPlaceholder(500, 0)}
          sizes="(max-width: 250px) 100vw, 500px"
          itemProp="image"
        />
      </div>                   
    </figure>

    {/* Text content on the right */}
    <div className="w-full md:w-1/3 space-y-3 pl-0 md:pl-5 font-medium flex flex-col justify-center">
      <div className="text-xs">IGLIČASTI VENTILI 700 bara</div>
      <div className="text-xs">KUGLASTE SLAVINE</div>
      <div className="text-xs">UBLAŽIVAČI UDARA ZA MANOMETRE</div>
      <div className="text-xs">HOLENDERI</div>
      <div className="text-xs">SPOJNICE</div>
      <div className="text-xs">PRIJELAZI</div>
      <div className="text-xs">MAZALICE 700 bara</div>
      <div className="text-xs">BOCE ZA UZORKOVANJE 700 bara</div>
      <div className="text-xs">NEPOVRATNI VENTILI</div>
    </div>
  </div>
</div>

              {/* Ventili subsection */}
              <div
                id="ventili"
                className=" scroll-mt-24 pl-9"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[500px]">
                      <Image
                        src="https://i.postimg.cc/CL9DSPzV/5.jpg"
                        fill
                        alt="LEPTIR VENTIL"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      LEPTIR VENTIL
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[500px]">
                      <Image
                        src="https://i.postimg.cc/RZftF7HJ/6.jpg"
                        fill
                        alt="LEPTIR VENTIL"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>                    
                  </figure>
                </div>
              </div>

              {/* Filteri i izmjenjivaci subsection */}
              <div
                id="filteriIzmjenjivaci"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/xjxMFTQ8/3.jpg"
                        fill
                        alt="FILTERI INDUSTRIJSKI (INOX)"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      FILTERI 
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/hG178KMS/7.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center -ml-15" itemProp="caption">
                    INDUSTRIJSKI (INOX)
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/KzQBbmg9/1.jpg"
                        fill
                        alt="IZMJENJIVAČI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center -ml-20" itemProp="caption">
                      IZMJENJIVAČI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Spojke i aktuatori subsection */}
              <div
                id="spojkeAktuatori"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/fLWSB1gY/8.jpg"
                        fill
                        alt="PERIFLEX SPOJKE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PERIFLEX SPOJKE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/gkx89FcD/4.jpg"
                        fill
                        alt="AKTUATOR"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      AKTUATOR
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/65bcRfqH/19.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="w-full space-y-8">
  {/* Generalni popravak section */}
  <div className="mt-8 mb-6 pl-9 pt-4">
    <h2 className="text-2xl font-bold mb-4 pl-8">GENERALNI POPRAVAK</h2>
    <div className="flex flex-wrap ">
      <div className="w-full md:w-1/2 space-y-2 pl-24 font-medium">
        <div className="ml-4 text-md">BUŠOTINSKIH ZASUNA</div>
        <div className="ml-4 text-md">DVOPUTIH I TROPUTIH SLAVINA</div>
        <div className="ml-4 text-md">NEPOVRATNIH VENTILA</div>
        <div className="ml-4 text-md">VATROZAŠTITA SPREMNIKA NAFTE</div>
        <div className="ml-4 text-md">IZMJENJIVAČI TOPLINE</div>
        <div className="ml-4 text-md">BRTVE</div>
        <div className="ml-4 text-md">REHABILITACIJA CIJEVOVODA UVLAČENJEM PE CIJEVI</div>
      </div>
    </div>
  </div>

  {/* Cijevni sustavi subsection */}
  <div id="cijevniSustavi" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">    
    <div className="flex flex-wrap p-4">
      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
        <div className="relative overflow-hidden rounded-lg h-[400px]">
          <Image
            src="https://i.postimg.cc/nzdj5T6g/10.jpg"
            fill
            alt="CIJEVNI ZATVARAČI"
            className="object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            placeholder="blur"
            blurDataURL={generateBlurPlaceholder(400, 0)}
            sizes="(max-width: 250px) 100vw, 400px"
            itemProp="image"
          />
        </div>
        <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
          CIJEVNI ZATVARAČI
        </figcaption>
      </figure>
      
      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
        <div className="relative overflow-hidden rounded-lg h-[400px]">
          <Image
            src="https://i.postimg.cc/T245J7jW/12.jpg"
            fill
            alt="POSUDA ZA VAĐENJE ČISTAČA PČ"
            className="object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            placeholder="blur"
            blurDataURL={generateBlurPlaceholder(400, 0)}
            sizes="(max-width: 250px) 100vw, 400px"
            itemProp="image"
          />
        </div>
        <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
          POSUDA ZA VAĐENJE ČISTAČA PČ
        </figcaption>
      </figure>
    </div>
  </div>
</div>

              {/* Parkiralista kugli subsection */}
              <div
                id="parkiralistaKugli"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/T1pLXgxw/11.jpg"
                        fill
                        alt="PARKIRALIŠTE KUGLI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PARKIRALIŠTE KUGLI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/1X2gRXRK/13.jpg"
                        fill
                        alt="HVATAČ I ODAŠILJAČ KUGLI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      HVATAČ I ODAŠILJAČ KUGLI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Rezervoari subsection */}
              <div
                id="rezervoari"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/3wTvDkXS/9.jpg"
                        fill
                        alt="REZERVOARI ZA BENZINSKE POSTAJE REZERVOAR TEHNOLOŠKE KANALIZACIJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOARI ZA BENZINSKE POSTAJE <br/> REZERVOAR TEHNOLOŠKE KANALIZACIJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/wxV0xppY/15.jpg"
                        fill
                        alt="REZERVOAR GUMIRANI ZA KISELINE I LUŽINE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOAR GUMIRANI <br/>ZA KISELINE I LUŽINE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Rezervoari 2 subsection */}
              <div
                id="rezervoari2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/KcsLDBC4/7.jpg"
                        fill
                        alt="ANIONSKI I KATIONSKI I REZERVOARI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ANIONSKI I KATIONSKI I REZERVOARI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/vZ1zvx6G/18.jpg"
                        fill
                        alt="GUMIRANI REZERVOARI ZA KISELINE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GUMIRANI REZERVOARI ZA KISELINE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Rezervoari 4 subsection */}
              <div
                id="rezervoari4"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/D0Bgxqgw/16.jpg"
                        fill
                        alt="PODNE REŠETKE REŠETKASTA STUBIŠTA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PODNE REŠETKE <br/> REŠETKASTA STUBIŠTA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/90WbPxyk/14.jpg"
                        fill
                        alt="FILTERSKA JEDINICA ZA OTEŽANU VODU"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      FILTERSKA JEDINICA ZA OTEŽANU VODU
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Postrojenja 3 subsection */}
              <div
                id="postrojenja3"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/Y09gqT6t/33.jpg"
                        fill
                        alt="POSTROJENJE ZA PRERADU BEŠAVNIH CIJEVI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">                      
                      GUMIRANI ČELIČNI REZERVOAR SA RAZVODOM ZA KISELINE I LUŽINE 35 m³
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Postrojenja 2 subsection */}
              <div
                id="postrojenja2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/gJG81xrX/32.jpg"
                        fill
                        alt="POSTROJENJE ZA PRERADU BEŠAVNIH CIJEVI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      POSTROJENJE ZA PRERADU BEŠAVNIH CIJEVI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Zaštita zupčanika subsection */}
              <div
                id="zastitaZupcanika"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/RVhQMJdw/28.jpg"
                        fill
                        alt="ZAŠTITA ZUPČANIKA -*INOX"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ZAŠTITA ZUPČANIKA -*INOX
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/0NY7tY51/29.jpg"
                        fill
                        alt="SEGMENTI ZAŠTITE ZUPČANIKA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      SEGMENTI ZAŠTITE ZUPČANIKA
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Rashladna jedinica subsection */}
              <div
                id="rashladnaJedinica"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/Zn788Jb9/25.jpg"
                        fill
                        alt="INOX LEPTIR VENTIL No 1500 mm AUTOMATSKI UPRAVLJAN"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      INOX LEPTIR VENTIL No 1500 mm <br/> AUTOMATSKI UPRAVLJAN
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/brN0SZhc/24.jpg"
                        fill
                        alt="RASHLADNA JEDINICA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      RASHLADNA JEDINICA
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Transporteri 1 subsection */}
              <div
                id="transporteri1"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/mkkm851Y/26.jpg"
                        fill
                        alt="TRAKA ZA TRANSPORT MATERIJALA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/sgZYWFtX/30.jpg"
                        fill
                        alt="ČELIČNO GUMENI TRANSPORTER"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 400px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ČELIČNO GUMENI TRANSPORTER
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Kranske sine subsection */}
              <div
                id="kranskeSine"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/sXJ92pb4/23.jpg"
                        fill
                        alt="KRANSKE ŠINE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KRANSKE ŠINE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/zBNF5d2f/20.jpg"
                        fill
                        alt="MAČKA KRANA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 400px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MAČKA KRANA
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Dijelovi mačke krana subsection */}
              <div
                id="dijeloviMackeKrana"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/L8rVQ4zL/21.jpg"
                        fill
                        alt="DIJELOVI MAČKE KRANA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 400px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      DIJELOVI MAČKE KRANA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/wBLQCKVP/22.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 400px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* KOMUNALNA EKO OPREMA Section */}
          <section
            id="ekoOpremaKomunalna"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-700" itemProp="name">
              KOMUNALNA EKO OPREMA
            </h2>
            <div className="space-y-4">
              {/* Kontejneri subsection */}
              <div
                id="eko-oprema-komunalna-kontejneri"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/GpGWhmrx/9.jpg"
                        fill
                        alt="KOMUNALNI KONTEINERI OTVORENI ,ZATVORENI 5,7 i 10 m³"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KOMUNALNI KONTEINERI OTVORENI ,ZATVORENI 5,7 i 10 m³
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/k4FPwXpg/1.jpg"
                        fill
                        alt="KOMUNALNI KONTEINERI OTVORENI ,ZATVORENI za papir 5,7 i 10 m³"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KOMUNALNI KONTEINERI OTVORENI ,ZATVORENI za papir 5,7 i 10 m³
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/CKPQBj3Y/20.jpg"
                        fill
                        alt="Plastične kante za smeće, 60, 100, 200 i 300 lit"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Plastične kante za smeće, 60, 100, 200 i 300 lit
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/CxX0x28S/31.jpg"
                        fill
                        alt="KONTEINER 7 M3 ZA ELEKTRONSKI OTPAD I KRPE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KONTEINER 7 M3 ZA ELEKTRONSKI OTPAD I KRPE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/d0CYk9Rd/32.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/Gt7NSBJd/13.jpg"
                        fill
                        alt="ROLO KONTEINER 32 m³"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ROLO KONTEINER 32 m³
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Septic tank separatori subsection */}
              <div
                id="septic-tank-separatori"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/XqL3N7fz/26.jpg"
                        fill
                        alt="SEPTIČKE JAME ,SEPARATORI ULJA I MASTI 800 LIT JEDNOKOMORNA DVOKOMORNE I TROKOMORNE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      SEPTČKE JAME ,SEPARATORI ULJA I MASTI 800 LIT JEDNOKOMORNA DVOKOMORNE I TROKOMORNE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/v8tGtXJt/27.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/WbpTWgjL/28.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/VvLpR9tK/12.jpg"
                        fill
                        alt="Rezervoari sa duplom stijenkom za otpadno ulje"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Rezervoari sa duplom stijenkom za otpadno ulje
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/5NP1ZyNH/29.jpg"
                        fill
                        alt="Plastične posude za otpadno ulje"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Plastične posude za otpadno ulje
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/MTyq4Yvx/25.jpg"
                        fill
                        alt="Rezervoari za otpadno ulje 20m³"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Rezervoari za otpadno ulje 20m³
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/pVCtFrj0/4.jpg"
                        fill
                        alt="REZERVOARI TEHNOLOŠKE KANALIZACIJE 35m³"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOARI TEHNOLOŠKE KANALIZACIJE 35m³
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/d1MJ4fQ4/23.jpg"
                        fill
                        alt="REZERVOAR ZA OTPADNO ULJE SA TANKVANOM OD 1000 DO 20000 LIT."
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOAR ZA OTPADNO ULJE SA TANKVANOM OD 1000 DO 20000 LIT.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Tankvane regali subsection */}
              <div
                id="tankvane-regali"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/Kj0SSpFX/3.jpg"
                        fill
                        alt="TANKVANE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      TANKVANE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/2SbpMxKJ/5.jpg"
                        fill
                        alt="TANKVANE SA KOTAČIMA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      TANKVANE SA KOTAČIMA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/5NkdsrnL/8.jpg"
                        fill
                        alt="REGALI BAČVI SA TANKVANOM DO 9 BAČVI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REGALI BAČVI SA TANKVANOM DO 9 BAČVI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/L6sFBSBm/6.jpg"
                        fill
                        alt="REGALI BAČVI SA PUMPOM"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REGALI BAČVI SA PUMPOM
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/K86X2MXY/7.jpg"
                        fill
                        alt="REGALI BAČVI SA PUMPOM ZA PUNJENJE I ISPUNJENJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REGALI BAČVI SA PUMPOM ZA PUNJENJE I ISPUNJENJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/vTsHHNpc/15.jpg"
                        fill
                        alt="REGALI BAČVI SA TANKVANOM OTVORENI I ZATVORENIZATVORENI ZA PUNJENJE ,PRAŽNJENJE I DOZIRANJE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REGALI BAČVI SA TANKVANOM OTVORENI I ZATVORENIZATVORENI ZA PUNJENJE ,PRAŽNJENJE I DOZIRANJE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/1RG3Yyq6/16.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Postrojenja subsection */}
              <div
                id="postrojenja"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/5NfNhDBr/18.jpg"
                        fill
                        alt="FILTERSKE JEDINICE ZA OTEŽANU VODU"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      FILTERSKE JEDINICE ZA OTEŽANU VODU
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/qqxBtGTQ/17.jpg"
                        fill
                        alt="REZERVOARKSO SPREMIŠTE KISELINA I LUŽINA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOARKSO SPREMIŠTE KISELINA I LUŽINA
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Posude za akumulatore subsection */}
              <div
                id="posude-za-akumulatore-zauljene-krpe-i-pijesak"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/T1ffXWDb/24.jpg"
                        fill
                        alt="POSUDE ZA AKUMULATORE,ZAULJENE KRPE I PIJESAK"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      POSUDE ZA AKUMULATORE,ZAULJENE KRPE I PIJESAK
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/fyznPnGj/2.jpg"
                        fill
                        alt="PLINSKI ORMARI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PLINSKI ORMARI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Posude 2 subsection */}
              <div
                id="posude2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/13tRt6Yc/21.jpg"
                        fill
                        alt="ŠAHTE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ŠAHTE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/SNVNkVVx/20.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/FHBrJRMt/19.jpg"
                        fill
                        alt="BARIJERE YA CESTE, PREGADE ZA CESTE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      BARIJERE YA CESTE, PREGADE ZA CESTE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Spremista subsection */}
              <div
                id="spremista"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/Pxkkm8K7/30.jpg"
                        fill
                        alt="MOBILNA SPREMIŠTA SPREMIŠTA ZAPALJIVIH TEKUĆINA SPREMIŠTA BOJA I LAKOVA SPREMIŠTE BOCA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MOBILNA SPREMIŠTA SPREMIŠTA ZAPALJIVIH TEKUĆINA SPREMIŠTA BOJA I LAKOVA SPREMIŠTE BOCA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/pd52Qvvm/22.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Spremista 1 subsection */}
              <div
                id="spremista1"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/PxCFmCHD/21.jpg"
                        fill
                        alt="REZERVOAR 1000 LITARA SA PUMPOM I BROJILOM ZA ISTAKANJE SA JEDNOM I DVIJE STIJENKE OTVORENI I ZATVORENI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOAR 1000 LITARA SA PUMPOM I BROJILOM ZA ISTAKANJE SA JEDNOM I DVIJE STIJENKE OTVORENI I ZATVORENI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/3RhPyQx5/10.jpg"
                        fill
                        alt="REŠETKE PODNE U INDUSTRIJI ZA STUBIŠTA ZA OGRADE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REŠETKE PODNE U INDUSTRIJI ZA STUBIŠTA ZA OGRADE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Spremista 2 subsection */}
              <div
                id="spremista2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/SxJqq4Jg/33.jpg"
                        fill
                        alt="MOBILNO SPREMIŠTE DVOETAŽNO IZOLIRANO SA POMOĆNOM PROSTORIJOM ZA OPASNI OTPAD"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MOBILNO SPREMIŠTE DVOETAŽNO IZOLIRANO SA POMOĆNOM PROSTORIJOM ZA OPASNI OTPAD
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* GUMIRANI I PLASTIFICIRANI PROIZVODI Section */}
          <section
            id="gumiraniIplastificiraniProizvodi"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              GUMIRANI ČELIČNI MEMBRANSKI VENTILI, NEPOVRATNI VENTILI, CIJEVNI ELEMENTI I REZERVOARI
            </h2>
            <div className="space-y-4">
              {/* Gumirani membranski ventili subsection */}
              <div
                id="gumirani-membranski-ventili"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/hGbTLwqq/5.jpg"
                        fill
                        alt="GUMIRANI MEMBRANSKI VENTILI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GUMIRANI MEMBRANSKI VENTILI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/NFLXwj2g/6.jpg"
                        fill
                        alt="GUMIRANI NEPOVRATI VENTILI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GUMIRANI NEPOVRATI VENTILI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Gumirane cijevi subsection */}
              <div
                id="gumirane-cijevi"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/zf1TRN6j/2.jpg"
                        fill
                        alt="Gumirane cijevi"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Gumirane cijevi
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Gumirani čelični spremnici subsection */}
              <div
                id="gumirani-celikni-spremnici"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/B6mFyK6Y/4.jpg"
                        fill
                        alt="GUMIRANI ČELIČNI SPREMNICI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GUMIRANI ČELIČNI SPREMNICI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/hjDxprSQ/3.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Gumirani čelični anionski i kationski izmjenjivači subsection */}
              <div
                id="gumirani-celikni-anionski-i-kationski-izmjenjivaci"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/4yM94Rpp/1.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/KcsLDBC4/7.jpg"
                        fill
                        alt="GUMIRANI ČELIČNI ANIONSKI I KATIONSKI IZMJENJIVAČI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      GUMIRANI ČELIČNI ANIONSKI I KATIONSKI IZMJENJIVAČI
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* OPREMA ZA MORA JEZERA RIJEKA - KAMPOVE Section */}
          <section
            id="opremaZaMore"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              OPREMA ZA MORA JEZERA RIJEKA - KAMPOVE
            </h2>
            <div className="space-y-4">
              {/* Pontoni i plutajuće platforme 1 subsection */}
              <div
                id="pontoni-i-plutajuće-platforme-1"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                        fill
                        alt="OSNOVNA VELIĆINA PONTONA 2 X 4 M"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      OSNOVNA VELIĆINA PONTONA 2 X 4 M
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pontoni i plutajuće platforme 2 subsection */}
              <div
                id="pontoni-i-plutajuće-platforme-2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/5yL4djZ3/12.png"
                        fill
                        alt="MODULI SUNČALIŠTA SA PRISTUPNIM STAZAMA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MODULI SUNČALIŠTA SA PRISTUPNIM STAZAMA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/cCb3Lx4m/6.jpg"
                        fill
                        alt="Plovci 970x620x340 mm"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Plovci 970x620x340 mm
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pontoni i plutajuće platforme subsection */}
              <div
                id="pontoni-i-plutajuće-platforme"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/d02Gjc4s/3.jpg"
                        fill
                        alt="Pontoni za čamce"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Pontoni za čamce
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/C1wkvrQj/2.jpg"
                        fill
                        alt="Modularni pontoni"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Modularni pontoni
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Kajaci i rekreativna oprema subsection */}
              <div
                id="kajaci-i-rekreativna-oprema"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/TPMrb3jN/1.jpg"
                        fill
                        alt="KAJAK DVOSJED"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KAJAK DVOSJED
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pontoni i plutajuće 2 subsection */}
              <div
                id="pontoni-i-plutajuće-2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/WpWgnn6k/7.jpg"
                        fill
                        alt="MODULARNE MOBILNE KUĆICE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      MODULARNE MOBILNE KUĆICE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Vodomjerna okna subsection */}
              <div
                id="vodomjerna-okna"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/2SvWCfpQ/8.jpg"
                        fill
                        alt="SEPTIČKE JAME 800 lit jednokomorna,dvokomorna i trokomorna"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      SEPTIČKE JAME 800 lit jednokomorna,dvokomorna i trokomorna
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/wT1Jbm0b/9.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Sahte subsection */}
              <div
                id="sahte"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/s2rhX0yt/11.jpg"
                        fill
                        alt="VODOMJERNA OKNA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      VODOMJERNA OKNA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/jdBNVS1q/10.jpg"
                        fill
                        alt="ŠAHTE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      ŠAHTE
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* URABANA OPREMA Section */}
          <section
            id="urbanaOprema"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              URBANA OPREMA
            </h2>
            <div className="space-y-4">
              {/* Klupe i kosevi za parkove subsection */}
              <div
                id="urbana-oprema-klupe-i-kosevi-za-parkove"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/L4yjXF9r/0.jpg"
                        fill
                        alt="KLUPA A"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KLUPA A
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Urbana oprema 2 subsection */}
              <div
                id="urbana-oprema2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/GhVYFPsK/1.jpg"
                        fill
                        alt="KOŠ ZA OTPADKE A1 60 litara"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KOŠ ZA OTPADKE A1 60 litara
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/fTJmSqkk/2.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Urbana oprema 3 subsection */}
              <div
                id="urbana-oprema3"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/RFrsNFWy/3.jpg"
                        fill
                        alt="Klupa C"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Klupa C
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Urbana oprema 4 subsection */}
              <div
                id="urbana-oprema4"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/0yM0Dv1s/4.jpg"
                        fill
                        alt="KOŠ ZA OTPADKE C1 50 litara"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KOŠ ZA OTPADKE C1 50 litara
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Kandableri subsection */}
              <div
                id="urbana-oprema-5"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/8CV6314r/5.jpg"
                        fill
                        alt="KANDABLERI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KANDABLERI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Paviljon subsection */}
              <div
                id="urbana-5"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/LsfZHWs1/211.jpg"
                        fill
                        alt="PAVILJON"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      PAVILJON
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Stalci za bicikle subsection */}
              <div
                id="urbana5"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/MT6j6dh6/7.jpg"
                        fill
                        alt="STALCI ZA BICIKLE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      STALCI ZA BICIKLE
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* OPREMA ZA GRAĐEVINARSTVO Section */}
          <section
            id="opremaZaGradevinarstvo"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              OPREMA ZA GRAĐEVINARSTVO
            </h2>
            <div className="space-y-4">
              {/* Tuneli za šutu subsection */}
              <div
                id="tuneliZaSutu"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/fLg7XwTV/0.jpg"
                        fill
                        alt="POLAZNI -USIPNI DIO"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      POLAZNI -USIPNI DIO
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                        fill
                        alt="NOSAČ USIPNOG ELEMENTA"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      NASAČ USIPNOG ELEMENTA
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/T2Fq3Y4S/2.jpg"
                        fill
                        alt="NOSAČ DIZALICE ZA CIJEVI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      NASAČ DIZALICE ZA CIJEVI
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/t4H3FvyN/3.jpg"
                        fill
                        alt="CIJEVI ZA ŠUTU"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      CJEVI ZA ŠUTU
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Septička jama subsection */}
              <div
                id="septickaJama"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/ncmKjf8L/4.jpg"
                        fill
                        alt="SEPTIČKA JAMA ,SEPARAZOR ULJA I MASTI  ,VODOMJER NEPROPUSNI"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      SEPTICKA JAMA ,SEPARAZOR ULJA I MASTI ,VODOMJER NEPROPUSNI
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Septička jama 2 subsection */}
              <div
                id="septickaJama2"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/bwQRMcL5/5.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Vodomjerno okno subsection */}
              <div
                id="vodomjernoOkno"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/mDrNtcRx/6.jpg"
                        fill
                        alt="VODOMJERNO OKNO PLASTIČNO"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      VODOMJERNO OKNO PLASTIČNO
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/J0DN59GP/7.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* ROTO LJEV-PLASTIČNI PROIZVODI Section */}
          <section
            id="strojeviZaPoljoprivreduIVocarstvo"
            className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
            itemScope
            itemType="https://schema.org/Product"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
              ROTO LJEV-PLASTIČNI PROIZVODI
            </h2>
            <div className="space-y-4">
              {/* Kače subsection */}
              <div
                id="kace"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/m2YpNxvm/28.jpg"
                        fill
                        alt="KARNISTER 50L"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KARNISTER 50L
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/cJHDSvrz/32.jpg"
                        fill
                        alt="POSUDE ZA MESO"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      POSUDE ZA MESO
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/7ZqsKsDw/31.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/nr8TBT08/38.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/0yZtFY2m/30.jpg"
                        fill
                        alt="BAČVE ZA VlNO SA PLUTAJUĆlM POKLOPCEM l ZATVORENE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      BAČVE ZA VlNO SA PLUTAJUĆlM POKLOPCEM l ZATVORENE
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/hPTKry8W/1.jpg"
                        fill
                        alt="Posude za vino"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Posude za vino
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/wT8bmxGt/29.jpg"
                        fill
                        alt="KACE"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      KACE
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Prskalice subsection */}
              <div
                id="strojevi-za-poljoprivredu-i-vocarstvo-prskalice"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/8sQdf5kT/12.jpg"
                        fill
                        alt="Rezervoar za prskalicu 600L"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Rezervoar za prskalicu 600L
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/PfLBDRf7/13.jpg"
                        fill
                        alt="Rezervoar za atomizer 400L"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Rezervoar za atomizer 400L
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Atomizeri subsection - single image */}
              <div
                id="strojevi-za-poljoprivredu-i-vocarstvo-atomizeri"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/YqYZnLWf/14.jpg"
                        fill
                        alt="Poljoprivredni atomizer"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      Poljoprivredni atomizer
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pumpna stanica subsection */}
              <div
                id="pumpnaStanica"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/PxCFmCHD/21.jpg"
                        fill
                        alt="REZERVOAR 1000 LITARA SA PUMPOM"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      REZERVOAR 1000 LITARA SA PUMPOM
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[250px]">
                      <Image
                        src="https://i.postimg.cc/3NpSczdJ/22.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </article>          
      </div>
    </>
  );
}