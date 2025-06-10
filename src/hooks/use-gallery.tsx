// "use client";
// import { Picture } from "@/app/types";
// import { useState, useCallback } from "react";

// export const useGallery = () => {
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentImages, setCurrentImages] = useState<Picture[]>([]);
  
//   const openGallery = useCallback((images: Picture[], index: number) => {
//     setCurrentImages(images);
//     setCurrentImageIndex(index);
//     setIsGalleryOpen(true);
//     document.body.style.overflow = 'hidden';
//   }, []);

//   const closeGallery = useCallback(() => {
//     setIsGalleryOpen(false);
//     document.body.style.overflow = 'auto';
//   }, []);

//   const navigateImages = useCallback((direction: 'prev' | 'next') => {
//     setCurrentImageIndex(prev => {
//       if (direction === 'prev') {
//         return prev === 0 ? currentImages.length - 1 : prev - 1;
//       } else {
//         return prev === currentImages.length - 1 ? 0 : prev + 1;
//       }
//     });
//   }, [currentImages.length]);

//   return {
//     isGalleryOpen,
//     currentImageIndex,
//     currentImages,
//     openGallery,
//     closeGallery,
//     navigateImages
//   };
// };