"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Subheader = {
  id: string
  title: string
  images?: string[]
}

type Section = {
  id: string
  title: string
  content: string
  images?: string[]
  subheaders: Subheader[]
}

interface ClientSideNavigationProps {
  sections: Section[]
}

export default function ClientSideNavigation({ sections }: ClientSideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("features")
  const [activeSubheader, setActiveSubheader] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Check subheaders first
      const allSubheaders = sections.flatMap((section) =>
        section.subheaders.map((sub) => ({
          id: sub.id,
          parentId: section.id,
        })),
      )

      const subheaderElements = allSubheaders.map((sub) => ({
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

      // If no subheader is in view, check main sections
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
    handleScroll() // Call once on mount

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

  // Apply active styles to sections based on scroll position
  useEffect(() => {
    // Apply active styles to the main section
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id)
      if (sectionElement) {
        if (activeSection === section.id && !activeSubheader) {
          sectionElement.classList.add("bg-card", "shadow-sm")
        } else {
          sectionElement.classList.remove("bg-card", "shadow-sm")
        }
      }

      // Apply active styles to subheaders
      section.subheaders.forEach((subheader) => {
        const subElement = document.getElementById(subheader.id)
        if (subElement) {
          if (activeSubheader === subheader.id) {
            subElement.classList.add("bg-card", "shadow-sm", "border-l-4", "border-l-primary")
          } else {
            subElement.classList.remove("bg-card", "shadow-sm", "border-l-4", "border-l-primary")
          }
        }
      })
    })
  }, [activeSection, activeSubheader, sections])

  return (
    <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
      <div className="sticky top-24 p-6 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md">
        <h3 className="text-lg font-medium mb-6 pb-2 border-b border-industrial-steel/20">Navigacija</h3>
        <nav className="space-y-1" aria-label="Page navigation">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted",
                  activeSection === section.id && !activeSubheader
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground",
                )}
                aria-current={activeSection === section.id && !activeSubheader ? "page" : undefined}
              >
                {activeSection === section.id && !activeSubheader && <ChevronRight className="mr-1 h-4 w-4" />}
                <span className={activeSection === section.id && !activeSubheader ? "ml-1" : "ml-5"}>
                  {section.title}
                </span>
              </button>

              {/* Subheaders */}
              <div className="mt-1 ml-6 space-y-1">
                {section.subheaders.map((subheader) => (
                  <button
                    key={subheader.id}
                    onClick={() => scrollToSection(section.id, subheader.id)}
                    className={cn(
                      "flex items-center w-full px-3 py-1.5 text-xs rounded-md transition-colors hover:bg-muted",
                      activeSubheader === subheader.id
                        ? "bg-primary/5 font-medium text-primary"
                        : "text-muted-foreground",
                    )}
                    aria-current={activeSubheader === subheader.id ? "page" : undefined}
                  >
                    {activeSubheader === subheader.id && <ChevronRight className="mr-1 h-3 w-3" />}
                    <span className={activeSubheader === subheader.id ? "ml-1" : "ml-4"}>{subheader.title}</span>
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

