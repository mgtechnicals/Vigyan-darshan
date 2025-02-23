import type { Metadata } from "next";

// Generate dynamic metadata based on projectId
export async function generateMetadata({ params }: { params: { projectId: string } }): Promise<Metadata> {
  // You can fetch project data here if needed
  return {
    title: `${params.projectId} | Vigyan Darshan`,
    description: `Learn more about ${params.projectId} - an innovative research initiative at Vigyan Darshan.`,
    openGraph: {
      title: `${params.projectId} | Vigyan Darshan`,
      description: `Discover ${params.projectId} – an innovative solution for enhancing scientific research and technological development.`,
      images: [`/${params.projectId.toLowerCase()}.jpg`], // Assuming image naming convention
    },
  };
}

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: {
    projectId: string;
  };
}

export default function ProjectLayout({ children}: ProjectLayoutProps) {
  return (
    <main className="min-h-screen z-50">
      {children}
    </main>
  );
}