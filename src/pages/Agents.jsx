import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import {
  UserCheck,
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
  DollarSign,
  Award,
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  BarChart3,
  // Handshake,
  FileSearch,
  Coffee,
  // PresentationChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/sections/AnimatedCounter";

const AgentBenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Building2,
      title: "Complete Portfolio Access",
      description:
        "Access Dubai's most comprehensive property database with 30+ premium developers and 500+ properties all in one convenient location.",
      stats: "500+ Properties Available",
      color: "from-[#073c75] to-purple-700",
    },
    {
      icon: Eye,
      title: "Direct Developer Relations",
      description:
        "Build direct relationships with top developers, access exclusive deals, and earn competitive commissions on every transaction.",
      stats: "Guaranteed commissions",
      color: "from-blue-500 to-blue-700",
    },
    // {
    //   icon: Users,
    //   title: "Professional Client Environment",
    //   description:
    //     "Impress your clients with world-class meeting rooms, premium amenities, and a professional atmosphere that reflects quality.",
    //   stats: "5-star experience",
    //   color: "from-[#073c75] to-green-700",
    // },
    {
      icon: Eye,
      title: "Exclusive Opportunities",
      description:
        "Get first access to off-market properties, pre-launch projects, and exclusive investment opportunities before they hit the market.",
      stats: "Early access guaranteed",
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
            Agent Benefits
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-gradient">Portfolio Command Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access everything you need to serve your clients better, close more
            deals, and build stronger relationships with Dubai's leading
            developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
                    {/* <ArrowRight
                      className="text-[#073c75] group-hover:translate-x-1 transition-transform"
                      size={20}
                    /> */}
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

const ToolsResourcesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const tools = [
    // {
    //   icon: Search,
    //   title: "Advanced Property Search",
    //   description:
    //     "Powerful search and filtering tools to help you find the perfect properties for your clients based on specific criteria.",
    //   features: [
    //     "Location-based search",
    //     "Price range filters",
    //     "Property type sorting",
    //     "Amenity matching",
    //   ],
    // },
    // {
    //   icon: BarChart3,
    //   title: "Market Analytics Dashboard",
    //   description:
    //     "Real-time market data, pricing trends, and investment analytics to help you advise clients with confidence.",
    //   features: [
    //     "Live market data",
    //     "Price trend analysis",
    //     "ROI calculations",
    //     "Comparative market analysis",
    //   ],
    // },
    {
      icon: Eye,
      title: "Client Presentation Tools",
      description:
        "Professional presentation materials, property brochures, and comparison charts to impress your clients.",
      features: [
        "Branded presentations",
        "Property comparison charts",
        "Investment projections",
        "Virtual tour links",
      ],
    },
    {
      icon: FileSearch,
      title: "Document Management",
      description:
        "Secure document storage and sharing system for contracts, agreements, and client communications.",
      features: [
        "Secure cloud storage",
        "Document sharing",
        "Version control",
        "Client portals",
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
            Agent Tools & Resources
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Close More Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional tools and resources designed specifically for Dubai's
            top real estate agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <tool.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          className="text-[#073c75] flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
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

const SuccessStoriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const stories = [
    {
      name: "Sarah Mitchell",
      title: "Senior Property Consultant",
      company: "Dubai Elite Realty",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      quote:
        "DPS transformed my business. I can now show clients 30+ developments in one visit instead of driving all over Dubai. My closing rate increased by 40%.",
      achievements: [
        "40% higher closing rate",
        "300% more client meetings",
        "Direct developer access",
      ],
    },
    {
      name: "Ahmed Al Rashid",
      title: "Investment Specialist",
      company: "Gulf Property Partners",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The professional environment at DPS helps me close high-value deals. Clients are impressed by the setup and trust the platform's credibility.",
      achievements: [
        "AED 50M+ in sales",
        "Premium client satisfaction",
        "Exclusive deal access",
      ],
    },
    {
      name: "Maria Rodriguez",
      title: "Luxury Property Advisor",
      company: "Prestige Real Estate",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "DPS gives me competitive advantage. I have first access to new launches and can provide clients with comprehensive market analysis instantly.",
      achievements: [
        "First to market advantage",
        "Comprehensive analytics",
        "Higher commissions",
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
            Success Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join <span className="text-gradient">Top-Performing Agents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how DPS has helped agents like you achieve remarkable results
            and grow their business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-[#cdd8e3]"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.title}</p>
                      <p className="text-xs text-[#073c75]">{story.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    "{story.quote}"
                  </p>

                  <div className="space-y-2 mb-4">
                    {story.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Award
                          className="text-[#073c75] flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-gray-700">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

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

const RegistrationFormSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    license: "",
    experience: "",
    specialization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_otx1rwi", // EmailJS service ID
        "template_reojebe", // EmailJS template ID
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          license: formData.license,
          experience: formData.experience,
          specialization: formData.specialization,
          message: formData.message,
          formType: "Agent Registration",
        },
        "DsWeIlaGUWjO8AFSt" // EmailJS public key
      );

      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Professional Meeting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
      </div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Join the Elite
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Register as a <span className="text-gradient">Certified Agent</span>
          </h2>
          <p className="text-xl text-gray-700">
            Join Dubai's most exclusive network of real estate professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Brokerage
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your real estate company"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      RERA License Number *
                    </label>
                    <Input
                      name="license"
                      value={formData.license}
                      onChange={handleInputChange}
                      placeholder="Your RERA license number"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-[#073c75] focus:ring-2 focus:ring-[#073c75]/20 outline-none"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialization *
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-[#073c75] focus:ring-2 focus:ring-[#073c75]/20 outline-none"
                  >
                    <option value="">Select specialization</option>
                    <option value="residential">Residential Properties</option>
                    <option value="commercial">Commercial Properties</option>
                    <option value="luxury">Luxury Properties</option>
                    <option value="investment">Investment Properties</option>
                    <option value="off-plan">Off-Plan Properties</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business goals
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your experience, target clientele, and how DPS can help grow your business..."
                    className="min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white text-lg py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
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
            For Real Estate Agents
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your Gateway to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#51779e] to-white">
              Elite Property Success
            </span>
          </h1>

          <p className="text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join Dubai's most exclusive network of real estate professionals.
            Access premium properties, connect directly with top developers, and
            serve your clients in a world-class environment.
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
                  <Link to="/contact" className="flex items-center gap-3">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Agents = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <AgentBenefitsSection />
      <ToolsResourcesSection />
      <SuccessStoriesSection />
      <RegistrationFormSection />

      {/* Final CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Real Estate Career?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join the elite network of agents who are closing more deals and
            earning higher commissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#073c75] hover:bg-gray-100 px-8"
            >
              <Phone className="mr-2" size={20} />
              Call: +971 5 457 27505
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#073c75] px-8"
            >
              <Mail className="mr-2" size={20} />
              agents@dpsexpo.com
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Agents;
