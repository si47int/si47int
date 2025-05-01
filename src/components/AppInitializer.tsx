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

  return (
    <div className="relative">
      {/* Main content is always rendered but may be visually obscured by the loading popup */}
      {children}

      {/* Loading popup overlay */}
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
    </div>
  );
}
