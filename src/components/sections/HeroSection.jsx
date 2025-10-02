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
              <Link to="/about" className="flex items-center gap-3">
                <motion.span
                  variants={textVariants}
                  className="relative z-10 text-sm"
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
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 flex justify-center items-center gap-2">
              {/* <img
                src="/UAE_Dirham_Symbol.svg"
                alt="AED"
                className="w-8 h-8 text-white"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.2"
                viewBox="0 0 1000 870"
                className="w-8 h-8 fill-white"
              >
                <path
                  id="Layer copy"
                  class="s0"
                  d="m88.3 1c0.4 0.6 2.6 3.3 4.7 5.9 15.3 18.2 26.8 47.8 33 85.1 4.1 24.5 4.3 32.2 4.3 125.6v87h-41.8c-38.2 0-42.6-0.2-50.1-1.7-11.8-2.5-24-9.2-32.2-17.8-6.5-6.9-6.3-7.3-5.9 13.6 0.5 17.3 0.7 19.2 3.2 28.6 4 14.9 9.5 26 17.8 35.9 11.3 13.6 22.8 21.2 39.2 26.3 3.5 1 10.9 1.4 37.1 1.6l32.7 0.5v43.3 43.4l-46.1-0.3-46.3-0.3-8-3.2c-9.5-3.8-13.8-6.6-23.1-14.9l-6.8-6.1 0.4 19.1c0.5 17.7 0.6 19.7 3.1 28.7 8.7 31.8 29.7 54.5 57.4 61.9 6.9 1.9 9.6 2 38.5 2.4l30.9 0.4v89.6c0 54.1-0.3 94-0.8 100.8-0.5 6.2-2.1 17.8-3.5 25.9-6.5 37.3-18.2 65.4-35 83.6l-3.4 3.7h169.1c101.1 0 176.7-0.4 187.8-0.9 19.5-1 63-5.3 72.8-7.4 3.1-0.6 8.9-1.5 12.7-2.1 8.1-1.2 21.5-4 40.8-8.9 27.2-6.8 52-15.3 76.3-26.1 7.6-3.4 29.4-14.5 35.2-18 3.1-1.8 6.8-4 8.2-4.7 3.9-2.1 10.4-6.3 19.9-13.1 4.7-3.4 9.4-6.7 10.4-7.4 4.2-2.8 18.7-14.9 25.3-21 25.1-23.1 46.1-48.8 62.4-76.3 2.3-4 5.3-9 6.6-11.1 3.3-5.6 16.9-33.6 18.2-37.8 0.6-1.9 1.4-3.9 1.8-4.3 2.6-3.4 17.6-50.6 19.4-60.9 0.6-3.3 0.9-3.8 3.4-4.3 1.6-0.3 24.9-0.3 51.8-0.1 53.8 0.4 53.8 0.4 65.7 5.9 6.7 3.1 8.7 4.5 16.1 11.2 9.7 8.7 8.8 10.1 8.2-11.7-0.4-12.8-0.9-20.7-1.8-23.9-3.4-12.3-4.2-14.9-7.2-21.1-9.8-21.4-26.2-36.7-47.2-44l-8.2-3-33.4-0.4-33.3-0.5 0.4-11.7c0.4-15.4 0.4-45.9-0.1-61.6l-0.4-12.6 44.6-0.2c38.2-0.2 45.3 0 49.5 1.1 12.6 3.5 21.1 8.3 31.5 17.8l5.8 5.4v-14.8c0-17.6-0.9-25.4-4.5-37-7.1-23.5-21.1-41-41.1-51.8-13-7-13.8-7.2-58.5-7.5-26.2-0.2-39.9-0.6-40.6-1.2-0.6-0.6-1.1-1.6-1.1-2.4 0-0.8-1.5-7.1-3.5-13.9-23.4-82.7-67.1-148.4-131-197.1-8.7-6.7-30-20.8-38.6-25.6-3.3-1.9-6.9-3.9-7.8-4.5-4.2-2.3-28.3-14.1-34.3-16.6-3.6-1.6-8.3-3.6-10.4-4.4-35.3-15.3-94.5-29.8-139.7-34.3-7.4-0.7-17.2-1.8-21.7-2.2-20.4-2.3-48.7-2.6-209.4-2.6-135.8 0-169.9 0.3-169.4 1zm330.7 43.3c33.8 2 54.6 4.6 78.9 10.5 74.2 17.6 126.4 54.8 164.3 117 3.5 5.8 18.3 36 20.5 42.1 10.5 28.3 15.6 45.1 20.1 67.3 1.1 5.4 2.6 12.6 3.3 16 0.7 3.3 1 6.4 0.7 6.7-0.5 0.4-100.9 0.6-223.3 0.5l-222.5-0.2-0.3-128.5c-0.1-70.6 0-129.3 0.3-130.4l0.4-1.9h71.1c39 0 78 0.4 86.5 0.9zm297.5 350.3c0.7 4.3 0.7 77.3 0 80.9l-0.6 2.7-227.5-0.2-227.4-0.3-0.2-42.4c-0.2-23.3 0-42.7 0.2-43.1 0.3-0.5 97.2-0.8 227.7-0.8h227.2zm-10.2 171.7c0.5 1.5-1.9 13.8-6.8 33.8-5.6 22.5-13.2 45.2-20.9 62-3.8 8.6-13.3 27.2-15.6 30.7-1.1 1.6-4.3 6.7-7.1 11.2-18 28.2-43.7 53.9-73 72.9-10.7 6.8-32.7 18.4-38.6 20.2-1.2 0.3-2.5 0.9-3 1.3-0.7 0.6-9.8 4-20.4 7.8-19.5 6.9-56.6 14.4-86.4 17.5-19.3 1.9-22.4 2-96.7 2h-76.9v-129.7-129.8l220.9-0.4c121.5-0.2 221.6-0.5 222.4-0.7 0.9-0.1 1.8 0.5 2.1 1.2z"
                />
              </svg>
              <AnimatedCounter end={1.2} suffix="T" />
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
