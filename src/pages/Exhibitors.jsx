import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Eye,
  CheckCircle,
  Clock,
  Calendar,
  Target,
} from "lucide-react";

const ExhibitorCard = ({ exhibitor, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Card className="group h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 p-2">
              {/* <Building2 className="text-white" size={28} /> */}
              <img src={exhibitor.logo} alt={exhibitor.name} />
            </div>
            <Badge
              className={`${
                exhibitor.tier === "Premium"
                  ? "bg-gold-500"
                  : exhibitor.tier === "Platinum"
                  ? "bg-gray-400"
                  : "bg-blue-500"
              } text-white`}
            >
              {exhibitor.tier}
            </Badge>
          </div>

          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#073c75] transition-colors mb-2">
            {exhibitor.name}
          </CardTitle>

          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{exhibitor.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {exhibitor.rating}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {exhibitor.projectsCount} Projects
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {exhibitor.description}
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-6">
            {exhibitor.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-[#073c75]">
                {exhibitor.yearsExperience}
              </div>
              <div className="text-xs text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">
                {exhibitor.completedProjects}
              </div>
              <div className="text-xs text-gray-500">Delivered</div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-2">
            <Button
              size="sm"
              className="w-full group/btn bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white"
            >
              Visit Booth
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Globe className="w-4 h-4 mr-1" />
                Website
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Exhibitors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const categories = [
    "All",
    "Luxury",
    "Residential",
    "Commercial",
    "Mixed-Use",
  ];

  // Sample exhibitors data
  const exhibitors = [
    {
      id: 1,
      name: "Emaar Properties",
      logo: "/brand-logos/emaar-logo.svg",
      location: "Downtown Dubai",
      rating: 4.9,
      projectsCount: 25,
      tier: "Platinum",
      yearsExperience: "25+",
      completedProjects: "100+",
      description:
        "Leading real estate developer in Dubai, creator of iconic landmarks including Burj Khalifa and Dubai Mall.",
      specialties: ["Luxury", "Residential", "Commercial"],
      category: "Luxury",
    },
    {
      id: 2,
      name: "DAMAC Properties",
      logo: "/brand-logos/damac-logo.svg",
      location: "Business Bay",
      rating: 4.8,
      projectsCount: 18,
      tier: "Premium",
      yearsExperience: "20+",
      completedProjects: "80+",
      description:
        "Luxury real estate developer known for high-end residential and commercial projects across prime Dubai locations.",
      specialties: ["Luxury", "Residential", "Hotels"],
      category: "Luxury",
    },
    {
      id: 3,
      name: "Dubai Properties",
      logo: "/brand-logos/dp-logo.svg",
      location: "JBR",
      rating: 4.7,
      projectsCount: 22,
      tier: "Premium",
      yearsExperience: "18+",
      completedProjects: "65+",
      description:
        "Subsidiary of Dubai Holding, developing premium residential and commercial properties across Dubai.",
      specialties: ["Residential", "Commercial", "Mixed-Use"],
      category: "Residential",
    },
    {
      id: 4,
      name: "Nakheel",
      logo: "/brand-logos/nakheel-logo.svg",
      location: "Palm Jumeirah",
      rating: 4.8,
      projectsCount: 15,
      tier: "Platinum",
      yearsExperience: "22+",
      completedProjects: "50+",
      description:
        "Master developer behind iconic projects like Palm Jumeirah, creating unique waterfront communities.",
      specialties: ["Luxury", "Waterfront", "Master Communities"],
      category: "Luxury",
    },
    {
      id: 5,
      name: "Sobha Realty",
      logo: "/brand-logos/shoba-logo.svg",
      location: "Mohammed Bin Rashid City",
      rating: 4.6,
      projectsCount: 12,
      tier: "Premium",
      yearsExperience: "15+",
      completedProjects: "35+",
      description:
        "Premium developer focused on creating luxury residential communities with world-class amenities.",
      specialties: ["Luxury", "Residential", "Villas"],
      category: "Residential",
    },
    {
      id: 6,
      name: "Meraas",
      logo: "/brand-logos/meras-logo.svg",
      location: "Dubai Marina",
      rating: 4.7,
      projectsCount: 20,
      tier: "Premium",
      yearsExperience: "12+",
      completedProjects: "45+",
      description:
        "Innovative developer creating lifestyle destinations that blend residential, retail, and entertainment with world-class amenities.",
      specialties: ["Mixed-Use", "Entertainment", "Retail"],
      category: "Mixed-Use",
    },
  ];

  const filteredExhibitors =
    selectedCategory === "All"
      ? exhibitors
      : exhibitors.filter(
          (exhibitor) => exhibitor.category === selectedCategory
        );

  const faqs = [
    {
      question: "How do I book a visit to an exhibitor's booth?",
      answer:
        "You can book visits directly through our platform by clicking 'Visit Booth' on any exhibitor card. You can also call our concierge service at +971-4-XXX-XXXX for personalized assistance with scheduling multiple visits.",
    },
    {
      question: "Are all exhibitors verified and licensed?",
      answer:
        "Yes, every exhibitor at DPS is thoroughly vetted. All developers must provide valid RERA licenses, financial statements, and project completion records. We maintain the highest standards to ensure you're dealing with reputable, established developers.",
    },
    {
      question: "Can I compare properties from different developers?",
      answer:
        "Absolutely! DPS is designed for easy comparison. You can view side-by-side comparisons of specifications, prices, payment plans, and amenities across different developers and projects all in one location.",
    },
    {
      question: "What services do exhibitors provide at their booths?",
      answer:
        "Exhibitors offer comprehensive services including property consultations, virtual tours, payment plan discussions, legal guidance, and immediate booking assistance. Many also provide financing options and investment advice.",
    },
    {
      question: "Is there a cost to visit DPS and meet with exhibitors?",
      answer:
        "Entry to DPS is complimentary for serious buyers and investors. Simply register online or at the entrance. All consultations with exhibitors are also free of charge.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              Premier Exhibitors
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Meet Dubai's{" "}
              <span className="text-gradient">Leading Developers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with the most respected names in Dubai real estate. From
              iconic landmarks to luxury communities, discover the developers
              shaping the city's skyline and your future investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Premium Developers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Available</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#073c75] text-white shadow-lg"
                    : "hover:bg-blue-50 hover:text-[#073c75] hover:border-[#073c75]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredExhibitors.length} Premium Developers
            </h3>
            <p className="text-gray-600">
              {selectedCategory === "All"
                ? "All categories"
                : `Specializing in ${selectedCategory}`}
            </p>
          </motion.div>

          {/* Exhibitors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredExhibitors.map((exhibitor, index) => (
              <ExhibitorCard
                key={exhibitor.id}
                exhibitor={exhibitor}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              Why Choose DPS Exhibitors
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Verified Excellence,{" "}
              <span className="text-gradient">Proven Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every exhibitor at DPS undergoes rigorous verification to ensure
              you're connecting with Dubai's most trusted and successful
              developers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verified Credentials
              </h3>
              <p className="text-gray-600">
                All developers verified with valid RERA licenses and proven
                track records.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Award Winners
              </h3>
              <p className="text-gray-600">
                Industry-recognized developers with multiple awards and
                accolades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                Proven history of delivering projects on schedule and within
                budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                High customer satisfaction ratings and dedicated after-sales
                support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our exhibitors and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#073c75] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Meet the Developers?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Schedule your visit to DPS and connect with Dubai's premier real
            estate developers. Discover exclusive properties, compare options,
            and make informed investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="xl"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              Schedule Your Visit
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              Download Exhibitor Guide
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-blue-300" size={24} />
              <div>
                <div className="font-semibold">DPS Exhibition Center</div>
                <div className="text-sm text-gray-300">
                  Umm Seqiem Road, Dubai
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="text-purple-300" size={24} />
              <div>
                <div className="font-semibold">Open Daily</div>
                <div className="text-sm text-gray-300">10 AM - 10 PM</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone className="text-green-300" size={24} />
              <div>
                <div className="font-semibold">+971 4 XXX XXXX</div>
                <div className="text-sm text-gray-300">Book Your Visit</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Exhibitors;
