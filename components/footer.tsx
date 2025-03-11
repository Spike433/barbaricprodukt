import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Kontakt informacije</h3>
          <div className="flex items-start mb-2">
            <MapPin className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
            <div>
              <p>Žutička ulica 30</p>
              <p>Ivanić-Grad 10310, HRVATSKA</p>
            </div>
          </div>
          <div className="flex items-start mb-2">
            <Phone className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
            <div>
              <p>00385 91 282-3375</p>
              <p>00385 91 200-8801</p>
            </div>
          </div>
          <div className="flex items-start mb-2">
            <Mail className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
            <a href="mailto:barbaric.produkt@barbaricprodukt.com" className="hover:underline">
              barbaric.produkt@barbaricprodukt.com
            </a>
          </div>
          <div className="flex items-start">
            <Globe className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
            <a
              href="http://barbaricprodukt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              barbaricprodukt.com
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Barbarić Produkt d.o.o. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}
