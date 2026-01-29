import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#073c75] to-[#1e3a8a]">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-16 items-center justify-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center justify-center mb-8"
              >
                <img
                  src="/DPS_LOGOWIDE_WHITE.png"
                  alt="Dubai Property Show"
                  className="h-16 md:h-20 w-auto object-contain filter drop-shadow-lg"
                />
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              >
                Thank
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 ">
                  You!
                </span>
              </motion.h1>
              <motion.div
                // variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
              >
                <motion.div
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    className="group bg-white/10 backdrop-blur-xs shadow-2xl text-base px-6 py-3 h-auto overflow-hidden relative rounded-2xl"
                    asChild
                  >
                    <Link to="/" className="flex items-center gap-3 text-white">
                      <motion.span
                        // variants={textVariants}
                        className="relative z-10"
                      >
                        Back to Home
                      </motion.span>
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform relative z-10"
                        size={20}
                      />
                      <motion.div
                        className="absolute inset-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </button>
                </motion.div>

                {/* <Button
            size="xl"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md h-auto px-6 py-3 rounded-2xl"
            asChild
          >
            <Link to="/about" className="flex items-center gap-2">
              <MapPin size={18} className="opacity-80" />
              Learn More
            </Link>
          </Button> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
