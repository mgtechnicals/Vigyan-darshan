import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | Vigyan Darshan",
    description:
      "Meet the talented team behind Vigyan Darshan. Our experts in technology, marketing, and development are dedicated to delivering excellence.",
    openGraph: {
      title: "Our Team | Vigyan Darshan",
      description: "Meet the talented team behind Vigyan Darshan",
      images: ["/img1.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen z-50">
            {children}
        </main>
    );
}