"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

export default function ClientSideNavigation() {
  const sections = [
    {
      id: "celicneKonstrukcije",
      title: "ČELIČNE KONSTRUKCIJE",
      subheaders: [
        { id: "montazne-hale", title: "Montažne hale, hangari, garaže" },
        { id: "panoramsko-dizalo", title: "Panoramsko dizalo" },
        { id: "stakleneILimeneFasade", title: "Staklene i limene fasade" },
        { id: "ogradeIPodovi", title: "Ograde i podovi" },
        { id: "kuce", title: "Kuće" },
        { id: "pontoniKatamarani", title: "Pontoni i katamarani" }
      ]
    },
    {
      id: "aluPvcStolarija",
      title: "ALU/PVC STOLARIJA",
      subheaders: [
        { id: "segmentnaPodiznaVrata", title: "Dvokrilna, jednokrilna, automatska, segmentna podizna vrata" },
        { id: "prozori", title: "Prozori, staklene stijene, fasade od panela, staklene fasade, zimski vrtovi" }
      ]
    },
    {
      id: "industrijskaOprema",
      title: "INDUSTRIJSKA OPREMA",
      subheaders: [
        { id: "inoxArmature", title: "INOX armatura (ventili, spojnice, prijelazi)" },
        { id: "ventili", title: "Leptir ventili" },
        { id: "filteriIzmjenjivaci", title: "Filteri i izmjenjivači" },
        { id: "spojkeAktuatori", title: "Spojke i aktuatori" },
        { id: "generalniPopravak", title: "Generalni popravak opreme" },
        { id: "cijevniSustavi", title: "Cijevni sustavi i zatvarači" },
        { id: "parkiralistaKugli", title: "Parkirališta kugli i oprema" },
        { id: "rezervoari", title: "Rezervoari (benzin, kiseline, lužine)" },
        { id: "rezervoari2", title: "Gumirani rezervoari" },
        { id: "rezervoari4", title: "Podne rešetke i stubišta" },
        { id: "postrojenja3", title: "Postrojenja za preradu" },
        { id: "postrojenja2", title: "Gumirani čelični rezervoari" },
        { id: "zastitaZupcanika", title: "Zaštita zupčanika" },
        { id: "rashladnaJedinica", title: "Rashladna jedinica" },
        { id: "transporteri1", title: "Transporteri materijala" },
        { id: "kranskeSine", title: "Kranske šine i oprema" },
        { id: "dijeloviMackeKrana", title: "Dijelovi mačke krana" },
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
        <h3 className="text-lg font-medium mb-6 pb-2 border-b border-industrial-steel/20 text-left">Sadržaj</h3>
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