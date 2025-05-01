"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface LoadingScreenProps {
  onComplete: () => void;
  minDisplayTime?: number; // Minimum time to display in ms
}

export default function LoadingScreen({
  onComplete,
  minDisplayTime = 2000, // Default 2 seconds minimum display time
}: LoadingScreenProps) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [readyToHide, setReadyToHide] = useState(false);
  const [displayTimeElapsed, setDisplayTimeElapsed] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    // Start the minimum display time timer
    const displayTimer = setTimeout(() => {
      setDisplayTimeElapsed(true);
      if (readyToHide) {
        onComplete();
      }
    }, minDisplayTime);

    // Simulate progress
    let interval: NodeJS.Timeout;
    let currentProgress = 0;

    // We'll make loading a bit random to look more natural
    const simulateProgress = () => {
      interval = setInterval(() => {
        // Slow down as we approach 100%
        const increment =
          currentProgress < 50
            ? 2 + Math.random() * 5
            : currentProgress < 85
            ? 0.5 + Math.random() * 2
            : 0.1 + Math.random() * 0.5;

        currentProgress = Math.min(currentProgress + increment, 100);
        setProgress(Math.floor(currentProgress));

        if (currentProgress >= 100) {
          clearInterval(interval);
          setReadyToHide(true);
          if (displayTimeElapsed) {
            onComplete();
          }
        }
      }, 50 + Math.random() * 50); // Random interval for more natural loading
    };

    simulateProgress();

    return () => {
      clearInterval(interval);
      clearTimeout(displayTimer);
    };
  }, [onComplete, minDisplayTime, displayTimeElapsed]);

  // Handle skip button click
  const handleSkip = () => {
    setProgress(100);
    setReadyToHide(true);
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-blue-600 dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="container max-w-md mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Sinter47 Logo"
            width={120}
            height={120}
            className="mx-auto animate-pulse"
            priority
          />
          <h1 className="text-3xl font-bold text-white mt-4">SINTER47</h1>
          <p className="text-white/80 mt-2">International Class</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-blue-800/50 dark:bg-gray-800/50 rounded-full h-4 mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-300 to-pink-500 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading text and percentage */}
        <div className="flex justify-between text-white mb-8">
          <span className="text-sm">{t("loading")}...</span>
          <span className="text-sm font-bold">{progress}%</span>
        </div>

        {/* Skip button that appears after 20% progress */}
        {progress > 20 && (
          <button
            onClick={handleSkip}
            className="text-white/70 hover:text-white text-sm underline transition-colors"
          >
            {t("skipLoading")}
          </button>
        )}
      </div>
    </div>
  );
}
