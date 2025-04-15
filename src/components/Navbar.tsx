"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full backdrop-blur-[12px] shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center group">
            <div className="relative">
              <Image
                src="/logos/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <Link
              href="/"
              onClick={closeMenu}
              className="ml-3 text-amber-500 text-lg sm:text-xl md:text-2xl font-bold hover:text-amber-400 transition-colors duration-300 tracking-wide"
            >
              Vigyan Darshan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {[{ name: "Home", href: "/" }, 
            { name: "About Us", href: "/about" }, 
            { name: "Contact Us", href: "/contact" }, 
            { name: "Gallery", href: "/gallery" }, 
            { name: "Blog", href: "/blog" },
            { name: "Our Team", href: "/team" },
            { name: "Our Projects", href: "/projects" }
          ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={link.name === "Gallery" ? closeMenu : undefined}
                className="text-white px-4 py-2 text-sm font-medium hover:text-amber-500 hover:underline transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div ref={menuRef} className="lg:hidden mt-2 bg-gray-800 rounded-lg shadow-md">
          <ul className="py-2 space-y-2">
            {[{ name: "Home", href: "/" }, 
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Gallery", href:"/gallery" },
            { name: "Blog", href: "/blog" },
            { name: "Our Team", href: "/team" },
            { name: "Our Projects", href: "/projects" }].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-white hover:text-amber-500 hover:underline transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
