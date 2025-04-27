"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import React from "react";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

type Props = {
  footer?: string;
};

const Homepage = (props: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for child animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="container mx-auto px-4 pt-24">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-5xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to{" "}
              <motion.span
                className="text-yellow-300 dark:text-yellow-400"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0px 0px 0px rgba(255,255,255,0)",
                    "0px 0px 8px rgba(255,255,255,0.5)",
                    "0px 0px 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                Sinter 47
              </motion.span>
              <br />
              International Class
            </motion.h2>
            <motion.p
              className="text-white/90 dark:text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              We are students from SI 47 International Class at Telkom
              University...
            </motion.p>
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.button
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm transition-all transform hover:scale-105"
                onClick={() => scrollToSection("about")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            variants={itemVariants}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg blur opacity-75"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 3, 0],
                scale: [0.98, 1, 0.98],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.img
              src="./images/Documentation/Global/Global1.JPG"
              alt="Documentation"
              className="relative w-full rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Global Standards",
              description: "Learn the latest and best in information systems",
            },
            {
              icon: "💡",
              title: "Encourage Innovations",
              description:
                "We encourage each other to create innovations that can change the way we live and work",
            },
            {
              icon: "🤝",
              title: "Global Network",
              description: "Collaborate with universities worldwide",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                y: -5,
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section id="gallery">
        <Gallery />
      </section>

      <motion.section
        id="hey"
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 15px rgba(255,255,255,0.5)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            Listen to Our Anthem
          </motion.h2>
          <motion.audio
            controls
            className="w-full max-w-md mx-auto custom-audio"
            whileHover={{ scale: 1.03 }}
          >
            <source
              src="./Songs/Coldplay - Viva La Vida.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </motion.audio>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Homepage;
