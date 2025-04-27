"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      className="relative w-full h-fit mb-6 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        ref={carouselRef}
        className="relative w-full touch-pan-y cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {/* Current Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full"
            initial={{ opacity: 0, x: dragOffset > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            style={{ transform: `translateX(${-dragOffset}px)` }}
          >
            <motion.img
              src={images[currentIndex]}
              alt={`${name} - Photo ${currentIndex + 1}`}
              className="object-cover w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ‹
        </motion.button>

        <motion.button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ›
        </motion.button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1 }}
            animate={{ scale: currentIndex === index ? 1.2 : 1 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ImageCarousel;
