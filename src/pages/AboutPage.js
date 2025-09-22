// import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Building,
  Globe,
  // Calendar,
  Award,
  // TrendingUp,
  Target,
} from "lucide-react";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const timelineEvents = [
    {
      year: "2024",
      title: "DPS Concept Development",
      description:
        "The vision for the Central Nervous System of Dubai Real Estate is born.",
    },
    {
      year: "2025",
      title: "Platform Launch",
      description:
        "DPS opens its doors as Dubai's premier real estate showcase destination.",
    },
    {
      year: "2025",
      title: "Industry Partnership",
      description:
        "Collaboration with Dubai's top developers and international investors begins.",
    },
    {
      year: "Future",
      title: "Global Expansion",
      description:
        "The DPS model becomes the blueprint for real estate markets worldwide.",
    },
  ];

  const achievements = [
    { icon: Building, number: "30+", label: "Premium Developers" },
    { icon: Users, number: "1000+", label: "Daily Visitors" },
    { icon: Globe, number: "50+", label: "Countries Represented" },
    { icon: Award, number: "100%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      title: "Year-Round Operation",
      description:
        "Unlike seasonal expos, DPS operates 365 days a year, providing constant visibility and opportunity.",
    },
    {
      title: "Network Effect & Shared Traffic",
      description:
        "Every participant benefits from the collective marketing power and visitor traffic of all showcased developers.",
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Dramatically reduce marketing spend while increasing lead quality and quantity through shared infrastructure.",
    },
    {
      title: "Data & Tech Integration",
      description:
        "Advanced analytics and technology integration provide insights and streamline the entire sales process.",
    },
    {
      title: "Marketing Amplification",
      description:
        "Full 360° marketing support including digital campaigns, international partnerships, and high-visibility advertising.",
    },
    {
      title: "Efficiency for All",
      description:
        "Streamlined processes benefit agents, developers, and buyers through transparent, pressure-free environments.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-300">DPS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              The Central Nervous System of Dubai Real Estate
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              DPS is a paradigm shift—a permanent, hyper-connected showcase
              designed to orchestrate success for every stakeholder in Dubai's
              dynamic real estate market.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300/10 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className=" text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Dubai's Real Estate energy is undeniable, yet its discovery
              process is fragmented and complicated. DPS is the paradigm shift—a
              permanent, hyper-connected showcase designed to orchestrate
              success for every stakeholder.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-blue-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">DEVELOPER</h3>
                <p className="text-gray-600">
                  Amplified visibility and reduced marketing costs
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">AGENT</h3>
                <p className="text-gray-600">
                  Efficient portfolio management and client service
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">BUYER</h3>
                <p className="text-gray-600">
                  Comprehensive comparison and informed decisions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating measurable value for every participant in Dubai's real
              estate ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-blue-600" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Created a New <span className=" text-blue-600">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DPS combines the best of standalone showrooms and seasonal expos
              while eliminating their limitations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="luxury-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From vision to reality - building the future of real estate
              discovery
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div className="luxury-card bg-gray-800 border border-gray-700">
                    <div className="text-blue-400 font-bold text-lg mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Future is <span className="text-blue-600">Here</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "At DPS, you're not just another developer. You're part of the
              destination."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              DPS isn't another marketing expense — it's your answer. This isn't
              about more advertising. It's about better visibility, higher
              intent leads, and being where the decisions are made.
            </p>

            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">963</div>
                <div className="text-gray-600">Deals Every Day</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">273</div>
                <div className="text-gray-600">New People Daily</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  AED 1.192T
                </div>
                <div className="text-gray-600">Market Value</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
