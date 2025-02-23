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
  image: "/photo.jpg",
  name: "Mohit Gaur",
  role: " Director of VDRO and the Founder & CEO of MG Technicals.",
  description: "He is a multi-disciplinary scholar pursuing a B.S. in AI at IIT Jodhpur and interning at IIT Bombay. With degrees in History and Hindi Literature, he is also studying Sanskrit. His interests span business, science, history, and Indology, aiming to promote Vedic activism in India.",
};

// Rest of the team members
const teamMembers: Member[] = [
  {
    image: "/profGmorya.jpg",
    name: "Dr RGovindM",
    role: " Mentor of the Research Team at VDRO | PhD, IIT Bombay",
    description: "Postdoctoral Fellow, Department of Energy Science and Engineering, IIT Bombay",
  },
  {
    image: "/shri.png",
    name: "Dr. Shri Gupta",
    role: "Mentor of Research team at VDRO | Scientist, Electrical Engineer, PhD from Cornell University USA",
    description:
      "Dr. Shri Gupta, PhD in Electrical Engineering from Cornell, is a former research scientist and senior manager at Digital and Motorola across India, Europe, and North America. Now based in Florida, he is a Six Sigma consultant with a keen interest in Vedanta and alternative healing. He actively supports IHU and Siddha-Vetha Multiversity, promoting natural health and youth development programs.",
  },
  {
    image: "/sanjayji.png",
    name: "Shri Sanjay Kumar",
    role: "Mentor of the Research Team at VDRO, आयुर्वेदज्ञ, Vaidik Scholar & Allopathic Pharmacist",
    description:
      "Sanjay Kumar is deeply interested in Traditional Ayurveda, focusing on the Charaka Samhita, Sushruta Samhita, and other Vedic scriptures, aiming to preserve and share their ancient wisdom.",
  },
  {
    image: "/jk.jpg",
    name: "Jitendra Khanna",
    role: "Retired Editor from WHO at Geneva, Switzerland",
    description:
      "He is a science writer, editor and communicator by profession. His thinking has been much influenced by science and philosophy. Jitendra has spent many years searching for answers to life’s big questions. He has focused his efforts on Indian philosophy ",
  },
   
];

// Add new team members array at the top with existing arrays
const additionalMembers: Member[] = [
  {
    image: "/harendra.png",
    name: "Harendra Dudi",
    role: "Chemistry Researcher at VDRO",
    description: "NET GRF Qualified (All India Rank 103)",
  },
  {
    image: "/rtm2.jpg",
    name: "Punit Arya",
    role: "Automobile Researcher at VDRO",
    description: "Ex Automotive Mechatronics Engineer at mercedes benz",
  },
  {
    image: "/sunil.jpg",
    name: "Sunil Chaudhary",
    role: "IT System Researcher at VDRO",
    description: "Network Engineer at Data Center of Kotak Bank",
  },
  {
    image: "/kartik1.jpg",
    name: "Kartik Iyer",
    role: "Resarcher of vedic studies at VDRO",
    description: "MA Sanskrit, Acharya (Sahitya), UGC NET-SET Sanskrit",
  },
  {
    image: "/ankit.png",
    name: "Ankit Jangid",
    role: "Software Developer at VDRO and Full Stack web Developer.",
    description: "Bachelor of Engineering in Computer Science and Engineering",
  },
  
  // Add more members as needed
];

interface MemberCardProps {
  member: Member;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Team() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isLeaderExpanded, setIsLeaderExpanded] = useState(false);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Update the MemberCard component
  const MemberCard = ({ member, index, isExpanded, onToggle }: MemberCardProps) => (
    <div className="bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-auto w-full flex flex-col">
      <div className="w-full h-[250px] relative rounded-lg aspect-square">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-"
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-amber-400 mb-1.5 text-center">
          {member.name}
        </h3>
        <p className="text-xs text-gray-100 mb-2 text-center">
          {member.role}
        </p>
        <div className="flex-1 flex flex-col">
          <p className={`text-xs text-gray-100 text-center ${
            isExpanded ? "" : "line-clamp-3"
          }`}>
            {member.description}
          </p>
          {member.description.length > 100 && (
            <button
              onClick={onToggle}
              className="mt-2 text-amber-400 hover:text-amber-300 text-xs font-medium"
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
          <div className="flex flex-col lg:flex-row gap-8">
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
                    </h3>
                    <p className="text-xs text-amber-400 mb-2 line-clamp-2 text-center">
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

            {/* Update Vertical Divider visibility */}
            <div className="hidden lg:block w-px bg-amber-500/50 self-stretch mx-4" />

            {/* Update Advisory member Section width */}
            <div className="lg:w-3/4 w-full">
              <h4 className=" sm:text-3xl font-bold  text-gray-100 mb-10 mt-8 ">
              Advisory members of VDRO
              </h4>
              <div className="flex lg:flex-row flex-col sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
          <div className="flex lg:flex-row flex-col sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
