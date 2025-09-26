import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Building2,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const controls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/hero-1.png",
    "/images/hero-2.png",
    "/images/hero-3.png",
    "/images/hero-4.png",
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });

    // Auto-change hero images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {/* {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))} */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
      </div>

      {/* Floating Property Cards */}
      {/* <motion.div
        className="absolute top-20 right-10 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-64">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Luxury Property"
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h4 className="text-white font-semibold mb-1">Marina Pinnacle</h4>
          <p className="text-white/80 text-sm mb-2">Dubai Marina</p>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold">AED 3.2M</span>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-white text-sm ml-1">4.9</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -1, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-56">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Palm Villa"
            className="w-full h-28 object-cover rounded-lg mb-3"
          />
          <h4 className="text-white font-semibold mb-1">Palm Residence</h4>
          <p className="text-white/80 text-sm mb-2">Palm Jumeirah</p>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold">AED 8.5M</span>
            <div className="flex items-center text-green-400">
              <Building2 className="w-4 h-4" />
              <span className="text-white text-sm ml-1">Villa</span>
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Event Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium mb-2 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Now</span>
          </div>
          <span className="text-white/60">|</span>
          <span>Dubai Property Show 2025</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1]"
        >
          <span className="block">Discover Dubai's</span>
          <span className="block bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
            Premium Properties
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-4 text-white/80 font-light">
            One Platform. Every Deal. Zero Friction.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Connect with Dubai's premier developers, explore luxury properties,
          and find your perfect investment in the world's most dynamic real
          estate market.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Button
            size="xl"
            className="group bg-white text-gray-900 hover:bg-gray-100 shadow-2xl text-lg px-8 py-4 h-auto font-semibold"
            asChild
          >
            <Link to="/about" className="flex items-center gap-3">
              {/* <Building2 size={24} /> */}
              Learn More
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </Button>

          {/* <Button
            size="xl"
            variant="outline"
            className="group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-10 py-6 h-auto font-semibold"
          >
            <Play size={20} className="mr-3" />
            Watch Virtual Tour
          </Button> */}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Users className="text-blue-400" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              4M+
            </div>
            <div className="text-white/70 text-sm font-medium">
              Dubai Residents
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Building2 className="text-purple-400" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              30+
            </div>
            <div className="text-white/70 text-sm font-medium">
              Premium Developers
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="text-green-400" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              AED 1.2T
            </div>
            <div className="text-white/70 text-sm font-medium">
              Market Value
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="text-yellow-400" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              351K+
            </div>
            <div className="text-white/70 text-sm font-medium">
              Annual Deals
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div> */}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-white/60 hidden lg:flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-sm mb-2 rotate-90 origin-center">Scroll</div>
        <div className="w-px h-12 bg-white/40"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
