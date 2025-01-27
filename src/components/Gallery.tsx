import React, { useState } from 'react'

// Tipe data untuk gambar tunggal
// Berisi informasi tentang sumber gambar, judul, dan deskripsi
type GalleryImage = {
  src: string;      // Path ke file gambar
  title: string;    // Judul gambar
  description: string; // Deskripsi gambar
  idx? : number | null;
}

// Tipe data untuk sebuah event galeri
// Berisi gambar sampul dan array gambar-gambar terkait
type GalleryEvent = {
  coverImage: GalleryImage;     // Gambar yang ditampilkan di grid utama
  relatedImages: GalleryImage[]; // Kumpulan gambar yang terkait dengan event
}

const Gallery = () => {
  // State untuk menyimpan event yang sedang dipilih
  // Bernilai null jika tidak ada event yang dipilih (modal tertutup)
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [isClicked, setIsClicked] = useState(false)
  const [startImg, setStartImg] = useState(0)

  // Data galeri - Daftar semua event dengan gambar-gambarnya
  let galleryEvents: GalleryEvent[] = [
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
          src: "./images/Documentation/Documentation3.JPG",
          title: "",
          description: "",
        },
        {
          src: "./images/Documentation/Documentation4.JPG",
          title: "test",
          description: "Morning Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          src: "./images/Documentation/Documentation5.JPG",
          title: "",
          description: "",
        },
        {
          src: "./images/Documentation/Documentation6.JPG",
          title: "test",
          description: "Morning Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          src: "./images/Documentation/Documentation1.JPG",
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
          title: "Event Photo",
          description: "Special moment",
        },
        // Add more related images for this event
      ]
    },
    // ... Add other events similarly
  ];

  galleryEvents = galleryEvents.map((image)=>{
    return {...image, relatedImages: image.relatedImages.map((img, index)=> ({...img, idx: index})) }
  })

  // State untuk mengontrol gambar mana yang sedang ditampilkan di modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk pindah ke gambar berikutnya dalam modal
  // Akan kembali ke gambar pertama jika sudah di gambar terakhir
  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => {
        if (prev === selectedEvent.relatedImages.length - 1) prev =  0
        else prev+=1
        if(prev % 3 == 0) setStartImg(prev)
        return prev 
      });
    }
  };

  // Fungsi untuk pindah ke gambar sebelumnya dalam modal
  // Akan pindah ke gambar terakhir jika sudah di gambar pertama
  const previousImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => {
        if (prev === 0) prev =  selectedEvent.relatedImages.length - 1
        else prev-=1
        if(prev % 3 == 2 || prev === selectedEvent.relatedImages.length - 1) setStartImg(prev-(prev%3)) //Jika foto yg sekarang adalah foto yg terakhir dari preview sebelumnya, pindah start image supaya menampilkan preview sebelumnya
        return prev
      });
    }
  };
  
  // Fungsi untuk pindah ke preview gambar2 berikutnya
  // Akan kembali ke preview gambar pertama jika sudah di preview gambar terakhir
  const nextThumbnailImage = () => {
    if (selectedEvent) {
      setStartImg((prev) => 
        prev+3 >= selectedEvent.relatedImages.length - 1 ? 0 : prev + 3
      );
    }
  };

  // Fungsi untuk pindah ke  preview gambar2 sebelumnya
  // Akan pindah ke preview gambar terakhir jika sudah di preview gambar pertama
  const previousThumbnailImage = () => {
    if (selectedEvent) {
      setStartImg((prev) => 
        prev === 0 ? selectedEvent.relatedImages.length - (selectedEvent.relatedImages.length % 3 || 3) : prev - 3
      );
    }
  };

  return (
    <>
      {/* Section Galeri Utama */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Our Gallery
        </h2>
        {/* Grid untuk menampilkan gambar sampul setiap event */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping setiap event ke dalam card */}
          {galleryEvents.map((event, index) => (
            // Card event dengan efek hover
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);  // Buka modal dengan event yang dipilih
                setCurrentImageIndex(0);  // Mulai dari gambar pertama
                setStartImg(0); // Mulai dari preview gambar pertama
              }}
            >
              {/* Gambar sampul event */}
              <img
                src={event.coverImage.src}
                alt={event.coverImage.title}
                className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
              />
              {/* Overlay dengan informasi event */}
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

      {/* Modal/Lightbox untuk menampilkan gambar-gambar terkait */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)} // Tutup modal jika klik di luar
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Tombol tutup modal */}
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

            {/* Tombol navigasi kiri-kanan */}
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

            {/* Gambar utama yang sedang ditampilkan */}
            <img
              src={selectedEvent.relatedImages[currentImageIndex].src}
              alt={selectedEvent.relatedImages[currentImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Informasi gambar yang sedang ditampilkan */}
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

            {/* Navigasi thumbnail */}
            <div className="group absolute bottom-1 left-0 right-0 ">
              
              <div className="opacity-0 group-hover:opacity-100 flex justify-center gap-2 overflow-x-auto p-2 transition-opacity">
              <button
                className="left-4 text-white hover:text-gray-300 z-10"
                onClick={previousThumbnailImage}
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
              {/*Menampilkan 3 preview gambar yang dimulai dari startImg (default 0)*/}
                {selectedEvent.relatedImages.slice(startImg,startImg+3).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      //@ts-ignore
                      setCurrentImageIndex(image?.idx)
                    }}
                    className={`w-16 h-16 flex-shrink-0 ${
                      currentImageIndex === image?.idx
                        ? "ring-2 ring-white"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      //@ts-ignore
                      alt={`Thumbnail ${image?.idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <button
                className=" right-4  text-white hover:text-gray-300 z-10"
                onClick={nextThumbnailImage}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;