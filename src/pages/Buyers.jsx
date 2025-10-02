import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Building2,
  Search,
  Eye,
  Target,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Heart,
  Award,
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  BarChart3,
  Filter,
  Coffee,
  Play,
  Home,
  DollarSign,
  ChevronRight,
  TrendingUp,
  Compass,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      let startTime;
      const startCount = 0;
      const endCount = end;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * (endCount - startCount) + startCount));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
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
    <section className="relative h-[70rem] lg:h-[50rem] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs font-semibold px-6 py-3">
            For Property Buyers
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            SEE MORE. COMPARE FASTER.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#51779e] to-white">
              DECIDE SMARTER
            </span>
          </h1>

          <p className="text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience Dubai's most comprehensive property showcase where every
            option is compared, every question is answered, and every decision
            is made with complete confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2" size={20} />
              Visit DPS Today
            </Button> */}
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
                      Visit DPS Today
                    </motion.span>
                    <Calendar
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

            {/* <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="mr-2" size={20} />
              Watch Virtual Tour
            </Button> */}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 30, suffix: "+", label: "Top Developers" },
              { value: 4, suffix: "M+", label: "Residents" },
              { value: 351538, label: "Annual Transactions" },
              { value: 1.192, suffix: "T", label: "Market Value" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix || ""}
                  />
                </div>
                <div className="text-sm text-gray-300 flex justify-center items-center gap-2">
                  {index === 3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.2"
                      viewBox="0 0 1000 870"
                      className="w-4 h-4 fill-gray-300"
                    >
                      <path
                        id="Layer copy"
                        class="s0"
                        d="m88.3 1c0.4 0.6 2.6 3.3 4.7 5.9 15.3 18.2 26.8 47.8 33 85.1 4.1 24.5 4.3 32.2 4.3 125.6v87h-41.8c-38.2 0-42.6-0.2-50.1-1.7-11.8-2.5-24-9.2-32.2-17.8-6.5-6.9-6.3-7.3-5.9 13.6 0.5 17.3 0.7 19.2 3.2 28.6 4 14.9 9.5 26 17.8 35.9 11.3 13.6 22.8 21.2 39.2 26.3 3.5 1 10.9 1.4 37.1 1.6l32.7 0.5v43.3 43.4l-46.1-0.3-46.3-0.3-8-3.2c-9.5-3.8-13.8-6.6-23.1-14.9l-6.8-6.1 0.4 19.1c0.5 17.7 0.6 19.7 3.1 28.7 8.7 31.8 29.7 54.5 57.4 61.9 6.9 1.9 9.6 2 38.5 2.4l30.9 0.4v89.6c0 54.1-0.3 94-0.8 100.8-0.5 6.2-2.1 17.8-3.5 25.9-6.5 37.3-18.2 65.4-35 83.6l-3.4 3.7h169.1c101.1 0 176.7-0.4 187.8-0.9 19.5-1 63-5.3 72.8-7.4 3.1-0.6 8.9-1.5 12.7-2.1 8.1-1.2 21.5-4 40.8-8.9 27.2-6.8 52-15.3 76.3-26.1 7.6-3.4 29.4-14.5 35.2-18 3.1-1.8 6.8-4 8.2-4.7 3.9-2.1 10.4-6.3 19.9-13.1 4.7-3.4 9.4-6.7 10.4-7.4 4.2-2.8 18.7-14.9 25.3-21 25.1-23.1 46.1-48.8 62.4-76.3 2.3-4 5.3-9 6.6-11.1 3.3-5.6 16.9-33.6 18.2-37.8 0.6-1.9 1.4-3.9 1.8-4.3 2.6-3.4 17.6-50.6 19.4-60.9 0.6-3.3 0.9-3.8 3.4-4.3 1.6-0.3 24.9-0.3 51.8-0.1 53.8 0.4 53.8 0.4 65.7 5.9 6.7 3.1 8.7 4.5 16.1 11.2 9.7 8.7 8.8 10.1 8.2-11.7-0.4-12.8-0.9-20.7-1.8-23.9-3.4-12.3-4.2-14.9-7.2-21.1-9.8-21.4-26.2-36.7-47.2-44l-8.2-3-33.4-0.4-33.3-0.5 0.4-11.7c0.4-15.4 0.4-45.9-0.1-61.6l-0.4-12.6 44.6-0.2c38.2-0.2 45.3 0 49.5 1.1 12.6 3.5 21.1 8.3 31.5 17.8l5.8 5.4v-14.8c0-17.6-0.9-25.4-4.5-37-7.1-23.5-21.1-41-41.1-51.8-13-7-13.8-7.2-58.5-7.5-26.2-0.2-39.9-0.6-40.6-1.2-0.6-0.6-1.1-1.6-1.1-2.4 0-0.8-1.5-7.1-3.5-13.9-23.4-82.7-67.1-148.4-131-197.1-8.7-6.7-30-20.8-38.6-25.6-3.3-1.9-6.9-3.9-7.8-4.5-4.2-2.3-28.3-14.1-34.3-16.6-3.6-1.6-8.3-3.6-10.4-4.4-35.3-15.3-94.5-29.8-139.7-34.3-7.4-0.7-17.2-1.8-21.7-2.2-20.4-2.3-48.7-2.6-209.4-2.6-135.8 0-169.9 0.3-169.4 1zm330.7 43.3c33.8 2 54.6 4.6 78.9 10.5 74.2 17.6 126.4 54.8 164.3 117 3.5 5.8 18.3 36 20.5 42.1 10.5 28.3 15.6 45.1 20.1 67.3 1.1 5.4 2.6 12.6 3.3 16 0.7 3.3 1 6.4 0.7 6.7-0.5 0.4-100.9 0.6-223.3 0.5l-222.5-0.2-0.3-128.5c-0.1-70.6 0-129.3 0.3-130.4l0.4-1.9h71.1c39 0 78 0.4 86.5 0.9zm297.5 350.3c0.7 4.3 0.7 77.3 0 80.9l-0.6 2.7-227.5-0.2-227.4-0.3-0.2-42.4c-0.2-23.3 0-42.7 0.2-43.1 0.3-0.5 97.2-0.8 227.7-0.8h227.2zm-10.2 171.7c0.5 1.5-1.9 13.8-6.8 33.8-5.6 22.5-13.2 45.2-20.9 62-3.8 8.6-13.3 27.2-15.6 30.7-1.1 1.6-4.3 6.7-7.1 11.2-18 28.2-43.7 53.9-73 72.9-10.7 6.8-32.7 18.4-38.6 20.2-1.2 0.3-2.5 0.9-3 1.3-0.7 0.6-9.8 4-20.4 7.8-19.5 6.9-56.6 14.4-86.4 17.5-19.3 1.9-22.4 2-96.7 2h-76.9v-129.7-129.8l220.9-0.4c121.5-0.2 221.6-0.5 222.4-0.7 0.9-0.1 1.8 0.5 2.1 1.2z"
                      />
                    </svg>
                  )}
                  <span>{stat.label}</span>{" "}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BuyerBenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Building2,
      title: "All Choices, One Roof",
      description:
        "Find every top developer in Dubai under a single roof. Make the most important decision of your life with perfect information and zero pressure.",
      stats: "30+ Top Developers",
      color: "from-[#073c75] to-green-700",
      features: [
        "Central location",
        "Easy access",
        "Complete coverage",
        "Time-efficient",
      ],
    },
    {
      icon: Search,
      title: "Compare Side-by-Side",
      description:
        "See 30+ developers literally side-by-side. Compare specs, views, and value in real-time—not from memory days apart.",
      stats: "Real-time comparison",
      color: "from-blue-500 to-blue-700",
      features: [
        "Instant comparison",
        "Clear visualization",
        "Memory-free decisions",
        "Fair evaluation",
      ],
    },
    {
      icon: Shield,
      title: "No Pressure, Just Clarity",
      description:
        "Take your time. Ask real questions. Get real answers. No sales pressure—just transparent information to empower your decision.",
      stats: "Pressure-free environment",
      color: "from-purple-500 to-purple-700",
      features: [
        "Transparent pricing",
        "Honest guidance",
        "Relaxed atmosphere",
        "Informed choices",
      ],
    },
    {
      icon: Clock,
      title: "Your Terms, Your Timeline",
      description:
        "You set the pace, revisit projects, include family, and reflect freely. Your important decision deserves respect and ease.",
      stats: "Flexible scheduling",
      color: "from-orange-500 to-red-600",
      features: [
        "Flexible timing",
        "Family-friendly",
        "Multiple visits",
        "Thoughtful decisions",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200 text-sm font-semibold px-6 py-3">
            Your Portfolio Command Center
          </Badge> */}
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Your Portfolio Command Center
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Where Choices <span className="text-gradient">Become Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At DPS, we bring the entire Dubai Real Estate market under one roof.
            No endless driving. No confusing options. No pressure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <benefit.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4  transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {benefit.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          className="text-[#073c75] flex-shrink-0"
                          size={16}
                        />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#073c75] text-white text-sm font-semibold px-3 py-1">
                      {benefit.stats}
                    </Badge>
                    <ArrowRight
                      className="text-[#073c75] group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">
                Dubai's Thriving Property Market
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    <AnimatedCounter end={4} suffix="M+" />
                  </div>
                  <p className="text-gray-200">
                    People calling Dubai home - and it's not slowing down
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    <AnimatedCounter end={100000} suffix="+" />
                  </div>
                  <p className="text-gray-200">
                    New residents every year looking for homes and investments
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    <AnimatedCounter end={963} />
                  </div>
                  <p className="text-gray-200">
                    Property deals completed every single day
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      icon: Home,
      title: "Your Journey, Simplified",
      description:
        "Easily find and explore every top developer in one convenient, central location. No more driving across the city. Your perfect home or investment is just steps away.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Central location",
        "Easy parking",
        "All developers",
        "One-stop shopping",
      ],
    },
    {
      icon: Play,
      title: "See Your Future, in Detail",
      description:
        "Stunning 4K screens and immersive virtual tours bring properties to life before they're built. Compare finishes, views, and layouts in vivid detail, making your decision with total confidence.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "4K displays",
        "Virtual tours",
        "Interactive models",
        "Detailed layouts",
      ],
    },
    {
      icon: Coffee,
      title: "Explore in Comfort",
      description:
        "Relaxed lounge areas, complimentary refreshments, and private meeting spaces. Take your time and enjoy a pressure-free environment to discuss your options with family or advisors.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Comfortable seating",
        "Free refreshments",
        "Private spaces",
        "Family-friendly",
      ],
    },
    {
      icon: Shield,
      title: "Your Trusted Source",
      description:
        "DPS is a curated destination, promoted as the trusted place to begin your property search. Start your journey with confidence in a professional environment dedicated to transparency and choice.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Verified developers",
        "Professional environment",
        "Trusted platform",
        "Expert guidance",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm font-semibold px-6 py-3">
            The DPS Experience
          </Badge> */}
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            The DPS Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Designed for <span className="text-gradient">Your Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of DPS is designed to make your property journey
            seamless, informed, and enjoyable.
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div
                    className={`absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <experience.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="max-w-lg">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {experience.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {experience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          className="text-[#073c75] flex-shrink-0"
                          size={20}
                        />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "residential",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-white"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands who have already discovered their perfect home or
            investment at DPS. Your journey to Dubai's finest properties starts
            here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-gray-900 text-2xl">
                  Get Started Today
                </CardTitle>
                <p className="text-gray-700">
                  Let us help you find the perfect property
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gray-100 border-gray-100 text-gray-900 placeholder:text-gray-700"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-gray-100 border-gray-100 text-gray-900 placeholder:text-gray-700"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-gray-100 border-gray-100 text-gray-900 placeholder:text-gray-700"
                  />
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full p-3 bg-gray-100 border-gray-100 rounded-md text-gray-900"
                  >
                    <option value="residential" className="text-gray-900">
                      Residential Properties
                    </option>
                    <option value="commercial" className="text-gray-900">
                      Commercial Properties
                    </option>
                    <option value="investment" className="text-gray-900">
                      Investment Opportunities
                    </option>
                    <option value="luxury" className="text-gray-900">
                      Luxury Properties
                    </option>
                  </select>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Your Visit
                    <Calendar className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Visit DPS Today</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#073c75]" size={24} />
                  <div>
                    <p className="font-semibold">DPS Exhibition Center</p>
                    <p className="text-gray-700">
                      Main Umm Seqiem Road, Barsh 2, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-[#073c75]" size={24} />
                  <div>
                    <p className="font-semibold">Open Daily</p>
                    <p className="text-gray-700">9:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#073c75]" size={24} />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-700">+971 4 XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm py-4">
                <Play className="mr-2" size={20} />
                Virtual Tour
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm py-4">
                <BookOpen className="mr-2" size={20} />
                Property Guide
              </Button>
            </div> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Buyers = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BuyerBenefitsSection />
      <ExperienceSection />
      <CTASection />
    </div>
  );
};

export default Buyers;
