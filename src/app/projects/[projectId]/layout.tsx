import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IITB-VDRO PVD Internship Program 2025',
  description: 'Vigyan Darshan Research Organization (VDRO) in collaboration with Prof Gopal Dixit, IIT Bombay - 6-Month Paid Research Internship Opportunity',
  keywords: ['internship', 'research', 'IIT Bombay', 'VDRO', 'paid internship'],
  authors: [{ name: 'VDRO' }],
  viewport: 'width=device-width, initial-scale=1',
}

interface ProjectLayoutProps {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}