"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


// Project 1 details
const project = {
  title: "IITB-VDRO'S PVD INTERNSHIP PROGRAM 2025",
  images: [
    { src: "/P1.JPG", alt: "Project Overview" },
    { src: "/P2.JPG", alt: "Research Process" },
    { src: "/P3.JPG", alt: "Project Results" }
  ],
  description:
    "The Indian Institute of Technology Bombay (IIT-B), in collaboration with the Vigyan Darshan Research Organization (VDRO), is inviting college students, graduates, postgraduates, PhD students, or any other candidates with research skills for a 6-month paid internship program under the guidance of Professor Gopal Dixit.",
  details: `Scan Below QR or Click the button to apply.`,
  formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdI6nSnwCY0FphUn3Y4Xnb9cechzJWmj9LWmNCWV3Jg_-MMgA/viewform" // Add your Google Form link here
};

export default function Project1() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setScale(1); // Reset scale when opening new image
  };

  const closeModal = () => {
    setSelectedImage(null);
    setScale(1);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prevScale => {
      const newScale = direction === 'in' ? prevScale + 0.2 : prevScale - 0.2;
      return Math.min(Math.max(newScale, 0.5), 3); // Limit scale between 0.5 and 3
    });
  };

  return (
    <section className="py-20 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-6 mt-6">{project.title}</h1>
          <p className="text-xl text-gray-100 mb-8 P-10 ">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-8">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="relative cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto transition-transform group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <span className="text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    View Full Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-[90vw] max-h-[90vh]" 
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-[80vw] h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Full size image"
                  fill
                  sizes="80vw"
                  className="object-contain transition-transform duration-200"
                  priority
                  style={{ transform: `scale(${scale})` }}
                  quality={100}
                />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className="text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                  onClick={() => handleZoom('in')}
                >
                  +
                </button>
                <button
                  className="text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                  onClick={() => handleZoom('out')}
                >
                  -
                </button>
                <button
                  className="text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-4 text-center">
          <p className="text-gray-100 text-xl whitespace-pre-line">
            {project.details}
            <span className="block text-2xl mt-2 animate-bounce">👇</span>
          </p>
        </div>

        <div className="flex flex-col items-center mt-4 space-y-6">
            <Image
              src="/QRCode.png"
              alt="Application QR Code"
              width={200}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
              priority
            />
            
            <a 
              href={project.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-amber-500 text-gray-900 px-8 py-4 rounded-lg font-medium text-lg shadow-md hover:bg-amber-600 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Click here to Apply</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
        </div>

        <div className="mt-20 text-center">
          <Link href="/projects">
            <span className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-amber-600 transition">
              Back to Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
