import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

/* ----------------------------- Helpers ----------------------------- */

const useMouseParallax = (strength = 30) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  React.useEffect(() => {
    const handler = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1..1
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return {
    x: useTransform(mx, (v) => v * strength),
    y: useTransform(my, (v) => v * strength),
  };
};

const ParticleField = ({ count = 48 }) => {
  // Create a stable set of randomized particle parameters
  const particles = React.useMemo(
    () =>
      new Array(count).fill(0).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // vw
        top: Math.random() * 100, // vh
        size: Math.random() * 3 + 1,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 6,
        drift: (Math.random() - 0.5) * 30,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 ">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/80 shadow-[0_0_10px_2px_rgba(255,255,255,0.45)]"
          style={{
            left: `${p.left}vw`,
            top: `${p.top}vh`,
            width: p.size,
            height: p.size,
            filter: "drop-shadow(0 0 6px rgba(131,197,255,0.65))",
          }}
          initial={{ opacity: 0.2, y: 0, x: 0 }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            y: [-10, 10, -10],
            x: [0, p.drift, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: p.duration,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const NeonGradHeadline = ({ children }) => {
  // Animated gradient sweep
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.span
      className="bg-clip-text text-transparent font-extrabold tracking-tight"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #fff, #79b4ff, #4cc9f0, #87b8ff, #fff)",
        backgroundSize: "200% 100%",
        textShadow:
          "0 1px 10px rgba(135,206,255,0.35), 0 0 30px rgba(56,176,255,0.25)",
      }}
      initial={{ backgroundPositionX: "0%" }}
      animate={{ backgroundPositionX: hovered ? "100%" : ["0%", "100%", "0%"] }}
      transition={{
        duration: hovered ? 0.8 : 6,
        repeat: hovered ? 0 : Infinity,
        ease: "linear",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {children}
    </motion.span>
  );
};

/* --------------------------- Skyline SVGs -------------------------- */
/* Layered silhouettes for depth + parallax. Kept lightweight. */

const SkylineLayer = ({ className = "", opacity = 0.5 }) => (
  // <svg
  //   viewBox="0 0 1440 400"
  //   preserveAspectRatio="xMidYMax slice"
  //   className={className}
  //   aria-hidden="true"
  // >
  //   <g fill="currentColor" opacity={opacity}>
  //     {/* Simplified Dubai silhouettes: Burj Khalifa, towers, low-rise */}
  //     <path d="M720 10h10v380h-10z" /> {/* Burj Khalifa spine */}
  //     <path d="M710 80h30v310h-30z" /> {/* Burj core */}
  //     <path d="M740 140h20v250h-20z" />
  //     <path d="M520 200h60v190h-60z" />
  //     <path d="M590 160h40v230h-40z" />
  //     <path d="M630 190h30v200h-30z" />
  //     <path d="M770 210h50v180h-50z" />
  //     <path d="M830 170h40v220h-40z" />
  //     <path d="M880 220h60v170h-60z" />
  //     <path d="M950 190h30v200h-30z" />
  //     <path d="M985 210h20v180h-20z" />
  //     <path d="M1010 230h40v160h-40z" />
  //     <path d="M1060 260h80v130h-80z" />
  //     <path d="M300 260h110v130H300z" />
  //     <path d="M420 230h60v160h-60z" />
  //     <path d="M110 280h150v110H110z" />
  //     {/* Ground base */}
  //     <rect x="0" y="380" width="1440" height="20" />
  //   </g>
  // </svg>
  //   <img src="/freepik__background__94603.png" alt="" className={className} />
  <video src="/1003.mp4" className={className} autoPlay muted loop></video>
  //   <></>
);

/* ---------------------------- Main View ---------------------------- */

const HeroSectionAlt5 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  // Parallax strengths per layer
  const far = useMouseParallax(8);
  const mid = useMouseParallax(16);
  const near = useMouseParallax(28);
  const glow = useMouseParallax(10);

  return (
    <section className="relative h-[70rem] lg:h-[52rem] overflow-hidden flex items-center">
      {/* Background gradient + vignette */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0a1430] to-[#050811]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-[radial-gradient(40%_60%_at_60%_30%,rgba(99,102,241,0.25),transparent_70%)]" />
      </div>

      {/* Floating particles */}
      <ParticleField count={56} />

      {/* Neon city glow halos */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(64,176,255,0.45), rgba(0,0,0,0))",
        }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-[-10rem] w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.45), rgba(0,0,0,0))",
        }}
        styleTransform
        styleMotionValue
        // style={{ x: glow.x, y: glow.y }}
      />

      {/* Parallax Skyline Layers */}
      {/* <motion.div
        className="absolute bottom-0 inset-x-0 text-sky-300/25"
        style={{ x: far.x, y: far.y }}
      >
        <SkylineLayer
          className="w-[180%] min-w-[1400px] mx-auto translate-x-[-10%]"
          opacity={0.25}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 inset-x-0 text-indigo-300/40"
        style={{ x: mid.x, y: mid.y }}
      >
        <SkylineLayer
          className="w-[160%] min-w-[1400px] mx-auto translate-x-[-5%]"
          opacity={0.45}
        />
      </motion.div> */}
      <motion.div
        className="absolute bottom-0 inset-x-0 text-white/70"
        style={{ x: near.x, y: near.y }}
      >
        <SkylineLayer
          className="w-[140%] min-w-[1400px] mx-auto"
          opacity={0.8}
        />
      </motion.div>

      {/* Light windows flicker overlay */}
      {/* <div className="absolute inset-x-0 bottom-24 h-56 pointer-events-none">
        <motion.div
          className="h-full w-full opacity-50"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 20% 70%, rgba(255,255,255,0.18) 0 2px, transparent 3px 18px), repeating-radial-gradient(circle at 70% 60%, rgba(152,206,255,0.18) 0 2px, transparent 3px 16px)",
            maskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div> */}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-[0_8px_40px_rgba(106,170,255,0.3)]"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-200"></span>
            </span>
            <span>Live Now</span>
          </div>
          <span className="text-white/40">|</span>
          <span>Dubai Property Show 2025</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-white mb-6 leading-tight font-bold"
        >
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Discover Dubai’s
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl mt-2">
            <NeonGradHeadline>Premium Properties</NeonGradHeadline>
          </span>
          <span className="block text-xl lg:text-2xl mt-4 text-white/80 font-light">
            One Platform. Every Deal. Zero Friction.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Connect with premier developers, explore luxury homes and off-plan
          gems, and invest in the world’s most dynamic real-estate market.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <motion.div whileHover="hover" initial="hidden" animate="visible">
            <Button
              size="xl"
              className="group bg-white text-gray-900 hover:bg-gray-100 shadow-2xl text-base sm:text-lg px-6 py-3 h-auto font-semibold overflow-hidden relative rounded-2xl"
              asChild
            >
              <Link to="/about" className="flex items-center gap-3">
                <motion.span variants={textVariants} className="relative z-10">
                  Learn More
                </motion.span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform relative z-10"
                  size={20}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
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

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-5xl mx-auto"
        >
          {/* Residents */}
          <StatCard
            icon={<Users className="text-white" size={26} />}
            value={<AnimatedCounter end={4} suffix="M+" />}
            label="Dubai Residents"
            delay={0}
          />
          {/* Developers */}
          <StatCard
            icon={<Building2 className="text-white" size={26} />}
            value={<AnimatedCounter end={30} suffix="+" />}
            label="Premium Developers"
            delay={0.05}
          />
          {/* Market Value */}
          <StatCard
            icon={
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   viewBox="0 0 1000 870"
              //   className="w-7 h-7 fill-white"
              // >
              //   <path d="m88.3 1c0.4 0.6 2.6 3.3 4.7 5.9 15.3 18.2 26.8 47.8 33 85.1 4.1 24.5 4.3 32.2 4.3 125.6v87h-41.8c-38.2 0-42.6-0.2-50.1-1.7-11.8-2.5-24-9.2-32.2-17.8-6.5-6.9-6.3-7.3-5.9 13.6 0.5 17.3 0.7 19.2 3.2 28.6 4 14.9 9.5 26 17.8 35.9 11.3 13.6 22.8 21.2 39.2 26.3 3.5 1 10.9 1.4 37.1 1.6l32.7 0.5v43.3 43.4l-46.1-0.3-46.3-0.3-8-3.2c-9.5-3.8-13.8-6.6-23.1-14.9l-6.8-6.1 0.4 19.1c0.5 17.7 0.6 19.7 3.1 28.7 8.7 31.8 29.7 54.5 57.4 61.9 6.9 1.9 9.6 2 38.5 2.4l30.9 0.4v89.6c0 54.1-0.3 94-0.8 100.8-0.5 6.2-2.1 17.8-3.5 25.9-6.5 37.3-18.2 65.4-35 83.6l-3.4 3.7h169.1c101.1 0 176.7-0.4 187.8-0.9 19.5-1 63-5.3 72.8-7.4 3.1-0.6 8.9-1.5 12.7-2.1 8.1-1.2 21.5-4 40.8-8.9 27.2-6.8 52-15.3 76.3-26.1 7.6-3.4 29.4-14.5 35.2-18 3.1-1.8 6.8-4 8.2-4.7 3.9-2.1 10.4-6.3 19.9-13.1 4.7-3.4 9.4-6.7 10.4-7.4 4.2-2.8 18.7-14.9 25.3-21 25.1-23.1 46.1-48.8 62.4-76.3 2.3-4 5.3-9 6.6-11.1 3.3-5.6 16.9-33.6 18.2-37.8 0.6-1.9 1.4-3.9 1.8-4.3 2.6-3.4 17.6-50.6 19.4-60.9 0.6-3.3 0.9-3.8 3.4-4.3 1.6-0.3 24.9-0.3 51.8-0.1 53.8 0.4 53.8 0.4 65.7 5.9 6.7 3.1 8.7 4.5 16.1 11.2 9.7 8.7 8.8 10.1 8.2-11.7-0.4-12.8-0.9-20.7-1.8-23.9-3.4-12.3-4.2-14.9-7.2-21.1-9.8-21.4-26.2-36.7-47.2-44l-8.2-3-33.4-0.4-33.3-0.5 0.4-11.7c0.4-15.4 0.4-45.9-0.1-61.6l-0.4-12.6 44.6-0.2c38.2-0.2 45.3 0 49.5 1.1 12.6 3.5 21.1 8.3 31.5 17.8l5.8 5.4v-14.8c0-17.6-0.9-25.4-4.5-37-7.1-23.5-21.1-41-41.1-51.8-13-7-13.8-7.2-58.5-7.5-26.2-0.2-39.9-0.6-40.6-1.2-0.6-0.6-1.1-1.6-1.1-2.4 0-0.8-1.5-7.1-3.5-13.9-23.4-82.7-67.1-148.4-131-197.1-8.7-6.7-30-20.8-38.6-25.6-3.3-1.9-6.9-3.9-7.8-4.5-4.2-2.3-28.3-14.1-34.3-16.6-3.6-1.6-8.3-3.6-10.4-4.4-35.3-15.3-94.5-29.8-139.7-34.3-7.4-0.7-17.2-1.8-21.7-2.2-20.4-2.3-48.7-2.6-209.4-2.6-135.8 0-169.9 0.3-169.4 1z" />
              // </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.2"
                viewBox="0 0 1000 870"
                className="w-7 h-7 fill-white"
              >
                <path
                  id="Layer copy"
                  className="s0"
                  d="m88.3 1c0.4 0.6 2.6 3.3 4.7 5.9 15.3 18.2 26.8 47.8 33 85.1 4.1 24.5 4.3 32.2 4.3 125.6v87h-41.8c-38.2 0-42.6-0.2-50.1-1.7-11.8-2.5-24-9.2-32.2-17.8-6.5-6.9-6.3-7.3-5.9 13.6 0.5 17.3 0.7 19.2 3.2 28.6 4 14.9 9.5 26 17.8 35.9 11.3 13.6 22.8 21.2 39.2 26.3 3.5 1 10.9 1.4 37.1 1.6l32.7 0.5v43.3 43.4l-46.1-0.3-46.3-0.3-8-3.2c-9.5-3.8-13.8-6.6-23.1-14.9l-6.8-6.1 0.4 19.1c0.5 17.7 0.6 19.7 3.1 28.7 8.7 31.8 29.7 54.5 57.4 61.9 6.9 1.9 9.6 2 38.5 2.4l30.9 0.4v89.6c0 54.1-0.3 94-0.8 100.8-0.5 6.2-2.1 17.8-3.5 25.9-6.5 37.3-18.2 65.4-35 83.6l-3.4 3.7h169.1c101.1 0 176.7-0.4 187.8-0.9 19.5-1 63-5.3 72.8-7.4 3.1-0.6 8.9-1.5 12.7-2.1 8.1-1.2 21.5-4 40.8-8.9 27.2-6.8 52-15.3 76.3-26.1 7.6-3.4 29.4-14.5 35.2-18 3.1-1.8 6.8-4 8.2-4.7 3.9-2.1 10.4-6.3 19.9-13.1 4.7-3.4 9.4-6.7 10.4-7.4 4.2-2.8 18.7-14.9 25.3-21 25.1-23.1 46.1-48.8 62.4-76.3 2.3-4 5.3-9 6.6-11.1 3.3-5.6 16.9-33.6 18.2-37.8 0.6-1.9 1.4-3.9 1.8-4.3 2.6-3.4 17.6-50.6 19.4-60.9 0.6-3.3 0.9-3.8 3.4-4.3 1.6-0.3 24.9-0.3 51.8-0.1 53.8 0.4 53.8 0.4 65.7 5.9 6.7 3.1 8.7 4.5 16.1 11.2 9.7 8.7 8.8 10.1 8.2-11.7-0.4-12.8-0.9-20.7-1.8-23.9-3.4-12.3-4.2-14.9-7.2-21.1-9.8-21.4-26.2-36.7-47.2-44l-8.2-3-33.4-0.4-33.3-0.5 0.4-11.7c0.4-15.4 0.4-45.9-0.1-61.6l-0.4-12.6 44.6-0.2c38.2-0.2 45.3 0 49.5 1.1 12.6 3.5 21.1 8.3 31.5 17.8l5.8 5.4v-14.8c0-17.6-0.9-25.4-4.5-37-7.1-23.5-21.1-41-41.1-51.8-13-7-13.8-7.2-58.5-7.5-26.2-0.2-39.9-0.6-40.6-1.2-0.6-0.6-1.1-1.6-1.1-2.4 0-0.8-1.5-7.1-3.5-13.9-23.4-82.7-67.1-148.4-131-197.1-8.7-6.7-30-20.8-38.6-25.6-3.3-1.9-6.9-3.9-7.8-4.5-4.2-2.3-28.3-14.1-34.3-16.6-3.6-1.6-8.3-3.6-10.4-4.4-35.3-15.3-94.5-29.8-139.7-34.3-7.4-0.7-17.2-1.8-21.7-2.2-20.4-2.3-48.7-2.6-209.4-2.6-135.8 0-169.9 0.3-169.4 1zm330.7 43.3c33.8 2 54.6 4.6 78.9 10.5 74.2 17.6 126.4 54.8 164.3 117 3.5 5.8 18.3 36 20.5 42.1 10.5 28.3 15.6 45.1 20.1 67.3 1.1 5.4 2.6 12.6 3.3 16 0.7 3.3 1 6.4 0.7 6.7-0.5 0.4-100.9 0.6-223.3 0.5l-222.5-0.2-0.3-128.5c-0.1-70.6 0-129.3 0.3-130.4l0.4-1.9h71.1c39 0 78 0.4 86.5 0.9zm297.5 350.3c0.7 4.3 0.7 77.3 0 80.9l-0.6 2.7-227.5-0.2-227.4-0.3-0.2-42.4c-0.2-23.3 0-42.7 0.2-43.1 0.3-0.5 97.2-0.8 227.7-0.8h227.2zm-10.2 171.7c0.5 1.5-1.9 13.8-6.8 33.8-5.6 22.5-13.2 45.2-20.9 62-3.8 8.6-13.3 27.2-15.6 30.7-1.1 1.6-4.3 6.7-7.1 11.2-18 28.2-43.7 53.9-73 72.9-10.7 6.8-32.7 18.4-38.6 20.2-1.2 0.3-2.5 0.9-3 1.3-0.7 0.6-9.8 4-20.4 7.8-19.5 6.9-56.6 14.4-86.4 17.5-19.3 1.9-22.4 2-96.7 2h-76.9v-129.7-129.8l220.9-0.4c121.5-0.2 221.6-0.5 222.4-0.7 0.9-0.1 1.8 0.5 2.1 1.2z"
                />
              </svg>
            }
            value={<AnimatedCounter end={1.2} suffix="T" />}
            label="Market Value"
            delay={0.1}
          />
          {/* Deals */}
          <StatCard
            icon={<Calendar className="text-white" size={26} />}
            value={<AnimatedCounter end={351} suffix="K+" />}
            label="Annual Deals"
            delay={0.15}
          />
        </motion.div>
      </motion.div>

      {/* Subtle top/bottom vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_30%_at_50%_-10%,rgba(0,0,0,0.4),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_30%_at_50%_110%,rgba(0,0,0,0.6),transparent_60%)]" />
    </section>
  );
};

/* --------------------------- Stat Card UI -------------------------- */

const StatCard = ({ icon, value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/20 shadow-[0_10px_40px_rgba(66,153,255,0.15)]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(40rem 12rem at 50% -10%, rgba(93, 188, 255, 0.18), transparent)",
        }}
      />
      <div className="flex items-center justify-center mb-3">{icon}</div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1 text-center">
        {value}
      </div>
      <div className="text-white/70 text-sm font-medium text-center">
        {label}
      </div>
    </motion.div>
  );
};

export default HeroSectionAlt5;
