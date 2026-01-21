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
  Users,
  TrendingUp,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  Eye,
  Globe,
  Shield,
  Zap,
  BarChart3,
  DollarSign,
  Network,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/sections/AnimatedCounter";

const HeroSection = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-semibold px-6 py-3">
            For Developers
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Why Exhibit at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#51779e] to-white">
              Dubai Property Show?
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join Dubai's premier real estate showcase and connect directly with
            qualified buyers, investors, and agents in one strategic location.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="xl"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
              asChild
            >
              <Link to="/contact">
                Book Your Booth
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white text-[#073c75] hover:bg-white/90 text-lg px-8 py-4"
              asChild
            >
              <Link to="/exhibitors">View Exhibitors</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Users,
      title: "Direct Access to Buyers",
      description:
        "Connect face-to-face with qualified buyers and investors actively searching for properties. No intermediaries, just direct conversations that lead to sales.",
      stats: "10K+ Monthly Visitors",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: TrendingUp,
      title: "Increased Visibility",
      description:
        "Showcase your projects alongside Dubai's most respected developers. Benefit from the collective marketing power and brand association.",
      stats: "30+ Premium Developers",
      color: "from-green-500 to-green-700",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Marketing",
      description:
        "Reduce your marketing spend while maximizing reach. One location, one investment, unlimited opportunities to connect with your target audience.",
      stats: "70% Cost Reduction",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Award,
      title: "Credibility & Trust",
      description:
        "Associate with verified, RERA-licensed developers. Build trust through our curated platform that buyers and agents rely on.",
      stats: "100% Verified",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Network,
      title: "Agent Network",
      description:
        "Access Dubai's largest network of real estate agents who bring qualified clients directly to your booth.",
      stats: "500+ Active Agents",
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description:
        "Gain insights from direct buyer feedback, competitor analysis, and market trends all in one location.",
      stats: "Real-time Data",
      color: "from-cyan-500 to-cyan-700",
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
            Key Benefits
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Developers Choose{" "}
            <span className="text-gradient">Dubai Property Show</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the platform that's revolutionizing how Dubai's real estate
            market connects and transacts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#073c75] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <Badge className="bg-[#073c75] text-white text-sm font-semibold px-3 py-1">
                    {benefit.stats}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const faqs = [
    {
      question: "What are the booth sizes and pricing?",
      answer:
        "We offer various booth sizes to suit your needs, from standard 9sqm booths to premium corner locations. Pricing is competitive and includes basic infrastructure. Contact us for detailed pricing information tailored to your requirements.",
    },
    {
      question: "What's included with my booth?",
      answer:
        "Each booth includes basic infrastructure (walls, lighting, power), listing on our website, inclusion in marketing materials, access to visitor analytics, and support from our event team. Premium packages include additional amenities.",
    },
    {
      question: "How many visitors can I expect?",
      answer:
        "DPS attracts 10,000+ monthly visitors including serious buyers, investors, and real estate agents. Our year-round permanent showcase ensures consistent footfall, unlike temporary exhibitions.",
    },
    {
      question: "Can I customize my booth?",
      answer:
        "Yes! We encourage developers to create engaging, branded experiences. Our team will work with you to ensure your booth design meets safety and aesthetic guidelines while maximizing your brand impact.",
    },
    {
      question: "What marketing support do you provide?",
      answer:
        "We provide comprehensive marketing support including digital promotion, social media coverage, inclusion in press releases, featured listings on our website, and co-marketing opportunities with other exhibitors.",
    },
    {
      question: "How do I book a booth?",
      answer:
        "Simply contact our sales team through the contact form or call +971 5 457 27505. We'll discuss your requirements, show you available locations, and guide you through the booking process.",
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
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Know</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about exhibiting at Dubai Property
            Show.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          DPS by the Numbers
        </h2>
        <p className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto">
          Join a platform that's making a real impact in Dubai's real estate
          market.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Users className="text-white w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={30} suffix="+" />
            </div>
            <div className="text-gray-300">Premium Developers</div>
          </div>
          <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Eye className="text-white w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <div className="text-gray-300">Monthly Visitors</div>
          </div>
          <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Network className="text-white w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-gray-300">Active Agents</div>
          </div>
          <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <Star className="text-white w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={365} suffix="" />
            </div>
            <div className="text-gray-300">Days Open</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#073c75] to-[#51779e] text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Exhibit at DPS?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join Dubai's premier real estate showcase and connect with
                thousands of qualified buyers and investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="xl"
                  className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
                  asChild
                >
                  <Link to="/contact">
                    Book Your Booth
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-white text-[#073c75] hover:bg-white/90 text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/exhibitors">View Current Exhibitors</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const WhyExhibit = () => {
  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default WhyExhibit;

