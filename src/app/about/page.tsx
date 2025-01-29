import Link from 'next/link'
import { Metadata } from 'next'

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'About Us - Vigyan Darshan',
  description: 'Learn about Vigyan Darshan - where ancient and modern science meet. We explore cosmology, philosophy, mathematics, medicine, psychology, technology and more.',
}

export default function Aboutus () {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: '200px 200px'
        }}
      />
      <div className="container mx-auto px-4 pt-24 pb-12 sm:pt-32 relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-amber-500 mb-8 sm:mb-12 tracking-wide">
          About Vigyan Darshan
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto px-4">
          Where ancient wisdom meets modern science
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="leading-relaxed">
                Vigyan Darshan is such an institution where all types of science, from ancient to modern, are discussed logically. From cosmology to philosophy, mathematics to medicine, and psychology to technology, we explore it all—physical to spiritual.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">
              Video Editing and Voice Over
            </h3>
            <p className="text-gray-300">By Mohit Gaur</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300 mb-4">
              Email: mgtmarketers@gmail.com
            </p>
            <Link 
              href="https://instagram.com/vigyandarshan" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
            >
              Follow us on Instagram
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
