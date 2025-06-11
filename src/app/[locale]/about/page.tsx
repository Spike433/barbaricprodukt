import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Factory, Calendar, Award, Lightbulb } from "lucide-react"
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: "Barbarić Produkt | O nama",
  description:
    "Obiteljska tvrtka s više od 16 godina iskustva u proizvodnji i obradi proizvoda od metala, plastike i gume.",
}

const advantageIcons = [
  <Calendar className="h-10 w-10 text-industrial-blue" />,
  <Users className="h-10 w-10 text-industrial-blue" />,
  <Factory className="h-10 w-10 text-industrial-blue" />,
  <CheckCircle className="h-10 w-10 text-industrial-blue" />,
  <Award className="h-10 w-10 text-industrial-blue" />,
  <Lightbulb className="h-10 w-10 text-industrial-blue" />,
]

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  
  return (
    <main className="min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-industrial-blue">
            {t('title')}
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          {/* Company introduction */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-industrial-blue mb-6">{t('ourStory.title')}</h2>

            <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              <span className="font-semibold text-foreground">{t('ourStory.companyName')}</span> {t('ourStory.content1')}
            </p>
            <p>{t('ourStory.content2')}</p>
            <p>{t('ourStory.content3')}</p>
          </div>
          </div>

          {/* Our advantages */}
          <h2 className="text-2xl font-bold text-industrial-blue mb-6 text-center">{t('advantages.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.raw('advantages.items').map((advantage: any, index: number) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-4">{advantageIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground flex-grow">{advantage.description}</p>
              </div>
            ))}
          </div>          

          {/* Facilities section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-industrial-blue mb-6">{t('facilities.title')}</h2>

            <div className="grid grid-cols-1 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  {t('facilities.content1')}
                </p>
                <p className="text-muted-foreground">
                  {t('facilities.content2')}
                </p>
              </div>              
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-industrial-blue/85 rounded-xl p-8 shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              {t('cta.content')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:barbaricprodukt@barbaricprodukt.com"
                className="inline-flex items-center px-6 py-3 rounded-md bg-white text-industrial-blue font-medium shadow hover:bg-gray-100 transition-colors"
              >
                {t('cta.email')}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                {t('cta.services')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}