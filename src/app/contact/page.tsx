import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pb-16 pt-24">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Section */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transition-transform hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
            <p className="text-white/80 dark:text-gray-300 mb-6">
              We are at Telkom University, a place where innovation and
              technology come together. You can visit us to talk more about our
              program.
            </p>
            <div className="relative overflow-hidden rounded-lg">
              <iframe
                src="https://maps.google.com/maps?q=Gedung%20Tokong%20Nanas%20Telkom%20University&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                title="Telkom University Location"
                className="border-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl transition-transform hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/80 dark:text-gray-300 mb-4">
              If you have any questions, please contact us through:
            </p>
            <div className="mb-8">
              <p className="text-white/80 dark:text-gray-300">
                <strong className="text-white">Email: </strong>
                <a
                  href="mailto:si47int@outlook.com"
                  className="text-yellow-300 dark:text-yellow-400 hover:underline transition-colors"
                  aria-label="Send us an email"
                >
                  si47int@outlook.com
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex flex-col space-y-4">
              

              <a
                href="https://www.instagram.com/47sinter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-all hover:translate-x-2"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/images/instagramlogo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span>Follow us on Instagram</span>
              </a>

              <a
                href="https://www.youtube.com/@si47int"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-all hover:translate-x-2"
                aria-label="Subscribe to our YouTube channel"
              >
                <Image
                  src="/images/youtubelogo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span>Subscribe to our YouTube channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
