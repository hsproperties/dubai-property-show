import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-[400px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
            Official Announcements
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Press <span className="text-gradient">Releases</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Official announcements and news from Dubai Property Show.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const PressReleaseCard = ({ release, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-[#073c75] w-5 h-5" />
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{release.date}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {release.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">{release.content}</p>
          {release.category && (
            <Badge className="bg-[#073c75] text-white">{release.category}</Badge>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PressRelease = () => {
  const releases = [
    {
      id: 1,
      title: "Dubai Property Show Welcomes 30th Premium Developer",
      content:
        "Dubai Property Show is proud to announce the addition of our 30th premium developer, further strengthening our position as Dubai's premier real estate showcase platform.",
      date: "January 15, 2025",
      category: "Partnership",
    },
    {
      id: 2,
      title: "Record-Breaking Visitor Numbers in Q4 2024",
      content:
        "DPS achieved record-breaking visitor numbers in Q4 2024, with over 12,000 qualified buyers and investors visiting our permanent showcase facility.",
      date: "January 10, 2025",
      category: "Achievement",
    },
    {
      id: 3,
      title: "New Exhibition Space Expansion Announced",
      content:
        "Dubai Property Show announces a major expansion of exhibition space to accommodate growing demand from developers and provide enhanced visitor experience.",
      date: "January 5, 2025",
      category: "Expansion",
    },
    {
      id: 4,
      title: "Strategic Partnership with Dubai Land Department",
      content:
        "DPS enters into a strategic partnership with Dubai Land Department to provide real-time market data and enhanced transparency for property buyers.",
      date: "December 28, 2024",
      category: "Partnership",
    },
    {
      id: 5,
      title: "Launch of Digital Property Platform",
      content:
        "Dubai Property Show launches its comprehensive digital platform, enabling virtual property tours and online consultations for global investors.",
      date: "December 20, 2024",
      category: "Innovation",
    },
    {
      id: 6,
      title: "Award for Excellence in Real Estate Showcase",
      content:
        "DPS receives the prestigious 'Excellence in Real Estate Showcase' award, recognizing our contribution to Dubai's real estate industry.",
      date: "December 15, 2024",
      category: "Award",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release, index) => (
              <PressReleaseCard
                key={release.id}
                release={release}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressRelease;

