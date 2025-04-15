"use client";
import { useState } from "react";
import Image from "next/image";

// Define TypeScript interfaces for better type safety
interface Member {
  image: string;
  name: string;
  role: string;
  description: string;
}

// Separate Mohit's profile
const leaderProfile: Member = {
  image: "/Profiles/photo.jpg",
  name: "Mohit Gaur",
  role: "Researcher, Vedic activist, Entrepreneur",
description: "Director of VDRO and the Founder & CEO of MG Technicals. He is actively involved in multiple business ventures and has a keen research interest in science, history, and Indology. He is currently pursuing a Bachelor of Science (B.S.) degree in Artificial Intelligence at IIT Jodhpur and working as a Research Intern at IIT Bombay under the guidance of Professor Gopal Dixit. In addition to his technical education, he has completed a Bachelor of Arts and Bachelor of Education (B.A. B.Ed.) in History and Hindi Literature from Maharshi Dayanand Saraswati University (MDSU). He is also pursuing a Master’s degree in Sanskrit through open learning alongside his Regular B.S. degree at IIT Jodhpur. His primary objective is to establish a strong foundation for Vedic activism in India.",
};

// Rest of the team members
const teamMembers: Member[] = [
  {
    image: "/Profiles/profGmorya.jpg",
    name: "Dr RGovindM",
    role: " Mentor of the Research Team at VDRO | PhD, IIT Bombay",
    description: "Postdoctoral Fellow, Department of Energy Science and Engineering, IIT Bombay",
  },
  {
    image: "/Profiles/shri.png",
    name: "Dr. Shri Gupta",
    role: "Mentor of Research team at VDRO | Scientist, Electrical Engineer, PhD from Cornell University USA",
    description:
      "Dr. Shri Gupta, PhD in Electrical Engineering from Cornell, is a former research scientist and senior manager at Digital and Motorola across India, Europe, and North America. Now based in Florida, he is a Six Sigma consultant with a keen interest in Vedanta and alternative healing. He actively supports IHU and Siddha-Vetha Multiversity, promoting natural health and youth development programs.",
  },
  {
    image: "/Profiles/sanjayji.png",
    name: "Shri Sanjay Kumar",
    role: "Mentor of the Research Team at VDRO, आयुर्वेदज्ञ, Vaidik Scholar & Allopathic Pharmacist",
    description:
      "Sanjay Kumar is deeply interested in Traditional Ayurveda, focusing on the Charaka Samhita, Sushruta Samhita, and other Vedic scriptures, aiming to preserve and share their ancient wisdom.",
  },
  {
    image: "/Profiles/jk.jpg",
    name: "Jitendra Khanna",
    role: "Retired Editor from WHO at Geneva, Switzerland",
    description:
      "He is a science writer, editor and communicator by profession. His thinking has been much influenced by science and philosophy. Jitendra has spent many years searching for answers to life’s big questions. He has focused his efforts on Indian philosophy ",
  },
   
];

// Add new team members array at the top with existing arrays
const additionalMembers: Member[] = [
  {
    image: "/Profiles/harendra.png",
    name: "Harendra Dudi",
    role: "Chemistry Researcher at VDRO",
    description: "NET JRF Qualified\nGATE Qualified",
  },
  {
    image: "/Profiles/rtm2.jpg",
    name: "Punit Arya",
    role: "Automobile Researcher at VDRO",
    description: "Ex Automotive Mechatronics Engineer at mercedes benz",
  },
  {
    image: "/Profiles/sunil.JPG",
    name: "Sunil Chaudhary",
    role: "IT System Researcher at VDRO",
    description: "Network Engineer at Data Center of Kotak Bank",
  },
  {
    image: "/Profiles/kartik1.jpg",
    name: "Kartik Iyer",
    role: "Resarcher of vedic studies at VDRO",
    description: "MA Sanskrit, Acharya (Sahitya), UGC NET-SET Sanskrit",
  },
  {
    image: "/Profiles/ankit.png",
    name: "Ankit Jangid",
    role: "Software Developer at VDRO and Full Stack web Developer.",
    description: "Bachelor of Engineering in Computer Science and Engineering",
  },
  {
    image: "/Profiles/pruthviraj.jpeg",
    name: "Pirthviraj Gadhvi",
    role: "Jyotishshastra Researcher at VDRO.",
    description: "Jyotirgyata from Hemchandracharya North Gujrat University, BSC Mathematics",
  },
  {
    image: "/Profiles/manish.jpeg",
    name: "Manish Kumar",
    role: "Sanskrit Vyakran Researcher at VDRO.",
    description: "M.A (Sanskrit), N.E.T. with J.R.F. from U.G.C. Delhi (2018)",
  },
   
  // Add more members as needed
];

interface MemberCardProps {
  member: Member;  // Member data
  index: number;   // Position in the list
  isExpanded: boolean;  // Controls description expansion
  onToggle: () => void;  // Handles expand/collapse
}

export default function Team() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isLeaderExpanded, setIsLeaderExpanded] = useState(false);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Add these new styles to the MemberCard component
  const MemberCard = ({ member, index, isExpanded, onToggle }: MemberCardProps) => (
    <div className="ml-14 md:ml-0 max-w-[250px] bg-gradient-to-b from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-amber-500/20 transform hover:scale-102 transition-all duration-300 h-auto w-full flex flex-col border border-gray-700/30">
      {/* Image Container */}
      <div className="w-full h-[250px] relative rounded-t-xl overflow-hidden group">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1 relative">
        <h3 className="text-lg font-bold text-amber-400 mb-2 text-center">
          {member.name}
        </h3>
        <p className="text-sm text-gray-200 mb-3 text-center font-medium">
          {member.role}
        </p>
        <div className="flex-1 flex flex-col">
          <p className={`text-sm text-gray-300 text-center leading-relaxed whitespace-pre-line ${
            isExpanded ? "" : "line-clamp-3"
          }`}>
            {member.description}
          </p>
          {member.description.length > 100 && (
            <button 
              className="text-amber-400 mt-4 mb-0"
              onClick={onToggle}
              type="button"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vigyan Darshan",
    member: [
      {
        "@type": "Person",
        name: leaderProfile.name,
        jobTitle: leaderProfile.role,
        description: leaderProfile.description,
        image: `https://vigyandarshan.org${leaderProfile.image}`, // Update with your actual domain
      },
      ...teamMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.description,
        image: `https://vigyandarshan.org${member.image}`, // Update with your actual domain
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Main Heading */}
      <div className="pt-32 ">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-center text-amber-500 mb-10">
          Our Team
        </h1>
      </div>

      {/* First Section - Leader and Team */}
      <section className=" text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row lg:flex-row gap-8">
            {/* Leader Section */}
            <div className="w-full h-auto lg:w-1/4 mx-auto  max-w-[250px]">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-auto w-full flex flex-col lg:mt-28">
                    <div className="w-full h-full relative rounded-lg aspect-square overflow-hidden">
                      <Image
                        src={leaderProfile.image}
                        alt={`${leaderProfile.name} - ${leaderProfile.role}`}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1280px) 400px, 25vw"
                      />
                    </div>
                  
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-amber-400 mb-1.5 truncate text-center">
                      {leaderProfile.name}
                      <div className="text-white">
                          (Director of VDRO)
                      </div>
                    </h3>
                    <p className="text-xs text-amber-100 mb-2 line-clamp-2 text-center">
                      {leaderProfile.role}
                    </p>
                    <div className="flex-1 flex flex-col text-center">
                      <p className={`text-xs text-gray-100  ${
                        isLeaderExpanded ? "" : "line-clamp-3"
                      }`}>
                        {leaderProfile.description}
                      </p>
                      {leaderProfile.description.length > 100 && (
                        <button
                          onClick={() => setIsLeaderExpanded(!isLeaderExpanded)}
                          className="mt-2 text-amber-400 hover:text-amber-300 text-xs font-medium"
                          type="button"
                        >
                          {isLeaderExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-amber-500/50 self-stretch mx-4" />

            {/* Advisory Members Section */}
            <div className="lg:w-3/4 w-full text-center md:text-left">
              <h4 className="sm:text-3xl font-bold text-gray-100 mb-10 mt-8 underline-offset-auto">
                Advisory members of VDRO
              </h4>
              <div className="flex lg:flex-row flex-col sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <MemberCard
                    key={index}
                    member={member}
                    index={index}
                    isExpanded={expandedCards.includes(index)}
                    onToggle={() => toggleCard(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team of VDRO */}
      <section className="pb-10 text-white">
        <div className="container mx-auto px-4">
          <h4 className="sm:text-3xl font-bold text-center text-amber-500 mb-10 mt-8">
            Research Team of VDRO
          </h4>
          <div className="grid sm:ml-10 lg:flex-row flex-col sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {additionalMembers.map((member, index) => (
              <MemberCard
                key={index}
                member={member}
                index={index}
                isExpanded={expandedCards.includes(index + teamMembers.length)}
                onToggle={() => toggleCard(index + teamMembers.length)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
