import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "/img1.jpg", // Replace with actual image path
    },
    {
      name: "Jane Smith",
      role: "UX/UI Designer",
      image: "/images/team2.jpg", // Replace with actual image path
    },
    {
      name: "Michael Johnson",
      role: "Project Manager",
      image: "/images/team3.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.image} // Path to the team member image
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
