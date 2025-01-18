import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <img src="./images/logo.png" alt="Class Logo" width={40} height={40} />
          <span className="text-lg font-semibold dark:text-white">
            Sinter 47 International Class
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="lg:hidden">
            <button
              className="focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
            <li>
              <Link
                href="/"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/album"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                Album
              </Link>
            </li>
            <li>
              <Link
                href="contact.html"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
