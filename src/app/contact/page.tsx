"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pb-16 pt-24">
        <motion.h1
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact{" "}
          <motion.span
            className="text-yellow-300 dark:text-yellow-400"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 10px rgba(255,255,255,0.5)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Us
          </motion.span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Section */}
          <motion.div
            className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transition-transform hover:scale-[1.02]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
            <p className="text-white/80 dark:text-gray-300 mb-6">
              We are at Telkom University, a place where innovation and
              technology come together.
            </p>
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <iframe
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gedung%20Tokong%20Nanas%20Telkom%20University,%20bandung,%20Indonesia+(My%20Business%20Name)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transition-transform hover:scale-[1.02]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/80 dark:text-gray-300 mb-4">
              If you have any questions, please contact us through:
            </p>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white/80 dark:text-gray-300">
                <strong className="text-white">Email: </strong>
                <motion.a
                  href="mailto:si47int@outlook.com"
                  className="text-yellow-300 dark:text-yellow-400 hover:underline transition-colors"
                  aria-label="Send us an email"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  si47int@outlook.com
                </motion.a>
              </p>
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex flex-col space-y-4">
              <motion.a
                href="https://www.instagram.com/47sinter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-all"
                aria-label="Follow us on Instagram"
                whileHover={{ x: 10, color: "#ffffff" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <img
                  src="./images/instagramlogo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span>Follow us on Instagram</span>
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@si47int"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-all"
                aria-label="Subscribe to our YouTube channel"
                whileHover={{ x: 10, color: "#ffffff" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <img
                  src="./images/youtubelogo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span>Subscribe to our YouTube channel</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
