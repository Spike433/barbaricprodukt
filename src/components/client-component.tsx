//"use client";

//import { useGallery } from "@/hooks/use-gallery";
//import ImageGallery from "@/components/image-gallery";
import ClientSideNavigation from "@/components/client-side-navigation";

import Image from "next/image";
import { generateBlurPlaceholder } from "@/lib/utils";
import {useTranslations} from 'next-intl';

export default function ProductPageClient() {
  const t = useTranslations('ProductPageClient');
  return (
    <>
      <div className="w-full pl-10">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Navigation */}
          <nav className="order-1 lg:order-2 w-full lg:w-[19%] mb-4" aria-label="Sekcije proizvoda">
            <ClientSideNavigation />
          </nav>
          
          {/* Main content */}
          <article className="order-2 lg:order-1 w-full lg:w-[80%] pr-3">
          {/* ČELIČNE KONSTRUKCIJE Section */}
            <section
              id="celicneKonstrukcije"
              className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
              itemScope
              itemType="https://schema.org/Product"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
                {t('celicneKonstrukcije.title')}
              </h2>
              <div className="space-y-4">
                {/* Montažne hale subsection */}
                <div
                  id="montazne-hale"
                  className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/nL3NGTc9/1.png"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.title')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.title')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/pTktR7kW/12.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.hangari')}
                          className="object-cover object-[38%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.hangari')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/CMmFgZ6G/5.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.garaze')}
                          className="object-cover object-[20%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"                        
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.garaze')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[470px]">
                        <Image
                          src="https://i.postimg.cc/4dXgCZ62/9.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                          style={{ objectPosition: "20% 43%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[470px]">
                        <Image
                          src="https://i.postimg.cc/YS6HyjWm/11.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                          style={{ objectPosition: "20% 43%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[470px]">
                        <Image
                          src="https://i.postimg.cc/vTHbnMDx/4.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.panoramskoDizalo')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.panoramskoDizalo')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/FK5vZ074/10.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.celicneKonstrukcije')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/DwbFLxf6/8.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.krovista')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.krovista')}
                      </figcaption>
                    </figure>

                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                <div className="relative overflow-hidden rounded-lg h-[400px]">
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
                  className="scroll-mt-0 pl-9"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/Bb6f6gwx/13.jpg"
                          fill
                          alt={t('celicneKonstrukcije.stakleneLimeneFasade.fasadeStakleneLimene')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.stakleneLimeneFasade.fasadeStakleneLimene')}
                      </figcaption>
                    </figure>
                          
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/NfnBK3tL/7.jpg"
                          fill
                          alt=""
                          className="object-cover object-[20%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.stakleneLimeneFasade.krovniProzori')}
                      </figcaption>
                    </figure>
                          
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/qMqpMk99/6.jpg"
                          fill
                          alt={t('celicneKonstrukcije.montazneHale.krovista')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.montazneHale.krovista')}
                      </figcaption>
                    </figure>
                          
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/44LT0Dmw/14.jpg"
                          fill
                          alt={t('celicneKonstrukcije.stakleneLimeneFasade.krovniProzori')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.stakleneLimeneFasade.krovniProzori')}
                      </figcaption>
                    </figure>
                          
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/pTv22KHZ/2.jpg"
                          fill
                          alt={t('celicneKonstrukcije.stakleneLimeneFasade.krovneKupole')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.stakleneLimeneFasade.krovneKupole')}
                      </figcaption>
                    </figure>
                          
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/wvk933xd/3.jpg"
                          fill
                          alt={t('celicneKonstrukcije.stakleneLimeneFasade.svjetlarnici')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('celicneKonstrukcije.stakleneLimeneFasade.svjetlarnici')}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="w-full space-y-8">
                  {/* Industrijska vrata section */}
                  <div className="mt-8 mb-6 pl-9 pt-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                      {t('celicneKonstrukcije.industrijskaVrata.title1')}
                    </h2>
                    <h2 className="text-2xl font-bold mb-4">
                      {t('celicneKonstrukcije.industrijskaVrata.title2')}
                    </h2>    
                  </div>

              {/* Ograde i podovi subsection */}
                <div id="ogradeIPodovi" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">    
                  <div className="flex flex-wrap">
                    {/* Ograde content */}
                    <div className="w-full md:w-1/2 space-y-2 p-4 font-medium">
                      <div className="text-lg font-semibold">
                        {t('celicneKonstrukcije.ogradeIPodovi.ograde.title')}
                      </div>
                      <div className="ml-4 text-lg">
                        {t('celicneKonstrukcije.ogradeIPodovi.ograde.balkonske')}
                      </div>
                      <div className="ml-4 text-lg">
                        {t('celicneKonstrukcije.ogradeIPodovi.ograde.kucne')}
                      </div>
                      <div className="ml-4 text-lg">
                        {t('celicneKonstrukcije.ogradeIPodovi.ograde.industrijske')}
                      </div>
                      <div className="ml-4 text-lg">
                        {t('celicneKonstrukcije.ogradeIPodovi.ograde.resetkasteZastite')}
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                {/* Ograde i podovi subsection */}
                <div
                  id="ogradeIPodovi"
                  className="scroll-mt-24 pl-9"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
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
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
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
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
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
                    {/* Lighting and urban equipment */}
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.rasvjetnaTijela')}
                    </div>
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kandelaberi')}
                    </div>
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.klupe')}
                    </div>
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kosevi')}
                    </div>
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.reklamniPanoi')}
                    </div>
                    <div className="text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.stupovi')}
                    </div>
                    
                    {/* Containers section with nested items */}
                    <div className="mt-4 text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kontejneri.title')}
                    </div>
                    <div className="ml-8 text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kontejneri.stambeni')}
                    </div>
                    <div className="ml-8 text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kontejneri.industrijski')}
                    </div>
                    
                    {/* Kiosks */}
                    <div className="mt-8 text-lg">
                      {t('celicneKonstrukcije.ogradeIPodovi.ostalo.kiosci')}
                    </div>
                  </div>
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[800px]">
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
                    </figure>                  
                  </div>
                </div>

                {/* Kuće subsection */}
                <div id="kuce" className="mt-8 scroll-mt-24 pl-9">
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg w-full" style={{ height: 'auto' }}>
                        <Image
                          src="https://i.postimg.cc/136hf4MY/21.jpg"
                          width={1200}
                          height={593}
                          alt={t('celicneKonstrukcije.modularneKuce.title')}
                          className="w-full h-auto  object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 1200px) 100vw, 1200px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-xl font-medium text-left" itemProp="caption">
                        <strong>{t('celicneKonstrukcije.modularneKuce.title')}</strong>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Pontoni i katamarani subsection */}
                <div id="pontoniKatamarani" className="scroll-mt-24 pl-9">
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg aspect-square">
                        <Image
                          src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                          fill
                          alt={t('celicneKonstrukcije.pontoniKatamarani.title')}
                          className="object-cover object-[50%_35%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="ml-1 mt-2 text-xl font-medium text-left" itemProp="caption">
                        <strong>{t('celicneKonstrukcije.pontoniKatamarani.title')}</strong>
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
                {t('aluPvcStolarija.title')} <br/>
                {t('aluPvcStolarija.title2')}
              </h2>
              <div className="space-y-4">
                {/* Segmentna podizna vrata subsection */}
                <div
                  id="segmentnaPodiznaVrata"
                  className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
                        <Image
                          src="https://i.postimg.cc/MTykZYJG/2.jpg"
                          fill
                          alt={t('aluPvcStolarija.segmentnaPodiznaVrata.dvokrilnaJednokrilnaKlizna')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.segmentnaPodiznaVrata.dvokrilnaJednokrilnaKlizna')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
                        <Image
                          src="https://i.postimg.cc/FzmMYJhV/4.jpg"
                          fill
                          alt={t('aluPvcStolarija.segmentnaPodiznaVrata.automatskaVrata')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.segmentnaPodiznaVrata.automatskaVrata')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[300px]">
                        <Image
                          src="https://i.postimg.cc/m2ZxRMXb/6.jpg"
                          fill
                          alt={t('aluPvcStolarija.segmentnaPodiznaVrata.podizneRampe')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.segmentnaPodiznaVrata.podizneRampe')}
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
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/JnwVW2gg/3.jpg"
                          fill
                          alt={t('aluPvcStolarija.prozori.prozoriStakleneStijene')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.prozori.prozoriStakleneStijene')} <br/>
                        {t('aluPvcStolarija.prozori.prozoriStakleneStijene2')} <br/>
                        {t('aluPvcStolarija.prozori.prozoriStakleneStijene3')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/WpwRQS7W/5.jpg"
                          fill
                          alt={t('aluPvcStolarija.prozori.stakleneFasade')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.prozori.stakleneFasade')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/brTKkNJc/1.jpg"
                          fill
                          alt={t('aluPvcStolarija.prozori.zimskiVrtovi')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('aluPvcStolarija.prozori.zimskiVrtovi')}
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
                {t('industrijskaOprema.title')}
              </h2>
              <div className="mt-8 pl-9 pt-4 text-left ml-20">
                <h2 className="text-2xl font-bold mb-4">
                {t('industrijskaOprema.inoxArmature.title')}
                </h2>              
              </div>
              <div className="space-y-4">
              <div id="inoxArmature" className="scroll-mt-24 pl-9">
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
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.0')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.1')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.2')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.3')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.4')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.5')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.6')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.7')}</div>
                  <div className="text-xs">{t('industrijskaOprema.inoxArmature.items.8')}</div>
                </div>
              </div>
            </div>

                {/* Ventili subsection */}
                <div
                  id="ventili"
                  className="scroll-mt-24 pl-9"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/CL9DSPzV/5.jpg"
                          fill
                          alt={t('industrijskaOprema.ventili.leptirVentil')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(500, 0)}
                          sizes="(max-width: 250px) 100vw, 500px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="text-sm font-medium text-center mt-5" itemProp="caption">
                        {t('industrijskaOprema.ventili.leptirVentil')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/tRKFjCmp/6-1.jpg"
                          fill
                          alt={t('industrijskaOprema.ventili.leptirVentil')}
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
                          alt={`${t('industrijskaOprema.filteriIzmjenjivaci.filteri')} ${t('industrijskaOprema.filteriIzmjenjivaci.industrijskiInox')}`}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.filteriIzmjenjivaci.filteri')} 
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[350px]">
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
                        {t('industrijskaOprema.filteriIzmjenjivaci.industrijskiInox')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/7Lh5bNjw/1-1.jpg"
                          fill
                          alt={t('industrijskaOprema.filteriIzmjenjivaci.izmjenjivaci')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center -ml-20" itemProp="caption">
                        {t('industrijskaOprema.filteriIzmjenjivaci.izmjenjivaci')}
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
                      <div className="relative overflow-hidden rounded-lg h-[350px]">
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
                        {t('industrijskaOprema.spojkeAktuatori.periflexSpojke')}
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
                        {t('industrijskaOprema.spojkeAktuatori.aktuator')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
                        <Image
                          src="https://i.postimg.cc/GhDJ8ss4/19-1.jpg"
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
              <h2 className="text-2xl font-bold mb-4 pl-8">{t('industrijskaOprema.generalniPopravak.title')}</h2>
              <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 space-y-2 pl-24 font-medium">
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.0')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.1')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.2')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.3')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.4')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.5')}</div>
            <div className="ml-4 text-md">{t('industrijskaOprema.generalniPopravak.items.6')}</div>
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
                      alt={t('industrijskaOprema.cijevniSustavi.posudaZaVadjenje')}
                      className=" hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(400, 0)}
                      sizes="(max-width: 250px) 100vw, 400px"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    {t('industrijskaOprema.cijevniSustavi.cijevniZatvaraci')}
                  </figcaption>
                </figure>
                
                <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                  <div className="relative overflow-hidden rounded-lg h-[800px]">
                    <Image
                      src="https://i.postimg.cc/T245J7jW/12.jpg"
                      fill
                      alt={t('industrijskaOprema.cijevniSustavi.posudaZaVadjenje')}
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(400, 0)}
                      sizes="(max-width: 250px) 100vw, 400px"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.cijevniSustavi.posudaZaVadjenje')}
                  </figcaption>
                </figure>
              </div>
            </div>
              </div>

              {/* Parkiralista kugli subsection */}
            <div id="parkiralistaKugli" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
              <div className="flex flex-wrap p-4">
                {/* First Image - 985x294 (approx 3.35:1 ratio) */}
                <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                  <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '985/296' }}> {/* Adjusted ratio */}
                    <Image
                      src="https://i.postimg.cc/T1pLXgxw/11.jpg"
                      width={985}
                      height={296}
                      alt={t('industrijskaOprema.parkiralistaKugli.title')}
                      className="object-contain hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(985, 394)} 
                      sizes="(max-width: 800px) 100vw, 50vw"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    {t('industrijskaOprema.parkiralistaKugli.title')}
                  </figcaption>
                </figure>
                
                {/* Second Image - 1094x394 (approx 2.77:1 ratio) */}
                <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                  <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '1094/400' }}>
                    <Image
                      src="https://i.postimg.cc/1X2gRXRK/13.jpg"
                      width={1094}
                      height={400}
                      alt={t('industrijskaOprema.parkiralistaKugli.hvatacOdasiljac')}
                      className="object-contain hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: '10% 10%' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(1094, 400)}
                      sizes="(max-width: 800px) 100vw, 50vw"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    {t('industrijskaOprema.parkiralistaKugli.hvatacOdasiljac')}
                  </figcaption>
                </figure>
              </div>
            </div>
            {/* Rezervoari subsection */}
              <div id="rezervoari" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
                <div className="flex flex-wrap p-4">
                  {/* First Image - 518x281 (1.84:1 ratio) */}
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '518/281' }}>
                      <Image
                        src="https://i.postimg.cc/3wTvDkXS/9.jpg"
                        width={518}
                        height={281}
                        alt={t('industrijskaOprema.rezervoari.zaBenzinskePostaje')}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(518, 281)}
                        sizes="(max-width: 800px) 100vw, 50vw"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.rezervoari.zaBenzinskePostaje')} <br/> {t('industrijskaOprema.rezervoari.tehnoloskeKanalizacije')}
                    </figcaption>
                  </figure>
                  
                  {/* Second Image - 1280x960 (1.33:1 ratio) */}
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '1280/720' }}>
                      <Image
                        src="https://i.postimg.cc/wxV0xppY/15.jpg"
                        width={1280}
                        height={720}
                        alt={t('industrijskaOprema.rezervoari.zaKiseline')}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(1280, 960)}
                        sizes="(max-width: 800px) 100vw, 50vw"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.rezervoari.gumirani')} <br/>{t('industrijskaOprema.rezervoari.zaKiseline')}
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
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/KcsLDBC4/7.jpg"
                          fill
                          alt={t('industrijskaOprema.rezervoari2.anionskiKationski')}
                          className="object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.rezervoari2.anionskiKationski')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/vZ1zvx6G/18.jpg"
                          fill
                          alt={t('industrijskaOprema.rezervoari2.gumiraniZaKiseline')}
                          className="object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.rezervoari2.gumiraniZaKiseline')}
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
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/D0Bgxqgw/16.jpg"
                          fill
                          alt={t('industrijskaOprema.rezervoari4.resetkastaStubista')}
                          className="object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.rezervoari4.podneResetke')} <br/> {t('industrijskaOprema.rezervoari4.resetkastaStubista')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/rpGBs82N/14.jpg"
                          fill
                          alt={t('industrijskaOprema.rezervoari4.filterskaJedinica')}
                          className="object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          style={{ objectPosition: '2% 50%' }}
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.rezervoari4.filterskaJedinica')}
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
                      <div className="relative overflow-hidden rounded-lg aspect-video"> {/* Changed from aspect-square to aspect-video */}
                        <Image
                          src="https://i.postimg.cc/Y09gqT6t/33.jpg"
                          width={2644}
                          height={1490}
                          alt={t('industrijskaOprema.postrojenja3.gumiraniCelicki')}
                          className="object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(2644, 1490)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">                      
                      {t('industrijskaOprema.postrojenja3.gumiraniCelicki')}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Postrojenja 2 subsection */}
                <div id="postrojenja2" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '2644/1490' }}>
                      <Image
                        src="https://i.postimg.cc/gJG81xrX/32.jpg"
                        width={2644}
                        height={1490}
                        alt={t('industrijskaOprema.postrojenja2.zaPreraduBesavnihCijevi')}
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        quality={100}  // Optimized quality (default 75)
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(800, 0)}  // Higher resolution placeholder
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.postrojenja2.zaPreraduBesavnihCijevi')}
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
                          alt={t('industrijskaOprema.zastitaZupcanika.inox')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.zastitaZupcanika.inox')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/0NY7tY51/29.jpg"
                          fill
                          alt={t('industrijskaOprema.zastitaZupcanika.inox')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.zastitaZupcanika.segmenti')}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Rashladna jedinica subsection */}
                <div id="rashladnaJedinica" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
                  <div className="flex flex-wrap p-4">
                    {/* First Image - Focused right */}
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[550px]">
                        <Image
                          src="https://i.postimg.cc/Zn788Jb9/25.jpg"
                          fill
                          alt={t('industrijskaOprema.rashladnaJedinica.inoxLeptirVentil')}
                          className="object-cover hover:scale-105 transition-transform duration-500"          
                          style={{ objectPosition: '39% 40%' }}
                          loading="lazy"
                          placeholder="blur"          
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.rashladnaJedinica.inoxLeptirVentil')} <br/> {t('industrijskaOprema.rashladnaJedinica.automatskiUpravlja')}
                      </figcaption>
                    </figure>
                    
                    {/* Second Image - Focused right */}
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[550px]">
                        <Image
                          src="https://i.postimg.cc/brN0SZhc/24.jpg"
                          fill
                          alt={t('industrijskaOprema.rashladnaJedinica.title')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: '39% 50%' }}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.rashladnaJedinica.title')}
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
                      <div className="relative overflow-hidden rounded-lg h-[700px]">
                        <Image
                          src="https://i.postimg.cc/mkkm851Y/26.jpg"
                          fill
                          alt="TRAKA ZA TRANSPORT MATERIJALA"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: '40% 54%' }}
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
                          alt={t('industrijskaOprema.transporteri1.celicnoGumeni')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 400px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.transporteri1.celicnoGumeni')}
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
                      <div className="relative overflow-hidden rounded-lg h-[700px]">
                        <Image
                          src="https://i.postimg.cc/sXJ92pb4/23.jpg"
                          fill
                          alt={t('industrijskaOprema.kranskeSine.title')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                          style={{ objectPosition: "30% 50%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('industrijskaOprema.kranskeSine.title')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[700px]">
                        <Image
                          src="https://i.postimg.cc/zBNF5d2f/20.jpg"
                          fill
                          alt={t('industrijskaOprema.kranskeSine.mackaKrana')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 400px) 100vw, 400px"
                          itemProp="image"
                          style={{ objectPosition: "30% 50%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.kranskeSine.mackaKrana')}
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
                      <div className="relative overflow-hidden rounded-lg h-[700px]">
                        <Image
                          src="https://i.postimg.cc/L8rVQ4zL/21.jpg"
                          fill
                          alt={t('industrijskaOprema.dijeloviMackeKrana.title')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 400px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('industrijskaOprema.dijeloviMackeKrana.title')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[700px]">
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
                {t('komunalnaEkoOprema.title')}
              </h2>
              <div className="space-y-2">
                {/* Kontejneri subsection */}
                <div
                  id="eko-oprema-komunalna-kontejneri"
                  className="mt-8 scroll-mt-24 pl-9 pt-4"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/02YWvD1c/9.png"
                          fill
                          alt={t('komunalnaEkoOprema.kontejneri.komunalni')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.kontejneri.komunalni')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/ZnLCJ4P7/1.png"
                          fill
                          alt={t('komunalnaEkoOprema.kontejneri.zaPapir')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.kontejneri.zaPapir')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/CKPQBj3Y/20.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.kontejneri.plasticneKante')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.kontejneri.plasticneKante')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
                        <Image
                          src="https://i.postimg.cc/CxX0x28S/31.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.kontejneri.zaElektronskiOtpad')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.kontejneri.zaElektronskiOtpad')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
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
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/Gt7NSBJd/13.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.kontejneri.roloKontejner')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.kontejneri.roloKontejner')}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Septic tank separatori subsection */}
                <div
                  id="septic-tank-separatori"
                  className="mb-6 scroll-mt-24 pl-9"
                >
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[550px]">
                        <Image
                          src="https://i.postimg.cc/XqL3N7fz/26.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.jednokomorne')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.jednokomorne')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[550px]">
                        <Image
                          src="https://i.postimg.cc/v8tGtXJt/27.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.dvokomorne')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.dvokomorne')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/WbpTWgjL/28.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.trokomorne')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.trokomorne')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[450px]">
                        <Image
                          src="https://i.postimg.cc/VvLpR9tK/12.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.rezervoariUlje')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.rezervoariUlje')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[520px]">
                        <Image
                          src="https://i.postimg.cc/5NP1ZyNH/29.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.plasticnePosude')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                          style={{ objectPosition: "40% 0%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.plasticnePosude')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[520px]">
                        <Image
                          src="https://i.postimg.cc/MTyq4Yvx/25.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.rezervoari20m3')}
                          className="object-cover object-[50%_20%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                          style={{ objectPosition: "40% 3%" }} 
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.rezervoari20m3')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/pVCtFrj0/4.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.tehnoloskeKanalizacije')}
                          className="hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(40, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.tehnoloskeKanalizacije')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/d1MJ4fQ4/23.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.septicTankSeparatori.saTankvanom')}
                          className="object-cover object-[37%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.septicTankSeparatori.saTankvanom')}
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
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/Kj0SSpFX/3.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.tankvane')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(150, 0)}
                          sizes="(max-width: 250px) 100vw, 150px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.tankvane')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/2SbpMxKJ/5.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.saKotacima')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(150, 0)}
                          sizes="(max-width: 250px) 100vw, 150px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.saKotacima')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/5NkdsrnL/8.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.regaliBacvi')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.regaliBacvi')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/L6sFBSBm/6.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.saPumpom')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(150, 0)}
                          sizes="(max-width: 250px) 100vw, 150px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.saPumpom')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[350px]">
                        <Image
                          src="https://i.postimg.cc/K86X2MXY/7.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.zaPunjenje')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.zaPunjenje')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/vTsHHNpc/15.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.tankvaneRegali.otvoreniZatvoreni')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.tankvaneRegali.otvoreniZatvoreni')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
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
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/5NfNhDBr/18.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.postrojenja.filterskeJedinice')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.postrojenja.filterskeJedinice')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/qqxBtGTQ/17.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.postrojenja.rezervoarKiseline')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.postrojenja.rezervoarKiseline')}
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
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/T1ffXWDb/24.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.posudeZaAkumulatore.akumulatori')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.posudeZaAkumulatore.akumulatori')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '1070/525' }}>
                        <Image
                          src="https://i.postimg.cc/dVZVZksY/2.png"
                          fill
                          alt={t('komunalnaEkoOprema.posudeZaAkumulatore.plinskiOrmari')}
                          className=" hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 1070px) 100vw, 1070px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.posudeZaAkumulatore.plinskiOrmari')}
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
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
                        <Image
                          src="https://i.postimg.cc/13tRt6Yc/21.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.posude2.sahte')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.posude2.sahte')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[600px]">
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
                      <div className="relative overflow-hidden rounded-lg h-[200px]">
                        <Image
                          src="https://i.postimg.cc/FHBrJRMt/19.jpg"
                          fill
                          alt={`${t('komunalnaEkoOprema.posude2.barijere')} ${t('komunalnaEkoOprema.posude2.pregrade')}`}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('komunalnaEkoOprema.posude2.barijere')} <br/> {t('komunalnaEkoOprema.posude2.pregrade')}
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
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/Pxkkm8K7/30.jpg"
                          fill
                          alt={`${t('komunalnaEkoOprema.spremista.mobilna')} ${t('komunalnaEkoOprema.spremista.zapaljivihTecnosti')} ${t('komunalnaEkoOprema.spremista.bojaILakova')} ${t('komunalnaEkoOprema.spremista.boca')}`}
                          className="object-cover object-[25%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-left" itemProp="caption">
                        {t('komunalnaEkoOprema.spremista.mobilna')} <br/> {t('komunalnaEkoOprema.spremista.zapaljivihTecnosti')} <br/> {t('komunalnaEkoOprema.spremista.bojaILakova')} <br/> {t('komunalnaEkoOprema.spremista.boca')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/pd52Qvvm/22.jpg"
                          fill
                          alt=""
                          className="object-cover object-[35%_50%] hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
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
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[900px]">
                        <Image
                          src="https://i.postimg.cc/PxCFmCHD/21.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.spremista1.rezervoar1000')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(500, 0)}
                          sizes="(max-width: 250px) 100vw, 500px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-left" itemProp="caption">
                        {t('komunalnaEkoOprema.spremista1.rezervoar1000')}
                      </figcaption>
                    </figure>
                    
                    <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[500px]">
                        <Image
                          src="https://i.postimg.cc/3RhPyQx5/10.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.spremista1.resetke')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(500, 0)}
                          sizes="(max-width: 250px) 100vw, 500px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-left" itemProp="caption">
                        {t('komunalnaEkoOprema.spremista1.resetke')}
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Spremista 2 subsection */}
                <div id="spremista2" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
                  <div className="flex flex-wrap p-4">
                    <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg aspect-square">
                        <Image
                          src="https://i.postimg.cc/SxJqq4Jg/33.jpg"
                          fill
                          alt={t('komunalnaEkoOprema.spremista2.mobilnoSpremiste')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-left" itemProp="caption">
                        {t('komunalnaEkoOprema.spremista2.mobilnoSpremiste')}
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
              {t('gumiraniPlastificiraniProizvodi.title')}
            </h2>
            <div className="space-y-4">
              {/* Gumirani membranski ventili subsection */}
              <div
                id="gumirani-membranski-ventili"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[600px]">
                      <Image
                        src="https://i.postimg.cc/hGbTLwqq/5.jpg"
                        fill
                        alt={t('gumiraniPlastificiraniProizvodi.membranskiVentili')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(600, 0)}
                        sizes="(max-width: 250px) 100vw, 600px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('gumiraniPlastificiraniProizvodi.membranskiVentili')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/NFLXwj2g/6.jpg"
                        fill
                        alt={t('gumiraniPlastificiraniProizvodi.nepovratniVentili')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(600, 0)}
                        sizes="(max-width: 250px) 100vw, 600px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('gumiraniPlastificiraniProizvodi.nepovratniVentili')}
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Gumirane cijevi subsection */}
              <div className="flex flex-col md:flex-row w-full items-center">
                {/* Text content on the left */}
                <div className="w-full md:w-1/2 space-y-4 p-8 md:p-20 font-medium">
                  <div className="text-lg">{t('gumiraniPlastificiraniProizvodi.gumiraneCijevi')}</div>
                  <div className="text-lg">{t('gumiraniPlastificiraniProizvodi.gumiranaKoljena')}</div>
                  <div className="text-lg">{t('gumiraniPlastificiraniProizvodi.redukcioniElementi')}</div>                    
                </div>
                
                {/* Image on the right */}
                <figure className="p-4 w-full md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                  <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '640/482' }}>
                    <Image                        
                      src="https://i.postimg.cc/zf1TRN6j/2.jpg"
                      width={640}
                      height={482}
                      alt={t('gumiraniPlastificiraniProizvodi.gumiraniProizvodi')}
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(640, 482)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      itemProp="image"
                    />
                  </div>
                </figure>                  
              </div>

              {/* Gumirani čelični spremnici subsection */}
              <div
                id="gumirani-celikni-spremnici"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[600px]">
                      <Image
                        src="https://i.postimg.cc/B6mFyK6Y/4.jpg"
                        fill
                        alt={t('gumiraniPlastificiraniProizvodi.gumiraniCelicniSpremnici')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('gumiraniPlastificiraniProizvodi.gumiraniCelicniSpremnici')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[600px]">
                      <Image
                        src="https://i.postimg.cc/hjDxprSQ/3.jpg"
                        fill
                        alt=""
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

              {/* Gumirani čelični anionski i kationski izmjenjivači subsection */}
              <div
                id="gumirani-celikni-anionski-i-kationski-izmjenjivaci"
                className="mb-6 scroll-mt-24 pl-9"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[1500px]">
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
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[500px]">
                      <Image
                        src="https://i.postimg.cc/KcsLDBC4/7.jpg"
                        fill
                        alt={t('gumiraniPlastificiraniProizvodi.izmjenjivaci')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(700, 0)}
                        sizes="(max-width: 250px) 100vw, 700px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('gumiraniPlastificiraniProizvodi.izmjenjivaci')}
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
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue"
              itemProp="name"
            >
              {t('opremaZaMora.title')}
            </h2>
            <div className="space-y-4">
              {/* Pontoni i plutajuće platforme 1 subsection */}
              <div
                id="pontoni-i-plutajuće-platforme-1"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure
                    className="p-2 cursor-pointer w-full"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/j5vNB6pB/4.jpg"
                        fill
                        alt={t('opremaZaMora.pontoni.osnovnaVelicina')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.pontoni.osnovnaVelicina')}
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
                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/5yL4djZ3/12.png"
                        fill
                        alt={t('opremaZaMora.pontoni.moduliSuncanista')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-4 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.pontoni.moduliSuncanista')}
                    </figcaption>
                  </figure>

                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/cCb3Lx4m/6.jpg"
                        fill
                        alt={t('opremaZaMora.pontoni.plovci')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(500, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-4 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.pontoni.plovci')}
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
                  {/* First image + text */}
                  <div className="p-2 w-full sm:w-1/2 md:w-1/2">
                    <figure
                      className="cursor-pointer"
                      itemScope
                      itemType="https://schema.org/ImageObject"
                    >
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/d02Gjc4s/3.jpg"
                          fill
                          alt={t('opremaZaMora.pontoni.pontoniZaCamce')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                    </figure>
                    <div className="mt-4 p-2">
                      <p>{t('opremaZaMora.pontoni.pontoniDescription1')}</p>
                      <p>{t('opremaZaMora.pontoni.pontoniDescription2')}</p>
                    </div>
                  </div>

                  {/* Second image + text */}
                  <div className="p-2 w-full sm:w-1/2 md:w-1/2">
                    <figure
                      className="cursor-pointer"
                      itemScope
                      itemType="https://schema.org/ImageObject"
                    >
                      <div className="relative overflow-hidden rounded-lg h-[400px]">
                        <Image
                          src="https://i.postimg.cc/C1wkvrQj/2.jpg"
                          fill
                          alt={t('opremaZaMora.pontoni.modularniPontoni')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(400, 0)}
                          sizes="(max-width: 250px) 100vw, 400px"
                          itemProp="image"
                        />
                      </div>
                    </figure>
                    <div className="mt-4 p-2">
                      <p>{t('opremaZaMora.pontoni.modularniDescription1')}</p>
                      <p>{t('opremaZaMora.pontoni.modularniDescription2')}</p>
                    </div>
                  </div>

                  {/* Shared text under both images */}
                  <div className="w-full p-4">
                    <p>{t('opremaZaMora.pontoni.vezaSaKopnom')}</p>
                    <br />
                    <p>{t('opremaZaMora.pontoni.ugradnja')}</p>
                    <ul className="list-disc ml-5">
                      {/* TODO {t('opremaZaMora.pontoni.ugradnjaItems').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))} */}
                    </ul>
                    <br />
                    <p>{t('opremaZaMora.pontoni.ribogojilista')}</p>
                  </div>
                </div>
              </div>

              {/* Kajaci i rekreativna oprema subsection */}
              <div
                id="kajaci-i-rekreativna-oprema"
                className="mb-6 scroll-mt-24 pl-9"
              >
                <div className="flex flex-wrap p-4">
                  <figure
                    className="p-2 cursor-pointer w-full"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image                    
                        src="https://i.postimg.cc/0N1Nqkp0/1.png"
                        fill
                        alt={t('opremaZaMora.kajaci.dvosjed')}
                        className=" hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.kajaci.dvosjed')}
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Pontoni i plutajuće 2 subsection */}
              <div
                id="pontoni-i-plutajuće-2"
                className="mb-6 scroll-mt-24 pl-9"
              >
                <div className="flex flex-wrap p-4">
                  <figure
                    className="p-2 cursor-pointer w-full"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg w-full" style={{ height: 'auto' }}>
                      <Image
                        src="https://i.postimg.cc/WpWgnn6k/7.jpg"
                        width={1200}
                        height={800}
                        alt={t('opremaZaMora.modularneKucice.title')}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.modularneKucice.title')}
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
                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/2SvWCfpQ/8.jpg"
                        fill
                        alt={t('opremaZaMora.septickeJame.title')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.septickeJame.title')}
                    </figcaption>
                  </figure>

                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[400px]">
                      <Image
                        src="https://i.postimg.cc/wT1Jbm0b/9.jpg"
                        fill
                        alt=""
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Šahte subsection */}
              <div
                id="sahte"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/s2rhX0yt/11.jpg"
                        fill
                        alt={t('opremaZaMora.vodomjernaOkna.title')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.vodomjernaOkna.title')}
                    </figcaption>
                  </figure>

                  <figure
                    className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/jdBNVS1q/10.jpg"
                        fill
                        alt={t('opremaZaMora.sahte.title')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption
                      className="mt-2 text-sm font-medium text-center"
                      itemProp="caption"
                    >
                      {t('opremaZaMora.sahte.title')}
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
      {t('urbanaOprema.title')}
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
                alt={t('urbanaOprema.klupeIKosevi.klupe')}
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(250, 0)}
                sizes="(max-width: 250px) 100vw, 250px"
                itemProp="image"
              />
            </div>
            <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
              {t('urbanaOprema.klupeIKosevi.klupe')}
            </figcaption>
            <div className="mt-2 text-left">
              {t('urbanaOprema.klupeIKosevi.description1')}
            </div>
          </figure>
        </div>
      </div>

      {/* Urbana oprema 2 subsection */}
      <div
        id="urbana-oprema2"
        className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
      >
        <div className="flex flex-wrap p-4">
          <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
            <div className="relative overflow-hidden rounded-lg h-[900px]">
              <Image
                src="https://i.postimg.cc/GhVYFPsK/1.jpg"
                fill
                alt={t('urbanaOprema.klupeIKosevi.kosevi')}
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(400, 0)}
                sizes="(max-width: 400px) 100vw, 400px"
                itemProp="image"
              />
            </div>
            <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
              {t('urbanaOprema.klupeIKosevi.kosevi')}
            </figcaption>
          </figure>
          <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
              <div className="relative overflow-hidden rounded-lg h-[900px]">
                <Image
                  src="https://i.postimg.cc/fTJmSqkk/2.jpg"
                  fill
                  alt={t('urbanaOprema.klupeIKosevi.kosevi')}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 0)}
                  sizes="(max-width: 400px) 100vw, 400px"
                  itemProp="image"
                />
              </div>                    
            </figure>
            <div className="mt-2 text-left px-4">
              <p>{t('urbanaOprema.klupeIKosevi.description2')}</p>
              <p>{t('urbanaOprema.klupeIKosevi.description3')}</p>
            </div>
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
                  alt={t('urbanaOprema.klupeIKosevi.klupe')}
                  className="hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(250, 0)}
                  sizes="(max-width: 250px) 100vw, 250px"
                  itemProp="image"
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                {t('urbanaOprema.klupeIKosevi.klupe')}
              </figcaption>
            </figure>
            <div className="mt-2 text-left px-4">
              <strong>{t('urbanaOprema.klupeIKosevi.description4')}</strong>
              <p>{t('urbanaOprema.klupeIKosevi.description5')}</p>
            </div>
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
                  alt={t('urbanaOprema.klupeIKosevi.kosevi')}
                  className="hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(250, 0)}
                  sizes="(max-width: 250px) 100vw, 250px"
                  itemProp="image"
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                <strong>{t('urbanaOprema.klupeIKosevi.kosevi')}</strong>
              </figcaption>
            </figure>
            <div className="mt-2 text-left px-4">
              <p>{t('urbanaOprema.klupeIKosevi.description6')}</p>
              <p>{t('urbanaOprema.klupeIKosevi.description7')}</p>
            </div>
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
                  alt={t('urbanaOprema.kandableri.title')}
                  className="hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(250, 0)}
                  sizes="(max-width: 250px) 100vw, 250px"
                  itemProp="image"
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                {t('urbanaOprema.kandableri.title')}
              </figcaption>
            </figure>
            <div className="mt-2 text-left px-4">
              <p>{t('urbanaOprema.kandableri.description')}</p>
            </div>
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
                  alt={t('urbanaOprema.paviljon.title')}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(250, 0)}
                  sizes="(max-width: 250px) 100vw, 250px"
                  itemProp="image"
                  style={{ objectPosition: "60% 43%" }} 
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                {t('urbanaOprema.paviljon.title')}
              </figcaption>
            </figure>
            <div className="mt-2 text-left px-4">
              <p>{t('urbanaOprema.paviljon.description')}</p>
            </div>
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
                  alt={t('urbanaOprema.stalciZaBicikle.title')}
                  className="hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(250, 0)}
                  sizes="(max-width: 250px) 100vw, 250px"
                  itemProp="image"
                  style={{ objectPosition: "50% 43%" }} 

                />
              </div>
              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                {t('urbanaOprema.stalciZaBicikle.title')}
              </figcaption>
            </figure>
            <div className="mt-2 text-left px-4">
              <p>{t('urbanaOprema.stalciZaBicikle.description')}</p>
            </div>
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
              {t('opremaZaGradevinarstvo.title')}
            </h2>
            <div className="space-y-4">
              {/* Tuneli za šutu subsection */}
              <div
                id="tuneliZaSutu"
                className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
              >
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[1000px]">
                      <Image
                        src="https://i.postimg.cc/fLg7XwTV/0.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.tuneliZaSutu.polazniDio')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.tuneliZaSutu.polazniDio')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[1000px]">
                      <Image
                        src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.tuneliZaSutu.nosacUsipnogElementa')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.tuneliZaSutu.nosacUsipnogElementa')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[600px]">
                      <Image
                        src="https://i.postimg.cc/T2Fq3Y4S/2.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.tuneliZaSutu.nosacDizalice')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 400px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.tuneliZaSutu.nosacDizalice')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[900px]">
                      <Image
                        src="https://i.postimg.cc/t4H3FvyN/3.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.tuneliZaSutu.cijevi')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw,400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.tuneliZaSutu.cijevi')}
                    </figcaption>
                  </figure>
                  <div className="mt-2 text-left px-4">
                    <p>{t('opremaZaGradevinarstvo.tuneliZaSutu.opis1')}</p>
                    <p>{t('opremaZaGradevinarstvo.tuneliZaSutu.opis2')}</p>
                    <p>{t('opremaZaGradevinarstvo.tuneliZaSutu.opis3')}</p>
                  </div>
                </div>
              </div>

              {/* Septička jama subsection */}
              <div id="septickaJama" className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4">
                <div className="flex flex-wrap p-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/ncmKjf8L/4.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.septickaJama.septickaJama')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.septickaJama.septickaJama')}
                    </figcaption>
                    <div className="mt-3 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <p className="font-semibold">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.a')}</p>                          
                        <p className="ml-20">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.a1')}</p>
                        <p className="ml-20">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.a2')}</p>
                        <p className="ml-20">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.a3')}</p>
                        <p className="mt-2">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.a4')}</p>
                      </div>
                      <br/>
                      <div>
                        <p className="font-semibold">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.b')}</p>                                                                              
                      </div>                      
                      <br/>
                      <div>
                        <p className="font-semibold">{t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.c')}</p>                                                    
                      </div>
                      <p className="mt-3">
                        {t('opremaZaGradevinarstvo.septickaJama.septickaJamaOpis.d')}
                      </p>
                    </div>
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
                        className="hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.septickaJama2.vodomjernoOkno')}
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
                    <div className="relative overflow-hidden rounded-lg h-[800px]">
                      <Image
                        src="https://i.postimg.cc/mDrNtcRx/6.jpg"
                        fill
                        alt={t('opremaZaGradevinarstvo.vodomjernoOkno.vodomjernoOkno')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('opremaZaGradevinarstvo.vodomjernoOkno.vodomjernoOkno')}
                    </figcaption>
                  </figure>
                  
                  <figure className="p-2 cursor-pointer w-full sm:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[500px]">
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
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-left">
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('opremaZaGradevinarstvo.vodomjernoOkno.namjenaTitle')}</h3>
                <p className="mb-4 text-gray-700 ml-10">
                  {t('opremaZaGradevinarstvo.vodomjernoOkno.namjenaOpis')}
                </p>
                <br/>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('opremaZaGradevinarstvo.vodomjernoOkno.tehnickeKarakteristikeTitle')}</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1 ml-10">
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.tehnickeKarakteristike.visina')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.tehnickeKarakteristike.duzina')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.tehnickeKarakteristike.sirina')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.tehnickeKarakteristike.boja')}</li>
                </ul>
                <br/>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacijaTitle')}</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 ml-10">
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacija.ploca')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacija.spojnice')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacija.ventili')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacija.vodomjer')}</li>
                  <li>{t('opremaZaGradevinarstvo.vodomjernoOkno.instalacija.termoPoklopac')}</li>
                </ul>
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
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-green-700 italic" itemProp="name">
              {t('rotoLjev.plasticProducts')}
            </h2>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-yellow-500" itemProp="name">
              {t('rotoLjev.title')}
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap p-4">
                <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <Image
                      src="https://i.postimg.cc/nLC1WNWb/4.jpg"
                      fill
                      alt=""
                      className="hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={generateBlurPlaceholder(250, 0)}
                      sizes="(max-width: 250px) 100vw, 250px"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                    {t('rotoLjev.productDescription')}
                  </figcaption>
                </figure>
              </div>
              {/* Kače subsection */}
              <div
                id="kace"
                className="mb-6 scroll-mt-24"
              >
                <div className="space-y-4">
                  {/* 1) KACE image on left, formatted text (table) on right */}
                  <div className="flex flex-wrap p-4 items-start">
                    {/* Left: KACE image */}
                    <figure className="p-2 w-full sm:w-1/2 md:w-1/3" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/R0ysTY7D/0.png"
                          fill
                          alt={t('rotoLjev.kace.title')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('rotoLjev.kace.title')}
                      </figcaption>
                    </figure>

                    {/* Right: formatted text/table */}
                    <div className="mt-2 w-full sm:w-1/2 md:w-2/3 text-sm text-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{t('rotoLjev.kace.volume')}</h3>
                      <table className="table-auto w-full text-left text-sm">
                        <thead>
                          <tr>
                            <th className="px-2 py-1">VOLUMEN</th>
                            <th className="px-2 py-1">A (mm)</th>
                            <th className="px-2 py-1">B (mm)</th>
                            <th className="px-2 py-1">C (mm)</th>
                            <th className="px-2 py-1">D (kom)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-2 py-1">60</td>
                            <td className="px-2 py-1">324</td>
                            <td className="px-2 py-1">630</td>
                            <td className="px-2 py-1">714</td>
                            <td className="px-2 py-1">466</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">100</td>
                            <td className="px-2 py-1">420</td>
                            <td className="px-2 py-1">670</td>
                            <td className="px-2 py-1">770</td>
                            <td className="px-2 py-1">520</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">200</td>
                            <td className="px-2 py-1">580</td>
                            <td className="px-2 py-1">676</td>
                            <td className="px-2 py-1">776</td>
                            <td className="px-2 py-1">720</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">300</td>
                            <td className="px-2 py-1">580</td>
                            <td className="px-2 py-1">995</td>
                            <td className="px-2 py-1">1100</td>
                            <td className="px-2 py-1">720</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2) Two images side by side, text (table) below with title "POSUDE ZA VINO" */}
                  <div id="posude-za-vino" className="p-4">
                    <div className="flex flex-wrap">
                      {/* First image */}
                      <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[1000px]">
                          <Image
                            src="https://i.postimg.cc/0yZtFY2m/30.jpg"
                            fill
                            alt={t('rotoLjev.wineContainers')}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>
                      {/* Second image */}
                      <figure className="p-2 w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[900px]">
                          <Image
                            src="https://i.postimg.cc/hPTKry8W/1.jpg"
                            fill
                            alt={t('rotoLjev.wineContainers')}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>
                      <figcaption className="text-sm font-medium text-center" itemProp="caption">
                        {t('rotoLjev.wineContainers')}
                      </figcaption>
                    </div>

                      {/* Text below */}
                      <div className="mt-4 text-sm text-gray-700">          
                        <table className="table-auto w-full text-left text-sm">
                          <thead>
                            <tr>
                              <th className="px-2 py-1">VOLUMEN</th>
                              <th className="px-2 py-1">A (mm)</th>
                              <th className="px-2 py-1">B (mm)</th>
                              <th className="px-2 py-1">C (mm)</th>
                              <th className="px-2 py-1">D (kom)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="px-2 py-1">60</td>
                              <td className="px-2 py-1">324</td>
                              <td className="px-2 py-1">630</td>
                              <td className="px-2 py-1">714</td>
                              <td className="px-2 py-1">466</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-2 py-1">100</td>
                              <td className="px-2 py-1">420</td>
                              <td className="px-2 py-1">670</td>
                              <td className="px-2 py-1">770</td>
                              <td className="px-2 py-1">520</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-2 py-1">200</td>
                              <td className="px-2 py-1">580</td>
                              <td className="px-2 py-1">676</td>
                              <td className="px-2 py-1">776</td>
                              <td className="px-2 py-1">720</td>
                            </tr>
                            <tr className="border-t">
                              <td className="px-2 py-1">300</td>
                              <td className="px-2 py-1">580</td>
                              <td className="px-2 py-1">995</td>
                              <td className="px-2 py-1">1100</td>
                              <td className="px-2 py-1">720</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  {/* 3) Single image left, text on right (Volumen, Dužina, Širina, Visina, Otvor, Ispust) */}
                  <div id="rezervoari-roto" className="flex flex-wrap p-4 items-start">
                    {/* Left: image */}
                    <figure className="p-2 w-full sm:w-1/3 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[250px]">
                        <Image
                          src="https://i.postimg.cc/7ZqsKsDw/31.jpg"
                          fill
                          alt={t('rotoLjev.reservoirs.1000L')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('rotoLjev.reservoirs.1000L')}
                      </figcaption>
                    </figure>

                    {/* Right: text/table */}
                    <div className="mt-2 w-full sm:w-2/3 md:w-3/4 text-sm text-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{t('rotoLjev.reservoirs.technicalSpecs')}</h3>
                      <table className="table-auto w-full text-left text-sm">
                        <thead>
                          <tr>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.volume')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.length')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.width')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.height')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.opening')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.reservoirs.tableHeaders.outlet')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-2 py-1">1000</td>
                            <td className="px-2 py-1">1150</td>
                            <td className="px-2 py-1">950</td>
                            <td className="px-2 py-1">1000</td>
                            <td className="px-2 py-1">fi 160</td>
                            <td className="px-2 py-1">2"</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4) Image left and text (table) right for URL CKPQBj3Y */}
                  <div id="posude-roto-ljev" className="flex flex-wrap items-start p-4">
                    {/* Left: image */}
                    <figure className="p-2 w-full sm:w-1/3 md:w-1/4" itemScope itemType="https://schema.org/ImageObject">
                      <div className="relative overflow-hidden rounded-lg h-[200px]">
                        <Image
                          src="https://i.postimg.cc/CKPQBj3Y/20.jpg"
                          fill
                          alt={t('rotoLjev.rotoCastContainers')}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={generateBlurPlaceholder(250, 0)}
                          sizes="(max-width: 250px) 100vw, 250px"
                          itemProp="image"
                        />
                      </div>
                      <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                        {t('rotoLjev.rotoCastContainers')}
                      </figcaption>
                    </figure>

                    {/* Right: text/table */}
                    <div className="mt-2 w-full sm:w-2/3 md:w-3/4 text-sm text-gray-700">
                      <h3 className="text-lg font-semibold mb-2">{t('rotoLjev.kace.dimensions')}</h3>
                      <table className="table-auto w-full text-left text-sm">
                        <thead>
                          <tr>
                            <th className="px-2 py-1">{t('rotoLjev.kace.tableHeaders.volume')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.kace.tableHeaders.a')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.kace.tableHeaders.b')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.kace.tableHeaders.c')}</th>
                            <th className="px-2 py-1">{t('rotoLjev.kace.tableHeaders.d')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-2 py-1">60</td>
                            <td className="px-2 py-1">324</td>
                            <td className="px-2 py-1">630</td>
                            <td className="px-2 py-1">714</td>
                            <td className="px-2 py-1">466</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">100</td>
                            <td className="px-2 py-1">420</td>
                            <td className="px-2 py-1">670</td>
                            <td className="px-2 py-1">770</td>
                            <td className="px-2 py-1">520</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">200</td>
                            <td className="px-2 py-1">580</td>
                            <td className="px-2 py-1">676</td>
                            <td className="px-2 py-1">776</td>
                            <td className="px-2 py-1">720</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-2 py-1">300</td>
                            <td className="px-2 py-1">580</td>
                            <td className="px-2 py-1">995</td>
                            <td className="px-2 py-1">1100</td>
                            <td className="px-2 py-1">720</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* ŠAHTE ZA VODOMJERE subsection */}
                  <div
                    id="sahte-za-vodomjere"
                    className="mb-6 scroll-mt-24"
                  >
                    <div className="flex flex-wrap p-4">
                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[730px]">
                          <Image
                            src="https://i.postimg.cc/MGKLpsrd/18.jpg"
                            fill
                            alt={`${t('rotoLjev.waterMeterChambers')} – slika 1`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>

                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[730px]">
                          <Image
                            src="https://i.postimg.cc/vm3v2bhv/8.jpg"
                            fill
                            alt={`${t('rotoLjev.waterMeterChambers')} – slika 2`}
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

                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.waterMeterChambers')}
                    </figcaption>
                  </div>

                  {/* ŠAHTE / PJESKOLOVI / MASTOLOVI subsection */}
                  <div
                    id="sahte-pjeskolovi-mastolovi"
                    className="mt-8 mb-6 scroll-mt-24 pt-4"
                  >
                    <div className="flex flex-wrap p-4">
                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[730px]">
                          <Image
                            src="https://i.postimg.cc/MGKLpsrd/18.jpg"
                            fill
                            alt={`${t('rotoLjev.chambersSandGreaseTraps')} – slika 1`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>

                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[690px]">
                          <Image
                            src="https://i.postimg.cc/rmsNv3Y2/9.jpg"
                            fill
                            alt={`${t('rotoLjev.chambersSandGreaseTraps')} – slika 2`}
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

                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.chambersSandGreaseTraps')}
                    </figcaption>
                  </div>

                  {/* ŠAHTE ZA KANALIZACIJU / SEPTIČKE JAME subsection */}
                  <div
                    id="sahte-kanalizacija-septicke-jame"
                    className="mt-8 mb-6 scroll-mt-24 pt-4"
                  >
                    <div className="flex flex-wrap p-4">
                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[730px]">
                          <Image
                            src="https://i.postimg.cc/MGKLpsrd/18.jpg"
                            fill
                            alt={`${t('rotoLjev.sewageSepticChambers')} – slika 1`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>

                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[630px]">
                          <Image
                            src="https://i.postimg.cc/qMyjvyrx/10.jpg"
                            fill
                            alt={`${t('rotoLjev.sewageSepticChambers')} – slika 2`}
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

                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.sewageSepticChambers')}
                    </figcaption>
                  </div>

                  {/* REZERVOARI ZA PRSKALICE 400 i 600 L / ATOMIZERE 400 i 600 L subsection */}
                  <div
                    id="rezervoari-prskalice-atomizere"
                    className="mt-8 mb-6 scroll-mt-24"
                  >
                    <div className="flex flex-wrap p-4">
                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[350px]">
                          <Image
                            src="https://i.postimg.cc/dVFXzQRM/15.jpg"
                            fill
                            alt={`${t('rotoLjev.sprayerTanks')} – slika 1`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(250, 0)}
                            sizes="(max-width: 250px) 100vw, 250px"
                            itemProp="image"
                          />
                        </div>
                      </figure>

                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[350px]">
                          <Image
                            src="https://i.postimg.cc/YqYZnLWf/14.jpg"
                            fill
                            alt={`${t('rotoLjev.sprayerTanks')} – slika 2`}
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

                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.sprayerTanks')}
                    </figcaption>
                  </div>

                  {/* SPREMNIK */}
                  <div
                    id="spremnik1000L"
                    className="mt-8 mb-6 scroll-mt-24"
                  >
                    <div className="flex flex-wrap p-4">
                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[900px]">
                          <Image
                            src="https://i.postimg.cc/PxCFmCHD/21.jpg"
                            fill
                            alt={`${t('rotoLjev.storageTank')} – slika 1`}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(500, 0)}
                            sizes="(max-width: 250px) 100vw, 500px"
                            itemProp="image"
                          />
                        </div>
                      </figure>

                      <figure className="p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                        <div className="relative overflow-hidden rounded-lg h-[900px]">
                          <Image
                            src="https://i.postimg.cc/3NpSczdJ/22.jpg"
                            fill
                            alt={`${t('rotoLjev.storageTank')} – slika 2`}
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

                    <figcaption className="text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.storageTank')}
                    </figcaption>
                  </div>
                </div>
              </div>                          
              {/* Prskalice 400600L subsection */}
              <div
                id="prskalice400600L"
                className="mt-8 mb-6 scroll-mt-24"
              >
                <div className="flex flex-wrap p-4 mt-4">
                  <figure className="p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/T2Fq3Y4S/2.jpg"
                        fill
                        alt={t('rotoLjev.irrigationPipes')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.irrigationPipes')}
                    </figcaption>
                  </figure>

                  <figure className="mt-4 p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[800px]">
                      <Image
                        src="https://i.postimg.cc/fLg7XwTV/0.jpg"
                        fill
                        alt={t('rotoLjev.pipeLiftingWinch')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 500px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.pipeLiftingWinch')}
                    </figcaption>
                  </figure>
                  
                  <figure className="mt-4 p-2 cursor-pointer w-full sm:w-1/2 md:w-1/2" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg h-[800px]">
                      <Image
                        src="https://i.postimg.cc/8c2hKtvD/1.jpg"
                        fill
                        alt={t('rotoLjev.inletElement')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(400, 0)}
                        sizes="(max-width: 250px) 100vw, 400px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.inletElement')}
                    </figcaption>
                  </figure>

                  <figure id="plasticne-barijere" className="mt-4 p-2 cursor-pointer w-full" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative overflow-hidden rounded-lg aspect-square">
                      <Image
                        src="https://i.postimg.cc/RCj2LLNZ/16.jpg"
                        fill
                        alt={t('rotoLjev.plasticBarriers')}
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={generateBlurPlaceholder(250, 0)}
                        sizes="(max-width: 250px) 100vw, 250px"
                        itemProp="image"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                      {t('rotoLjev.plasticBarriers')}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          </article>          
        </div>
      </div>
    </>
  );
}