import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Star,
  Eye,
  Target,
  Diamond,
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Zap,
  Shield,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  BarChart3,
  UserCheck,
  Megaphone,
  Monitor,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/sections/AnimatedCounter";

const DeveloperBenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Eye,
      title: "24/7 Visibility",
      description:
        "Gain round-the-clock visibility among top agents and serious buyers who might otherwise bypass your sales center.",
      stats: "30x amplified reach",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: DollarSign,
      title: "Reduce Acquisition Costs",
      description:
        "Eliminate wasteful spending on inefficient marketing and standalone showrooms. DPS drastically reduces your customer acquisition cost.",
      stats: "Up to 60% cost reduction",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Users,
      title: "Center of Exposure",
      description:
        "Maximize exposure to top agents who routinely bring clients to DPS, ensuring your project is never overlooked.",
      stats: "10K+ monthly visitors",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: TrendingUp,
      title: "Brand Amplification",
      description:
        "Your brand benefits from the collective presence and marketing power of all showcased developers. Shared traffic creates a multiplier effect.",
      stats: "95% client satisfaction",
      color: "from-orange-500 to-red-600",
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
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Developer Benefits
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-gradient">Always-On Lead Engine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your marketing approach with DPS - the platform that puts
            your projects in front of qualified buyers and agents 24/7, 365 days
            a year.
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
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <benefit.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#073c75] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#073c75] text-white text-sm font-semibold">
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
      </div>
    </section>
  );
};

const PlatformFeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const features = [
    {
      icon: Building2,
      title: "Labeled Booths - Your Brand, Amplified",
      description:
        "A premier, brandable space in Dubai's most high-traffic real estate destination. Command attention and present your projects with the prestige they deserve.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Monitor,
      title: "State-of-the-Art Technology",
      description:
        "4K screens and immersive audiovisuals to showcase your projects with unparalleled impact. Create unforgettable, high-impact buyer experiences.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Coffee,
      title: "Centralized Amenities",
      description:
        "World-class meeting rooms, elegant lounge areas, and premium hospitality partners. Provide a five-star experience for your potential buyers.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Megaphone,
      title: "Omni-Channel Marketing",
      description:
        "DPS drives global investor traffic through targeted campaigns, international partnerships, and high-visibility advertising across all channels.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Platform for{" "}
            <span className="text-gradient">Unbeatable Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to showcase your projects and connect with
            qualified buyers.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="text-white" size={28} />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <Button className="bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Developer inquiry submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Join DPS Today
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Secure Your <span className="text-gradient">Premium Space</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to amplify your project's visibility? Get in touch to reserve
            your booth at DPS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-2xl border-0 bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your development company"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <Input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed-use">Mixed-Use</option>
                    <option value="luxury">Luxury</option>
                    <option value="off-plan">Off-Plan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details & Requirements
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your projects, target market, and specific requirements for your DPS booth..."
                    className="min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white text-lg py-4"
                >
                  Reserve Your Booth
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
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
            For Developers
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Amplify Your Projects with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#51779e] to-white">
              Dubai's Premier Platform
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join 30+ leading developers at DPS and showcase your projects to
            Dubai's most qualified buyers and agents. Reduce marketing costs
            while maximizing exposure and sales.
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
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
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
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
          </div> */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Properties Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {" "}
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Premium Developers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {" "}
                <AnimatedCounter end={40} suffix="%" />
              </div>
              <div className="text-white/70 text-sm">Higher Closing Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Platform Access</div>
            </div>
          </div> */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Premium Developers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="K+" />
              </div>
              <div className="text-white/70 text-sm">Monthly Visitors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={60} suffix="%" />
              </div>
              <div className="text-white/70 text-sm">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">365</div>
              <div className="text-white/70 text-sm">Days Active</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Developers = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <DeveloperBenefitsSection />
      <PlatformFeaturesSection />
      <ContactFormSection />

      {/* Final CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Dubai's Premier Developers?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Don't miss your opportunity to be part of the convergence. Limited
            premium booth spaces available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
            >
              <Phone className="mr-2" size={20} />
              Call: +971 4 XXX XXXX
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              <Mail className="mr-2" size={20} />
              partners@dps-expo.com
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Developers;
