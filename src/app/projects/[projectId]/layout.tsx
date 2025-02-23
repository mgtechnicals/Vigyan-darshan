import type { Metadata } from "next";

// Generate dynamic metadata based on projectId
export async function generateMetadata({ 
  params 
}: { 
  params: { projectId: string } 
}): Promise<Metadata> {
  return {
    title: `${params.projectId} | Vigyan Darshan`,
    description: `Learn more about ${params.projectId} - an innovative research initiative at Vigyan Darshan.`,
    openGraph: {
      title: `${params.projectId} | Vigyan Darshan`,
      description: `Discover ${params.projectId}`,
      images: [`/${params.projectId.toLowerCase()}.jpg`],
    },
  };
}

type LayoutProps = {
  children: React.ReactNode;
  params: {
    projectId: string;
  };
}

export default function ProjectLayout({
  children
}: LayoutProps) {
  return (
    <main className="min-h-screen z-50">
      {children}
    </main>
  );
}