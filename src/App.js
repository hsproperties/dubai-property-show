import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Star,
  Eye,
  Target,
  Diamond,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import ComingSoonPage from "./ComingSoonPage";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Counter component
const Counter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "properties", label: "Properties" },
    { id: "exhibitors", label: "Exhibitors" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold text-blue-600">DPS</div>
            <div className="ml-2 text-sm text-gray-600">
              Dubai Property Show
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm ${
                    currentPage === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-600/80 z-10"></div>
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 mb-8 mx-auto">
              <div className="w-full h-full rounded-full border-4 border-white/30 flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Building2 size={32} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            ONE PLATFORM.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              EVERY DEAL.
            </span>
            <br />
            ZERO FRICTION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
          >
            The Central Nervous System of Dubai Real Estate - Where Discovery
            Becomes Effortless
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Play size={20} />
              Watch Video
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={4} suffix="M+" />
              </div>
              <div className="text-gray-600">Dubai Residents</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={100000} suffix="+" />
              </div>
              <div className="text-gray-600">New Residents Yearly</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                AED <Counter end={1.192} suffix="T" />
              </div>
              <div className="text-gray-600">Real Estate Investment</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={351538} />
              </div>
              <div className="text-gray-600">Annual Transactions</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Architect of{" "}
              <span className="text-blue-600 italic">Convergence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DPS is a strategic infrastructure built to optimize the entire
              real estate transaction chain
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To centralize discovery and transaction, creating the most
                efficient and transparent Real Estate market in the World.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Diamond className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Our Values</h3>
              <p className="text-gray-600 text-center">
                Leveraged Visibility. We create a network effect where the
                success of each participant amplifies the success of all.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                To assemble the complete collection of Dubai's premier Real
                Estate Developers, establishing our showcase as the
                indispensable first destination for discovery.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Join the Convergence
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Real Estate Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the future of property discovery at DPS 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Register as Visitor
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Become an Exhibitor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const timeline = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Check-in and welcome refreshments",
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Official launch with keynote speakers",
    },
    {
      time: "11:00 AM",
      title: "Developer Presentations",
      description: "Featured projects and investment opportunities",
    },
    {
      time: "01:00 PM",
      title: "Networking Lunch",
      description: "Connect with industry professionals",
    },
    {
      time: "02:30 PM",
      title: "Property Tours",
      description: "Virtual and physical property showcases",
    },
    {
      time: "04:00 PM",
      title: "Investment Seminars",
      description: "Expert insights and market analysis",
    },
    {
      time: "05:30 PM",
      title: "Closing & Awards",
      description: "Recognition ceremony and closing remarks",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">DPS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Central Nervous System of Dubai Real Estate - A paradigm shift
            creating a permanent, hyper-connected showcase designed to
            orchestrate success for every stakeholder.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Problem We Solve
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <X size={16} className="text-red-600" />
                </div>
                <p className="text-gray-600">
                  Fragmented and complicated discovery process
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <X size={16} className="text-red-600" />
                </div>
                <p className="text-gray-600">
                  Expensive, under-utilized standalone showrooms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <X size={16} className="text-red-600" />
                </div>
                <p className="text-gray-600">
                  Sporadic expo impact with no lasting presence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <X size={16} className="text-red-600" />
                </div>
                <p className="text-gray-600">
                  Uncertain marketing ROI with no consolidated data
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The DPS Solution
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <p className="text-gray-600">
                  Always-on, high-traffic sales center amplifying visibility
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <p className="text-gray-600">
                  30x amplified visibility through collective presence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <p className="text-gray-600">
                  Dramatically reduced customer acquisition costs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <p className="text-gray-600">
                  Data & tech integration as core features
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Event Schedule
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-blue-600 font-semibold">
                    {item.time}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-blue-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Join the Convergence</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the transformation that's reshaping Dubai's real estate
            landscape
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Secure Your Spot
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Properties Page Component
const PropertiesPage = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const properties = [
    {
      id: 1,
      name: "Marina Heights",
      location: "Dubai Marina",
      price: "AED 1.2M - 3.5M",
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Sea View", "2-3 BR", "Premium Finishes"],
    },
    {
      id: 2,
      name: "Downtown Residences",
      location: "Downtown Dubai",
      price: "AED 900K - 2.8M",
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Burj Khalifa View", "1-3 BR", "Smart Home"],
    },
    {
      id: 3,
      name: "Palm Villa Collection",
      location: "Palm Jumeirah",
      price: "AED 8M - 25M",
      type: "villa",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Private Beach", "4-6 BR", "Luxury Finishes"],
    },
    {
      id: 4,
      name: "Business Bay Tower",
      location: "Business Bay",
      price: "AED 800K - 2.2M",
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Canal View", "Studio-2 BR", "Modern Design"],
    },
    {
      id: 5,
      name: "Emirates Hills Estate",
      location: "Emirates Hills",
      price: "AED 12M - 40M",
      type: "villa",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Golf Course View", "5-7 BR", "Private Pool"],
    },
    {
      id: 6,
      name: "JLT Premium Suites",
      location: "Jumeirah Lake Towers",
      price: "AED 700K - 1.8M",
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Lake View", "1-2 BR", "High ROI"],
    },
  ];

  const filteredProperties = properties
    .filter((property) => filter === "all" || property.type === filter)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "location") return a.location.localeCompare(b.location);
      return 0;
    });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Properties</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Dubai's most prestigious developments all under one roof.
            Compare, explore, and invest with confidence.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
        >
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter("apartment")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "apartment"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Apartments
            </button>
            <button
              onClick={() => setFilter("villa")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "villa"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Villas
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="location">Sort by Location</option>
          </select>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.type.charAt(0).toUpperCase() +
                    property.type.slice(1)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-600 mb-3">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {property.price}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Our experts can help you
            discover the perfect property.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Speak with an Expert
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Exhibitors Page Component
const ExhibitorsPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const exhibitors = [
    {
      name: "Emaar Properties",
      logo: "https://via.placeholder.com/200x100/3B82F6/FFFFFF?text=EMAAR",
    },
    {
      name: "Dubai Properties",
      logo: "https://via.placeholder.com/200x100/1E40AF/FFFFFF?text=DP",
    },
    {
      name: "Damac Properties",
      logo: "https://via.placeholder.com/200x100/2563EB/FFFFFF?text=DAMAC",
    },
    {
      name: "Sobha Realty",
      logo: "https://via.placeholder.com/200x100/3730A3/FFFFFF?text=SOBHA",
    },
    {
      name: "Nakheel",
      logo: "https://via.placeholder.com/200x100/1D4ED8/FFFFFF?text=NAKHEEL",
    },
    {
      name: "Meraas",
      logo: "https://via.placeholder.com/200x100/2D3748/FFFFFF?text=MERAAS",
    },
    {
      name: "Dubai Holding",
      logo: "https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=DH",
    },
    {
      name: "Azizi Developments",
      logo: "https://via.placeholder.com/200x100/7C3AED/FFFFFF?text=AZIZI",
    },
  ];

  const faqs = [
    {
      question: "How do I become an exhibitor at DPS?",
      answer:
        "Contact our partnerships team at partners@dps-expo.com to discuss available booth options and pricing packages. We offer various sizes and premium locations to suit different needs and budgets.",
    },
    {
      question: "What's included in the exhibitor package?",
      answer:
        "Each package includes a branded booth space, 4K presentation screens, Wi-Fi connectivity, basic furniture, marketing support, and access to our visitor database. Premium packages include additional amenities.",
    },
    {
      question: "Can I customize my booth design?",
      answer:
        "Yes! All booth spaces are fully customizable. Our design team can help create a branded environment that showcases your projects effectively and captures visitor attention.",
    },
    {
      question: "What are the visitor demographics?",
      answer:
        "DPS attracts high-net-worth individuals, international investors, local buyers, real estate agents, and industry professionals. 70% are serious buyers with purchase intent within 12 months.",
    },
    {
      question: "Is there networking opportunities?",
      answer:
        "Absolutely! We organize exclusive networking events, VIP investor meetings, and industry roundtables. It's a perfect opportunity to connect with potential clients and industry peers.",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Exhibitors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dubai's premier real estate developers converge under one roof,
            showcasing the city's most exciting projects and investment
            opportunities.
          </p>
        </motion.div>

        {/* Exhibitors Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {exhibitors.map((exhibitor, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center"
            >
              <img
                src={exhibitor.logo}
                alt={exhibitor.name}
                className="max-w-full h-16 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Exhibit at DPS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                30x Amplified Visibility
              </h3>
              <p className="text-gray-600">
                Your brand benefits from the collective presence and marketing
                power of all showcased developers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Reduced Acquisition Costs
              </h3>
              <p className="text-gray-600">
                DPS drastically reduces customer acquisition costs by providing
                pre-qualified, serious investors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Visibility</h3>
              <p className="text-gray-600">
                Gain visibility among agents and investors who might otherwise
                bypass your sales centre.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50"
                    >
                      <div className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Showcase Your Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Dubai's premier developers and secure your booth at DPS 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Become an Exhibitor
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "visitor",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join the convergence? Get in touch with our team to learn
            more about DPS 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="visitor">Visitor Registration</option>
                  <option value="exhibitor">Exhibitor Partnership</option>
                  <option value="sponsor">Sponsorship Opportunities</option>
                  <option value="media">Media Inquiries</option>
                  <option value="general">General Information</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      DPS Exhibition Center
                    </h3>
                    <p className="text-gray-600">
                      Main Umm Seqiem Road, Barsha 2<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      General: info@dps-expo.com
                      <br />
                      Sponsorships: partners@dps-expo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+971 4 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Event Date</h3>
                    <p className="text-gray-600">
                      March 15-17, 2025
                      <br />
                      9:00 AM - 6:00 PM daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold">ig</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold">yt</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Follow us for real-time updates, exhibitor announcements, and
                behind-the-scenes content.
                <br />
                <span className="text-blue-600">
                  #DPSDubai2025 #InvestInDubai #DPSExpo
                </span>
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">DPS Exhibition Center Location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-blue-400">DPS</div>
              <div className="ml-2 text-sm text-gray-400">
                Dubai Property Show
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The Central Nervous System of Dubai Real Estate. One Platform.
              Every Deal. Zero Friction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About DPS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Exhibitors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Partners</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become Exhibitor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                Main Umm Seqiem Road
                <br />
                Barsha 2, Dubai, UAE
              </p>
              <p>info@dps-expo.com</p>
              <p>+971 4 XXX XXXX</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Dubai Property Show. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "properties":
        return <PropertiesPage />;
      case "exhibitors":
        return <ExhibitorsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
            {/* <ComingSoonPage /> */}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
