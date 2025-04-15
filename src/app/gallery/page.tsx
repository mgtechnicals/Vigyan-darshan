'use client'

import { useState } from "react";
import Image from "next/image";

// Move metadata to a separate file since we're making this a client component
const allImages = [
  { src: "/Gallery/1.jpg", alt: "Image 1" },
  { src: "/Gallery/2.jpg", alt: "Image 2" },
  { src: "/Gallery/3.jpg", alt: "Image 3" },
  { src: "/Gallery/4.jpg", alt: "Image 4" },
  { src: "/Gallery/5.jpg", alt: "Image 5" },
  { src: "/Gallery/6.jpg", alt: "Image 6" },
  { src: "/Gallery/7.jpg", alt: "Image 7" },
  { src: "/Gallery/8.jpg", alt: "Image 8" },
  { src: "/Gallery/9.jpg", alt: "Image 9" },
  { src: "/Gallery/10.jpg", alt: "Image 10" },
  { src: "/Gallery/11.jpg", alt: "Image 11" },
  { src: "/Gallery/12.jpg", alt: "Image 12" },
  { src: "/Gallery/13.jpg", alt:"Image 13" },
  { src: "/Gallery/14.jpg", alt: "Image 14" },
  { src: "/Gallery/15.jpg", alt: "Image 15" },
  { src: "/Gallery/16.jpg", alt: "Image 16" },
  { src: "/Gallery/17.jpg", alt: "Image 17" },
  { src: "/Gallery/18.jpg", alt: "Image 18" },
  { src: "/Gallery/19.jpg", alt: "Image 19" },
  { src: "/Gallery/20.jpg", alt: "Image 20" },
  { src: "/Gallery/21.jpg", alt: "Image 21" },
  { src: "/Gallery/22.jpg", alt: "Image 22" },
  { src: "/Gallery/23.png", alt: "Image 23" },
  { src: "/Gallery/24.jpg", alt: "Image 24" },
  { src: "/Gallery/25.jpg", alt: "Image 25" },
  { src: "/Gallery/26.jpg", alt: "Image 26" },
  { src: "/Gallery/27.jpg", alt: "Image 27" },
  { src: "/Gallery/28.jpg", alt: "Image 28" },
  { src: "/Gallery/29.jpg", alt: "Image 29" },
  { src: "/Gallery/30.jpg", alt: "Image 30" },
  { src: "/Gallery/31.jpg", alt: "Image 31" },
  { src: "/Gallery/32.jpg", alt: "Image 32" },
  { src: "/Gallery/33.jpg", alt: "Image 33" },
  { src: "/Gallery/34.jpg", alt: "Image 34" },
  { src: "/Gallery/35.jpg", alt: "Image 35" },
  { src: "/Gallery/36.jpg", alt: "Image 36" },
  { src: "/Gallery/37.png", alt: "Image 37" },
  { src: "/Gallery/38.png", alt: "Image 38" },
  { src: "/Gallery/39.png", alt: "Image 39" },
  { src: "/Gallery/40.jpeg", alt: "Image 40" },
  { src: "/Gallery/41.jpeg", alt: "Image 41" },
  { src: "/Gallery/42.jpeg", alt: "Image 42" },
  { src: "/Gallery/43.jpeg", alt: "Image 43" },
  { src: "/Gallery/44.jpeg", alt: "Image 44" },
  { src: "/Gallery/45.jpeg", alt: "Image 45" },
  { src: "/Gallery/46.jpeg", alt: "Image 46" },
  { src: "/Gallery/47.jpeg", alt: "Image 47" },
  { src: "/Gallery/48.jpeg", alt: "Image 48" },
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
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-6">
          Our Gallery
        </h1>
        
        <p className="text-center font-serif text-amber-500 backdrop:blur-lg text-xl mb-12 italic">
          Showcasing {allImages.length} Memorable Moments
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                priority={index < 4}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-medium text-lg">View Full Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
              >
                ×
              </button>
              
              <button
                onClick={showPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-4 rounded-full hover:bg-white/20 transition-all z-10"
              >
                <span className="text-2xl">←</span>
              </button>
              
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-4 rounded-full hover:bg-white/20 transition-all z-10"
              >
                <span className="text-2xl">→</span>
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={allImages[selectedImageIndex].src}
                  alt={allImages[selectedImageIndex].alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-6 py-3 rounded-full text-lg font-medium tracking-wide">
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
