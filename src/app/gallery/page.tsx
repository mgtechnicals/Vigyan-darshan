'use client'

import { useState } from "react";
import Image from "next/image";

// Move metadata to a separate file since we're making this a client component
const allImages = [
  { src: "/m01.jpg", alt: "Gallery Image 1" },
  { src: "/m02.jpg", alt: "Gallery Image 1" },
  { src: "/m03.jpg", alt: "Gallery Image 1" },
  { src: "/m04.jpg", alt: "Gallery Image 1" },
  { src: "/m1.jpg", alt: "Gallery Image 1" },
  { src: "/m2.jpg", alt: "Gallery Image 1" },
  { src: "/m3.jpg", alt: "Gallery Image 1" },
  { src: "/m4.jpg", alt: "Gallery Image 1" },
  // { src: "/m5.jpg", alt: "Gallery Image 1" },
  { src: "/m6.jpg", alt: "Gallery Image 1" },
  { src: "/m7.jpg", alt: "Gallery Image 1" },
  { src: "/m8.jpg", alt: "Gallery Image 1" },
  { src: "/m9.jpg", alt: "Gallery Image 1" },
  { src: "/m10.jpg", alt: "Gallery Image 1" },
  { src: "/img1.jpg", alt: "Gallery Image 1" },
  { src: "/gallery17.jpg", alt: "Gallery Image 2" },
  { src: "/img3.jpg", alt: "Gallery Image 3" },
  { src: "/img4.jpg", alt: "Gallery Image 4" },
  { src: "/img5.jpg", alt: "Gallery Image 5" },
  { src: "/gallery1.jpg", alt: "Gallery Image 6" },
  { src: "/gallery2.jpg", alt: "Gallery Image 7" },
  { src: "/gallery3.jpg", alt: "Gallery Image 8" },
  { src: "/gallery4.jpg", alt: "Gallery Image 9" },
  { src: "/gallery5.jpg", alt: "Gallery Image 10" },
  { src: "/gallery6.jpg", alt: "Gallery Image 11" },
  { src: "/gallery8.jpg", alt: "Gallery Image 12" },
  { src: "/gallery9.jpg", alt: "Gallery Image 13" },
  { src: "/gallery10.jpg", alt: "Gallery Image 14" },
  { src: "/gallery11.jpg", alt: "Gallery Image 15" },
  { src: "/gallery12.jpg", alt: "Gallery Image 16" },
  { src: "/gallery13.jpg", alt: "Gallery Image 17" },
  { src: "/gallery14.jpg", alt: "Gallery Image 18" },
  { src: "/img2.jpg", alt: "Gallery Image 19" },
  { src: "/gallery15.jpg", alt: "Gallery Image 20" },
  { src: "/gallery16.jpg", alt: "Gallery Image 21" },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  
  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
    }
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-amber-500 mb-10 mt-10">
          Our Gallery
        </h1>
        
        <p className="text-center font-serif text-amber-500 text-2xl mb-8">
          Images: {allImages.length}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square relative cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-fit transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                priority={index < 4}
                quality={85}
              />
              {/* Add overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex items-center gap-2">
                  <span className="font-medium">View Full Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              >
                ×
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
              >
                ←
              </button>
              
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
              >
                →
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={allImages[selectedImageIndex].src}
                  alt={allImages[selectedImageIndex].alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                  {selectedImageIndex + 1} / {allImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
