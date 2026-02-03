import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-[400px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Photo Gallery
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            DPS <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our showcase facility, events, and the vibrant Dubai real
            estate community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const GalleryImage = ({ image, delay = 0, onOpen }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onClick={() => onOpen(image)}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-medium">{image.alt}</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ZoomIn className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const images = [
    { id: 1, url: "/gallery/1.jpeg", alt: "Gallery Image 1" },
    { id: 2, url: "/gallery/2.jpeg", alt: "Gallery Image 2" },
    { id: 3, url: "/gallery/3.jpeg", alt: "Gallery Image 3" },
    { id: 4, url: "/gallery/4.jpeg", alt: "Gallery Image 4" },
    { id: 5, url: "/gallery/5.jpeg", alt: "Gallery Image 5" },
    { id: 6, url: "/gallery/6.jpeg", alt: "Gallery Image 6" },
    { id: 7, url: "/gallery/7.jpeg", alt: "Gallery Image 7" },
    { id: 8, url: "/gallery/8.jpeg", alt: "Gallery Image 8" },
  ];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIndex = selectedImage
    ? images.findIndex((img) => img.id === selectedImage.id)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < images.length - 1;

  const goToPrev = (e) => {
    e.stopPropagation();
    if (hasPrev) setSelectedImage(images[currentIndex - 1]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    if (hasNext) setSelectedImage(images[currentIndex + 1]);
  };

  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                delay={index * 0.1}
                onOpen={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-[#073c75] text-white px-4 py-2 hover:bg-[#052d5a] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={20} />
            Close
          </button>
          {hasPrev && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#073c75] text-white hover:bg-[#052d5a] transition-colors"
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          {hasNext && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#073c75] text-white hover:bg-[#052d5a] transition-colors"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
