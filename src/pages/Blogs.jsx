import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
            Latest News & Insights
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            DPS <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and news from Dubai's
            real estate market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BlogCard = ({ blog, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#073c75] text-white">{blog.category}</Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#073c75] transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{blog.excerpt}</p>
          <Button
            variant="ghost"
            className="text-[#073c75] hover:text-[#073c75] p-0 h-auto"
          >
            Read More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Dubai Real Estate Market Trends 2025",
      excerpt:
        "Discover the latest trends shaping Dubai's real estate market in 2025, from luxury developments to investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Insights",
      date: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Top 10 Investment Areas in Dubai",
      excerpt:
        "Explore the most promising investment areas in Dubai for 2025, backed by data and expert analysis.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      date: "Jan 12, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Understanding RERA Regulations",
      excerpt:
        "A comprehensive guide to Dubai's RERA regulations and how they protect property buyers and investors.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Legal",
      date: "Jan 10, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Luxury Living in Dubai: What to Expect",
      excerpt:
        "Discover what luxury living in Dubai truly means, from world-class amenities to premium locations.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Lifestyle",
      date: "Jan 8, 2025",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "First-Time Buyer's Guide to Dubai Property",
      excerpt:
        "Everything first-time buyers need to know about purchasing property in Dubai, from financing to legal requirements.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Buyer's Guide",
      date: "Jan 5, 2025",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Developer Spotlight: Innovation in Design",
      excerpt:
        "How leading developers are pushing boundaries in architectural design and sustainable living.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      date: "Jan 3, 2025",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

