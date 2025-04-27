import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Gallery = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<"image" | "video">(
    "image"
  );

  // Helper function to determine if a file is a video
  const isVideo = (filename: string) => {
    return (
      filename.toLowerCase().endsWith(".mp4") ||
      filename.toLowerCase().endsWith(".mov") ||
      filename.toLowerCase().endsWith(".webm")
    );
  };

  const galleryImages = [
    {
      src: "./images/Documentation/Genesis/Genesis2.JPG",
      title: "Dari Waktu ke Waktu",
      description: "Cintaku padamu",
    },
    {
      src: "./images/Documentation/Genesis/Genesis1.JPG",
      title: "Padamu SI",
      description: "Kami berjanji",
    },
    {
      src: "./images/Documentation/Genesis/Genesis4.JPG",
      title: "We love cyan ku we do",
      description: "Cyanku we love you",
    },
    {
      src: "./images/Documentation/Genesis/Genesis5.JPG",
      title: "Syalalalalalala",
      description: "H~M~S~I",
    },
  ];

  const secondEventImages = [
    {
      src: "./images/Documentation/Makrab/Makrab1.JPG",
      title: "A Night to Remember",
      description:
        "The beginning of new friendships and unforgettable memories under the same stars.",
    },
    {
      src: "./images/Documentation/Makrab/Makrab2.JPG",
      title: "Laughter in Every Corner",
      description:
        "Smiles, jokes, and warm conversations that brought us closer as one family.",
    },
    {
      src: "./images/Documentation/Makrab/Makrab3.JPG",
      title: "Together, We Belong",
      description:
        "In this moment, we were more than classmates we were a team, a bond, a home.",
    },
    {
      src: "./images/Documentation/Makrab/Makrab4.JPG",
      title: "Hearts Connected",
      description:
        "Surrounded by nature, laughter, and friendship our hearts found their place",
    },
  ];

  // Add new array for badminton event images
  const badmintonEventImages = [
    {
      src: "./images/Documentation/Badminton/Badminton1.mp4",
      title: "Friendly Competition",
      description: "SI 47 INT students showing their badminton skills",
    },
    {
      src: "./images/Documentation/Badminton/Badminton2.JPG",
      title: "Team Spirit",
      description: "Supporting and cheering for teammates during matches",
    },
    {
      src: "./images/Documentation/Badminton/Badminton3.mp4",
      title: "Victory Pose",
      description: "Celebrating after an intense match",
    },
    {
      src: "./images/Documentation/Badminton/Badminton4.JPG",
      title: "Group Photo",
      description: "Everyone who participated in the badminton event",
    },
  ];

  // Add new array for GLOW event images
  const glowEventImages = [
    {
      src: "./images/Documentation/GLOW/GLOW1.JPG",
      title: "International Learning",
      description: "Students learning from Malaysian professors",
    },
    {
      src: "./images/Documentation/GLOW/GLOW2.JPG",
      title: "Class",
      description: "One class photo",
    },
    {
      src: "./images/Documentation/GLOW/GLOW3.JPG",
      title: "Opening Ceremony",
      description: "Opening the GLOW Program",
    },
    {
      src: "./images/Documentation/GLOW/GLOW4.JPG",
      title: "International Class",
      description: "Students attending international classes",
    },
  ];

  // Add new array for Buka Bersama event images
  const BUKBERImages = [
    {
      src: "./images/Documentation/BUKBER/BUKBER1.JPG",
      title: "Together",
      description: "SI 47 INT students gathering",
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER2.JPG",
      title: "Special Meal",
      description: "Sharing food and drinks",
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER3.JPG",
      title: "Friendship Moment",
      description: "Building bonds during this special time",
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER4.JPG",
      title: "Group Prayer",
      description: "Coming together in spirituality",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="gallery" className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Gallery
        </motion.h2>

        {/* First Event Section - Text on Left */}
        <motion.div
          className="mb-16 pb-8 border-b border-gray-700"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <motion.div className="lg:w-1/3 text-white" variants={textVariants}>
              <motion.h3
                className="text-2xl font-bold mb-2"
                variants={textVariants}
              >
                Genesis Graduation & Jacket Ceremony
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                24 November 2024
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                This was a special moment where we officially graduated from
                Genesis and received our Himpunan Jacket. It was more than just
                a ceremony it was a symbol of trust and responsibility.
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                From this day on, we carry the name of Information Systems,
                Telkom University, with pride and honor. Every thread of the
                jacket reminds us of our journey, our growth, and our unity.
              </motion.p>
              <motion.p variants={textVariants}>
                This event marked the beginning of our duty as true members of
                the organization. With hearts full of memories and dreams, we
                are ready to take our next steps together.
              </motion.p>
            </motion.div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedImage(img.src)}
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Event Section - Text on Right */}
        <motion.div
          className="mb-16 pb-8 border-b border-gray-700"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Event Description (now on right) */}
            <motion.div className="lg:w-1/3 text-white" variants={textVariants}>
              <motion.h3
                className="text-2xl font-bold mb-2"
                variants={textVariants}
              >
                Makrab SI 47 INT
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                10 January 2025
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                Makrab SI 47 INT was a special night where all classmates
                gathered to get to know each other better. We spent time
                together in a fun and relaxing place outside the campus.
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                There were many exciting activities like games, and a bonfire.
                We laughed, talked, and created great memories as a class.
              </motion.p>
              <motion.p variants={textVariants}>
                This event helped us build stronger friendship and teamwork in
                SI 47 INT. It was a night full of joy, connection, and
                unforgettable moments for everyone.
              </motion.p>
            </motion.div>

            {/* Event Gallery (now on left) */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {secondEventImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedImage(img.src)}
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Event Section - Badminton - Text on Left */}
        <motion.div
          className="mb-16 pb-8 border-b border-gray-700"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <motion.div className="lg:w-1/3 text-white" variants={textVariants}>
              <motion.h3
                className="text-2xl font-bold mb-2"
                variants={textVariants}
              >
                SI 47 INT Badminton Tournament
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                26 April 2025
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                We held a fun badminton game to help us stay active and become
                closer friends. Everyone could play and have fun together.
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                We played at SIGMA GOR. We made courts for one player games and
                two player games. All students could join, even if they were not
                good at badminton, so everyone had fun.
              </motion.p>
              <motion.p variants={textVariants}>
                The games gave us a good break from our school work. We could
                make friends through sports. We cheered, laughed, and worked as
                a team, which made this day special for everyone.
              </motion.p>
            </motion.div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {badmintonEventImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img.src);
                      setSelectedMediaType(
                        isVideo(img.src) ? "video" : "image"
                      );
                    }}
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {isVideo(img.src) ? (
                      <motion.video
                        src={img.src}
                        className="w-full h-64 object-cover"
                        muted
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <motion.img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fourth Event Section - GLOW - Text on Right */}
        <motion.div
          className="mb-16 pb-8 border-b border-gray-700"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Event Description */}
            <motion.div className="lg:w-1/3 text-white" variants={textVariants}>
              <motion.h3
                className="text-2xl font-bold mb-2"
                variants={textVariants}
              >
                GLOW International Program
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                12 July 2024
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                GLOW is a special program at Telkom University that brings
                teachers from Malaysia. The program started at Tokong Nanas
                Building to help students learn in an international way.
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                Six teachers from different Malaysia universities came to teach
                six subjects. They teach students from four study programs at
                Telkom University.
              </motion.p>
              <motion.p variants={textVariants}>
                This program helps students learn new things and see how
                students in other countries learn. It makes Telkom University
                more international and helps our students get ready for the
                world.
              </motion.p>
            </motion.div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {glowEventImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedImage(img.src)}
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fifth Event Section - Buka Bersama - Text on Left */}
        <motion.div
          className="mb-16 pb-8 border-b border-gray-700"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <motion.div className="lg:w-1/3 text-white" variants={textVariants}>
              <motion.h3
                className="text-2xl font-bold mb-2"
                variants={textVariants}
              >
                Buka Bersama SI 47 INT
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                23 March 2024
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                We held a special Buka Bersama event where all students came
                together. It was a time to share food and stories as we
                celebrated this special day.
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                Everyone brought different foods to share. We sat together,
                talked, and waited for the time. Some students also led prayers
                before we ate.
              </motion.p>
              <motion.p variants={textVariants}>
                This event helped us learn about each other's cultures and grow
                closer as friends. We made good memories and felt like a real
                family at SI 47 INT.
              </motion.p>
            </motion.div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BUKBERImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setSelectedImage(img.src)}
                    variants={imageVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Image/Video Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-7xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <motion.button
                title="Close"
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {selectedMediaType === "video" ? (
                <motion.video
                  src={selectedImage}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              ) : (
                <motion.img
                  src={selectedImage}
                  alt="Selected image"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                  layoutId={selectedImage}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
