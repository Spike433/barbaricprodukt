"use client"

import { useState } from "react"
import { Section } from "@/app/types"
import { ChevronRight, ChevronDown } from "lucide-react"

interface ClientSideNavigationProps {
  sections: Section[]
}

export default function ClientSideNavigation({ sections }: ClientSideNavigationProps) {
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
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const toggleCollapse = (id: string) => {
    setCollapsedSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
      <div className="sticky top-24 p-6 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-medium mb-6 pb-2 border-b border-industrial-steel/20 text-left">Sadržaj</h3>
        <nav className="space-y-1 text-left" aria-label="Page navigation">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => section.subheaders && section.subheaders.length > 0 ? toggleCollapse(section.id) : scrollToSection(section.id)}
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
