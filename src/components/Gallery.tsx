import React, { useState } from "react";

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
      // Replace this with a smaller video or just use an image instead
      src: "./images/Documentation/Badminton/Badminton2.JPG", // Changed from Badminton1.MP4
      title: "Friendly Competition",
      description: "SI 47 INT students showing their badminton skills",
    },
    {
      src: "./images/Documentation/Badminton/Badminton2.JPG",
      title: "Team Spirit",
      description: "Supporting and cheering for teammates during matches",
    },
    {
      // Replace this with a smaller video or just use an image instead
      src: "./images/Documentation/Badminton/Badminton4.JPG", // Changed from Badminton3.MP4
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
              <h3 className="text-2xl font-bold mb-2">
                Genesis Graduation & Jacket Ceremony
              </h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                24 November 2024
              </p>
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
              <h3 className="text-2xl font-bold mb-2">Makrab SI 47 INT</h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                10 January 2025
              </p>
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

        {/* Third Event Section - Badminton - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">
                SI 47 INT Badminton Tournament
              </h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                26 April 2025
              </p>
              <p className="mb-4">
                We held a fun badminton game to help us stay active and become
                closer friends. Everyone could play and have fun together.
              </p>
              <p className="mb-4">
                We played at SIGMA GOR. We made courts for one player games and
                two player games. All students could join, even if they were not
                good at badminton, so everyone had fun.
              </p>
              <p>
                The games gave us a good break from our school work. We could
                make friends through sports. We cheered, laughed, and worked as
                a team, which made this day special for everyone.
              </p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {badmintonEventImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
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
                        className="w-full h-64 object-cover"
                        muted
                      />
                    ) : (
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
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
              <h3 className="text-2xl font-bold mb-2">
                GLOW International Program
              </h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                12 July 2024
              </p>
              <p className="mb-4">
                GLOW is a special program at Telkom University that brings
                teachers from Malaysia. The program started at Tokong Nanas
                Building to help students learn in an international way.
              </p>
              <p className="mb-4">
                Six teachers from different Malaysia universities came to teach
                six subjects. They teach students from four study programs at
                Telkom University.
              </p>
              <p>
                This program helps students learn new things and see how
                students in other countries learn. It makes Telkom University
                more international and helps our students get ready for the
                world.
              </p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {glowEventImages.map((img, index) => (
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

        {/* Fifth Event Section - Buka Bersama - Text on Left */}
        <div className="mb-16 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Description */}
            <div className="lg:w-1/3 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Buka Bersama SI 47 INT
              </h3>
              <p className="text-yellow-300 dark:text-yellow-400 mb-4">
                23 March 2024
              </p>
              <p className="mb-4">
                We held a special Buka Bersama event where all students came
                together. It was a time to share food and stories as we
                celebrated this special day.
              </p>
              <p className="mb-4">
                Everyone brought different foods to share. We sat together,
                talked, and waited for the time. Some students also led prayers
                before we ate.
              </p>
              <p>
                This event helped us learn about each other's cultures and grow
                closer as friends. We made good memories and felt like a real
                family at SI 47 INT.
              </p>
            </div>

            {/* Event Gallery */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BUKBERImages.map((img, index) => (
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
