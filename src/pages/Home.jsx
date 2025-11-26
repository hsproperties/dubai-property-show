import React, { useRef } from "react";
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
import AnimatedCounter from "@/components/AnimatedCounter";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import HeroSectionAlt from "../components/sections/HeroSectionAlt";
import HeroSectionAlt2 from "../components/sections/HeroSectionAlt2";
import HeroSectionAlt3 from "../components/sections/HeroSectionAlt3";
import HeroSectionAlt4 from "../components/sections/HeroSectionAlt4";
import HeroSectionAlt5 from "../components/sections/HeroSectionAlt5";

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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
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
      className="py-20 bg-gradient-to-t from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Dubai Skyline"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
          <Building2 className="text-white" size={32} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 hidden lg:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -3, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
          <Star className="text-white fill-current" size={24} />
        </div>
      </motion.div>

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* <HeroSectionAlt5 /> */}
      <HeroSectionAlt />
      {/* <HeroSectionAlt2 />
      <HeroSectionAlt3 />
      <HeroSectionAlt4 /> */}
      {/* <HeroSection /> */}
      <StakeholderSections />
      {/* <PropertyShowcase /> */}
      {/* <ProcessSection /> */}
      <DeveloperLogosSection />
      <EventCalendar />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
