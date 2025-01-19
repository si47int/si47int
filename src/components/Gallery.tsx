import React, { useState } from 'react'

type Props = {}

const Gallery = (props: Props) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "./images/Documentation/Documentation2.JPG",
      title: "Dari Waktu ke Waktu",
      description: "Cintaku padamu",
    },
    {
      src: "./images/Documentation/Documentation1.JPG",
      title: "Padamu SI",
      description: "Kami berjanji",
    },
    {
      src: "./images/Documentation/Documentation6.JPG",
      title: "Terbanglah tinggi",
      description: "Kau diangkasa",
    },
    {
      src: "./images/Documentation/Documentation4.JPG",
      title: "We love cyan ku we do",
      description: "Cyanku we love you",
    },
    {
      src: "./images/Documentation/Documentation5.JPG",
      title: "Syalalalalalala",
      description: "H~M~S~I",
    },
  ];
  return (
    <>
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
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
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <button
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
            <img
              src={selectedImage}
              alt="Selected image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery