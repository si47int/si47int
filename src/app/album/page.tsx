"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";

// Define types for class members
interface SocialLinks {
  instagram: string;
  linkedin?: string;
  github?: string;
  tiktok?: string;
  youtube?: string;
  email?: string;
  website?: string;
  spotify?: string; // Added Spotify field
}

interface ClassMember {
  name: string;
  role: string;
  image?: string;
  images?: string[];
  description: string;
  socialLinks: SocialLinks;
}

export default function Album() {
  const classMembers: ClassMember[] = [
    {
      name: "Anak Agung Gde Agung Wira Indramawan",
      role: "Class Member",
      images: [
        "./images/Personimage/Wira/wira.jpg",
        "./images/Personimage/Wira/wira1.jpg",
        "./images/Personimage/Wira/wira2.jpg",
        "./images/Personimage/Wira/wira3.jpg",
      ],
      description: "alamakk jangg ada web kelas cuy😹😹",
      socialLinks: {
        instagram: "https://www.instagram.com/rawii1_",
        linkedin: "https://www.linkedin.com/in/agungwira",
        github: "https://github.com/Azdetic",
        email: "mailto:agungindramawan@outlook.com?subject=Hi%20Wira",
        website: "https://azdetic.github.io/Agwira",
        spotify:
          "https://open.spotify.com/user/c9f0dqmj29gofdem0ta0ur5gh?si=d33d68b4cf1d4cd6",
      },
    },
    {
      name: "Muhammad Iqbal Abhipraya",
      role: "Class Member",
      image: "./images/Personimage/user.jpg",
      description: "Information System enthusiast with a passion for AI",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        tiktok: "#",
        youtube: "#",
        email: "#",
        website: "#",
        spotify: "#",
      },
    },
    {
      name: "Rasya Akbar Lazuardi",
      role: "Class Member",
      image: "./images/Personimage/Rasya/Akbar.jpg",
      description: "Information System enthusiast with a passion for AI",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        tiktok: "#",
        youtube: "#",
        website: "#",
        email: "mailto:rasyaakbarlptp@gmail.com?subject=Hi%20Rasya",
        spotify: "#",
      },
    },
    {
      name: "Thiflan Hakim Alfarizzy",
      role: "Class Member",
      image: "./images/Personimage/Thiflan/Thiflan.jpg",
      description: "Chicken Enthusiast, Practicum Assistant of Jarkom",
      socialLinks: {
        instagram: "https://www.instagram.com/yzzirafla",
        linkedin: "https://www.linkedin.com/in/alfarizzy/",
        github: "https://github.com/thiflana",
        tiktok: "https://www.tiktok.com/@dr.eveland",
        youtube: "https://www.youtube.com/@thiflana6523",
        website: "https://thiflana.github.io/cv-html/",
        email: "mailto:thiflansetiawan@gmail.com?subject=Hi%20Thiflan",
      },
    },
    {
      name: "Ahmad Dwi Juliyansyah",
      role: "Class Member",
      image: "./images/Personimage/Dwi/Dwi.jpeg",
      description: "Information System student who likes to explore anything.",
      socialLinks: {
        instagram: "https://www.instagram.com/ahmdddwi",
        linkedin: "https://www.linkedin.com/in/ahmaddwijuliyansyah/",
        github: "https://github.com/AhmadDwiJ",
        youtube:
          "https://youtube.com/@ahmaddwijuliyansyah8153?si=t5dMYT86--lf1QGz",
        website: "https://ahmaddwij.github.io/WebsitePorto/",
        email: "mailto:ahmad.wii000@gmail.com?subject=Hi%20Ahmad",
      },
    },
    // Add more members here with the same structure
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300">
        {/* Copy the entire nav section from home page */}
      </nav>

      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="text-yellow-300 dark:text-yellow-400">
              Class Members
            </span>
          </h1>
          <p className="text-white/90 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know the amazing individuals who make up Sinter 47
            International Class. Each member brings unique talents and
            perspectives to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              {/* Image or Image Carousel */}
              {index === 0 ? (
                member.images && (
                  <ImageCarousel images={member.images} name={member.name} />
                )
              ) : (
                <div className="relative w-full h-fit mb-6 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                </div>
              )}

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-3">
                {member.role}
              </p>
              <p className="text-white/80 dark:text-gray-300 mb-4">
                {member.description}
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {/* Instagram */}
                <Link
                  href={member.socialLinks.instagram}
                  className="text-white/80 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* TikTok */}
                {member.socialLinks.tiktok && (
                  <Link
                    href={member.socialLinks.tiktok}
                    className="text-white/80 hover:text-white transition"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.9a4.84 4.84 0 01-1.2 0z" />
                    </svg>
                  </Link>
                )}

                {/* YouTube */}
                {member.socialLinks.youtube && (
                  <Link
                    href={member.socialLinks.youtube}
                    className="text-white/80 hover:text-white transition"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                )}

                {/* LinkedIn */}
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    className="text-white/80 hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                )}

                {/* GitHub */}
                {member.socialLinks.github && (
                  <Link
                    href={member.socialLinks.github}
                    className="text-white/80 hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                )}

                {/* Website */}
                {member.socialLinks.website && (
                  <Link
                    href={member.socialLinks.website}
                    className="text-white/80 hover:text-white transition"
                    aria-label="Personal Website"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </Link>
                )}

                {/* Spotify - New icon for Spotify */}
                {member.socialLinks.spotify && (
                  <Link
                    href={member.socialLinks.spotify}
                    className="text-white/80 hover:text-white transition"
                    aria-label="Spotify"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </Link>
                )}

                {/* Email */}
                {member.socialLinks.email &&
                  member.socialLinks.email !== "#" && (
                    <Link
                      href={
                        member.socialLinks.email.startsWith("mailto:")
                          ? member.socialLinks.email
                          : `mailto:${member.socialLinks.email}`
                      }
                      className="text-white/80 hover:text-white transition"
                      aria-label="Email"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </Link>
                  )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
