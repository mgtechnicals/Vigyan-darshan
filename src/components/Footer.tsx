"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="mt-auto backdrop-blur-md text-white py-4 relative pt-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: "200px 200px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="text-center md:text-left animate-fade-in-down">
            <div className="flex items-center justify-center md:justify-start group mb-4">
              <div className="animate-bounce hover:animate-none">
                <Image
                  src="/logos/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="drop-shadow-2xl transition-transform duration-500 hover:rotate-180"
                  priority={false}
                />
              </div>
              <Link
                href="/"
                className="text-xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-500 transition duration-300 hover:scale-110"
              >
                Vigyan Darshan
              </Link>
            </div>
            <p className="text-gray-100 text-base leading-relaxed bg-black/30 p-3 rounded-xl shadow-2xl backdrop-blur-sm transform transition duration-300 hover:scale-105 hover:bg-black/40">
              Exploring the intersection of science, philosophy, and
              spirituality through engaging content and meaningful discussions.
            </p>
          </div>

          {/* Quick Links - adjust text sizes and spacing */}
          <div
            className="text-center animate-fade-in-down"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-400">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-1">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Our Team", path: "/team" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-white px-3 py-2 hover:text-amber-500 flex-row items-center "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links - adjust text sizes */}
          <div
            className="text-center md:text-center animate-fade-in-down"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-500">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-5 text-sm">
              {[
                {
                  href: "https://www.facebook.com",
                  icon: "facebook-f",
                  label: "Facebook",
                  bgColor: "bg-[#1877f2]", // Facebook blue
                },
                {
                  href: "https://x.com/Vigyan_darshan",
                  icon: "twitter",
                  label: "Twitter",
                  bgColor: "bg-[#1da1f2]", // Twitter blue
                },
                {
                  href: "https://www.instagram.com/vigyandarshan/",
                  icon: "instagram",
                  label: "Instagram",
                  bgColor: "bg-[#e1306c]", // Instagram pink
                },
                {
                  href: "https://www.youtube.com/@Vigyandarshan",
                  icon: "youtube",
                  label: "YouTube",
                  bgColor: "bg-[#ff0000]", // YouTube red
                },
              ].map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 rounded-full ${social.bgColor} hover:bg-opacity-80 transition duration-300`}
                >
                  <i
                    className={`fab fa-${social.icon} text-white text-xl`}
                    aria-hidden="true"
                  ></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700/50 mt-6 pt-4 animate-fade-in-down"
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center text-xs text-gray-400">
            <p className="transition duration-300 hover:scale-105 hover:text-gray-300">
              &copy; {new Date().getFullYear()} Vigyan Darshan. All rights
              reserved.
            </p>
            <p className="mt-2 transition duration-300 hover:scale-105 hover:text-gray-300 flex items-center justify-center gap-1">
              Made with{" "} MG Technicals
              <span className="text-red-500 animate-pulse text-sm">❤</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
