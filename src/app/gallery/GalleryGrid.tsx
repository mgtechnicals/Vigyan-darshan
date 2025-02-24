"use client"

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  initialItems: GalleryItem[];
}

export default function GalleryGrid({ initialItems }: GalleryGridProps) {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {initialItems.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 group bg-white"
          >
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                priority={item.id <= 3}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
              <p className="text-white font-semibold text-lg tracking-wide text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < initialItems.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMoreItems}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full 
            hover:from-blue-700 hover:to-blue-800 transition-all duration-300 
            shadow-lg hover:shadow-xl font-semibold text-sm uppercase tracking-wider"
          >
            Load More Images
          </button>
        </div>
      )}
    </div>
  );
}
