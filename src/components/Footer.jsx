import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Building2,
  Users,
  Award,
  TrendingUp,
  Send,
  Calendar,
  Globe,
  Shield,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./sections/AnimatedCounter";

const Footer = () => {
  const footerSections = [
    // {
    //   title: "Explore",
    //   links: [
    //     { name: "Featured Properties", href: "/properties" },
    //     { name: "Luxury Apartments", href: "/properties?type=apartment" },
    //     { name: "Premium Villas", href: "/properties?type=villa" },
    //     {
    //       name: "Investment Opportunities",
    //       href: "/properties?category=investment",
    //     },
    //     { name: "New Developments", href: "/properties?status=new" },
    //     { name: "Off-Plan Projects", href: "/properties?status=off-plan" },
    //   ],
    // },
    // {
    //   title: "Developers",
    //   links: [
    //     { name: "Emaar Properties", href: "/exhibitors?developer=emaar" },
    //     { name: "DAMAC Properties", href: "/exhibitors?developer=damac" },
    //     { name: "Dubai Properties", href: "/exhibitors?developer=dp" },
    //     { name: "Nakheel", href: "/exhibitors?developer=nakheel" },
    //     { name: "Sobha Realty", href: "/exhibitors?developer=sobha" },
    //     { name: "View All Developers", href: "/exhibitors" },
    //   ],
    // },
    // {
    //   title: "Services",
    //   links: [
    //     { name: "Property Consultation", href: "/services/consultation" },
    //     { name: "Investment Advisory", href: "/services/investment" },
    //     { name: "Property Management", href: "/services/management" },
    //     { name: "Legal Assistance", href: "/services/legal" },
    //     { name: "Mortgage Services", href: "/services/mortgage" },
    //     { name: "Virtual Tours", href: "/services/virtual-tours" },
    //   ],
    // },
    {
      title: "Company",
      links: [
        { name: "About DPS", href: "/about" },
        { name: "Our Vision", href: "/about#vision" },
        { name: "Exhibitors", href: "/exhibitors" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-500",
    },
    { icon: Twitter, name: "Twitter", href: "#", color: "hover:text-blue-400" },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-700",
    },
    { icon: Youtube, name: "YouTube", href: "#", color: "hover:text-red-500" },
  ];

  const quickStats = [
    { icon: Building2, value: "30", suffix: "+", label: "Premium Developers" },
    { icon: Users, value: "10", suffix: "K+", label: "Monthly Visitors" },
    { icon: Award, value: "500", suffix: "+", label: "Properties Available" },
    {
      icon: TrendingUp,
      value: "95",
      suffix: "%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Newsletter Section */}
      {/* <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated with Dubai's{" "}
                <span className="bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
                  Hottest Properties
                </span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Get exclusive access to new launches, market insights, and
                investment opportunities delivered directly to your inbox.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 h-12"
                />
                <Button className="bg-white text-slate-900 hover:bg-gray-100 px-8 h-12">
                  <Send size={16} className="mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                Join 25,000+ investors and property enthusiasts
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated with Dubai's{" "}
                <span className="bg-gradient-to-r from-white via-[#51779e] to-white bg-clip-text text-transparent">
                  Hottest Properties
                </span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Get exclusive access to new launches, market insights, and
                investment opportunities delivered directly to your inbox.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 h-12"
                />
                <Button className="bg-white text-slate-900 hover:bg-gray-100 px-8 h-12">
                  <Send size={16} className="mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                Join 25,000+ investors and property enthusiasts
              </p>
            </div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            // className="lg:col-span-4"
            >
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">DPS</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div> */}
                  <img src="/DPS_LOGOWIDE_WHITE.png" alt="" className="w-60" />
                </motion.div>
                {/* <div>
                  <div className="text-xl font-bold text-white">Dubai Property Show</div>
                  <div className="text-xs text-blue-400 font-medium tracking-wider">ONE PLATFORM. EVERY DEAL.</div>
                </div> */}
              </Link>

              <p className="text-white/80 mb-6 leading-relaxed">
                The central nervous system of Dubai real estate. Where every
                stakeholder converges, every opportunity is discovered, and
                every deal finds its perfect match.
              </p>
            </motion.div>

            {/* Footer Links */}
            {/* <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-6">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.href}
                            className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div> */}
            {/* </div> */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-white flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium">DPS Exhibition Center</div>
                    <div className="text-white/70 text-sm">
                      Main Umm Seqiem Road, Barsh 2, Dubai, UAE
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-white flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium">+971 4 XXX XXXX</div>
                    <div className="text-white/70 text-sm">
                      24/7 Customer Support
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-white flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium">info@dpsexpo.com</div>
                    <div className="text-white/70 text-sm">
                      General Inquiries
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-white flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium">Open 365 Days</div>
                    <div className="text-white/70 text-sm">
                      Daily: 10:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-white hover:shadow-lg border border-white/20`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="text-blue-400" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-white/70 text-sm text-center lg:text-left">
              <p>&copy; 2025 Dubai Property Show. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-white/70 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <div className="flex items-center gap-2 text-white/70">
                <Shield size={16} />
                <span>Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
