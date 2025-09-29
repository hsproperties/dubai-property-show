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

const PropertyShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const featuredProperties = [
    {
      id: 1,
      title: "Burj Crown Residences",
      location: "Downtown Dubai",
      price: "AED 2.5M",
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
      price: "AED 3.2M",
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
      price: "AED 8.5M",
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
                    <div className="text-2xl font-bold text-[#073c75]">
                      {property.price}
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
      description:
        "Browse through curated properties from Dubai's top developers",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "02",
      title: "Compare",
      description:
        "Side-by-side comparison of features, pricing, and locations",
      icon: Filter,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "03",
      title: "Connect",
      description: "Meet directly with developers and schedule property visits",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "04",
      title: "Invest",
      description: "Make informed decisions with expert guidance and support",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
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
            Your Journey to{" "}
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

                  <CardContent className="relative pt-20 p-6 text-center">
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
            <Link to="/exhibitors">Meet Our Developers</Link>
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
      <HeroSection />
      <PropertyShowcase />
      <StakeholderSections />
      <ProcessSection />
      <EventCalendar />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
