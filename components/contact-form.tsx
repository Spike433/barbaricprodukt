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
        {/* Informacije o tvrtki */}
        <div className="w-full max-w-xl mb-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SIkE1iKtjUIZEdiNFuJ5AcRdJA8HlJ.png"
              alt="Barbarić Produkt Logo"
              width={200}
              height={100}
              className="mb-6"
              priority
            />
            <h1 className="text-3xl font-bold text-industrial-blue">BARBARIĆ PRODUKT</h1>
            <p className="text-muted-foreground">d.o.o. za proizvodnju, trgovinu i usluge</p>
          </div>
    
          <Card className="mt-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-industrial-blue/10">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-industrial-blue">Kontakt informacije</CardTitle>
              <CardDescription>Slobodno nas kontaktirajte koristeći bilo koju od sljedećih metoda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-industrial-blue mt-0.5" />
                <div>
                  <p className="font-medium">Adresa:</p>
                  <p className="text-muted-foreground">Žutička ulica 30</p>
                  <p className="text-muted-foreground">Ivanić-Grad 10310</p>
                  <p className="text-muted-foreground">HRVATSKA</p>
                </div>
              </div>
    
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-industrial-blue mt-0.5" />
                <div>
                  <p className="font-medium">Telefon:</p>
                  <p className="text-muted-foreground">00385 91 282-3375</p>
                  <p className="text-muted-foreground">00385 91 200-8801</p>
                </div>
              </div>
    
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-industrial-blue mt-0.5" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:barbaricprodukt@barbaricprodukt.hr" className="text-industrial-blue hover:underline">
                    barbaricprodukt@barbaricprodukt.hr
                  </a>
                </div>
              </div>
    
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-3 text-industrial-blue mt-0.5" />
                <div>
                  <p className="font-medium">Web stranica:</p>
                  <a
                    href="http://www.barbaricprodukt.hr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-industrial-blue hover:underline"
                  >
                    www.barbaricprodukt.hr
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    
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

