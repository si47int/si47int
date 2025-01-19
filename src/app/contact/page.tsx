import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pb-16 pt-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Section */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
            <p className="text-white/80 dark:text-gray-300 mb-6">
              We are at Telkom University, a place where innovation and
              technology come together. You can visit us to talk more about our
              program.
            </p>
            <iframe
              src="https://maps.google.com/maps?q=Gedung%20Tokong%20Nanas%20Telkom%20University&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-white/80 dark:text-gray-300 mb-4">
              If you have any questions, please contact us through:
            </p>
            <div className="mb-8">
              <p className="text-white/80 dark:text-gray-300">
                <strong className="text-white">Email: </strong>
                <a
                  href="mailto:si47int@outlook.com"
                  className="text-yellow-300 dark:text-yellow-400 hover:underline"
                >
                  si47int@outlook.com
                </a>
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-4">
              <Link
                href="https://discord.com"
                target="_blank"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <img
                  src="images/discord-logo.png"
                  alt="Discord"
                  className="w-8 h-8"
                />
                <span>Join our Discord server</span>
              </Link>

              <Link
                href="https://www.instagram.com/47sinter"
                target="_blank"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <img
                  src="images/instagramlogo.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
                <span>Follow us on Instagram</span>
              </Link>

              <Link
                href="https://www.youtube.com/@si47int"
                target="_blank"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <img
                  src="images/youtubelogo.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
                <span>Subscribe to our YouTube channel</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
