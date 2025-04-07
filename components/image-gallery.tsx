// components/image-gallery.tsx
"use client"

import { Picture } from "@/app/types"
import Image from "next/image"
import { useEffect, useCallback } from "react"

interface GalleryProps {
  isOpen: boolean
  onClose: () => void
  images: Picture[]
  currentIndex: number
  navigateImages: (direction: 'prev' | 'next') => void
}

export default function ImageGallery({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  navigateImages 
}: GalleryProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowLeft') {
      navigateImages('prev')
    } else if (e.key === 'ArrowRight') {
      navigateImages('next')
    }
  }, [onClose, navigateImages])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || images.length === 0) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
        onClick={onClose}
        aria-label="Close gallery"
      >
        &times;
      </button>
      
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title above image */}
        <div className="text-white text-center py-2 rounded-t-md">
          <h1 className="text-2xl font-medium">{images[currentIndex].title}</h1>        
        </div>            
        
        {/* Image container with fixed height and rounded corners */}
        <div className="relative w-full h-[65vh] overflow-hidden rounded-md">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            fill
            className="object-contain rounded-md"
            priority
          />
        </div>
        
        {/* Description below image */}
        <div className="text-white text-center py-4 md:px-10 rounded-b-md">
          <p className="text-sm md:text-base max-h-32 overflow-y-auto mb-2 scrollbar-black">
            {images[currentIndex].description}
          </p>
          {/* Image counter moved here */}
          <div className="text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>           
        </div>
        
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          <button 
            onClick={(e) => {
              e.stopPropagation()
              navigateImages('prev')
            }}
            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              navigateImages('next')
            }}
            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  )
}
