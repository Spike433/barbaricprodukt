"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/app/types"

interface ClientSideNavigationProps {
  sections: Section[]
}

export default function ClientSideNavigation({ sections }: ClientSideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("features")
  const [activeSubheader, setActiveSubheader] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const allSubheaders = sections.flatMap((section) =>
        section?.subheaders?.map((sub) => ({
          id: sub.id,
          parentId: section.id,
        }))
      )

      const subheaderElements = allSubheaders.map((sub: any) => ({
        element: document.getElementById(sub.id),
        id: sub.id,
        parentId: sub.parentId,
      }))

      const currentSubheader = subheaderElements.find((item) => {
        if (!item.element) return false
        const rect = item.element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom > 150
      })

      if (currentSubheader) {
        setActiveSubheader(currentSubheader.id)
        setActiveSection(currentSubheader.parentId)
        return
      }

      const sectionElements = sections.map((section) => document.getElementById(section.id))

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom > 150
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
        setActiveSubheader(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  const scrollToSection = (id: string, subId: string | null = null) => {
    const element = document.getElementById(subId || id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
      setActiveSection(id)
      setActiveSubheader(subId)
    }
  }

  return (
    <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
      <div className="sticky top-24 p-6 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md">
        <h3 className="text-lg font-medium mb-6 pb-2 border-b border-industrial-steel/20 text-left">Navigacija</h3>
        <nav className="space-y-1 text-left" aria-label="Page navigation">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => scrollToSection(section.id)}
                className="flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted text-left text-muted-foreground"
              >
                <ChevronRight className="mr-1 h-4 w-4" />
                <span className="ml-1">{section.title}</span>
              </button>

              <div className="mt-1 ml-6 space-y-1">
                {section?.subheaders?.map((subheader) => (
                  <button
                    key={subheader.id}
                    onClick={() => scrollToSection(section.id, subheader.id)}
                    className="flex items-center w-full px-3 py-1.5 text-xs rounded-md transition-colors hover:bg-muted text-left text-muted-foreground"
                  >
                    <ChevronRight className="mr-1 h-3 w-3" />
                    <span className="ml-1">{subheader.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
