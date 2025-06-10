"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import ImageLoader from "@/components/image-loader"

const sections = [
  {
    id: "features",
    title: "Features",
    content:
      "Our product comes with a wide range of features designed to make your life easier. From automated workflows to intelligent suggestions, we've got you covered.",
    image: "/placeholder.svg?height=500&width=500",
    subheaders: [
      { id: "features-automation", title: "Automation" },
      { id: "features-integration", title: "Integration" },
      { id: "features-analytics", title: "Analytics" },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content:
      "Getting started is easy! Simply sign up for an account, complete your profile, and you're ready to go. Our intuitive interface makes it simple to navigate and find what you need.",
    subheaders: [
      { id: "getting-started-signup", title: "Sign Up Process" },
      { id: "getting-started-profile", title: "Profile Setup" },
      { id: "getting-started-first-steps", title: "First Steps" },
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    content:
      "Our comprehensive documentation provides detailed information about how to use our product. Whether you're a beginner or an advanced user, you'll find the information you need.",
    image: "/placeholder.svg?height=500&width=500",
    subheaders: [
      { id: "documentation-guides", title: "User Guides" },
      { id: "documentation-api", title: "API Reference" },
      { id: "documentation-examples", title: "Examples" },
    ],
  },
]

export default function ScrollableContent() {
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
  }, [])

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
    <div className="container relative mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Barbaric Prodkt d.o.o
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our platform, features, and how to get started.
        </p>
      </div>

      {/* Featured image */}
      <div className="relative w-full h-64 md:h-96 mb-16 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=500&width=500"
          alt="Featured image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 mix-blend-multiply" />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Main content */}
        <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={cn(
                "mb-16 scroll-mt-24 rounded-xl p-6 transition-all duration-300",
                activeSection === section.id && !activeSubheader ? "bg-card shadow-sm" : "",
              )}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">{section.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                {section.subheaders.map((subheader) => (
                  <div
                    key={subheader.id}
                    id={subheader.id}
                    className={cn(
                      "mt-8 mb-6 scroll-mt-24 p-4 rounded-lg transition-all duration-300",
                      activeSubheader === subheader.id ? "bg-card shadow-sm border-l-4 border-l-primary" : "",
                    )}
                  >
                    <h3 className="text-xl font-medium mb-3">{subheader.title}</h3>
                    <p>
                      This section covers everything you need to know about {subheader.title.toLowerCase()}. We provide
                      detailed explanations and examples to help you understand and implement these concepts
                      effectively.
                    </p>
                    <p className="mt-2">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                ))}

                {section.image && (
                  <div className="my-6 rounded-lg overflow-hidden">
                    <ImageLoader
                      src={section.image || "/placeholder.svg?height=500&width=500"}
                      width={500}
                      height={500}
                      alt={`${section.title} illustration`}
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Right side navigation */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="sticky top-24 p-6 rounded-xl border bg-card shadow-sm">
            <h3 className="text-lg font-medium mb-6 pb-2 border-b">On this page</h3>
            <nav className="space-y-1">
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
      </div>
    </div>
  )
}

