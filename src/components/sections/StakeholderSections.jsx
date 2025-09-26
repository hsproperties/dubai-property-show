import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  UserCheck,
  Eye,
  Target,
  Diamond,
  TrendingUp,
  Award,
  Shield,
  Zap,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Home,
  Search,
  Filter,
  Calendar,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const StakeholderCard = ({ stakeholder, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="group"
    >
      <Card className="relative h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${stakeholder.color.replace(
                "#",
                ""
              )}' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20v2.5zm0 1V21H0v2h20v-1.5zm0 1V23H0v2h20v-1.5zm0 1V25H0v2h20v-1.5z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <CardHeader className="relative z-10 text-center pb-6">
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${stakeholder.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <stakeholder.icon className="text-white" size={36} />
          </motion.div>

          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
            {stakeholder.title}
          </CardTitle>

          <p className="text-gray-600 text-lg leading-relaxed">
            {stakeholder.description}
          </p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          {/* Key Benefits */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-center">
              Key Benefits
            </h4>
            <div className="space-y-3">
              {stakeholder.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: delay + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-gray-700 text-xs">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
            {stakeholder.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-2xl font-bold text-${
                    stakeholder.color.split("-")[0]
                  }-600`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className={`w-full bg-gradient-to-r ${stakeholder.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            size="lg"
          >
            {stakeholder.cta}
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StakeholderSections = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const stakeholders = [
    {
      title: "Developers",
      icon: Building2,
      color: "blue-600",
      gradient: "from-blue-500 to-blue-700",
      description:
        "Showcase your projects to qualified buyers and agents in Dubai's premier real estate platform.",
      benefits: [
        "24/7 visibility among top agents and serious buyers",
        "Drastically reduce customer acquisition costs",
        "30x amplified visibility through shared traffic",
        "State-of-the-art 4K presentation technology",
        "Access to pre-qualified, serious investors",
      ],
      stats: [
        { value: "30+", label: "Developers" },
        { value: "95%", label: "Occupancy Rate" },
      ],
      cta: "Join as Developer",
    },
    {
      title: "Agents",
      icon: UserCheck,
      color: "purple-600",
      gradient: "from-purple-500 to-purple-700",
      description:
        "Access Dubai's most comprehensive property database and connect directly with top developers.",
      benefits: [
        "One-stop access to all premium developments",
        "Direct developer relationships and commissions",
        "Professional environment for client meetings",
        "Exclusive off-market opportunities",
        "Comprehensive property comparison tools",
      ],
      stats: [
        { value: "500+", label: "Properties" },
        { value: "10K+", label: "Monthly Leads" },
      ],
      cta: "Register as Agent",
    },
    {
      title: "Buyers",
      icon: Users,
      color: "green-600",
      gradient: "from-green-500 to-green-700",
      description:
        "Compare properties side-by-side, meet developers directly, and make informed investment decisions.",
      benefits: [
        "See all top developers in one convenient location",
        "Compare specs, prices, and payment plans easily",
        "No pressure environment for thoughtful exploration",
        "Direct access to developer representatives",
        "Professional consultation and guidance",
      ],
      stats: [
        { value: "4M+", label: "Residents" },
        { value: "351K+", label: "Annual Deals" },
      ],
      cta: "Start Property Search",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-6 py-3">
            For Every Stakeholder
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success For <span className="text-gradient">Every Stakeholder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            DPS is the central nervous system where developers, agents, and
            buyers converge. Each stakeholder benefits from our network effect -
            where success amplifies success.
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stakeholders.map((stakeholder, index) => (
            <StakeholderCard
              key={index}
              stakeholder={stakeholder}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Central Convergence Concept */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50"
        >
          <div className="relative mb-8">
            {/* DPS Logo in Center */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl p-4">
              <img src="/DPS_LOGO.png" alt="" />
              {/* <span className="text-white font-bold text-2xl">DPS</span> */}
            </div>

            {/* Connecting Lines */}
            {/* <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center space-x-16">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-t from-green-400 to-transparent transform rotate-90 origin-center"></div>
              </div>
            </div> */}
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            The Architect of <span className="text-gradient">Convergence</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            DPS creates a network effect where the success of each participant
            amplifies the success of all. We've built strategic infrastructure
            to optimize the entire real estate transaction chain.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Transparency</h4>
              <p className="text-gray-600 text-sm">
                Complete visibility into all options, pricing, and opportunities
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Efficiency</h4>
              <p className="text-gray-600 text-sm">
                Streamlined processes that save time and reduce friction
              </p>
            </div>
            <div className="text-center">
              <Diamond className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Quality</h4>
              <p className="text-gray-600 text-sm">
                Premium experience with verified, trusted partners only
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white px-10 py-4"
            asChild
          >
            <Link to="/about">
              Learn More About DPS
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholderSections;
