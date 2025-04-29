"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const { t } = useLanguage();

  // Handle window resize and initial size detection
  useEffect(() => {
    // Set initial window width on client side only
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Update width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Add scroll state to adjust navbar appearance on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-blue-600/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-white/10 fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          {/* Replace external image with local image path */}
          <Image
            src="/images/logo.png"
            alt="Sinter47 Logo"
            width={40}
            height={40}
            className="hover:rotate-6 hover:scale-110 transition-transform"
            priority
          />
          <span className="text-lg font-semibold text-white">
            <span className="lg:hidden">SINTER47</span>
            <span className="hidden lg:inline">
              Sinter 47 International Class
            </span>
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Moved ThemeToggle before LanguageSwitcher */}
          <ThemeToggle />

          {/* Language Switcher component will position itself on the far right */}
          <LanguageSwitcher />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors active:scale-90"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {(isMenuOpen || windowWidth >= 1024) && (
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto transition-all duration-300`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center mt-4 lg:mt-0">
              <li className="hover:scale-105 active:scale-95 transition-transform">
                <Link
                  href="/"
                  className="block py-2 px-4 lg:px-2 text-white hover:bg-white/10 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li className="hover:scale-105 active:scale-95 transition-transform">
                <Link
                  href="/album"
                  className="block py-2 px-4 lg:px-2 text-white hover:bg-white/10 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("album")}
                </Link>
              </li>
              <li className="hover:scale-105 active:scale-95 transition-transform">
                <Link
                  href="/contact"
                  className="block py-2 px-4 lg:px-2 text-white hover:bg-white/10 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
