"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import React from "react";
import Gallery from "./Gallery";
import { useRouter } from "next/router";

type Props = {
  footer?: string;
};

const Homepage = (props: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="container mx-auto px-4 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-yellow-300 dark:text-yellow-400">
                Sinter 47
              </span>
              <br />
              International Class
            </h2>
            <p className="text-white/90 dark:text-gray-300 text-lg leading-relaxed">
              We are students from SI 47 International Class at Telkom
              University...
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm transition-all transform hover:scale-105"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="./images/Documentation/Documentation3.JPG"
              alt="Documentation"
              className="relative w-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          What We Do?
        </h2>
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
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

        <section id="gallery">
            <Gallery />
        </section>
      

        <section id="hey" className="container mx-auto px-4 py-16">
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Listen to Our Anthem
          </h2>
          <audio controls className="w-full max-w-md mx-auto custom-audio">
            <source
              src="./Songs/Coldplay - Viva La Vida.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
