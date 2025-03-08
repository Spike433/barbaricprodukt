"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageLoaderProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function ImageLoader({ src, alt, width, height, className, priority = false }: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Set up intersection observer to detect when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }, // Start loading when image is 200px from viewport
    )

    const element = document.getElementById(`image-${src.replace(/[^a-zA-Z0-9]/g, "-")}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <div id={`image-${src.replace(/[^a-zA-Z0-9]/g, "-")}`} className={cn("relative overflow-hidden", className)}>
      {/* Low quality placeholder */}
      {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}

      {/* Only render the image when in view or if priority is true */}
      {(isInView || priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
      )}
    </div>
  )
}

