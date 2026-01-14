import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

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

const GalleryImage = ({ image, category, delay = 0, onOpen }) => {
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
          <Badge className="bg-[#073c75] text-white mb-2">{category}</Badge>
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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Facility", "Events", "Developers", "Visitors"];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "DPS Main Exhibition Hall",
      category: "Facility",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Developer Booth Showcase",
      category: "Developers",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Property Consultation Session",
      category: "Events",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Visitors Exploring Properties",
      category: "Visitors",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury Property Display",
      category: "Facility",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Networking Event",
      category: "Events",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Developer Presentation",
      category: "Developers",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Buyer Consultation Area",
      category: "Visitors",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Exhibition Opening Ceremony",
      category: "Events",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#073c75] text-white"
                    : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                category={image.category}
                delay={index * 0.1}
                onOpen={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

