import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {};

const Gallery = (props: Props) => {
  const { t } = useLanguage(); // Add this line to access translations
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
      title: t("genesisImage1Title"),
      description: t("genesisImage1Desc"),
    },
    {
      src: "./images/Documentation/Genesis/Genesis1.JPG",
      title: t("genesisImage2Title"),
      description: t("genesisImage2Desc"),
    },
    {
      src: "./images/Documentation/Genesis/Genesis4.JPG",
      title: t("genesisImage3Title"),
      description: t("genesisImage3Desc"),
    },
    {
      src: "./images/Documentation/Genesis/Genesis5.JPG",
      title: t("genesisImage4Title"),
      description: t("genesisImage4Desc"),
    },
  ];

  const secondEventImages = [
    {
      src: "./images/Documentation/Makrab/Makrab1.JPG",
      title: t("makrabImage1Title"),
      description: t("makrabImage1Desc"),
    },
    {
      src: "./images/Documentation/Makrab/Makrab2.JPG",
      title: t("makrabImage2Title"),
      description: t("makrabImage2Desc"),
    },
    {
      src: "./images/Documentation/Makrab/Makrab3.JPG",
      title: t("makrabImage3Title"),
      description: t("makrabImage3Desc"),
    },
    {
      src: "./images/Documentation/Makrab/Makrab4.JPG",
      title: t("makrabImage4Title"),
      description: t("makrabImage4Desc"),
    },
  ];

  // Add new array for badminton event images
  const badmintonEventImages = [
    {
      src: "./images/Documentation/Badminton/Badminton1.mp4",
      title: t("badmintonImage1Title"),
      description: t("badmintonImage1Desc"),
    },
    {
      src: "./images/Documentation/Badminton/Badminton2.JPG",
      title: t("badmintonImage2Title"),
      description: t("badmintonImage2Desc"),
    },
    {
      src: "./images/Documentation/Badminton/Badminton3.mp4",
      title: t("badmintonImage3Title"),
      description: t("badmintonImage3Desc"),
    },
    {
      src: "./images/Documentation/Badminton/Badminton4.JPG",
      title: t("badmintonImage4Title"),
      description: t("badmintonImage4Desc"),
    },
  ];

  // Add new array for GLOW event images
  const glowEventImages = [
    {
      src: "./images/Documentation/GLOW/GLOW1.JPG",
      title: t("glowImage1Title"),
      description: t("glowImage1Desc"),
    },
    {
      src: "./images/Documentation/GLOW/GLOW2.JPG",
      title: t("glowImage2Title"),
      description: t("glowImage2Desc"),
    },
    {
      src: "./images/Documentation/GLOW/GLOW3.JPG",
      title: t("glowImage3Title"),
      description: t("glowImage3Desc"),
    },
    {
      src: "./images/Documentation/GLOW/GLOW4.JPG",
      title: t("glowImage4Title"),
      description: t("glowImage4Desc"),
    },
  ];

  // Add new array for Buka Bersama event images
  const BUKBERImages = [
    {
      src: "./images/Documentation/BUKBER/BUKBER1.JPG",
      title: t("bukberImage1Title"),
      description: t("bukberImage1Desc"),
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER2.JPG",
      title: t("bukberImage2Title"),
      description: t("bukberImage2Desc"),
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER3.JPG",
      title: t("bukberImage3Title"),
      description: t("bukberImage3Desc"),
    },
    {
      src: "./images/Documentation/BUKBER/BUKBER4.JPG",
      title: t("bukberImage4Title"),
      description: t("bukberImage4Desc"),
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
          {t("ourGallery")}
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
                {t("genesisTitle")}
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                {t("genesisDate")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("genesisDesc1")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("genesisDesc2")}
              </motion.p>
              <motion.p variants={textVariants}>{t("genesisDesc3")}</motion.p>
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
                {t("makrabTitle")}
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                {t("makrabDate")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("makrabDesc1")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("makrabDesc2")}
              </motion.p>
              <motion.p variants={textVariants}>{t("makrabDesc3")}</motion.p>
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
                {t("badmintonTitle")}
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                {t("badmintonDate")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("badmintonDesc1")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("badmintonDesc2")}
              </motion.p>
              <motion.p variants={textVariants}>{t("badmintonDesc3")}</motion.p>
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
                {t("glowTitle")}
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                {t("glowDate")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("glowDesc1")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("glowDesc2")}
              </motion.p>
              <motion.p variants={textVariants}>{t("glowDesc3")}</motion.p>
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
                {t("bukberTitle")}
              </motion.h3>
              <motion.p
                className="text-yellow-300 dark:text-yellow-400 mb-4"
                variants={textVariants}
              >
                {t("bukberDate")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("bukberDesc1")}
              </motion.p>
              <motion.p className="mb-4" variants={textVariants}>
                {t("bukberDesc2")}
              </motion.p>
              <motion.p variants={textVariants}>{t("bukberDesc3")}</motion.p>
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
