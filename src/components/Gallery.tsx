import React, { useState } from "react";
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

  return (
    <>
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          {t("ourGallery")}
        </h2>

        {/* First Event Section - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">{t("genesisTitle")}</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                {t("genesisDate")}
              </p>
              <p className="mb-4">{t("genesisDesc1")}</p>
              <p className="mb-4">{t("genesisDesc2")}</p>
              <p>{t("genesisDesc3")}</p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Event Section - Text on Right */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Event Description (now on right) */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">{t("makrabTitle")}</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                {t("makrabDate")}
              </p>
              <p className="mb-4">{t("makrabDesc1")}</p>
              <p className="mb-4">{t("makrabDesc2")}</p>
              <p>{t("makrabDesc3")}</p>
            </div>

            {/* Event Gallery (now on left) */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {secondEventImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Event Section - Badminton - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">{t("badmintonTitle")}</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                {t("badmintonDate")}
              </p>
              <p className="mb-4">{t("badmintonDesc1")}</p>
              <p className="mb-4">{t("badmintonDesc2")}</p>
              <p>{t("badmintonDesc3")}</p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {badmintonEventImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      setSelectedImage(img.src);
                      setSelectedMediaType(
                        isVideo(img.src) ? "video" : "image"
                      );
                    }}
                  >
                    {isVideo(img.src) ? (
                      <video
                        src={img.src}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                      />
                    ) : (
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Event Section - GLOW - Text on Right */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">{t("glowTitle")}</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                {t("glowDate")}
              </p>
              <p className="mb-4">{t("glowDesc1")}</p>
              <p className="mb-4">{t("glowDesc2")}</p>
              <p>{t("glowDesc3")}</p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {glowEventImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Event Section - Buka Bersama - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">{t("bukberTitle")}</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                {t("bukberDate")}
              </p>
              <p className="mb-4">{t("bukberDesc1")}</p>
              <p className="mb-4">{t("bukberDesc2")}</p>
              <p>{t("bukberDesc3")}</p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BUKBERImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">{img.title}</h3>
                        <p className="text-sm">{img.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image/Video Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <button
              title="Close"
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
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
            </button>

            {selectedMediaType === "video" ? (
              <video
                src={selectedImage}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedImage}
                alt="Selected image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
