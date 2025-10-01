// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, MapPin, Calendar, Users, Building2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
//       </div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Event Badge */}
//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium mb-4 shadow-2xl"
//         >
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
//             <span>Live Now</span>
//           </div>
//           <span className="text-white/60">|</span>
//           <span>Dubai Property Show 2025</span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
//         >
//           <span className="block">Discover Dubai's</span>
//           <span className="block bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
//             Premium Properties
//           </span>
//           <span className="block text-2xl lg:text-3xl mt-4 text-white/80 font-light">
//             One Platform. Every Deal. Zero Friction.
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           variants={itemVariants}
//           className="text-xl sm:text-2xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
//         >
//           Connect with Dubai's premier developers, explore luxury properties,
//           and find your perfect investment in the world's most dynamic real
//           estate market.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
//         >
//           <Button
//             size="xl"
//             className="group bg-white text-gray-900 hover:bg-gray-100 shadow-2xl text-lg px-8 py-4 h-auto font-semibold"
//             asChild
//           >
//             <Link to="/about" className="flex items-center gap-3">
//               {/* <Building2 size={24} /> */}
//               Learn More
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={20}
//               />
//             </Link>
//           </Button>
//         </motion.div>

//         {/* Quick Stats */}
//         <motion.div
//           variants={itemVariants}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
//         >
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center justify-center mb-3">
//               <Users className="text-white" size={28} />
//             </div>
//             <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
//               4M+
//             </div>
//             <div className="text-white/70 text-sm font-medium">
//               Dubai Residents
//             </div>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center justify-center mb-3">
//               <Building2 className="text-white" size={28} />
//             </div>
//             <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
//               30+
//             </div>
//             <div className="text-white/70 text-sm font-medium">
//               Premium Developers
//             </div>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center justify-center mb-3">
//               <MapPin className="text-white" size={28} />
//             </div>
//             <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
//               AED 1.2T
//             </div>
//             <div className="text-white/70 text-sm font-medium">
//               Market Value
//             </div>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center justify-center mb-3">
//               <Calendar className="text-white" size={28} />
//             </div>
//             <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
//               351K+
//             </div>
//             <div className="text-white/70 text-sm font-medium">
//               Annual Deals
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         className="absolute bottom-8 right-8 text-white/60 hidden lg:flex flex-col items-center"
//         animate={{
//           y: [0, 10, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="text-sm mb-2 rotate-90 origin-center">Scroll</div>
//         <div className="w-px h-12 bg-white/40"></div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";
// import { useRef, useState, useEffect } from "react";

// Counter component for animated numbers
// const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (inView) {
//       let startTime;
//       let startValue = 0;

//       const animate = (currentTime) => {
//         if (!startTime) startTime = currentTime;
//         const progress = Math.min(
//           (currentTime - startTime) / (duration * 1000),
//           1
//         );

//         // Easing function for smooth animation
//         const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//         const currentValue = startValue + (end - startValue) * easeOutQuart;

//         setCount(Math.floor(currentValue));

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         } else {
//           setCount(end);
//         }
//       };

//       requestAnimationFrame(animate);
//     }
//   }, [inView, end, duration]);

//   return (
//     <span ref={ref}>
//       {count.toLocaleString()}
//       {suffix}
//     </span>
//   );
// };

const HeroSection = () => {
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

  // Text animation variants for "Learn More"
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-[70rem] lg:h-[50rem] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
      </div>

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
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-xs font-medium mb-4 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span>Live Now</span>
          </div>
          <span className="text-white/60">|</span>
          <span>Dubai Property Show 2025</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
        >
          <span className="block">Discover Dubai's</span>
          <span className="block bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
            Premium Properties
          </span>
          <span className="block text-2xl lg:text-3xl mt-4 text-white/80 font-light">
            One Platform. Every Deal. Zero Friction.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
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
          <motion.div whileHover="hover" initial="hidden" animate="visible">
            <Button
              size="xl"
              className="group bg-white text-gray-900 hover:bg-gray-100 shadow-2xl text-lg px-6 py-3 h-auto font-semibold overflow-hidden relative"
              asChild
            >
              <Link to="/about" className="flex items-center gap-3 ">
                <motion.span
                  variants={textVariants}
                  className="relative z-10 text-sm "
                >
                  Learn More
                </motion.span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform relative z-10"
                  size={20}
                />
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-3">
              <Users className="text-white" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              <AnimatedCounter end={4} suffix="M+" />
            </div>
            <div className="text-white/70 text-sm font-medium">
              Dubai Residents
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-3">
              <Building2 className="text-white" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              <AnimatedCounter end={30} suffix="+" />
            </div>
            <div className="text-white/70 text-sm font-medium">
              Premium Developers
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-3">
              <MapPin className="text-white" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              AED <AnimatedCounter end={1.2} suffix="T" />
            </div>
            <div className="text-white/70 text-sm font-medium">
              Market Value
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-3">
              <Calendar className="text-white" size={28} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              <AnimatedCounter end={351} suffix="K+" />
            </div>
            <div className="text-white/70 text-sm font-medium">
              Annual Deals
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
