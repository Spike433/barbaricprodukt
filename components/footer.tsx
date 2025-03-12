import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-red-500 text-white py-8 rounded-t-2xl shadow-lg">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Email & Website */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a
              href="mailto:barbaric.produkt@barbaricprodukt.com"
              className="flex items-center space-x-2 hover:underline transition-opacity duration-200 hover:opacity-80 mb-4"
            >
              <Mail className="h-5 w-5 text-gray-200" />
              <span>barbaric.produkt@barbaricprodukt.com</span>
            </a>
            <a
              href="http://barbaricprodukt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline transition-opacity duration-200 hover:opacity-80"
            >
              <Globe className="h-5 w-5 text-gray-200" />
              <span>barbaricprodukt.com</span>
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Lokacija</h3>
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-200" />
              <p>Žutička ulica 30</p>
            </div>
            <p className="flex items-center space-x-2 ml-8">Ivanić-Grad 10310, HRVATSKA</p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Telefon</h3>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-200" />
              <p>+385 91 282-3375</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-200" />
              <p>+385 91 200-8801</p>
            </div>
          </div>
        </div>
      </div>      
    </footer>
  );
}
