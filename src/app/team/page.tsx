import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Vigyan Darshan',
  description: 'Meet the talented team behind Vigyan Darshan. Our experts in technology, marketing, and development are dedicated to delivering excellence.',
  openGraph: {
    title: 'Our Team | Vigyan Darshan',
    description: 'Meet the talented team behind Vigyan Darshan',
    images: ['/img1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const teamMembers = [
  {
    image: "/img1.jpg",
    name: "Mohit Gaur",
    role: "CEO & Founder",
    description: "Mohit is the visionary behind our company, dedicated to leading us toward success with his vast experience in the industry."
  },
  {
    image: "/team2.jpg",
    name: "Jane Smith",
    role: "Chief Technology Officer",
    description: "Jane brings innovation and tech expertise, always pushing the boundaries of what’s possible."
  },
  {
    image: "/team3.jpg",
    name: "Sam Wilson",
    role: "Marketing Director",
    description: "Sam is our marketing mastermind, responsible for crafting the strategies that drive our growth."
  },
  {
    image: "/team4.jpg",
    name: "Emma Stone",
    role: "Lead Developer",
    description: "Emma is an expert developer who ensures our product’s functionality is top-notch."
  },
  {
    image: "/team5.jpg",
    name: "Michael Brown",
    role: "Designer",
    description: "Michael brings creativity and innovation to every design project, ensuring it resonates with our users."
  },
  {
    image: "/team6.jpg",
    name: "Sarah Lee",
    role: "Operations Manager",
    description: "Sarah ensures smooth operations and is the backbone of our efficient workflow."
  }
];

export default function Team() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vigyan Darshan",
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.description,
      "image": `https://your-domain.com${member.image}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section 
        className="py-20 bg-gray-900 text-white" 
        id="team"
        aria-label="Team Members Section"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-amber-500 mb-10 pt-10">
            Meet Our Team
          </h2>

          <div 
            className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            role="list"
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                role="listitem"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={250}
                  height={250}
                  className="w-full h-48 object-fit-cover"
                  priority={index < 4} // Prioritize loading first 4 images
                  loading={index < 4 ? 'eager' : 'lazy'}
                  fetchPriority={index < 4 ? 'high' : 'low'}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-amber-400 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.description}</p>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

