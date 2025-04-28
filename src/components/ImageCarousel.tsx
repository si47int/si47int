"use client";

import { useState, useRef, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  name: string;
}

const ImageCarousel = ({ images, name }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50; // Minimum distance for a swipe to register

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
    const diff = touchStartX - e.touches[0].clientX;
    // Limit drag distance
    const maxDrag = carouselRef.current?.offsetWidth || 0;
    const newOffset = Math.max(Math.min(diff, maxDrag / 2), -maxDrag / 2);
    setDragOffset(newOffset);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    // Reset drag offset with animation
    setDragOffset(0);

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left (next)
        nextSlide();
      } else {
        // Swipe right (prev)
        prevSlide();
      }
    }
  };

  // Handle mouse events for desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartX(e.clientX);
    setTouchEndX(e.clientX);
    document.addEventListener("mousemove", handleMouseMove as any);
    document.addEventListener("mouseup", handleMouseUp as any);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setTouchEndX(e.clientX);
    const diff = touchStartX - e.clientX;
    // Limit drag distance
    const maxDrag = carouselRef.current?.offsetWidth || 0;
    const newOffset = Math.max(Math.min(diff, maxDrag / 2), -maxDrag / 2);
    setDragOffset(newOffset);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove as any);
    document.removeEventListener("mouseup", handleMouseUp as any);

    const distance = touchStartX - touchEndX;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    // Reset drag offset
    setDragOffset(0);

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left (next)
        nextSlide();
      } else {
        // Swipe right (prev)
        prevSlide();
      }
    }
  };

  // Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove as any);
      document.removeEventListener("mouseup", handleMouseUp as any);
    };
  }, [touchStartX, touchEndX]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-fit mb-6 rounded-lg overflow-hidden transition-opacity duration-500">
      <div
        ref={carouselRef}
        className="relative w-full touch-pan-y cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {/* Current Image */}
        <div
          key={currentIndex}
          className="w-full transition-transform duration-300"
          style={{ transform: `translateX(${-dragOffset}px)` }}
        >
          <img
            src={images[currentIndex]}
            alt={`${name} - Photo ${currentIndex + 1}`}
            className="object-cover w-full hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 hover:scale-110 active:scale-90 transition-transform"
          onClick={prevSlide}
        >
          ‹
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 hover:scale-110 active:scale-90 transition-transform"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all hover:scale-150 ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
