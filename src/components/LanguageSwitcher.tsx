"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Using flag images from flagcdn.com (free to use)
  const languages = [
    {
      code: "en",
      label: "EN",
      name: "English",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "id",
      label: "ID",
      name: "Indonesia",
      flag: "https://flagcdn.com/w40/id.png",
    },
    {
      code: "ja",
      label: "JA",
      name: "Japanese",
      flag: "https://flagcdn.com/w40/jp.png",
    },
    {
      code: "ms",
      label: "MS",
      name: "Malay",
      flag: "https://flagcdn.com/w40/my.png",
    },
  ];

  const selectedLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const changeLanguage = (langCode: "en" | "id" | "ja" | "ms") => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative ml-auto" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md bg-white/10 dark:bg-gray-800/60 text-sm font-medium transition-colors duration-200 text-gray-700 dark:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} flag`}
          width={20}
          height={15}
          className="rounded-sm shadow-sm object-cover"
        />
        <span className="font-bold">{selectedLanguage.label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() =>
                    changeLanguage(lang.code as "en" | "id" | "ja" | "ms")
                  }
                  className={`${
                    language === lang.code ? "bg-gray-100 dark:bg-gray-700" : ""
                  } flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    width={24}
                    height={18}
                    className="mr-3 rounded-sm shadow-sm object-cover"
                  />
                  <span>
                    <span className="font-bold mr-2">{lang.label}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      ({lang.name})
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
