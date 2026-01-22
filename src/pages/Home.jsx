import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/sections/HeroSection";
import StakeholderSections from "@/components/sections/StakeholderSections";
import EventCalendar from "@/components/EventCalendar";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import Footer from "@/components/Footer";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Star,
  ChevronRight,
  Eye,
  Target,
  Diamond,
  Globe,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  Phone,
  Play,
  Search,
  Filter,
  Sparkles,
  Zap,
  Shield,
  Heart,
  UserCheck,
  Clock,
  Home as HomeIcon,
  Coffee,
  FileText,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import HeroSectionAlt from "../components/sections/HeroSectionAlt";
import HeroSectionAlt2 from "../components/sections/HeroSectionAlt2";
import HeroSectionAlt3 from "../components/sections/HeroSectionAlt3";
import HeroSectionAlt4 from "../components/sections/HeroSectionAlt4";
import HeroSectionAlt5 from "../components/sections/HeroSectionAlt5";
import ScheduleVisitModal from "@/components/ScheduleVisitModal";
import HeroSectionVideo from "../components/sections/HeroSectionVideo";

const PropertyShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const featuredProperties = [
    {
      id: 1,
      title: "Burj Crown Residences",
      location: "Downtown Dubai",
      price: "2.5M",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Luxury Apartment",
      bedrooms: "2-3 BR",
      status: "Launching Soon",
      developer: "Emaar Properties",
    },
    {
      id: 2,
      title: "Marina Pinnacle",
      location: "Dubai Marina",
      price: "3.2M",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Penthouse",
      bedrooms: "3-4 BR",
      status: "Available Now",
      developer: "DAMAC Properties",
    },
    {
      id: 3,
      title: "Palm Royal Villas",
      location: "Palm Jumeirah",
      price: "8.5M",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Beachfront Villa",
      bedrooms: "4-5 BR",
      status: "Exclusive",
      developer: "Nakheel",
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
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-6 py-2">
            Featured Properties
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Handpicked <span className="text-gradient">Premium Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional properties from Dubai's most trusted
            developers, carefully curated for discerning investors and
            homeowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <Badge
                    className={`absolute top-4 left-4 bg-[#073c75] text-white border-0 shadow-lg`}
                  >
                    {property.status}
                  </Badge>

                  <Button
                    size="sm"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Virtual Tour
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#073c75] transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {property.developer}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {property.type}
                    </span>
                    <span className="bg-[#cdd8e3] text-[#073c75] px-3 py-1 rounded-full">
                      {property.bedrooms}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#073c75] flex justify-center items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.2"
                        viewBox="0 0 1000 870"
                        className="w-6 h-6 fill-[#073c75]"
                      >
                        <path
                          id="Layer copy"
                          className="s0"
                          d="m88.3 1c0.4 0.6 2.6 3.3 4.7 5.9 15.3 18.2 26.8 47.8 33 85.1 4.1 24.5 4.3 32.2 4.3 125.6v87h-41.8c-38.2 0-42.6-0.2-50.1-1.7-11.8-2.5-24-9.2-32.2-17.8-6.5-6.9-6.3-7.3-5.9 13.6 0.5 17.3 0.7 19.2 3.2 28.6 4 14.9 9.5 26 17.8 35.9 11.3 13.6 22.8 21.2 39.2 26.3 3.5 1 10.9 1.4 37.1 1.6l32.7 0.5v43.3 43.4l-46.1-0.3-46.3-0.3-8-3.2c-9.5-3.8-13.8-6.6-23.1-14.9l-6.8-6.1 0.4 19.1c0.5 17.7 0.6 19.7 3.1 28.7 8.7 31.8 29.7 54.5 57.4 61.9 6.9 1.9 9.6 2 38.5 2.4l30.9 0.4v89.6c0 54.1-0.3 94-0.8 100.8-0.5 6.2-2.1 17.8-3.5 25.9-6.5 37.3-18.2 65.4-35 83.6l-3.4 3.7h169.1c101.1 0 176.7-0.4 187.8-0.9 19.5-1 63-5.3 72.8-7.4 3.1-0.6 8.9-1.5 12.7-2.1 8.1-1.2 21.5-4 40.8-8.9 27.2-6.8 52-15.3 76.3-26.1 7.6-3.4 29.4-14.5 35.2-18 3.1-1.8 6.8-4 8.2-4.7 3.9-2.1 10.4-6.3 19.9-13.1 4.7-3.4 9.4-6.7 10.4-7.4 4.2-2.8 18.7-14.9 25.3-21 25.1-23.1 46.1-48.8 62.4-76.3 2.3-4 5.3-9 6.6-11.1 3.3-5.6 16.9-33.6 18.2-37.8 0.6-1.9 1.4-3.9 1.8-4.3 2.6-3.4 17.6-50.6 19.4-60.9 0.6-3.3 0.9-3.8 3.4-4.3 1.6-0.3 24.9-0.3 51.8-0.1 53.8 0.4 53.8 0.4 65.7 5.9 6.7 3.1 8.7 4.5 16.1 11.2 9.7 8.7 8.8 10.1 8.2-11.7-0.4-12.8-0.9-20.7-1.8-23.9-3.4-12.3-4.2-14.9-7.2-21.1-9.8-21.4-26.2-36.7-47.2-44l-8.2-3-33.4-0.4-33.3-0.5 0.4-11.7c0.4-15.4 0.4-45.9-0.1-61.6l-0.4-12.6 44.6-0.2c38.2-0.2 45.3 0 49.5 1.1 12.6 3.5 21.1 8.3 31.5 17.8l5.8 5.4v-14.8c0-17.6-0.9-25.4-4.5-37-7.1-23.5-21.1-41-41.1-51.8-13-7-13.8-7.2-58.5-7.5-26.2-0.2-39.9-0.6-40.6-1.2-0.6-0.6-1.1-1.6-1.1-2.4 0-0.8-1.5-7.1-3.5-13.9-23.4-82.7-67.1-148.4-131-197.1-8.7-6.7-30-20.8-38.6-25.6-3.3-1.9-6.9-3.9-7.8-4.5-4.2-2.3-28.3-14.1-34.3-16.6-3.6-1.6-8.3-3.6-10.4-4.4-35.3-15.3-94.5-29.8-139.7-34.3-7.4-0.7-17.2-1.8-21.7-2.2-20.4-2.3-48.7-2.6-209.4-2.6-135.8 0-169.9 0.3-169.4 1zm330.7 43.3c33.8 2 54.6 4.6 78.9 10.5 74.2 17.6 126.4 54.8 164.3 117 3.5 5.8 18.3 36 20.5 42.1 10.5 28.3 15.6 45.1 20.1 67.3 1.1 5.4 2.6 12.6 3.3 16 0.7 3.3 1 6.4 0.7 6.7-0.5 0.4-100.9 0.6-223.3 0.5l-222.5-0.2-0.3-128.5c-0.1-70.6 0-129.3 0.3-130.4l0.4-1.9h71.1c39 0 78 0.4 86.5 0.9zm297.5 350.3c0.7 4.3 0.7 77.3 0 80.9l-0.6 2.7-227.5-0.2-227.4-0.3-0.2-42.4c-0.2-23.3 0-42.7 0.2-43.1 0.3-0.5 97.2-0.8 227.7-0.8h227.2zm-10.2 171.7c0.5 1.5-1.9 13.8-6.8 33.8-5.6 22.5-13.2 45.2-20.9 62-3.8 8.6-13.3 27.2-15.6 30.7-1.1 1.6-4.3 6.7-7.1 11.2-18 28.2-43.7 53.9-73 72.9-10.7 6.8-32.7 18.4-38.6 20.2-1.2 0.3-2.5 0.9-3 1.3-0.7 0.6-9.8 4-20.4 7.8-19.5 6.9-56.6 14.4-86.4 17.5-19.3 1.9-22.4 2-96.7 2h-76.9v-129.7-129.8l220.9-0.4c121.5-0.2 221.6-0.5 222.4-0.7 0.9-0.1 1.8 0.5 2.1 1.2z"
                        />
                      </svg>
                      <span>{property.price}</span>
                    </div>
                    <Button variant="outline" size="sm" className="group/btn">
                      Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white text-lg px-8 py-4"
            asChild
          >
            <Link to="/properties">
              View All Properties
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Browse curated projects from Dubai's leading developers.",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "02",
      title: "Compare",
      description:
        "View side-by-side comparisons of features, pricing, yields, and payments.",
      icon: Filter,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "03",
      title: "Connect",
      description: "Meet developers directly and schedule property visits.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "04",
      title: "Invest",
      description:
        "Make informed decisions with live market data sourced from Dubai Land Department.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-6 py-2">
            How It Works
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your seamless journey to{" "}
            <span className="text-gradient">Property Ownership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to investment, we've streamlined the entire process
            to make your property journey seamless and efficient.
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 py-4"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="min-w-[280px] lg:min-w-[320px]">
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white">
                  <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                  </div>

                  <CardContent className="relative pt-20 px-4 py-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="text-white" size={24} />
                    </div>

                    <div className="text-4xl font-bold text-[#073c75] mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DeveloperLogosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const developers = [
    { image: "/brand-logos/emaar-logo.svg" },
    { image: "/brand-logos/damac-logo.svg" },
    { image: "/brand-logos/nakheel-logo.svg" },
    { image: "/brand-logos/meras-logo.svg" },
    { image: "/brand-logos/dp-logo.svg" },
    { image: "/brand-logos/shoba-logo.svg" },
  ];

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-6 py-2">
            Trusted Developers
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Building Dubai’s <span className="text-gradient">Landmarks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with Dubai’s most reputable developers ensures that your
            investment is secure, high-quality, and future-ready.
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="lg:py-6"
        >
          {developers.map((dev, index) => (
            <div key={index} className="mx-6 lg:mx-16 flex items-center">
              {/* {index === 4
                < img
                    src={dev.image}
              alt={`developer-logo-${index}`}
              className="w-36"
                  />
              :
              <img
                src={dev.image}
                alt={`developer-logo-${index}`}
                className="w-44"
              />
              } */}
              {index === 4 ? (
                <img
                  src={dev.image}
                  alt={`developer-logo-${index}`}
                  className="w-28 lg:w-40 -mt-4"
                />
              ) : (
                <img
                  src={dev.image}
                  alt={`developer-logo-${index}`}
                  className="w-28 lg:w-44"
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};


const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Real Estate Developer",
      company: "Emaar Properties",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content:
        "DPS has revolutionized how we showcase our properties. The platform gives us direct access to serious buyers and qualified agents, dramatically reducing our marketing costs.",
      stakeholder: "Developer",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Property Consultant",
      company: "Gulf Real Estate",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      content:
        "As an agent, DPS is invaluable. I can show my clients multiple developer options in one location, making the comparison process seamless and professional.",
      stakeholder: "Agent",
    },
    {
      name: "Roberto Martinez",
      role: "International Investor",
      company: "European Capital Group",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content:
        "DPS made my Dubai property investment journey transparent and efficient. Being able to compare all options side-by-side gave me the confidence to make the right decision.",
      stakeholder: "Buyer",
    },
  ];

  // const getStakeholderColor = (stakeholder) => {
  //   switch (stakeholder) {
  //     case "Developer":
  //       return "bg-blue-100 text-blue-700";
  //     case "Agent":
  //       return "bg-purple-100 text-purple-700";
  //     case "Buyer":
  //       return "bg-green-100 text-green-700";
  //     default:
  //       return "bg-gray-100 text-gray-700";
  //   }
  // };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-6 py-2">
            Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Stakeholders Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from developers, agents, and buyers who have found success
            through our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-[#cdd8e3] object-top"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-[#073c75]">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <Badge className={`text-xs bg-[#073c75] text-white`}>
                      {testimonial.stakeholder}
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
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

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="https://www.dubai.it/en/wp-content/uploads/sites/142/dubai-marina-hd.jpg"
          alt="Dubai Skyline"
          className="w-full h-full object-cover opacity-100"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-blue-900 to-slate-900"></div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm font-semibold px-6 py-3">
            Join the Convergence
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
              Dubai's Premier
            </span>
            <br />
            Property Platform?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Whether you're a developer, agent, or buyer, DPS provides the
            platform to amplify your success in Dubai's dynamic real estate
            market.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button
            size="xl"
            className="bg-white text-[#073c75] hover:bg-gray-100 text-sm px-6 py-3 h-auto font-semibold shadow-2xl"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-3">
              <Calendar size={24} />
              Schedule Your Visit
              <ArrowRight size={20} />
            </Link>
          </Button>

          <Button
            size="xl"
            variant="outline"
            className="border-2 border-white text-[#073c75] hover:bg-gray-100 hover:text-[#073c75] text-sm px-6 py-3 h-auto font-semibold"
            asChild
          >
            <Link to="/developers">Meet Our Developers</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="flex flex-col items-center">
            <Shield className="text-white mb-2" size={32} />
            <div className="text-lg font-bold">100% Verified</div>
            <div className="text-sm text-white/70">Trusted Developers</div>
          </div>

          <div className="flex flex-col items-center">
            <Award className="text-white mb-2" size={32} />
            <div className="text-lg font-bold">30+ Developers</div>
            <div className="text-sm text-white/70">Premium Partners</div>
          </div>

          <div className="flex flex-col items-center">
            <Users className="text-white mb-2" size={32} />
            <div className="text-lg font-bold">10K+ Satisfied</div>
            <div className="text-sm text-white/70">Customers Served</div>
          </div>

          <div className="flex flex-col items-center">
            <Heart className="text-white mb-2" size={32} />
            <div className="text-lg font-bold">24/7 Support</div>
            <div className="text-sm text-white/70">Always Here for You</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Buyer Benefits Section Component
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
                  <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors">
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

// Experience Section Component
const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      icon: HomeIcon,
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
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
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
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
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-xl flex items-center justify-center shadow-lg">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section (like DWTC)
const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    {
      value: "4M+",
      label: "Listings",
      description: "Accessing global properties",
      icon: Building2,
    },
    {
      value: "50K+",
      label: "Global Visitors",
      description: "Expected attendees",
      icon: Users,
    },
    {
      value: "50+",
      label: "Countries",
      description: "Represented",
      icon: Globe,
    },
    {
      value: "30+",
      label: "Exhibiting",
      description: "Premium Companies",
      icon: Award,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-[#073c75] via-[#0d4a8a] to-[#073c75] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Authority Banner
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Accessing 4M+ Listings and 50k+ Global Visitors - Dubai's Thriving
            Property Market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                    suffix={
                      stat.value.includes("M")
                        ? "M+"
                        : stat.value.includes("K")
                        ? "K+"
                        : "+"
                    }
                    duration={2}
                  />
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Insights/News Section (like DWTC's "Our Insights")
const InsightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const insights = [
    {
      id: 1,
      title: "Dubai Real Estate Market Trends 2025",
      excerpt:
        "Discover the latest trends shaping Dubai's real estate market in 2025, from luxury developments to investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Insights",
      date: "Jan 15, 2025",
      readTime: "5 min",
      tags: ["Economy", "Real Estate", "Dubai"],
    },
    {
      id: 2,
      title: "Top Investment Areas in Dubai",
      excerpt:
        "Explore the most promising investment areas in Dubai for 2025, backed by data and expert analysis.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      date: "Jan 12, 2025",
      readTime: "7 min",
      tags: ["Investment", "Market Analysis"],
    },
    {
      id: 3,
      title: "Understanding RERA Regulations",
      excerpt:
        "A comprehensive guide to Dubai's Real Estate Regulatory Agency regulations and how they protect buyers and investors.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Legal",
      date: "Jan 10, 2025",
      readTime: "6 min",
      tags: ["Legal", "RERA"],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Our  <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest news, trends, and insights from
            Dubai's real estate market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#073c75] text-white">
                      {insight.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#073c75] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs text-gray-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#073c75] hover:text-[#073c75] p-0 h-auto"
                    asChild
                  >
                    <Link to="/blogs">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#073c75] hover:bg-[#0d4a8a] text-white"
            asChild
          >
            <Link to="/blogs">
              View All Insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Thematic Arenas Section (replaces EventCalendar)
const ThematicArenasSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const arenas = [
    {
      id: 1,
      title: "Innovation Arena",
      subtitle: "AI-Powered Tools",
      description:
        "Experience cutting-edge technology that revolutionizes property discovery and comparison.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["AI Property Matching", "Virtual Tours", "Smart Analytics"],
    },
    {
      id: 2,
      title: "Investor Summit",
      subtitle: "High-Growth Opportunities",
      description:
        "Connect with market leaders and discover lucrative investment opportunities in Dubai's thriving real estate sector.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Market Insights", "ROI Analysis", "Investment Strategies"],
    },
    {
      id: 3,
      title: "DnA Stage",
      subtitle: "Developers & Architects",
      description:
        "Showcase visionary designs and architectural masterpieces from Dubai's most innovative developers.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Design Showcases", "Architectural Tours", "Developer Spotlights"],
    },
    {
      id: 4,
      title: "Future of Living",
      subtitle: "Luxury & Sustainable",
      description:
        "Explore sustainable luxury residential projects that define the future of urban living in Dubai.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Sustainable Design", "Luxury Amenities", "Smart Homes"],
    },
  ];

  return (
    <section ref={ref} className="py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Thematic <span className="text-gradient">Arenas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four distinct stages for your real estate journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {arenas.map((arena, index) => (
            <motion.div
              key={arena.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={arena.image}
                    alt={arena.title}
                    className="w-full h-full object-cover overflow-hidden group-hover:scale-110 transition-transform duration-700"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <arena.icon className="text-white" size={40} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {arena.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {arena.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {arena.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {arena.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        className="from-blue-500 to-cyan-500 text-white hover:from-gray-200 hover:to-gray-300"
                      >
                        {feature}
                      </Badge>
                    ))}
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

// Voices of the Industry Section
const VoicesOfIndustrySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const speakers = [
    {
      id: 1,
      name: "Mohamed Alabbar",
      title: "Founder & Chairman",
      company: "Emaar Properties",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Ahmad Al Matrooshi",
      title: "Managing Director",
      company: "Emaar Properties",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Hussain Sajwani",
      title: "Founder & Chairman",
      company: "DAMAC Properties",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "P.N.C. Menon",
      title: "Founder & Chairman",
      company: "Sobha Realty",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "John Pagano",
      title: "CEO",
      company: "Red Sea Global",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Abdullah Al Hamed",
      title: "Minister of Housing",
      company: "UAE Government",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Voices of the <span className="text-gradient">Industry</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the leaders, CEOs, and visionaries shaping Dubai's real estate
            future
          </p>
        </motion.div>

        {/* Infinite Horizontal Scrolling Marquee */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="lg:py-6"
        >
          {[...speakers, ...speakers].map((speaker, index) => (
            <div key={`${speaker.id}-${index}`} className="mx-6 lg:mx-3 flex items-center">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[200px] overflow-hidden p-0">
                <div className="w-[300px] h-[300px] overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1 text-center">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-[#073c75] font-semibold text-center">
                    {speaker.company}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

// Giga-Project Showcases Section
const GigaProjectShowcasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      name: "NEOM",
      location: "Saudi Arabia",
      description:
        "A $500 billion giga-project redefining sustainable living and innovation.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "NEOM Company",
    },
    {
      id: 2,
      name: "Masar",
      location: "Makkah, Saudi Arabia",
      description:
        "A visionary urban development project transforming the heart of Makkah.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "Umm Al Qura Development",
    },
    {
      id: 3,
      name: "New Murabba",
      location: "Riyadh, Saudi Arabia",
      description:
        "The world's largest modern downtown, a new model for sustainable urban living.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "New Murabba Development Company",
    },
    {
      id: 4,
      name: "Dubai Creek Harbour",
      location: "Dubai, UAE",
      description:
        "A waterfront destination with residential, commercial, and cultural experiences.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "Emaar Properties",
    },
    {
      id: 5,
      name: "Palm Jebel Ali",
      location: "Dubai, UAE",
      description:
        "The second palm-shaped island, a symbol of Dubai's ambitious vision.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "Nakheel",
    },
    {
      id: 6,
      name: "Dubai South",
      location: "Dubai, UAE",
      description:
        "A 145-square-kilometer master-planned city around Al Maktoum International Airport.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      developer: "Dubai Aviation City Corporation",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Landmarks of the  <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the giga-projects that our platform facilitates connections
            for
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-[#073c75] text-white mb-2 border-0">
                      {project.location}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Building2 className="w-4 h-4 text-[#073c75]" />
                    <span className="font-medium">{project.developer}</span>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] text-white hover:opacity-90 hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tailored Visitor Journeys Section (Enhanced)
const TailoredVisitorJourneysSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const   journeys = [
    {
      id: 1,
      title: "I am an Investor",
      description:
        "Discover high-growth opportunities, market insights, and connect with premium developers.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      link: "/buyers",
      features: [
        "ROI Analysis Tools",
        "Market Trends",
        "Investment Strategies",
        "Premium Deals",
      ],
    },
    {
      id: 2,
      title: "I am a Developer",
      description:
        "Showcase your projects, connect with investors, and expand your market reach.",
      icon: Building2,
      color: "from-blue-500 to-cyan-600",
      link: "/developers",
      features: [
        "Project Showcases",
        "Investor Network",
        "Marketing Tools",
        "Market Analytics",
      ],
    },
    {
      id: 3,
      title: "I am a Homebuyer",
      description:
        "Find your dream property, compare options, and make informed decisions with confidence.",
      icon: HomeIcon,
      color: "from-blue-500 to-cyan-600",
      link: "/buyers",
      features: [
        "Property Search",
        "Virtual Tours",
        "Price Comparisons",
        "Expert Guidance",
      ],
    },
  ];

  // Add images for each journey
  const journeyImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tailored Visitor Journeys
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your personalized path to success in Dubai's real estate market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={journeyImages[index]}
                    alt={journey.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${journey.color} opacity-60`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <journey.icon className="text-white" size={40} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {journey.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {journey.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {journey.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          className={`text-[#073c75] flex-shrink-0`}
                          size={20}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${journey.color} text-white hover:opacity-90 hover:shadow-lg transition-all duration-300`}
                    asChild
                  >
                    <Link to={journey.link}>
                      Explore Journey
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. The Visionary Hero Section */}
      {/* <HeroSectionAlt /> */}

      <HeroSectionVideo />

      <EventCalendar/>
      
      {/* 2. The Authority Banner (Key Highlights) */}
      <StatsSection />
      
       {/* Developer Logos */}
       <DeveloperLogosSection />

      {/* 3. Thematic Arenas (Service Categorization) */}
      <ThematicArenasSection />
      
      {/* 4. Voices of the Industry (Speaker & Leadership Lineup) */}
      <VoicesOfIndustrySection />
      
      {/* 5. Tailored Visitor Journeys */}
      {/* <TailoredVisitorJourneysSection /> */}

      <StakeholderSections />
      
      {/* 6. Giga-Project Showcases */}
      <GigaProjectShowcasesSection />
      
      {/* Insights/News Section */}
      <InsightsSection />

      <BuyerBenefitsSection />
      
      {/* Experience Section */}
      {/* <ExperienceSection /> */}
      

      
      {/* Testimonials */}
      <CTASection />
      
      {/* CTA Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
