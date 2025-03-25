import React, { useState } from "react";

type Props = {};

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

  return (
    <>
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Our Gallery
        </h2>

        {/* First Event Section - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Genesis Graduation & Jacket Ceremony
              </h3>
              <p className="mb-4">
                This was a special moment where we officially graduated from
                Genesis and received our Himpunan Jacket. It was more than just
                a ceremony it was a symbol of trust and responsibility.
              </p>
              <p className="mb-4">
                From this day on, we carry the name of Information Systems,
                Telkom University, with pride and honor. Every thread of the
                jacket reminds us of our journey, our growth, and our unity.
              </p>
              <p>
                This event marked the beginning of our duty as true members of
                the organization. With hearts full of memories and dreams, we
                are ready to take our next steps together.
              </p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            </div>
          </div>
        </div>

        {/* Second Event Section - Text on Right */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Event Description (now on right) */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-4">Makrab SI 47 INT</h3>
              <p className="mb-4">
                Makrab SI 47 INT was a special night where all classmates
                gathered to get to know each other better. We spent time
                together in a fun and relaxing place outside the campus.
              </p>
              <p className="mb-4">
                There were many exciting activities like games, and a bonfire.
                We laughed, talked, and created great memories as a class.
              </p>
              <p>
                This event helped us build stronger friendship and teamwork in
                SI 47 INT. It was a night full of joy, connection, and
                unforgettable moments for everyone.
              </p>
            </div>

            {/* Event Gallery (now on left) */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {secondEventImages.map((img, index) => (
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
            </div>
          </div>
        </div>

        {/* You can copy-paste either event section for additional events */}
      </section>

      {/* Image Modal/Lightbox */}
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

export default Gallery;
