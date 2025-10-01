import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users,
  Building2,
  Star,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#073c75]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your inquiry. Our team will get back to you within 24
          hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
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
            placeholder="Enter your email"
            required
            className="h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+971 XX XXX XXXX"
            className="h-12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            required
            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
          >
            <option value="">Select inquiry type</option>
            <option value="property">Property Inquiry</option>
            <option value="exhibitor">Exhibitor Information</option>
            <option value="visit">Schedule Visit</option>
            <option value="investment">Investment Consultation</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="general">General Information</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your requirements, preferences, or any specific questions..."
          required
          className="min-h-32"
        />
      </div>

      <Button
        type="submit"
        // variant="gradient"
        size="lg"
        className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of
        Service.
      </p>
    </form>
  );
};

const Contact = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
      description: "Call us for immediate assistance",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dpsexpo.com", "partners@dpsexpo.com"],
      description: "Send us your inquiries anytime",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["DPS Exhibition Center", "Umm Seqiem Road, Barsh 2, Dubai"],
      description: "Visit us at our premium location",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sun: 10:00 AM - 10:00 PM", "Open 365 days a year"],
      description: "We're here when you need us",
      color: "from-orange-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "#",
      color: "hover:text-[#073c75]",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-600",
    },
    { icon: Twitter, name: "Twitter", href: "#", color: "hover:text-blue-400" },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-700",
    },
    { icon: Youtube, name: "YouTube", href: "#", color: "hover:text-red-600" },
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Let's Start Your{" "}
              <span className="text-gradient">Property Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to discover Dubai's finest properties? Our expert team is
              here to guide you through every step of your real estate journey.
              Get in touch today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-[#073c75] to-[#51779e] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <method.icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {method.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="font-medium text-gray-900 text-xs"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit Our Showroom
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Experience DPS in person at our state-of-the-art exhibition
                  center in the heart of Dubai.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#cdd8e3] rounded-lg flex items-center justify-center">
                      <MapPin className="text-[#073c75]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 text-sm">
                        DPS Exhibition Center
                        <br />
                        Main Umm Seqiem Road, Barsh 2<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#cdd8e3] rounded-lg flex items-center justify-center">
                      <Clock className="text-[#073c75]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Opening Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Sunday: 10:00 AM - 10:00 PM
                        <br />
                        Open 365 days a year
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-[#073c75] mx-auto mb-4" />
                      <p className="text-gray-700 font-medium">
                        Interactive Map
                      </p>
                      <p className="text-gray-500 text-sm">
                        Click to open in Google Maps
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 cursor-pointer">
                    {/* <Button variant="outline" className="bg-white/90">
                      Open in Google Maps
                    </Button> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.821390602998!2d55.22079707592778!3d25.107906735310458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b798c7080a5%3A0x11c19a9e96fbd2f1!2sH%26S%20Real%20Estate!5e0!3m2!1sen!2sae!4v1759140746683!5m2!1sen!2sae"
                      width="600"
                      height="450"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Building2 className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">30+</div>
                    <div className="text-sm text-gray-600">Exhibitors</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-[#073c75] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">
                      Monthly Visitors
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Final CTA */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stay Connected with DPS
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Follow us on social media for the latest updates, exclusive property
            launches, and behind-the-scenes content from Dubai's premier
            property showcase.
          </p>

          {/* Social Links 
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-white hover:scale-110 hover:shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="xl"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Visit
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="mt-12 text-gray-300">
            <p className="text-sm">
              Use hashtags: #DubaiPropertyShow | #InvestInDubai | #DPSExpo
            </p>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
};

export default Contact;
