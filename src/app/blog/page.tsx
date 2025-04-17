// components/blog-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const blogs = [
  {
    id: 1,
    title: "blog post 1",
    description: "This is a sample blog post description. It provides a brief overview of the content.",
    date: "April 10, 2025",
    author: "John Doe",
    href: "#"
  },
  {
    id: 2,
    title: "Blog Post 2",
    description: " This is another sample blog post description. It provides a brief overview of the content.",
    date: "April 5, 2025",
    author: "Jane Smith",
    href: "#"
  },
  {
    id: 3,
    title: "Blog Post 3",
    description: "This is yet another sample blog post description. It provides a brief overview of the content.",
    date: "March 28, 2025",
    author: "Alex Ray",
    href: "#"
  },
  {
    id: 3,
    title: "Blog Post 4",
    description: "This is yet another sample blog post description. It provides a brief overview of the content.",
    date: "March 28, 2025",
    author: "Alex Ray",
    href: "#"
  }
]

const page = () => {
  return (
       <section className="py-16 dark:bg-background">
      <div className="container max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">Latest Blog Posts</h2>
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((post) => (
            <Card key={post.id} className="hover:shadow-lg bg-backdrop-blur-sm shadow-md rounded-lg p-4">
              <CardHeader className="flex flex-col items-start mb-4">
                <Image src="/images/blog-thumbnail.jpg" alt={post.title} width={100} height={100} className="w-full h-32 object-cover rounded-md mb-2" />
              </CardHeader> 

              <CardHeader>
                <CardTitle className="text-white">{post.title}</CardTitle>
                <CardDescription className="text-white">{post.date} &middot; {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground text-white">{post.description}</p>
                <Link href={post.href}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page

