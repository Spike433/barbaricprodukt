"use client";

import { useGallery } from "@/hooks/use-gallery";
import ImageGallery from "@/components/image-gallery";
import ClientSideNavigation from "@/components/client-side-navigation";

import { sections } from "@/lib/constants";
import Image from "next/image";
import { generateBlurPlaceholder } from "@/lib/utils";

export default function ProductPageClient() {
  const {
    isGalleryOpen,
    currentImageIndex,
    currentImages,
    openGallery,
    closeGallery,
    navigateImages
  } = useGallery();

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* Navigation */}
        <nav className="order-1 lg:order-2 w-full lg:w-[30%] mb-6 lg:mb-0 lg:pl-4" aria-label="Sekcije proizvoda">
          <ClientSideNavigation sections={sections} />
        </nav>
        
        {/* Main content */}
        <article className="order-2 lg:order-1 w-full lg:w-[70%] lg:pr-2">
        {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-6 scroll-mt-24 rounded-xl border bg-gradient-to-b from-white to-gray-50 shadow-md p-8"
                itemScope
                itemType="https://schema.org/Product"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-industrial-blue" itemProp="name">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  <p className="ml-4" itemProp="description">
                    {section.content}
                  </p>                                    
                  {section?.subheaders?.map((subheader) => (
                    <div
                      key={subheader.id}
                      id={subheader.id}
                      className="mt-8 mb-6 scroll-mt-24 pl-9 pt-4"
                    >
                      <h3 className="text-xl font-medium mb-3 text-industrial-blue">
                        {subheader.title}
                      </h3>
                      {subheader.content && (
                        <p className="ml-4 mb-2">
                          {subheader.content}
                        </p>
                      )}
                      {subheader?.images && (
                        <div className="flex flex-wrap p-4">
                          {subheader.images.map((image, index) => (
                            <figure 
                              key={index} 
                              className="w-full sm:w-1/2 md:w-1/3 p-2 cursor-pointer"
                              onClick={() => openGallery(subheader.images!, index)}
                              itemScope
                              itemType="https://schema.org/ImageObject"
                            >
                              <div className="w-full h-[250px] relative overflow-hidden rounded-lg">
                                <Image
                                  src={image.src}
                                  fill
                                  alt={image.title}
                                  className="object-cover hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL={generateBlurPlaceholder(250, 0)}
                                  sizes="(max-width: 250px) 100vw, 250px"
                                  itemProp="image"
                                />
                              </div>
                              <figcaption className="mt-2 text-sm font-medium text-center" itemProp="caption">
                                {image.title}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      )}                      
                    </div>
                  ))}                  
                </div>
              </section>
            ))}
        </article>          
      </div>
      
      <ImageGallery
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        images={currentImages}
        currentIndex={currentImageIndex}
        navigateImages={navigateImages}
      />
    </>
  );
}