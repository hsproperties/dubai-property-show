import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Globe,
  Target,
  Eye,
  Diamond,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/sections/AnimatedCounter";

const TimelineItem = ({ title, description, icon: Icon, date, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex items-start gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-full flex items-center justify-center shadow-lg">
          <Icon className="text-white" size={20} />
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-[#073c75] to-transparent"></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {date}
          </Badge>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const timelineItems = [
    {
      icon: Building2,
      title: "Concept Development",
      date: "Q1 2024",
      description:
        "Identified the fragmented nature of Dubai's real estate discovery process and conceptualized a centralized solution.",
    },
    {
      icon: Users,
      title: "Developer Partnership",
      date: "Q2 2024",
      description:
        "Secured partnerships with Dubai's premier real estate developers and established the foundation for convergence.",
    },
    {
      icon: Globe,
      title: "Platform Launch",
      date: "Q3 2024",
      description:
        "Launched the DPS platform as the central nervous system of Dubai real estate, connecting all stakeholders.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      date: "Q4 2024",
      description:
        "Achieved recognition as the blueprint for global real estate showcases and expanded our impact.",
    },
    {
      icon: TrendingUp,
      title: "Global Expansion",
      date: "2025",
      description:
        "Scaling the DPS model to become the international standard for real estate convergence platforms.",
    },
  ];

  const values = [
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Complete visibility into all options, pricing, and opportunities without hidden agendas.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Matching the right properties with the right investors through intelligent curation.",
    },
    {
      icon: Diamond,
      title: "Excellence",
      description:
        "Maintaining the highest standards in every aspect of the property discovery experience.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Pioneering new ways to connect, discover, and transact in the real estate market.",
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
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              About DPS
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              The Central Nervous System of{" "}
              <span className="text-gradient">Dubai Real Estate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DPS is the paradigm shift—a permanent, hyper-connected showcase
              designed to orchestrate success for every stakeholder. We are the
              architect of convergence, building strategic infrastructure to
              optimize the entire real estate transaction chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on principles of transparency, innovation, and convergence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-white transition-all duration-300">
                <CardHeader className="text-center">
                  <Eye className="w-16 h-16 text-[#073c75] mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 text-center leading-relaxed">
                    To centralize discovery and transaction, creating the most
                    efficient and transparent Real Estate market in the World.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-white transition-all duration-300">
                <CardHeader className="text-center">
                  <Target className="w-16 h-16 text-[#073c75] mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 text-center leading-relaxed">
                    To assemble the complete collection of Dubai's premier Real
                    Estate Developers, establishing our showcase as the
                    indispensable first destination for discovery.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-2xl bg-white transition-all duration-300">
                <CardHeader className="text-center">
                  <Diamond className="w-16 h-16 text-[#073c75] mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 text-center leading-relaxed">
                    Leveraged Visibility. We create a network effect where the
                    success of each participant amplifies the success of all.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of Real Estate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to convergence, discover how DPS evolved into Dubai's
              central real estate platform.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                date={item.date}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Where Opportunities Converge
          </h2>
          <p className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto">
            DPS isn't another marketing expense—it's your answer to fragmented
            discovery, inefficient comparisons, and missed opportunities.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <Building2 className="text-white w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-gray-300">Developers</div>
            </div>
            <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <Users className="text-white w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="K+" />
              </div>
              <div className="text-gray-300">Monthly Visitors</div>
            </div>
            <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="text-white w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join the Convergence
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you're a developer, agent, or investor, DPS provides the
            platform to amplify your success and achieve your real estate goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="xl"
              // variant="gradient"
              className="text-lg px-8 py-4 shadow-2xl bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-3">
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link to="/properties">Explore Properties</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
