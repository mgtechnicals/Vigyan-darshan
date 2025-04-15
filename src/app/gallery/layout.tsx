import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Vigyan Darshan',
  description: 'Explore our gallery showcasing events, workshops, and moments from Vigyan Darshan.',
  openGraph: {
    title: 'Gallery | Vigyan Darshan',
    description: 'View our gallery of events and activities',
    images: ['/img1.jpg'],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}
