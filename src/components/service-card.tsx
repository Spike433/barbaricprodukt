import { Circle } from "lucide-react" // If available, otherwise use HTML
import { useTranslations } from 'next-intl';

type SubItem = {
  id: string
  title: string
}

type ServiceItem = {
  id: string
  title: string
  subitems?: SubItem[]
}

type ServiceCardProps = {
  title: string
  items: ServiceItem[]
}

export default function ServiceCard({ title, items }: ServiceCardProps) {
  const t = useTranslations('ServicesPage');

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-industrial-blue mb-4 border-b pb-2 border-industrial-blue/20">{title}</h2>

      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <div className="flex items-start">
                {/* Using HTML circle */}
                <Circle className="h-3 w-3 text-industrial-blue shrink-0 mt-1 mr-2" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  {item.subitems && item.subitems.length > 0 && (
                    <ul className="pl-5 mt-2 space-y-1">
                      {item.subitems.map((subitem) => (
                        <li key={subitem.id} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-industrial-blue/60 mr-2"></div>
                          <span className="text-sm">{subitem.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center text-muted-foreground">
          <Circle className="h-3 w-3 text-industrial-blue shrink-0 mr-2" />
          <span>{t('services.generalServices.title')}</span>
        </div>
      )}
    </div>
  )
}
