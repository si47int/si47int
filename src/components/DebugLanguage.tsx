"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function DebugLanguage() {
  const { language, t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800/80 text-white p-2 rounded-md text-xs z-50">
      <div>Current Language: {language}</div>
      <div>Test Translation: {t("welcome")}</div>
    </div>
  );
}
