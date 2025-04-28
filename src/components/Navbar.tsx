"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const { t } = useLanguage();

  // Handle window resize and initial size detection
  useEffect(() => {
    // Set initial window width
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
  }, []);

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="./images/logo.png"
            alt="Class Logo"
            width={40}
            height={40}
            className="hover:rotate-6 hover:scale-110 transition-transform"
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-90"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6 dark:text-white"
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
                  className="block py-2 px-4 lg:px-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li className="hover:scale-105 active:scale-95 transition-transform">
                <Link
                  href="/album"
                  className="block py-2 px-4 lg:px-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("album")}
                </Link>
              </li>
              <li className="hover:scale-105 active:scale-95 transition-transform">
                <Link
                  href="/contact"
                  className="block py-2 px-4 lg:px-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 lg:hover:bg-transparent rounded-lg transition"
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
