"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, CheckCircle, Loader2, Send } from "lucide-react"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  // Load map after component mounts to avoid SSR issues
  useEffect(() => {
    setIsMapLoaded(true)
  }, [])

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.name.trim()) errors.name = "Ime je obavezno"
    if (!formData.email.trim()) {
      errors.email = "Email je obavezan"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Unesite valjanu email adresu"
    }
    if (!formData.subject.trim()) errors.subject = "Predmet je obavezan"
    if (!formData.message.trim()) errors.message = "Poruka je obavezna"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-industrial-blue via-primary to-industrial-red bg-clip-text text-transparent">
            Kontaktirajte nas
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Slobodno nas kontaktirajte s bilo kojim pitanjima ili upitima. Naš tim će vam odgovoriti u najkraćem mogućem
            roku.
          </p>

          {/* Decorative element */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-blue to-industrial-red rounded-full"></div>
          </div>

          {/* Two cards with equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-industrial-blue to-primary"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">Pošaljite nam poruku</CardTitle>
                <CardDescription>Ispunite obrazac ispod i javit ćemo vam se što je prije moguće.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 p-6 rounded-md text-center space-y-3 animate-in fade-in-50 duration-300">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                    <h3 className="text-lg font-medium text-green-800">Poruka uspješno poslana!</h3>
                    <p className="text-green-700">Hvala vam na poruci! Javit ćemo vam se uskoro.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="name" className={cn(formErrors.name && "text-destructive")}>
                        Vaše ime
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Unesite vaše ime"
                        className={cn("bg-white", formErrors.name && "border-destructive")}
                      />
                      {formErrors.name && <p className="text-xs text-destructive mt-1">{formErrors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className={cn(formErrors.email && "text-destructive")}>
                        Email adresa
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Unesite vaš email"
                        className={cn("bg-white", formErrors.email && "border-destructive")}
                      />
                      {formErrors.email && <p className="text-xs text-destructive mt-1">{formErrors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="subject" className={cn(formErrors.subject && "text-destructive")}>
                        Predmet
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="O čemu se radi?"
                        className={cn("bg-white", formErrors.subject && "border-destructive")}
                      />
                      {formErrors.subject && <p className="text-xs text-destructive mt-1">{formErrors.subject}</p>}
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message" className={cn(formErrors.message && "text-destructive")}>
                        Poruka
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Unesite vašu poruku"
                        className={cn("min-h-[150px] bg-white", formErrors.message && "border-destructive")}
                      />
                      {formErrors.message && <p className="text-xs text-destructive mt-1">{formErrors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-industrial-blue to-primary hover:from-industrial-blue/90 hover:to-primary/90 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Šaljem...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Pošalji poruku
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-industrial-blue to-primary"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">Kontakt informacije</CardTitle>
                <CardDescription>Možete nas kontaktirati i direktno putem sljedećih kanala</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                {/* Company Image */}
                <div className="rounded-lg overflow-hidden shadow-sm h-[120px] relative mb-2 flex items-center justify-center">
                  <Image
                    src="https://i.postimg.cc/HsmzZWqq/logo.png"
                    alt="Barbarić Produkt zgrada"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-end"></div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Adresa:</p>
                    <p className="text-muted-foreground">Žutička ulica 30</p>
                    <p className="text-muted-foreground">Ivanić-Grad 10310</p>
                    <p className="text-muted-foreground">HRVATSKA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <a
                      href="tel:+385912823375"
                      className="text-muted-foreground hover:text-industrial-blue transition-colors"
                    >
                      +385 91 282-3375
                    </a>
                    <p className="text-muted-foreground mt-1">+385 91 200-8801</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a
                      href="mailto:barbaric.produkt@barbaricprodukt.com"
                      className="text-industrial-blue hover:underline"
                    >
                      barbaric.produkt@barbaricprodukt.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Web stranica:</p>
                    <a
                      href="http://barbaricprodukt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-industrial-blue hover:underline"
                    >
                      barbaricprodukt.com
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-gray-100 px-6 py-4 mt-auto">
                <p className="text-sm text-muted-foreground">Radno vrijeme: Ponedjeljak - Petak, 8:00 - 16:00</p>
              </CardFooter>
            </Card>
          </div>

          {/* Map - Full Width */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-200 h-[400px] relative bg-gray-100 w-full">
            {isMapLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7890741539917!2d16.393869!3d45.7082903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766837b35c5c4e7%3A0x6a5b7ff34a3b8d56!2sBarbaric%20Produkt%20d.o.o.!5e0!3m2!1sen!2shr!4v1648226542428!5m2!1sen!2shr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Barbarić Produkt lokacija"
                className="absolute inset-0"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-industrial-blue animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

