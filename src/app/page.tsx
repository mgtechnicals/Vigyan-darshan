import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'
import Cards from "@/components/Cards";

export const metadata: Metadata = {
  title: 'Vigyan Darshan - Exploring Science, Philosophy & Spirituality',
  description: 'Discover the intersection of science, philosophy, and spirituality with Vigyan Darshan. Watch our educational videos and explore our content.',
  openGraph: {
    title: 'Vigyan Darshan',
    description: 'Exploring Science, Philosophy & Spirituality',
    images: ['/logo.png'],
  },
}

const featuredImages = [
  { src: "/img1.jpg", alt: "Gallery Image 1" },
  { src: "/img2.jpg", alt: "Gallery Image 2" },
  { src: "/img3.jpg", alt: "Gallery Image 3" },
];

export default function Home() {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
    //   <div 
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
    //     style={{
    //       backgroundImage: "url('/bg-pattern.png')",
    //       backgroundSize: '200px 200px'
    //     }}
    //   />
    //   <div className="relative">
    //     <div className="flex flex-col items-center pt-16 sm:pt-20 md:pt-28 lg:pt-32">
    //       <div className=" hover:animate-none transition-all">
    //         <Image
    //           src="/logo.png"
    //           alt="Vigyan Darshan Logo - Exploring Science, Philosophy & Spirituality"
    //           width={150}
    //           height={150}
    //           className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-2xl transition-transform duration-500 hover:rotate-180"
    //           priority
    //           loading="eager"
    //         />
    //       </div>
    //       <h1 className="mb-4 text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-3xl font-bold animate-fade-in-down text-center px-4 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300 p-2">
    //         Vigyan Darshan
    //       </h1>
    //       <Cards/>
    //     </div>
    //     <div className="min-h-screen ">
    //       <section className="py-8 sm:py-10 md:py-16 lg:py-20 text-white">
    //         <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
    //           <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
    //           Vigyan Darshan is such an institution where all types of science from ancient to modern will be discussed logically (cosmology to Philoshophy , Mathematical to medical & Psychology to Technology ! we will touch all topic physical to spritual )
    //           </p>
    //         </div>
    //         <div className="w-full border-t-2 border-gray-700 my-12 md:my-16 shadow-md"></div>
    //       </section>
    //       <div className="container mx-auto text-center px-1 mb-8">
    //       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-10 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-400">
    //             Our Youtube Channel
    //           </h2>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://www.youtube.com/@Vigyandarshan"
    //             className="group inline-flex items-center py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-red-800 to-red-800 hover:from-red-800 hover:to-red-800 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:animate-none"
    //             aria-label="Subscribe to Vigyan Darshan YouTube Channel"
    //           >
    //             <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-120" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    //               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    //             </svg>
    //             <span className="text-sm sm:text-base">Subscribe</span>
    //           </a>
    //         <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 mt-10">Featured Videos</h2>
    //         <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12">Dive deep into our curated content exploring the intersection of science, philosophy and spirituality</p>
    //       </div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-4 md:px-6 xl:px-8 max-w-7xl mx-auto">
    //         <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
    //           <iframe
    //             width="400"
    //             height="400"
    //             src="https://www.youtube-nocookie.com/embed/Ad2pcV2Oe_s?start=19"
    //             title="Vigyan Darshan Video 1"
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             allowFullScreen
    //             loading="lazy"
    //             className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-gray-500/20"
    //           ></iframe>
    //         </div>
    //         <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
    //           <iframe
    //             width="400" 
    //             height="400"
    //             src="https://www.youtube-nocookie.com/embed/eGRf6TJdwb4"
    //             title="Vigyan Darshan Video 2"
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             allowFullScreen
    //             loading="lazy"
    //             className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-gray-500/20"
    //           ></iframe>
    //         </div>
    //         <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
    //           <iframe
    //             width="400"
    //             height="400"
    //             src="https://www.youtube-nocookie.com/embed/RYw9e942ZbA"
    //             title="Vigyan Darshan Video 3"
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             allowFullScreen
    //             loading="lazy"
    //             className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-gray-500/20"
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full border-t-2 border-gray-700 my-8 sm:my-10 md:my-12 lg:my-16 xl:my-20 shadow-md"></div>
    //     <div className="w-full max-w-7xl mx-auto">
    //       <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
    //         <div className="w-full py-8 sm:py-12 md:py-16">
    //           <div className="container mx-auto px-4">
    //             <h2 id="gallery" className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500 text-center mb-8">
    //               Our Gallery
    //             </h2>
                
    //             {/* Responsive Grid Container for Gallery */}
    //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
    //               {featuredImages.map((image, index) => (
    //                 <div 
    //                   key={index}
    //                   className="aspect-square relative cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    //                 >
    //                   <Image 
    //                     src={image.src}
    //                     alt={image.alt}
    //                     fill
    //                     className="object-cover transform duration-300 group-hover:scale-110"
    //                     sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
    //                     priority={index < 2}
    //                     quality={85}
    //                   />
    //                 </div>
    //               ))}
    //             </div>

    //             <div className="text-center mt-8">
    //               <Link
    //                 href="/gallery"
    //                 className="px-6 py-3 bg-gradient-to-r from-amber-800 to-amber-400 hover:from-amber-500 hover:to-amber-800 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
    //               >
    //                 View Full Gallery
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex">
        <h1>Comming Soon...</h1>
    </div>
  );
}
