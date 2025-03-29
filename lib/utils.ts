import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to generate blur data URL for placeholder
export function generateBlurPlaceholder(width: number, height: number, color = "e4e4e7", borderRadius = 10): string {
  // Create a simple SVG with the specified dimensions, color, and rounded corners
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${color}" rx="${borderRadius}" ry="${borderRadius}"/>
    </svg>
  `
  // Convert SVG to base64
  const toBase64 =
    typeof window === "undefined"
      ? (str: string) => Buffer.from(str).toString("base64")
      : (str: string) => window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(svg)}`
}
