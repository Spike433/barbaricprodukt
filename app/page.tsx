import type { Metadata } from "next"
import Image from "next/image"
import ClientSideNavigation from "@/components/client-side-navigation"
import { Section } from "./types"

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
            images: ["https://i.postimg.cc/pTktR7kW/12.jpg", "https://i.postimg.cc/CMmFgZ6G/5.jpg", "https://i.postimg.cc/FK5vZ074/10.jpg", "https://i.postimg.cc/YS6HyjWm/11.jpg"]
        },
        {
            id: "kuce",
            title: "Mobilne kuće, spremišta (zapaljivih tekućina, boca, boja i lakova), stambeni i industrijski objekti",
            content: "Mobilne kuće i industrijska spremišta dizajnirana su za sigurnu pohranu i udoban boravak. Konstrukcije osiguravaju zaštitu od vremenskih uvjeta i zadovoljavaju visoke standarde sigurnosti.",
            images: ["https://i.postimg.cc/136hf4MY/21.jpg", "https://i.postimg.cc/Pxkkm8K7/30.jpg", "https://i.postimg.cc/pd52Qvvm/22.jpg"]
        },
        {
            id: "panoramsko-dizalo",
            title: "Panoramsko dizalo, paviljon",
            content: "Panoramska dizala nude moderan dizajn i vrhunsku funkcionalnost, idealna za poslovne i stambene objekte. Paviljoni su estetski privlačni i prilagodljivi različitim namjenama, od izložbenih prostora do turističkih objekata.",
            images: ["https://i.postimg.cc/vTHbnMDx/4.jpg", "https://i.postimg.cc/LsfZHWs1/211.jpg"]
        },
        {
            id: "krovista",
            title: "Krovišta, krovni prozori, kupole, svjetlarnici",
            content: "Krovišta i krovni elementi osiguravaju optimalnu zaštitu i prirodno osvjetljenje prostora. Kupole i svjetlarnici dodaju estetiku i energetsku učinkovitost, smanjujući potrebu za umjetnom rasvjetom.",
            images: ["https://i.postimg.cc/qMqpMk99/6.jpg", "https://i.postimg.cc/pTv22KHZ/2.jpg", "https://i.postimg.cc/wvk933xd/3.jpg", "https://i.postimg.cc/44LT0Dmw/14.jpg"]
        },
        {
            id: "ogradeIPodovi",
            title: "Ograde i podne rešetke za balkone, kuće, industriju, rešetkaste zaštite za prozore i vrata",
            content: "Ograde i podne rešetke izrađene su od izdržljivih materijala koji osiguravaju sigurnost i dugotrajnost. Posebno dizajnirane rešetkaste zaštite pružaju dodatnu sigurnost prozorima i vratima, a istovremeno omogućuju dobru ventilaciju.",
            images: ["https://i.postimg.cc/WbdPc5ZV/17.jpg", "https://i.postimg.cc/8PxgpLd6/18.jpg", "https://i.postimg.cc/FKgMVqMy/20.jpg", "https://i.postimg.cc/D0Bgxqgw/16.jpg"]
        },
        {
          id: "gumirani-celicni-spremnici",
          title: "Gumirani čelični spremnici za transport kiselina i lužina",
          content: "Osiguravaju sigurnost i pouzdanost u industrijskim procesima. Izrađeni od visokokvalitetnih materijala, prilagođeni su zahtjevima specifičnih primjena.",
          images: ["https://i.postimg.cc/hjDxprSQ/3.jpg", "https://i.postimg.cc/B6mFyK6Y/4.jpg", "https://i.postimg.cc/KcsLDBC4/7.jpg"]
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
          content: "Izrađujemo podizne rampe koje omogućuju nesmetan i siguran transport tereta u skladištima, industrijskim pogonima i logističkim centrima. Naše rampe su robusne, prilagodljive i jednostavne za integraciju u postojeće sisteme.", 
          images: ["https://i.postimg.cc/m2ZxRMXb/6.jpg"] 
        },
        { 
          id: "prozori", 
          title: "Staklene fasade, prozori", 
          content: "Naše staklene fasade donose elegantan izgled i vrhunsku izolaciju, prilagođene savremenim arhitektonskim zahtjevima. Proizvodimo aluminijske i PVC prozore različitih dimenzija, s fokusom na dugovječnost i energetsku efikasnost.", 
          images: ["https://i.postimg.cc/JnwVW2gg/3.jpg", "https://i.postimg.cc/WpwRQS7W/5.jpg"] 
        },
        { 
          id: "zimskiVrtovi", 
          title: "Zimski vrtovi", 
          content: "Kreiramo zimske vrtove koji proširuju vaš životni prostor i omogućuju uživanje u prirodi tokom cijele godine. Naši sistemi su izrađeni od vrhunskih materijala, osiguravajući odličnu izolaciju i otpornost na vremenske uvjete.", 
          images: ["https://i.postimg.cc/brTKkNJc/1.jpg"] 
        }
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
      "content": "Razvijamo i isporučujemo visokokvalitetnu industrijsku opremu, uključujući ventile, filtere, spojke, rezervoare i prilagođena rješenja za specijalizirane industrijske procese.",
      "subheaders": [        
            {
              "id": "generalniPopravak",
              "title": "Generalni popravak",
              "content": "Nudimo kompletne usluge generalnog popravka i rekonstrukcije industrijske opreme, uključujući ventile, izmjenjivače topline i bušotinske zasune. Također pružamo specijalizirane usluge vatrozaštite spremnika nafte i rehabilitaciju cjevovoda metodom PE uvlačenja.",
              "images": []
          },  
          {
              "id": "inoxArmature",
              "title": "INOX armature",
              "content": "Proizvodimo visokokvalitetne INOX armature koje pružaju dugotrajnost i pouzdanost u zahtjevnim industrijskim uvjetima. U našoj ponudi nalaze se igličasti ventili do 700 bara, nepovratni ventili, kuglaste slavine, mazalice, boce za uzorkovanje i druge komponente izrađene prema najvišim standardima.",
              "images": ["https://i.postimg.cc/L5bPqvDL/2.jpg"]
          },    
          {
              "id": "ventili",
              "title": "Ventili",
              "content": "Proizvodimo širok asortiman industrijskih ventila dizajniranih za visoke tlakove i specijalizirane primjene. Naša ponuda uključuje leptir, kuglaste, igličaste, nepovratne i sigurnosne ventile, kao i napredne automatski upravljane INOX ventile do 1500 mm, prilagođene specifičnim potrebama industrije.",
              "images": ["https://i.postimg.cc/Zn788Jb9/25.jpg", "https://i.postimg.cc/CL9DSPzV/5.jpg", "https://i.postimg.cc/RZftF7HJ/6.jpg"]
          },
          {
              "id": "filteriIzmjenjivaci",
              "title": "Filteri i izmjenjivači",
              "content": "Naši filteri i izmjenjivači osiguravaju efikasnu filtraciju i optimalnu razmjenu topline u industrijskim postrojenjima. Proizvodimo industrijske INOX filtere, izmjenjivače topline i specijalizirane komponente koje poboljšavaju performanse i produžuju vijek trajanja sistema.",
              "images": ["https://i.postimg.cc/KzQBbmg9/1.jpg", "https://i.postimg.cc/xjxMFTQ8/3.jpg", "https://i.postimg.cc/hG178KMS/7.jpg"]
          },
          {
              "id": "spojkeAktuatori",
              "title": "Spojke i aktuatori",
              "content": "Naše industrijske spojke i aktuatori osiguravaju vrhunsku kontrolu i fleksibilnost u radu mehaničkih sistema. Periflex spojke smanjuju vibracije i povećavaju pouzdanost, dok precizni aktuatori omogućuju automatizirano upravljanje industrijskim procesima.",
              "images": ["https://i.postimg.cc/fLWSB1gY/8.jpg", "https://i.postimg.cc/gkx89FcD/4.jpg"]
          },    
          {
              "id": "cijevniSustavi",
              "title": "Cijevni sustavi",
              "content": "Proizvodimo visokokvalitetne cijevne sustave i posude prilagođene specijaliziranim industrijskim potrebama. Naši proizvodi osiguravaju dugovječnost i otpornost na ekstremne uvjete rada.",
              "images": ["https://i.postimg.cc/T245J7jW/12.jpg", "https://i.postimg.cc/nzdj5T6g/10.jpg"]
          },
          {
              "id": "rezervoariZaKiseline",
              "title": "Filterska jedinica za otežanu vodu, anionski i katjonski izmjenjivači, rezervoari za kiseline i lužine",
              "content": "Proizvodimo rezervoare različitih veličina i namjena, izrađene od vrhunskih materijala za sigurnu pohranu tekućina i plinova u industrijskim postrojenjima.",
              "images": ["https://i.postimg.cc/90WbPxyk/14.jpg", "https://i.postimg.cc/dtVnLxsk/17.jpg", "https://i.postimg.cc/vZ1zvx6G/18.jpg"]
          },
          {
            "id": "rashladnaJedinica",
            "title": "Rashladne jedinice",
            "content": "Osiguravaju efikasno hlađenje i održavanje optimalnih temperatura u industrijskim postrojenjima. Naši proizvodi pružaju pouzdan rad i dugotrajnost, uz mogućnost prilagodbe specifičnim zahtjevima korisnika.",
            "images": ["https://i.postimg.cc/sXJ92pb4/23.jpg"]
          }, // kranske sine, macka krana, dijelovi macke krana, gumeno  celicni transporer
          {
            "id": "kranskeSine",
            "title": "Kranske šine, mačka krana, dijelovi mačke krana",
            "content": "Nudimo visokokvalitetne kranske šine, mačke krana i dijelove mačke krana za sve vaše potrebe.",
            "images": ["https://i.postimg.cc/sXJ92pb4/23.jpg", "https://i.postimg.cc/zBNF5d2f/20.jpg", "https://i.postimg.cc/L8rVQ4zL/21.jpg"]
          },
          {
              "id": "postrojenja",
              "title": "Postrojenja",
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
            "title": "Septičke jame i separatori",
            "content": "Naše septičke jame dostupne su u različitim kapacitetima i izrađene su od materijala otpornog na habanje. Separatori ulja i masti (800L), dostupni u jednokomornim, dvokomornim i trokomornim varijantama, osiguravaju efikasnu filtraciju otpadnih tekućina.",
            "images": ["https://i.postimg.cc/XqL3N7fz/26.jpg", "https://i.postimg.cc/v8tGtXJt/27.jpg", "https://i.postimg.cc/WbpTWgjL/28.jpg"]
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

export const metadata: Metadata = {
  title: "Barbarić Produkt | Home",
  description:
    "Barbarić Produkt d.o.o. is a leading company specializing in manufacturing, trade, and services based in Ivanić-Grad, Croatia.",
}

// Helper function to generate blur data URL for placeholder
function generateBlurPlaceholder(width: number, height: number, color = "e4e4e7", borderRadius = 10): string {
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

// JSON-LD structured data for better SEO
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container relative mx-auto px-4 py-16">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbarić Produkt",
              url: "https://www.barbaricprodukt.hr/",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SIkE1iKtjUIZEdiNFuJ5AcRdJA8HlJ.png",
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

        {/* Hero section with new gradient */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">Barbarić Produkt d.o.o</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
             za proizvodnju, trgovinu, usluge obrade metala i plastike        
          </p>
        </section>        

        <div className="flex flex-col lg:flex-row">
          {/* Main content - Server-side rendered for SEO */}
          <div className="w-full lg:w-3/4 pr-0 lg:pr-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue">{section.title}</h2>
                <div className="space-y-4">
                  <p className="ml-4">{section.content}</p>                                    
                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 p-9"
                    >
                      <h3 className="text-xl font-medium mb-3 text-industrial-blue">{subheader.title}</h3>
                      <p className="ml-4 mb-2">
                        {subheader.content}
                      </p>  
                      {subheader?.images && (
                    <div className="flex flex-wrap ml-2">
                      {subheader.images.map((image, index) => (
                        <div key={index} className="w-1/3 p-2">
                          <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={`${section.title} - Detailed illustration of our ${section.title.toLowerCase()} at Barbarić Produkt`}
                            className="object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={generateBlurPlaceholder(400, 400)}
                          />
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

          {/* Client-side navigation component */}
          <ClientSideNavigation sections={sections} />
        </div>
      </div>
    </main>
  )
}

