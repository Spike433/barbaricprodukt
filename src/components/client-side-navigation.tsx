"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import {useTranslations} from 'next-intl';

export default function ClientSideNavigation() {
  const t = useTranslations('Navigation');
  
  const sections = [
    {
      id: "celicneKonstrukcije",
      title: t('steelStructures.title'),
      subheaders: [
        { id: "montazne-hale", title: t('steelStructures.subheaders.assemblyHalls') },
        { id: "panoramsko-dizalo", title: t('steelStructures.subheaders.panoramicLift') },
        { id: "stakleneILimeneFasade", title: t('steelStructures.subheaders.glassMetalFacades') },
        { id: "ogradeIPodovi", title: t('steelStructures.subheaders.fencesFloors') },
        { id: "kuce", title: t('steelStructures.subheaders.houses') },
        { id: "pontoniKatamarani", title: t('steelStructures.subheaders.pontoonsCatamarans') }
      ]
    },
    {
      id: "aluPvcStolarija",
      title: t('aluminumPvcJoinery.title'),
      subheaders: [
        { id: "segmentnaPodiznaVrata", title: t('aluminumPvcJoinery.subheaders.doors') },
        { id: "prozori", title: t('aluminumPvcJoinery.subheaders.windows') }
      ]
    },
    {
      id: "industrijskaOprema",
      title: t('industrialEquipment.title'),
      subheaders: [
        { id: "inoxArmature", title: t('industrialEquipment.subheaders.inoxValves') },
        { id: "ventili", title: t('industrialEquipment.subheaders.butterflyValves') },
        { id: "filteriIzmjenjivaci", title: t('industrialEquipment.subheaders.filtersExchangers') },
        { id: "spojkeAktuatori", title: t('industrialEquipment.subheaders.couplingsActuators') },
        { id: "generalniPopravak", title: t('industrialEquipment.subheaders.equipmentRepair') },
        { id: "cijevniSustavi", title: t('industrialEquipment.subheaders.pipeSystems') },
        { id: "parkiralistaKugli", title: t('industrialEquipment.subheaders.ballParking') },
        { id: "rezervoari", title: t('industrialEquipment.subheaders.tanks') },
        { id: "rezervoari2", title: t('industrialEquipment.subheaders.rubberizedTanks') },
        { id: "rezervoari4", title: t('industrialEquipment.subheaders.gratingStairs') },
        { id: "postrojenja3", title: t('industrialEquipment.subheaders.processingPlants') },
        { id: "postrojenja2", title: t('industrialEquipment.subheaders.steelRubberTanks') },
        { id: "zastitaZupcanika", title: t('industrialEquipment.subheaders.gearProtection') },
        { id: "rashladnaJedinica", title: t('industrialEquipment.subheaders.coolingUnit') },
        { id: "transporteri1", title: t('industrialEquipment.subheaders.materialConveyors') },
        { id: "kranskeSine", title: t('industrialEquipment.subheaders.craneRails') },
        { id: "dijeloviMackeKrana", title: t('industrialEquipment.subheaders.craneParts') },
      ]
    },
    {
      id: "gumiraniIplastificiraniProizvodi",
      title: t('rubberizedPlasticizedProducts.title'),
      subheaders: [
        { id: "gumirani-membranski-ventili", title: t('rubberizedPlasticizedProducts.subheaders.rubberValves') },
        { id: "gumirane-cijevi", title: t('rubberizedPlasticizedProducts.subheaders.rubberPipes') },
        { id: "gumirani-celikni-spremnici", title: t('rubberizedPlasticizedProducts.subheaders.steelTanks') },
        { id: "gumirani-celikni-anionski-i-kationski-izmjenjivaci", title: t('rubberizedPlasticizedProducts.subheaders.exchangers') }
      ]
    }, 
    {
      id: "opremaZaMore",
      title: t('marineEquipment.title'),
      subheaders: [
        {
          id: "pontoni-i-plutajuće-platforme-1",
          title: t('marineEquipment.subheaders.pontoonSize')
        },
        {
          id: "pontoni-i-plutajuće-platforme-2",
          title: t('marineEquipment.subheaders.sunbathingModules')
        },
        {
          id: "pontoni-i-plutajuće-platforme",
          title: t('marineEquipment.subheaders.pontoonsDescription')
        },
        {
          id: "kajaci-i-rekreativna-oprema",
          title: t('marineEquipment.subheaders.kayaksEquipment')
        },
        {
          id: "pontoni-i-plutajuće-2",
          title: t('marineEquipment.subheaders.modularCabins')
        },
        {
          id: "vodomjerna-okna",
          title: t('marineEquipment.subheaders.waterGauges')
        },
        {
          id: "sahte",
          title: t('marineEquipment.subheaders.manholes')
        }
      ]
    },
    {
      id: "urbanaOprema",
      title: t('urbanEquipment.title'),
      subheaders: [
        {
          id: "urbana-oprema-klupe-i-kosevi-za-parkove",
          title: t('urbanEquipment.subheaders.parkBenches'),
        },
        {
          id: "urbana-oprema2",
          title: t('urbanEquipment.subheaders.wasteBinA1'),
        },
        { id: "urbana-oprema3", title: t('urbanEquipment.subheaders.benchC') },
        {
          id: "urbana-oprema4",
          title: t('urbanEquipment.subheaders.wasteBinC1'),
        },
        { id: "urbana-oprema-5", title: t('urbanEquipment.subheaders.bollards') },
        { id: "urbana-5", title: t('urbanEquipment.subheaders.pavilion') },
        {
          id: "urbana5",
          title: t('urbanEquipment.subheaders.bikeStands'),
        },
      ],
    }, 
    {
      id: "opremaZaGradevinarstvo",
      title: t('constructionEquipment.title'),
      subheaders: [
        { id: "tuneliZaSutu", title: t('constructionEquipment.subheaders.concreteTunnels') },
        {
          id: "septickaJama",
          title: t('constructionEquipment.subheaders.septicTanks'),
        },
        { id: "septickaJama2", title: t('constructionEquipment.subheaders.plasticWaterGauge') },
        { id: "vodomjernoOkno", title: t('constructionEquipment.subheaders.waterGaugeSpecs') },
      ],
    },
    {
      id: "strojeviZaPoljoprivreduIVocarstvo",
      title: t('plasticProducts.title'),
      subheaders: [
        { id: "kace", title: t('plasticProducts.subheaders.barrels') },
        { id: "posude-za-vino", title: t('plasticProducts.subheaders.wineContainers') },
        { id: "rezervoari-roto", title: t('plasticProducts.subheaders.tanks1000L') },
        { id: "posude-roto-ljev", title: t('plasticProducts.subheaders.rotoMoldContainers') },
        { id: "sahte-za-vodomjere", title: t('plasticProducts.subheaders.waterMeterManholes') },
        { id: "sahte-pjeskolovi-mastolovi", title: t('plasticProducts.subheaders.sandOilTraps') },
        { id: "sahte-kanalizacija-septicke-jame", title: t('plasticProducts.subheaders.sewerManholes') },
        { id: "rezervoari-prskalice-atomizere", title: t('plasticProducts.subheaders.sprayerTanks') },
        { id: "spremnik1000L", title: t('plasticProducts.subheaders.tankWithPump') },
        { id: "prskalice400600L", title: t('plasticProducts.subheaders.concretePipes') },
        { id: "plasticne-barijere", title: t('plasticProducts.subheaders.plasticBarriers') }
      ]
    }
  ]

  const [collapsedSections, setCollapsedSections] = useState<{ [key: string]: boolean }>(() => {
    return sections.reduce((acc, section) => {
      if (section.subheaders && section.subheaders.length > 0) acc[section.id] = true
      return acc
    }, {} as { [key: string]: boolean })
  })

  const scrollToSection = (id: string, subId: string | null = null) => {
    const element = document.getElementById(subId || id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 200,
        behavior: "smooth",
      })
    }
  }

  const toggleCollapse = (id: string) => {
    setCollapsedSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="w-full sticky top-20 z-10 h-fit">
      <div className="p-6 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-medium mb-6 pb-2 border-b border-industrial-steel/20 text-left">{t('content')}</h3>
        <nav className="space-y-1 text-left" aria-label="Page navigation">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => {
                  scrollToSection(section.id)
                  if (section.subheaders && section.subheaders.length > 0) {
                    toggleCollapse(section.id)
                  }
                }}
                className="flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted text-left text-muted-foreground"
              >
                {section.subheaders && section.subheaders.length > 0 && (
                  <span className="mr-2">
                    {collapsedSections[section.id] ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                )}
                <span className="ml-1">{section.title}</span>
              </button>

              {!collapsedSections[section.id] && section.subheaders && section.subheaders.length > 0 && (
                <div className="mt-1 ml-4 space-y-1">
                  {section.subheaders.map((subheader) => (
                    <button
                      key={subheader.id}
                      onClick={() => scrollToSection(section.id, subheader.id)}
                      className="flex items-center w-full px-3 py-1.5 text-xs rounded-md transition-colors hover:bg-muted text-left text-muted-foreground"
                    >
                      <span className="mr-2">-</span>
                      <span className="ml-1">{subheader.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}