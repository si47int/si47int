"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export default function ClientAnimationWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
