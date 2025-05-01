"use client";

import { useState, useEffect, ReactNode } from "react";
import LoadingScreen from "./LoadingScreen";

interface AppInitializerProps {
  children: ReactNode;
}

export default function AppInitializer({ children }: AppInitializerProps) {
  const [loading, setLoading] = useState(true);

  // Handle completion of loading screen
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // To prevent hydration mismatch, we'll start in loading state on both server and client
  useEffect(() => {
    // Check if we've already loaded before (for page navigations)
    const hasLoaded = sessionStorage.getItem("app-loaded");
    if (hasLoaded) {
      setLoading(false);
    } else {
      // Mark as loaded for future navigations
      sessionStorage.setItem("app-loaded", "true");
    }
  }, []);

  // Handle page visibility changes to stop/resume animations
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && loading) {
        // If page becomes visible again during loading, we might want to adjust behavior
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [loading]);

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-blue-600 dark:bg-gray-900">
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main content is only rendered after loading completes */}
      {!loading && children}
    </div>
  );
}
