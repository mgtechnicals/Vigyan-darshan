import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your configuration options here
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "images.unsplash.com","flowbite.s3.amazonaws.com"], // Combine allowed domains into one array
  },
};

export default nextConfig;
