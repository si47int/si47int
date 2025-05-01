"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background image with 3:4 aspect ratio and 10% opacity */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/images/404-background.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content - positioned above the background */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-9xl font-bold text-white mb-2">404</h1>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg blur-md opacity-75"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4 py-2 px-6 rounded-lg bg-white/10 backdrop-blur-sm">
              {t("pageNotFound")}
            </h2>
          </div>
        </div>
        <div className="mt-12 opacity-100 hover:opacity-80 transition-opacity duration-300">
          <Image
            src="./images/404.png"
            alt=" Logo"
            width={100}
            height={80}
            className="mx-auto hover:rotate-12 transition-transform"
          />
        </div>
        <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
          {t("pageNotFoundDesc")}
        </p>

        <Link
          href="/"
          className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95"
        >
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}
