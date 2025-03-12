import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-red-600 text-gray-100 py-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <div className="flex items-start justify-center md:justify-start">
            <Mail className="h-5 w-5 mr-3 text-gray-100 mt-0.5" />
            <a href="mailto:barbaric.produkt@barbaricprodukt.com" className="hover:underline">
              barbaric.produkt@barbaricprodukt.com
            </a>
          </div>
          <div className="flex items-start justify-center md:justify-start mt-2">
            <Globe className="h-5 w-5 mr-3 text-gray-100 mt-0.5" />
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
        {/* Lokacija */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Lokacija</h3>
          <div className="flex items-start justify-center md:justify-start">
            <MapPin className="h-5 w-5 mr-3 text-gray-100 mt-0.5" />
            <div>
              <p>Žutička ulica 30</p>
              <p>Ivanić-Grad 10310, HRVATSKA</p>
            </div>
          </div>
        </div>

        {/* Broj */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Broj</h3>
          <div className="flex items-start justify-center md:justify-start">
            <Phone className="h-5 w-5 mr-3 text-gray-100 mt-0.5" />            
              <p>385 91 282-3375</p>              
          </div>          
          <div className="flex items-start justify-center md:justify-start mt-2">
            <Phone className="h-5 w-5 mr-3 text-gray-100 mt-0.5" />                          
              <p>385 91 200-8801</p>            
          </div>
        </div>        
      </div>
    </footer>
  );
}