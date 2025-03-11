"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success message
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Kontakt obrazac */}
        <div className="w-full max-w-lg">
          <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border-industrial-blue/10">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-industrial-blue">Pošaljite nam poruku</CardTitle>
              <CardDescription>Ispunite obrazac ispod i javit ćemo vam se što je prije moguće.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md text-center">
                  Hvala vam na poruci! Javit ćemo vam se uskoro.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vaše ime</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Unesite vaše ime"
                      required
                      className="bg-white"
                    />
                  </div>
    
                  <div className="space-y-2">
                    <Label htmlFor="email">Email adresa</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Unesite vaš email"
                      required
                      className="bg-white"
                    />
                  </div>
    
                  <div className="space-y-2">
                    <Label htmlFor="subject">Predmet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="O čemu se radi?"
                      required
                      className="bg-white"
                    />
                  </div>
    
                  <div className="space-y-2">
                    <Label htmlFor="message">Poruka</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Unesite vašu poruku"
                      className="min-h-[150px] bg-white"
                      required
                    />
                  </div>
    
                  <Button
                    type="submit"
                    className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Šaljem..." : "Pošalji poruku"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>        
      </div>
    )
}

