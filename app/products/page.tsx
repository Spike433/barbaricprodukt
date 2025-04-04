"use client"
import type { Metadata } from "next"
import Image from "next/image"
import { useState, useCallback } from "react"
import ClientSideNavigation from "@/components/client-side-navigation"
import { Section } from "../types"
import { generateBlurPlaceholder } from "../../lib/utils"

// Define sections with their content
const sections: Section[] = [
  {
    id: "celicneKonstrukcije",
    title: "Čelične konstrukcije",
    content: "Proizvodimo visokokvalitetne čelične konstrukcije prilagođene različitim industrijama. Naši proizvodi osiguravaju dugotrajnost, sigurnost i otpornost u zahtjevnim uvjetima.",    
    subheaders: [
      {
            id: "montazne-hale",
            title: "Montažne hale, hangari i garaže",
            content: "Montažne hale, hangari i garaže izrađeni su od čvrstih i otpornih materijala, prilagođeni različitim klimatskim uvjetima. Njihova modularna konstrukcija omogućava brzu montažu i prilagodbu specifičnim potrebama korisnika.",
            images: ["https://i.postimg.cc/L5CRB7ZC/1.jpg", "https://i.postimg.cc/pTktR7kW/12.jpg", "https://i.postimg.cc/CMmFgZ6G/5.jpg", "https://i.postimg.cc/4dXgCZ62/9.jpg", "https://i.postimg.cc/YS6HyjWm/11.jpg", "https://i.postimg.cc/FK5vZ074/10.jpg"]
        },        
        {
            id: "kuce",
            title: "Mobilne kuće",
            content: "",
            images: ["https://i.postimg.cc/136hf4MY/21.jpg"]
        },
        {
            id: "panoramsko-dizalo",
            title: "Panoramsko dizalo, paviljon",
            content: "",
            images: ["https://i.postimg.cc/vTHbnMDx/4.jpg", "https://i.postimg.cc/LsfZHWs1/211.jpg"]
        },
        {
            id: "stakleneILimeneFasade",
            title: "Staklene i limene fasade",
            content: "",
            images: ["https://i.postimg.cc/Bb6f6gwx/13.jpg", "https://i.postimg.cc/NfnBK3tL/7.jpg", "https://i.postimg.cc/XqzSyCTt/15.jpg"]
        },
        {
            id: "krovista",
            title: "Krovišta, krovni prozori, krovne kupole, svjetlarnici",
            content: "",
            images: ["https://i.postimg.cc/qMqpMk99/6.jpg", "https://i.postimg.cc/pTv22KHZ/2.jpg", "https://i.postimg.cc/wvk933xd/3.jpg", "https://i.postimg.cc/44LT0Dmw/14.jpg"]
        },
        {
            id: "ogradeIPodovi",
            title: "Ograde za balkone, kuće, industriju, rešetkaste zaštite za prozore i vrata",
            content: "",
            images: ["https://i.postimg.cc/WbdPc5ZV/17.jpg", "https://i.postimg.cc/8PxgpLd6/18.jpg", "https://i.postimg.cc/FKgMVqMy/20.jpg"]
        },
        //podne rešetke 
        {
            id: "podneResetke",
            title: "Podne rešetke",
            content: "",
            images: ["https://i.postimg.cc/D0Bgxqgw/16.jpg"]
        }
    ]
  },
  {
    id: "gumiraniIplastificiraniProizvodi",    
    title: "Gumirani i plastificirani čelinčni elementi za transport kiselina i lužina",
    content: "Ovi proizvodi pružaju izvanrednu otpornost na koroziju i abraziju, čineći ih idealnim za industrijske procese koji zahtijevaju visoke standarde zaštite i dugovječnosti. Naša rješenja jamče dugotrajan rad, pouzdanost i sigurnost u uvjetima agresivnih kemikalija.",    
    subheaders: [      
        {
          id: "gumirani-membranski-ventili",
          title: "Gumirani membranski, nepovratni ventili",
          content: "",
          images: ["https://i.postimg.cc/hGbTLwqq/5.jpg", "https://i.postimg.cc/NFLXwj2g/6.jpg"]
        },
        {
          id: "gumirane-cijevi",
          title: "Gumirane cijevi, koljena 90°, 45°, redukcioni elementi",
          content: "",
          images: ["https://i.postimg.cc/zf1TRN6j/2.jpg"]
        },        
        {
          id: "gumirani-celikni-spremnici",
          title: "Gumirani čelični spremnici",
          content: "",
          images: ["https://i.postimg.cc/B6mFyK6Y/4.jpg", "https://i.postimg.cc/hjDxprSQ/3.jpg"]
        },
        {
          id: "gumirani-celikni-anionski-i-kationski-izmjenjivaci",
          title: "Gumirani čelični anionski i kationski izmjenjivači",
          content: "",
          images: ["https://i.postimg.cc/4yM94Rpp/1.jpg", "https://i.postimg.cc/KcsLDBC4/7.jpg"]
        }

    ]
  },
  {
    id: "aluPvcStolarija",
    title: "Alu i PVC stolarija",
    content: "Proizvodimo vrhunsku alu i PVC stolariju, prilagođenu specifičnim potrebama različitih industrija i privatnih objekata. Naši proizvodi odlikuju se dugotrajnošću, modernim dizajnom i visokim standardima energetske efikasnosti.",
    subheaders: [        
        { 
          id: "segmentnaPodiznaVrata", 
          title: "Segmentna podizna vrata, jednokrilna, klizna, automatska vrata", 
          content: "Naša segmentna podizna vrata dizajnirana su za optimalnu sigurnost i lakoću korištenja u industrijskim, komercijalnim i privatnim objektima. Izrađujemo i jednokrilna, klizna te automatska vrata koja se prilagođavaju vašim specifičnim potrebama.", 
          images: ["https://i.postimg.cc/FzmMYJhV/4.jpg", "https://i.postimg.cc/MTykZYJG/2.jpg"] 
        },
        { 
          id: "podizneRampe", 
          title: "Podizne rampe", 
          content: "", 
          images: ["https://i.postimg.cc/m2ZxRMXb/6.jpg"] 
        },
        { 
          id: "fasade", 
          title: "Staklene fasade", 
          content: "", 
          images: ["https://i.postimg.cc/WpwRQS7W/5.jpg"] 
        },                 
        {
          id: "prozori",
          title: "Prozori, staklene stijene, fasade od panela",
          content: "",
          images: ["https://i.postimg.cc/JnwVW2gg/3.jpg"]
        },        
    ]
  },
  {
    "id": "opremaZaGradevinarstvo",
    "title": "Oprema za građevinarstvo",
    "content": "Proizvodimo inovativnu i izdržljivu opremu za građevinarstvo, uključujući napredne sisteme za transport građevinskog otpada poput tunela za šutu i specijaliziranih nosača, osiguravajući efikasnost i sigurnost na gradilištima.",
    "subheaders": [
        {
            "id": "tuneliZaSutu",
            "title": "Tuneli za šutu, polazni - usipni dio, nosač usipnog elementa",
            "content": "Naši tuneli za šutu, izrađeni od visokootpornog polietilena metodom roto ljevanja, omogućuju brzo i sigurno uklanjanje građevinskog otpada. Modularni dizajn omogućava lako povezivanje pomoću lanaca, dok nosači osiguravaju stabilnost i optimalan protok materijala bez začepljenja.",
            "images": ["https://i.postimg.cc/fLg7XwTV/0.jpg", "https://i.postimg.cc/8c2hKtvD/1.jpg"]              
        },
        {
            "id": "nosaciICijevi",
            "title": "Nosač dizalice za cijevi, cijevi za šutu",
            "content": "Prilagodljivi nosači dizalice osiguravaju sigurno i precizno postavljanje cijevi za šutu, smanjujući vibracije i rizik od oštećenja. Naše cijevi su izrađene od otpornih materijala koji podnose visoka opterećenja, omogućujući dugotrajan i nesmetan rad u svim uvjetima.",
            "images": ["https://i.postimg.cc/T2Fq3Y4S/2.jpg", "https://i.postimg.cc/t4H3FvyN/3.jpg"]
        }
    ]
  },  
  {
      "id": "industrijskaOprema",
      "title": "Industrijska oprema",
      "content": "Razvijamo i isporučujemo visokokvalitetnu industrijsku opremu, uključujući ventile, filtere, spojke, rezervoare i prilagođena rješenja za specijalizirane industrijske procese. Nudimo kompletne usluge generalnog popravka i rekonstrukcije industrijske opreme, uključujući ventile, izmjenjivače topline i bušotinske zasune. Također pružamo specijalizirane usluge vatrozaštite spremnika nafte i rehabilitaciju cjevovoda metodom PE uvlačenja.",
      "subheaders": [                      
          {
              "id": "inoxArmature",
              "title": "INOX armature",
              "content": "Proizvodimo visokokvalitetne INOX armature koje pružaju dugotrajnost i pouzdanost u zahtjevnim industrijskim uvjetima. U našoj ponudi nalaze se igličasti ventili do 700 bara, nepovratni ventili, kuglaste slavine, mazalice, boce za uzorkovanje i druge komponente izrađene prema najvišim standardima.",
              "images": ["https://i.postimg.cc/L5bPqvDL/2.jpg"]
          },    
          {
              "id": "ventili",
              "title": "Inox leptir ventili, automatski upravljan",
              "content": "",
              "images": ["https://i.postimg.cc/Zn788Jb9/25.jpg"]
          },          
          {
              "id": "hvatacIOdasiljacKugli",
              "title": "Hvatač i odašiljač kugli",
              "content": "",
              "images": ["https://i.postimg.cc/1X2gRXRK/13.jpg"]
          },          
          {
              "id": "parkiralistaKugli",
              "title": "Parkirališta kugli",
              "content": "",
              "images": ["https://i.postimg.cc/T1pLXgxw/11.jpg"]
          },
          {
              "id": "filteriIzmjenjivaci",
              "title": "Industrijski filteri (inox) i izmjenjivači",
              "content": "Naši filteri i izmjenjivači osiguravaju efikasnu filtraciju i optimalnu razmjenu topline u industrijskim postrojenjima. Proizvodimo industrijske INOX filtere, izmjenjivače topline i specijalizirane komponente koje poboljšavaju performanse i produžuju vijek trajanja sistema.",
              "images": ["https://i.postimg.cc/KzQBbmg9/1.jpg", "https://i.postimg.cc/xjxMFTQ8/3.jpg", "https://i.postimg.cc/hG178KMS/7.jpg"]
          },
          {
              "id": "spojkeAktuatori",
              "title": "Periflex spojke, aktuatori",
              "content": "Naše industrijske spojke i aktuatori osiguravaju vrhunsku kontrolu i fleksibilnost u radu mehaničkih sistema. Periflex spojke smanjuju vibracije i povećavaju pouzdanost, dok precizni aktuatori omogućuju automatizirano upravljanje industrijskim procesima.",
              "images": ["https://i.postimg.cc/fLWSB1gY/8.jpg", "https://i.postimg.cc/gkx89FcD/4.jpg", "https://i.postimg.cc/65bcRfqH/19.jpg"]
          },  
          {
            "id": "posudeZaVadjenjeCistaca",
            "title": "Posude za vađenje čistača PC",
            "content": "",
            "images": ["https://i.postimg.cc/T245J7jW/12.jpg"]
          },
          {
              "id": "cijevniSustavi",
              "title": "Cijevni zatvarači",
              "content": "",
              "images": ["https://i.postimg.cc/nzdj5T6g/10.jpg"]
          },
          {
            "id": "rezervoariGumiraniZaKiselineILuzine",
            "title": "Gumirani rezervoari za kiseline i lužine",
            "content": "",
            "images": ["https://i.postimg.cc/wxV0xppY/15.jpg"]
          } ,                         
          {
              "id": "rezervoari",
              "title": "Rezervoari za benzinske postaje, rezervoari tehnološke kanalizacije",
              "content": "",
              "images": ["https://i.postimg.cc/3wTvDkXS/9.jpg"]
          },
          {
              "id": "anionskiIKatjonskiIzmjenjivaci",
              "title": "Anionski i katjonski izmjenjivači",
              "content": "Anionski i katjonski izmjenjivači pružaju visoku učinkovitost i pouzdanost u procesima pročišćavanja vode i tretiranja otpadnih voda. Izrađeni su od kvalitetnih materijala koji osiguravaju dugotrajan rad i optimalne performanse.",
              "images": ["https://i.postimg.cc/dtVnLxsk/17.jpg"]
          },
          {
              "id": "rezervoariZaKiseline",
              "title": "Rezervoari za kiseline i lužine",
              "content": "Rezervoari za kiseline i lužine izrađeni su od visokokvalitetnih materijala koji osiguravaju sigurno skladištenje i transport agresivnih kemikalija. Prilagođeni su različitim industrijskim procesima i zahtjevima korisnika.",
              "images": ["https://i.postimg.cc/vZ1zvx6G/18.jpg"]
          },          
          {
              "id": "filteri",
              "title": "Filterska jedinica za otežanu vodu",
              "content": "",
              "images": ["https://i.postimg.cc/90WbPxyk/14.jpg",]
          },
          {
            "id": "rashladnaJedinica",
            "title": "Rashladne jedinice",
            "content": "Osiguravaju efikasno hlađenje i održavanje optimalnih temperatura u industrijskim postrojenjima. Naši proizvodi pružaju pouzdan rad i dugotrajnost, uz mogućnost prilagodbe specifičnim zahtjevima korisnika.",
            "images": ["https://i.postimg.cc/brN0SZhc/24.jpg"]
          },
          {
            "id": "segmentiZastiteZupcanika", 
            "title": "Segmenti zaštite zupčanika",
            "content": "",
            "images": ["https://i.postimg.cc/0NY7tY51/29.jpg"]
          },
          {
            "id": "zastitaZupcanika",
            "title": "Zaštita zupčanika",
            "content": "",
            "images": ["https://i.postimg.cc/RVhQMJdw/28.jpg"]
          },          
          {
            "id": "transporteri",
            "title": "Čelično gumeni transporter",
            "content": "",
            "images": ["https://i.postimg.cc/sgZYWFtX/30.jpg"]
          },
          {
            "id": "kranskeSine",
            "title": "Kranske šine, mačka krana, dijelovi mačke krana",
            "content": "Nudimo visokokvalitetne kranske šine, mačke krana i dijelove mačke krana za sve vaše potrebe.",
            "images": ["https://i.postimg.cc/sXJ92pb4/23.jpg", "https://i.postimg.cc/zBNF5d2f/20.jpg", "https://i.postimg.cc/L8rVQ4zL/21.jpg"]
          },
          {
              "id": "postrojenja",
              "title": "Postrojenje za preradu bešavnih cijevi",
              "content": "Dizajniramo i proizvodimo industrijska postrojenja za preradu bešavnih cijevi i druge ključne procese, osiguravajući visoku učinkovitost i pouzdanost proizvodnje.",
              "images": ["https://i.postimg.cc/J4F3t7Yv/27.jpg", "https://i.postimg.cc/1zhpcCQK/31.jpg", "https://i.postimg.cc/gJG81xrX/32.jpg"]
          }
      ]
  },
  {
    "id": "opremaZaMore",
    "title": "Oprema za more",
    "content": "Specijalizirani smo za proizvodnju visokokvalitetne opreme za more, uključujući pontone, staze, kajake i druge inovativne proizvode za rekreaciju i industrijsku upotrebu.",
    "subheaders": [
        { 
            "id": "oprema-za-more-pontoni", 
            "title": "Pontoni za sunčanje, katamarani, ribogojilišta, vežovi za čamce", 
            "content": "Pontoni dimenzija 2 x 4 m s plovcima 970x620x340 mm pružaju stabilnost i sigurnost na vodi. Izrađeni su od vruće cinčane čelične konstrukcije, dodatno zaštićene završnim premazom. Modularni dizajn omogućava prilagodbu za ribogojilišta, katamarane i plutajuće platforme, uz mogućnost ugradnje pedala, jedara ili motora za različite namjene.", 
            "images": ["https://i.postimg.cc/j5vNB6pB/4.jpg", "https://i.postimg.cc/C1wkvrQj/2.jpg", "https://i.postimg.cc/d02Gjc4s/3.jpg"]
        },
        { 
            "id": "oprema-za-more-kajak", 
            "title": "Kajak", 
            "content": "Kajak izrađen od visokootpornih materijala osigurava dugotrajan rad u različitim uvjetima. Ergonomski dizajn garantira udobnost, dok lagana, ali čvrsta konstrukcija omogućava lako upravljanje na rekama, jezerima i morima.", 
            "images": ["https://i.postimg.cc/TPMrb3jN/1.jpg"]
        }      
    ]
  },
  {
    "id": "strojeviZaPoljoprivreduIVocarstvo",
    "title": "Strojevi za poljoprivredu i voćarstvo",
    "content": "Proizvodimo inovativne i izdržljive strojeve za poljoprivredu i voćarstvo, uključujući prskalice, atomizere, pumpne stanice i specijalizirane rezervoare, prilagođene potrebama modernih poljoprivrednika.",
    "subheaders": [
        {
            "id": "strojevi-za-poljoprivredu-i-vocarstvo-prskalice",
            "title": "Rezervoari za prskalice i atomizere",
            "content": "Naši rezervoari za prskalice i atomizere, dostupni u kapacitetima od 400L i 600L, izrađeni su od visokokvalitetnih materijala koji osiguravaju dugotrajnost i otpornost na kemikalije. Savršeni su za precizno raspršivanje zaštitnih sredstava u voćnjacima i poljoprivrednim kulturama.",
            "images": ["https://i.postimg.cc/8sQdf5kT/12.jpg","https://i.postimg.cc/PfLBDRf7/13.jpg"]
        },
        {
            "id": "strojevi-za-poljoprivredu-i-vocarstvo-atomizeri",
            "title": "Atomizeri",
            "content": "Visokoučinkoviti atomizeri osiguravaju ravnomjernu distribuciju tekućine i optimalnu zaštitu usjeva. Zahvaljujući snažnim komponentama i preciznim mlaznicama, prilagođeni su različitim tipovima biljaka i terena.",
            "images": ["https://i.postimg.cc/YqYZnLWf/14.jpg", "https://i.postimg.cc/dVFXzQRM/15.jpg"]
        },
        {
            "id": "pumpnaStanica",
            "title": "Pumpna stanica",
            "content": "Svestrana pumpna stanica osigurava efikasno navodnjavanje, prskanje i zalijevanje, prilagođena poljoprivrednim i hortikulturnim potrebama. Sadrži spremnik kapaciteta 1000L, snažnu pumpu, motor i precizni mjerač protoka za optimalnu potrošnju vode.",
            "images": ["https://i.postimg.cc/PxCFmCHD/21.jpg", "https://i.postimg.cc/3NpSczdJ/22.jpg"]
        },
        {
            "id": "kacePosudeZaMeso",
            "title": "Kace, posude za meso i vino",
            "content": "Izrađene od visokokvalitetnog inoxa, naše kace i posude osiguravaju dugotrajnost i higijensku obradu mesa, vina i drugih namirnica. Dostupne u različitim kapacitetima (200L, 310L, 520L, 780L), prilagođene su prehrambenoj industriji i kućnoj upotrebi.",
            "images": ["https://i.postimg.cc/cJHDSvrz/32.jpg","https://i.postimg.cc/wT8bmxGt/29.jpg"]
        },
        {
            "id": "rezervoar",
            "title": "Plastični rezervoar",
            "content": "Praktični rezervoari kapaciteta 1000L izrađeni su od izdržljive plastike, idealni za skladištenje vode, goriva ili kemikalija. Njihova robustna konstrukcija omogućava siguran transport i dugoročnu upotrebu u poljoprivredi i industriji.",
            "images": ["https://i.postimg.cc/7ZqsKsDw/31.jpg"]
        }
    ]
  },            
  {
    "id": "ekoOpremaKomunalna",
    "title": "Eko oprema komunalna",
    "content": "Proizvodimo visokokvalitetnu komunalnu eko opremu, uključujući kontejnere, separatore, tankvane i specijalizirane rezervoare. Naši proizvodi su dizajnirani za dugotrajnu upotrebu i prilagođeni potrebama modernog upravljanja otpadom i resursima.",
    "subheaders": [
        {
            "id": "eko-oprema-komunalna-kontejneri",
            "title": "Komunalni i rolo kontejneri, kante za smeće",
            "content": "Otvoreni i zatvoreni kontejneri kapaciteta 5, 7 i 10 m³ izrađeni su od izdržljivih materijala za sigurno skladištenje i transport otpada. Plastične kante za smeće (60L, 100L, 200L, 300L) osiguravaju jednostavno rukovanje i dugotrajnu upotrebu u domaćinstvima i industriji.",
            "images": ["https://i.postimg.cc/Gt7NSBJd/13.jpg", "https://i.postimg.cc/CKPQBj3Y/20.jpg", "https://i.postimg.cc/GpGWhmrx/9.jpg"]
        },
        {
            "id": "kontejner-elektronski-otpad",
            "title": "Kontejner za elektronski otpad",
            "content": "Specijalizirani kontejner kapaciteta 7 m³ osmišljen je za sigurno odlaganje elektronskog otpada i tekstilnih materijala. Njegova čvrsta konstrukcija omogućava ekološki prihvatljivo skladištenje i jednostavan transport na reciklažna postrojenja.",
            "images": ["https://i.postimg.cc/CxX0x28S/31.jpg", "https://i.postimg.cc/d0CYk9Rd/32.jpg"]
        },
        {
            "id": "septic-tank-separatori",
            "title": "Septičke jame, separatori ulja i masti",
            "content": "Naše septičke jame dostupne su u različitim kapacitetima i izrađene su od materijala otpornog na habanje. Separatori ulja i masti (800L), dostupni u jednokomornim, dvokomornim i trokomornim varijantama, osiguravaju efikasnu filtraciju otpadnih tekućina.",
            "images": ["https://i.postimg.cc/XqL3N7fz/26.jpg", "https://i.postimg.cc/v8tGtXJt/27.jpg", "https://i.postimg.cc/WbpTWgjL/28.jpg", "https://i.postimg.cc/wT1Jbm0b/9.jpg"]
        },
        {
            "id": "vodomjerna-okna-sahte",
            "title": "Vodomjerna okna, šahte",
            "content": "Vodomjerno okno namijenjeno je za ugradnju u manjim objektima i štiti vodomjer od smrzavanja. Nakon montaže instalacije (cijevi, koljena, ventili, vodomjer), sve se pokrije termo poklopcem, a potom poklopcem vodomjera. Kućište i poklopac izrađeni su od polietilena s rebrima za ojačanje, bez potrebe za dodatnim betoniranjem. Za promet vozilima potrebno je ojačati kućište betonom i ugraditi čelični poklopac.",
            "images": ["https://i.postimg.cc/jdBNVS1q/10.jpg", "https://i.postimg.cc/s2rhX0yt/11.jpg"]
        },
        {
            "id": "rezervoari-otpadno-ulje",
            "title": "Rezervoari za otpadno ulje i tehnološku kanalizaciju",
            "content": "Plastični rezervoari sa duplom stijenkom omogućuju sigurno skladištenje otpadnog ulja u kapacitetima do 20 m³. Također nudimo rezervoare od 35 m³ i tankvane za otpadno ulje (1.000L – 20.000L) prilagođene industrijskim potrebama.",
            "images": ["https://i.postimg.cc/d1MJ4fQ4/23.jpg", "https://i.postimg.cc/pVCtFrj0/4.jpg", "https://i.postimg.cc/VvLpR9tK/12.jpg"]
        },
        {
            "id": "tankvane-regali",
            "title": "Tankvane i regali za bačve",
            "content": "Praktične tankvane sa kotačima omogućuju jednostavan transport tekućina, dok regali za bačve dolaze u otvorenim i zatvorenim verzijama. Specijalizirani regali sa pumpama olakšavaju precizno punjenje, pražnjenje i doziranje tekućina u industrijskim pogonima.",
            "images": ["https://i.postimg.cc/Kj0SSpFX/3.jpg", "https://i.postimg.cc/2SbpMxKJ/5.jpg", "https://i.postimg.cc/5NkdsrnL/8.jpg", "https://i.postimg.cc/K86X2MXY/7.jpg", "https://i.postimg.cc/vTsHHNpc/15.jpg"]
        },
        {
            "id": "plasticne-barijere",
            "title": "Plastične barijere",
            "content": "Robusne plastične barijere osiguravaju sigurnost i kontrolu prometa, dostupne u različitim bojama i dimenzijama. Otporne na udarce i vremenske uvjete, idealne su za upotrebu na gradilištima, javnim površinama i industrijskim postrojenjima.",
            "images": ["https://i.postimg.cc/RCj2LLNZ/16.jpg", "https://i.postimg.cc/DwcDFV5S/17.jpg"]
        },
        {
            "id": "sahte-kanalizacija",
            "title": "Šahte za kanalizaciju, septičke jame, pjeskolovi i mastolovi",
            "content": "Šahte, septičke jame, pjeskolovi i mastolovi izrađeni su od visokokvalitetnih materijala otpornih na koroziju i ekstremne uvjete. Različitih dimenzija i oblika, prilagođeni su za široku primjenu u komunalnoj infrastrukturi i industriji.",
            "images": ["https://i.postimg.cc/yd3vD2hX/37.jpg", "https://i.postimg.cc/vm3v2bhv/8.jpg", "https://i.postimg.cc/rmsNv3Y2/9.jpg", "https://i.postimg.cc/MGKLpsrd/18.jpg"]
        },
        {
            "id": "spremista",
            "title": "Spremišta za zapaljive tekućine, boce, boje i lakove",
            "content": "Naša spremišta za zapaljive tekućine, boce, boje i lakove osiguravaju sigurno skladištenje i rukovanje opasnim tvarima. Izrađena od čvrstih materijala, prilagođena su specifičnim zahtjevima industrije i komunalnih službi.",
            "images": ["https://i.postimg.cc/Pxkkm8K7/30.jpg", "https://i.postimg.cc/pd52Qvvm/22.jpg"]
        }

    ]
  },
  {
    id: "gumirani-celicni-elementi",
    title: "Gumirani i plastificirani čelični elementi za transport kiselina i lužina",
    content: "Gumirani i plastificirani čelični elementi osiguravaju otpornost na korozivne tvari i ekstremne uvjete. Idealni su za transport kiselina i lužina u industrijskim postrojenjima, nudeći dugotrajnu zaštitu i pouzdanost.",
    subheaders: [
      {
        id: "ventili",
        title: "Ventili",
        content: "Izrađeni od visokokvalitetnih materijala, osiguravaju dugotrajnost i otpornost na koroziju.",
        images: ["https://i.postimg.cc/NFLXwj2g/6.jpg", "https://i.postimg.cc/hGbTLwqq/5.jpg"]
      },
      {
        id: "cjevovodiISpojevi",
        title: "Cjevovodi i spojevi",
        content: "Gumirane cijevi, koljena i redukcioni elementi osiguravaju siguran transport kiselina i lužina u industrijskim postrojenjima. Prilagođeni su visokim temperaturama i agresivnim tvarima, osiguravajući pouzdanost i dugotrajnost sistema.",
        images: ["https://i.postimg.cc/zf1TRN6j/2.jpg"]        
      }
    ]
  },
  {
    "id": "urbanaOprema",
    "title": "Urbana oprema",
    "content": "Proizvodimo vrhunsku urbanu opremu, uključujući klupe, koševe za parkove, kandelabere i autobusna stajališta. Naši proizvodi su dizajnirani za dugovječnost i estetski se uklapaju u svako urbano okruženje, poboljšavajući funkcionalnost i izgled javnih prostora.",
    "subheaders": [
        {
            "id": "urbana-oprema-klupe-i-kosevi-za-parkove",
            "title": "Klupe i koševi za parkove",
            "content": "Izdržljive i estetski oblikovane klupe izrađene su od kvalitetnih materijala, osiguravajući udobnost i otpornost na vremenske uvjete. Koševi za parkove dizajnirani su tako da olakšavaju održavanje čistoće i pridonose urednom javnom prostoru.",
            "images": ["https://i.postimg.cc/L4yjXF9r/0.jpg", "https://i.postimg.cc/GhVYFPsK/1.jpg", "https://i.postimg.cc/fTJmSqkk/2.jpg"]
        },
        {
            "id": "urbana-oprema-kandelaberi",
            "title": "Kandelaberi i stalci za bicikle",
            "content": "Kandelaberi izrađeni od visokokvalitetnih materijala osiguravaju dugotrajan i energetski učinkovit izvor rasvjete u urbanim sredinama. Stalci za bicikle nude sigurno i praktično rješenje za parkiranje, potičući održivu mobilnost u gradovima.",
            "images": ["https://i.postimg.cc/8CV6314r/5.jpg", "https://i.postimg.cc/MT6j6dh6/7.jpg"]
        }
    ]
  }
]


// export const metadata: Metadata = {
//   title: "Barbarić Produkt | Home",
//   description:
//     "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
// }

export default function ProductPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])

  const openGallery = useCallback((images: string[], index: number) => {
    setCurrentImages(images)
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when gallery is open
  }, [])

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }, [])

  const navigateImages = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? currentImages.length - 1 : prev - 1
      )
    } else {
      setCurrentImageIndex(prev => 
        prev === currentImages.length - 1 ? 0 : prev + 1
      )
    }
  }, [currentImages.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeGallery()
    } else if (e.key === 'ArrowLeft') {
      navigateImages('prev')
    } else if (e.key === 'ArrowRight') {
      navigateImages('next')
    }
  }, [closeGallery, navigateImages])

  return (
    <main className="min-h-screen bg-background">
      <div className="container relative mx-auto px-4">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbarić Produkt",
              url: "https://www.barbaricprodukt.hr/",
              logo: "https://i.postimg.cc/HsmzZWqq/logo.png",
              description: "Barbarić Produkt d.o.o. za proizvodnju, trgovinu i usluge",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Žutička ulica 30",
                addressLocality: "Ivanić-Grad",
                postalCode: "10310",
                addressCountry: "HR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+385-91-282-3375",
                email: "barbaricprodukt@barbaricprodukt.hr",
                contactType: "Customer Service",
              },
            }),
          }}
        />
        <div className="container relative mx-auto px-4 py-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-industrial-blue">
              Proizvodnja
            </h1>

            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Proizvodimo čelične konstrukcije, gumificirane i plastificirane elemente, alu i PVC stolariju, industrijsku opremu i opremu za more. Obrađujemo metal i plastiku te radimo po individualnoj narudžbi.
            </p>
          </div>
        </div>
              
        <div className="flex flex-col lg:flex-row">
          {/* Navigation first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 w-full lg:w-[30%] mb-6 lg:mb-0 lg:pl-4">
            <ClientSideNavigation sections={sections} />
          </div>
          
          {/* Main content second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-[70%] lg:pr-2">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue">{section.title}</h2>
                <div className="space-y-4">
                  <p className="ml-4">{section.content}</p>                                    
                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
                    >
                      <h3 className="text-xl font-medium mb-3 text-industrial-blue">{subheader.title}</h3>
                      <p className="ml-4 mb-2">
                        {subheader.content}
                      </p>  
                      {subheader?.images && (
                        <div className="flex flex-wrap p-4">
                          {subheader.images.map((image, index) => (
                            <div 
                              key={index} 
                              className="w-full sm:w-1/2 md:w-1/3 p-2 cursor-pointer"
                              onClick={() => openGallery(subheader.images, index)}
                            >
                              <div className="w-full h-[250px] relative overflow-hidden rounded-lg">
                                <Image
                                  src={image}
                                  fill
                                  alt={`${section.title} - ${subheader.title} image ${index + 1}`}
                                  className="object-cover hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL={generateBlurPlaceholder(250, 0)}
                                  sizes="(max-width: 250px) 100vw, 250px"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}                      
                    </div>
                  ))}                  
                </div>
              </section>
            ))}
          </div>          
        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button 
              className="absolute top-4 right-4 text-white text-4xl z-50"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              &times;
            </button>
            
            <div 
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentImages[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] w-full"
                  priority
                />
              </div>
              
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImages('prev')
                  }}
                  className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center"
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImages('next')
                  }}
                  className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center"
                  aria-label="Next image"
                >
                  &#10095;
                </button>
              </div>
              
              <div className="text-white text-center mt-2">
                {currentImageIndex + 1} / {currentImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}