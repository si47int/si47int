import React, { useState } from 'react'

type GalleryImage = {
  src: string;
  title: string;
  description: string;
}

type GalleryEvent = {
  coverImage: GalleryImage;
  relatedImages: GalleryImage[];
}

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [isClicked, setIsClicked] = useState(false)

  const galleryEvents: GalleryEvent[] = [
    {
      coverImage: {
        src: "./images/Documentation/Documentation2.JPG",
        title: "Dari Waktu ke Waktu",
        description: "Cintaku padamu",
      },
      relatedImages: [
        {
          src: "./images/Documentation/Documentation2.JPG",
          title: "test",
          description: "Morning Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          src: "./images/Documentation/Documentation4.JPG",
          title: "",
          description: "",
        },
        // Add more related images for this event
      ]
    },
    {
      coverImage: {
        src: "./images/Documentation/Documentation1.JPG",
        title: "Padamu SI",
        description: "Kami berjanji",
      },
      relatedImages: [
        {
          src: "./images/Documentation/Documentation1.JPG",
          title: "Event Photo 1",
          description: "Special moment",
        },
        // Add more related images for this event
      ]
    },
    // ... Add other events similarly
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.relatedImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.relatedImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                setCurrentImageIndex(0);
              }}
            >
              <img
                src={event.coverImage.src}
                alt={event.coverImage.title}
                className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{event.coverImage.title}</h3>
                  <p className="text-sm">{event.coverImage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Modal/Lightbox */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedEvent(null)}
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

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={previousImage}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              onClick={nextImage}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Main image */}
            <img
              src={selectedEvent.relatedImages[currentImageIndex].src}
              alt={selectedEvent.relatedImages[currentImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute flex flex-col left-4 bottom-4 text-white z-20">
              <h3 className="text-xl font-bold">
                {selectedEvent.relatedImages[currentImageIndex].title}
              </h3>
              
              {!isClicked && (
                <div onClick={()=> setIsClicked(true)} className='w-[200px]'>
                <p className="truncate  text-sm" >
                  {selectedEvent.relatedImages[currentImageIndex].description}
                </p>
                </div>
              )}
              {isClicked && (
                <div className='bg-black/80 flex w-[200px] rounded-lg'>
                  <p className="text-sm"  onClick={()=> setIsClicked(false)}>
                    {selectedEvent.relatedImages[currentImageIndex].description}
                  </p>
                </div>
              )}
                
             
              <p className="text-sm text-gray-400">
                Image {currentImageIndex + 1} of {selectedEvent.relatedImages.length}
              </p>
            </div>

            {/* Thumbnail navigation */}
            <div className="group absolute bottom-1 left-0 right-0 ">
              <div className="opacity-0 group-hover:opacity-100 flex justify-center gap-2 overflow-x-auto p-2 transition-opacity">
                {selectedEvent.relatedImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 flex-shrink-0 ${
                      currentImageIndex === index
                        ? "ring-2 ring-white"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;