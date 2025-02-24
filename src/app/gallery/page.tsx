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
