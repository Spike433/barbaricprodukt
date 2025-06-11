import type { Metadata } from "next"
import ServiceCard from "@/components/service-card"
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Barbarić Produkt | Usluge",
  description: "Pregled svih usluga koje nudi Barbarić Produkt d.o.o. - zavarivanje, bravarija, strojna obrada i više.",
}

export default function ServicesPage() { 
  const t = useTranslations('ServicesPage');

  // Define service categories and their items
  const services = [
    {
      id: "bravarija",
      title: t('services.metalwork.title'),
      items: [
        {
          id: "rezanje",
          title: t('services.metalwork.cutting.title'),
          subitems: [
            { id: "cnc", title: t('services.metalwork.cutting.subitems.cnc') },
            { id: "plinsko", title: t('services.metalwork.cutting.subitems.gas') },
            { id: "plazma", title: t('services.metalwork.cutting.subitems.plasma') }
          ]
        },
        {
          id: "savijanje",
          title: t('services.metalwork.bending.title'),
          subitems: [
            { id: "kutno", title: t('services.metalwork.bending.subitems.angular') },
            { id: "kruzno", title: t('services.metalwork.bending.subitems.circular') }
          ]
        },      
        {
          id: "zavarivanje",
          title: t('services.metalwork.welding.title'),
          subitems: [
            { id: "rel", title: t('services.metalwork.welding.subitems.rel') },
            { id: "mig-mag", title: t('services.metalwork.welding.subitems.migMag') },
            { id: "tig", title: t('services.metalwork.welding.subitems.tig') },
            { id: "plinsko-zavarivanje", title: t('services.metalwork.welding.subitems.gas') }
          ]
        },
        {
          id: "pjeskarenje",
          title: t('services.metalwork.sandblasting.title'),
          items: []
        }
      ]
    },
    {
      id: "strojna-obrada",
      title: t('services.machining.title'),
      items: [
        { id: "tokarenje", title: t('services.machining.subitems.turning') },
        { id: "glodanje", title: t('services.machining.subitems.milling') },
        { id: "busenje", title: t('services.machining.subitems.drilling') },
        { id: "brusenje", title: t('services.machining.subitems.grinding') },
        { id: "stancanje", title: t('services.machining.subitems.stamping') }
      ]
    },
    {
      id: "softverska-rjesenja",
      title: t('services.software.title'),
      items: [
        { id: "web", title: t('services.software.subitems.web') },
        { id: "mobilne-aplikacije", title: t('services.software.subitems.mobile') },
        { id: "industrijski-softver", title: t('services.software.subitems.industrial') },
        { id: "automatizacija-postrojenja", title: t('services.software.subitems.automation') },
        { id: "kuce", title: t('services.software.subitems.smartHomes') }
      ]
    },  
    {
      id: "antikorozivna-zastita",
      title: t('services.antiCorrosion.title'),
      items: [
        { id: "bojanje", title: t('services.antiCorrosion.subitems.painting') },
        { id: "gumiranje", title: t('services.antiCorrosion.subitems.rubberizing') },
        { id: "plastificiranje", title: t('services.antiCorrosion.subitems.plasticizing') }
      ]
    },
    {
      id: "limarski-radovi",
      title: t('services.sheetMetal.title'),
      items: [
        {
          id: "gradevinska-limarija",
          title: t('services.sheetMetal.subitems.construction.title'),
          subitems: [
            { id: "pokrovi", title: t('services.sheetMetal.subitems.construction.subitems.roofing') },
            { id: "fasade", title: t('services.sheetMetal.subitems.construction.subitems.facades') }
          ]
        },
        { id: "izolaterska-limarija", title: t('services.sheetMetal.subitems.insulation') }
      ]
    },
    {
      id: "prerada-plasticnih-masa",
      title: t('services.plastics.title'),
      items: [
        { id: "roto-lijev", title: t('services.plastics.subitems.rotationalMolding') },
        { id: "zavarivanje-plastike", title: t('services.plastics.subitems.welding') },
        { id: "laminiranje", title: t('services.plastics.subitems.laminating') }
      ]
    },
    {
      id: "odrzavanje",
      title: t('services.maintenance.title'),
      items: []
    },    
  ];

  return (
    <main className="min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
            {t('title')}
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} items={service.items} />
            ))}
          </div>

          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-industrial-blue mb-4">{t('quote.title')}</h2>
            <p className="mb-6">
              {t('quote.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-industrial-blue/70 text-white font-medium shadow hover:from-industrial-blue/90 hover:to-primary/90 transition-colors"
              >
                {t('quote.contactForm')}
              </a>
              <a
                href="tel:+385 91 282-3375"
                className="inline-flex items-center px-6 py-3 rounded-md border border-industrial-blue/30 text-industrial-blue font-medium hover:bg-industrial-blue/5 transition-colors"
              >
                +385 91 282-3375
              </a>
              <a
                href="tel:+385 91 200-8801"
                className="inline-flex items-center px-6 py-3 rounded-md border border-industrial-blue/30 text-industrial-blue font-medium hover:bg-industrial-blue/5 transition-colors"
              >
                +385 91 200-8801
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}