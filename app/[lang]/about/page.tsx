import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Factory, Calendar, Award, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Barbarić Produkt | O nama",
  description:
    "Obiteljska tvrtka s više od 16 godina iskustva u proizvodnji i obradi proizvoda od metala, plastike i gume.",
}

const advantages = [
  {
    icon: <Calendar className="h-10 w-10 text-industrial-blue" />,
    title: "16+ godina iskustva",
    description: "Dugogodišnje iskustvo u industriji osigurava kvalitetu i pouzdanost naših usluga.",
  },
  {
    icon: <Users className="h-10 w-10 text-industrial-blue" />,
    title: "Obiteljska tradicija i vrijednosti",
    description: "Poslujemo na temelju obiteljskih vrijednosti koje se temelje na povjerenju i integritetu.",
  },
  {
    icon: <Factory className="h-10 w-10 text-industrial-blue" />,
    title: "Proizvodnja od različitih materijala",
    description: "Specijalizirani smo za rad s metalom, plastikom i gumom, što nam omogućuje sveobuhvatnu uslugu.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-industrial-blue" />,
    title: "Vlastiti prostor od 800 m²",
    description: "Raspolažemo vlastitom proizvodnom halom i skladišnim prostorom za efikasnu proizvodnju.",
  },
  {
    icon: <Award className="h-10 w-10 text-industrial-blue" />,
    title: "Modernizirana mehanizacija i alati",
    description: "Kontinuirano ulažemo u najnoviju tehnologiju i alate za postizanje najboljih rezultata.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-industrial-blue" />,
    title: "Fokus na inovacije i održivost",
    description: "Posvećeni smo razvoju inovativnih rješenja uz brigu o okolišu i održivosti.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-industrial-blue">
            O nama
          </h1>

          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Upoznajte Barbarić Produkt - obiteljsku tvrtku s tradicijom izvrsnosti u proizvodnji i obradi metala,
            plastike i gume.
          </p>

          {/* Company introduction */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-industrial-blue mb-6">Naša priča</h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <span className="font-semibold text-foreground">Barbarić Produkt d.o.o.</span> je obiteljska tvrtka.
                Orijentirana na proizvodnju i obradu proizvoda od metala, plastike i gume, usluge izrade i montaže
                metalnih konstrukcija, antikorozivnu zaštitu, gumiranja i plastificiranja cjevovoda, ventila, rezervoara
                i industrijskih postrojenja.
              </p>

              <p>
                Zapošljavamo desetak djelatnika, od kvalificiranih radnika do diplomiranih inženjera, te smo u stanju
                izvoditi i najsloženije zahvate. Raspolažemo vlastitom proizvodnom halom i skladišnim prostorom na preko
                800 m² i mehanizacijom za izvođenje svih vrsta zahvata.
              </p>

              <p>
                Kroz više od 16 godina poslovanja, izgradili smo reputaciju pouzdanog partnera koji isporučuje
                visokokvalitetne proizvode i usluge. Naša stručnost u radu s različitim materijalima omogućuje nam da
                ponudimo sveobuhvatna rješenja prilagođena specifičnim potrebama naših klijenata.
              </p>
            </div>
          </div>

          {/* Our advantages */}
          <h2 className="text-2xl font-bold text-industrial-blue mb-6 text-center">Naše prednosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground flex-grow">{advantage.description}</p>
              </div>
            ))}
          </div>          

          {/* Facilities section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-industrial-blue mb-6">Naši kapaciteti</h2>

            <div className="grid grid-cols-1 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Raspolažemo vlastitom proizvodnom halom i skladišnim prostorom na preko 800 m², što nam omogućuje
                  efikasnu proizvodnju i brzu isporuku. Naša mehanizacija i alati redovito se moderniziraju kako bismo
                  održali korak s najnovijim tehnološkim dostignućima u industriji.
                </p>
                <p className="text-muted-foreground">
                  Zahvaljujući našim kapacitetima, u mogućnosti smo izvoditi i najsloženije zahvate, od izrade
                  pojedinačnih komponenti do kompletnih industrijskih postrojenja. Naša oprema uključuje najsuvremenije
                  strojeve za obradu metala, plastike i gume, što nam omogućuje preciznost i kvalitetu u svakom
                  projektu.
                </p>
              </div>              
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-industrial-blue/85 rounded-xl p-8 shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Zainteresirani ste za suradnju?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Kontaktirajte nas za više informacija o našim uslugama ili za dogovor o potencijalnoj suradnji. Naš tim
              stoji vam na raspolaganju za sva pitanja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:barbaricprodukt@barbaricprodukt.com"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-industrial-blue font-medium shadow hover:bg-gray-100 transition-colors"
            >
              Kontaktirajte nas putem maila
            </a>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Pregledajte naše usluge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

