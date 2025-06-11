"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, CheckCircle, Loader2, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { ToastContainer, toast } from "react-toastify";
import {useTranslations} from 'next-intl';

import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  name: string
  email: string  
  message: string
}

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",    
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})
  const [isMapLoaded, setIsMapLoaded] = useState(false)  
  const [isMapLoading, setIsMapLoading] = useState(true)

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const endpoint = "https://jlhyggvfdklnoxzzhxbh.supabase.co/functions/v1/send-qoretech-email-barbaricprodukt";

  useEffect(() => {
    setIsMapLoaded(true)
  }, [])

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.name.trim()) errors.name = t('form.errors.name')
    if (!formData.email.trim()) {
      errors.email = t('form.errors.email.required')
    } else if (!validateEmail(formData.email)) {
      errors.email = t('form.errors.email.invalid')
    }
    
    if (!formData.message.trim()) errors.message = t('form.errors.message')

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error(t('form.errors.recaptcha'));
      return;
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post(
        endpoint, 
        { 
          ...formData, 
          recaptcha: recaptchaValue 
        }, 
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(t('form.success'));
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current?.reset();
      } else {
        toast.error(t('form.error'));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || t('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  }

  const localhost = '6Lczy-UqAAAAAKPvkeSLeU_eU112sjBta8555L8z';
  const qoretech = '6Le4yeUqAAAAACjZxgbYgHembon8Ah2Js5wHDnhr';

  return (
    <main className="min-h-screen py-16">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
            {t('title')}
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-industrial-blue"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">{t('form.title')}</CardTitle>
                <CardDescription>{t('form.description')}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className={cn(formErrors.name && "text-destructive")}>
                      {t('form.labels.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.name')}
                      className={cn("bg-white", formErrors.name && "border-destructive")}
                    />
                    {formErrors.name && <p className="text-xs text-destructive mt-1">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className={cn(formErrors.email && "text-destructive")}>
                      {t('form.labels.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.email')}
                      className={cn("bg-white", formErrors.email && "border-destructive")}
                    />
                    {formErrors.email && <p className="text-xs text-destructive mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="message" className={cn(formErrors.message && "text-destructive")}>
                      {t('form.labels.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.message')}
                      className={cn("min-h-[150px] bg-white", formErrors.message && "border-destructive")}
                    />
                    {formErrors.message && <p className="text-xs text-destructive mt-1">{formErrors.message}</p>}
                  </div>
                  
                  <ReCAPTCHA
                    sitekey={qoretech}
                    ref={recaptchaRef}
                    size={"normal"}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-industrial-blue hover:bg-industrial-blue/50 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('form.submit.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t('form.submit.send')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-industrial-blue/10 shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-2 bg-industrial-blue"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-industrial-blue">{t('contactInfo.title')}</CardTitle>
                <CardDescription>{t('contactInfo.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
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
                    <p className="font-medium">{t('contactInfo.address.title')}</p>
                    <p className="text-muted-foreground">{t('contactInfo.address.line1')}</p>
                    <p className="text-muted-foreground">{t('contactInfo.address.line2')}</p>
                    <p className="text-muted-foreground">{t('contactInfo.address.line3')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{t('contactInfo.phone.title')}</p>
                    <a
                      href="tel:+385912823375"
                      className="text-muted-foreground hover:text-industrial-blue transition-colors"
                    >
                      {t('contactInfo.phone.number1')}
                    </a>
                    <p className="text-muted-foreground mt-1">{t('contactInfo.phone.number2')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{t('contactInfo.email.title')}</p>
                    <a
                      href="mailto:barbaric.produkt@barbaricprodukt.com"
                      className="text-industrial-blue hover:underline"
                    >
                      {t('contactInfo.email.address')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 text-industrial-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{t('contactInfo.website.title')}</p>
                    <a
                      href="http://barbaricprodukt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-industrial-blue hover:underline"
                    >
                      {t('contactInfo.website.url')}
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-gray-100 px-6 py-4 mt-auto">
                <p className="text-sm text-muted-foreground">{t('contactInfo.hours')}</p>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-200 h-[400px] relative bg-gray-100 w-full">
            {isMapLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                <Loader2 className="h-8 w-8 text-industrial-blue animate-spin mb-3" />                
              </div>
            )}
            {isMapLoaded && (
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
                onLoad={() => setIsMapLoading(false)}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}