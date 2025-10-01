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
              { value: 1.192, suffix: "T", label: "AED Market Value" },
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
                <div className="text-sm text-gray-300">{stat.label}</div>
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
