"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  // Load map after component mounts to avoid SSR issues
  useEffect(() => {
    setIsMapLoaded(true)
  }, [])

  return (
    <main className="min-h-screen py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
            Kontaktirajte nas
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Slobodno nas kontaktirajte s bilo kojim pitanjima ili upitima. Naš tim će vam odgovoriti u najkraćem mogućem
            roku.
          </p>

          {/* Two cards with equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
            {/* Company Information - Left side */}
            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-industrial-blue"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">Kontakt informacije</CardTitle>
                <CardDescription className="text-center">Možete nas kontaktirati i direktno putem sljedećih kanala</CardDescription>
                
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

            {/* Expanded Map in Card - Right side */}
            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-industrial-blue"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">Gdje se nalazimo</CardTitle>
                <CardDescription className="text-center">Detaljna lokacija našeg pogona</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-0 flex">
                <div className="h-full w-full relative bg-gray-100">
                  {isMapLoaded ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.4757019445099!2d16.402815570824625!3d45.69059789346183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47665e215d82cbe1%3A0xabf73eb7930b95bf!2sBarbari%C4%87%20produkt%20d.o.o.!5e0!3m2!1shr!2shr!4v1743333548948!5m2!1shr!2shr"
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
              </CardContent>
            </Card>
          </div>

          {/* Full Width Expanded Map - Removed since we've incorporated it into the right card */}
        </div>
      </div>
    </main>
  )
}