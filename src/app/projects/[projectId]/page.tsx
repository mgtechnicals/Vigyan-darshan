"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  details: string;
  highlights: string[];
  formLink: string;
}

const project: ProjectData = {
  title: "IITB-VDRO'S PVD INTERNSHIP PROGRAM 2025",
  subtitle: "6-Month Paid Research Internship Opportunity",
  description:
    "Vigyan Darshan Research Organization (VDRO) in collaboration with Prof Gopal Dixit, IIT Bombay; is inviting college students, graduates, postgraduates, PhD students, or any other candidates with research skills for a 6-month paid internship program.",
  details: `Scan Below QR or Click the button to apply.`,
  highlights: [
    "6-Month Paid Internship",
    "Research Experience",
    "IIT Bombay Certified",
    "Industry Exposure"
  ],
  formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdI6nSnwCY0FphUn3Y4Xnb9cechzJWmj9LWmNCWV3Jg_-MMgA/viewform"
};

const QRCodeImage = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl inline-block">
      <Image
        src="/Projects/QRCode.png"
        alt="Application QR Code"
        width={200}
        height={200}
        className="hover:scale-105 transition-transform"
        priority
        onError={(e) => {
          e.currentTarget.src = "/fallback-qr.png"; // Add a fallback image
        }}
      />
    </div>
  );
};

export default function ProjectPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleApplyClick = () => {
    setIsLoading(true)
  }

  return (
    <div role="main" className="min-h-screen ">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
      <section aria-label="Project Details" className="py-20 text-white">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 mt-10">
            <h1 className="text-5xl font-bold text-amber-500 mb-4 animate-fade-in">{project.title}</h1>
            <h2 className="text-2xl text-amber-300 mb-8">{project.subtitle}</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700">
              <p className="text-xl text-gray-100 leading-relaxed">{project.description}</p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-amber-400 text-xl font-semibold text-center">{highlight}</h3>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl shadow-xl">
              <h4 className="text-amber-400 text-xl font-semibold mb-4">Important Note:</h4>
              <p className="text-gray-100 text-lg leading-relaxed">
                All selected candidates who meet the specified eligibility criteria will be recruited as Research Interns for a duration of six months. They will also receive an internship certificate approved by Prof Gopal Dixit, IIT Bombay.
              </p>
            </div>
          </div>

          {/* Application Section */}
          <div className="max-w-xl mx-auto text-center">
            <p className="text-2xl text-amber-300 mb-8">{project.details}</p>
            <div className="space-y-8">
              <QRCodeImage />
              <br />
              <a 
                href={project.formLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleApplyClick}
                className={`bg-amber-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg 
                  shadow-xl hover:bg-amber-400 transition-all transform hover:scale-105 
                  inline-flex items-center space-x-3 group ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
              >
                <span>Apply Now</span>
                <svg 
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform" 
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
          </div>

          {/* Back Button */}
          <div className="mt-20 text-center">
            <Link href="/projects">
              <span className="inline-flex items-center space-x-2 bg-gray-800 text-amber-400 px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-gray-700 transition group">
                <svg 
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                <span>Back to Projects</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}