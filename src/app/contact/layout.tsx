import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Vigyan Darshan',
  description: 'Explore our gallery showcasing events, workshops, and moments from Vigyan Darshan.',
  openGraph: {
    title: 'Contact Us | Vigyan Darshan',
    description: 'View our gallery of events and activities',
    // images: ['/img1.jpg'],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}
