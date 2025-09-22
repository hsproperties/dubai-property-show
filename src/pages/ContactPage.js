import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building, Calendar } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'general',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "DPS Exhibition Center",
        "Main Umm Seqiem Road, Barsh 2",
        "Dubai, United Arab Emirates"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "General: +971-4-XXX-XXXX",
        "Exhibitors: +971-4-XXX-XXXX",
        "Visitors: +971-4-XXX-XXXX"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "General: info@dps-expo.com",
        "Partnerships: partners@dps-expo.com",
        "Support: support@dps-expo.com"
      ]
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: [
        "Monday - Friday: 9:00 AM - 8:00 PM",
        "Saturday: 10:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 6:00 PM"
      ]
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'exhibitor', label: 'Become an Exhibitor' },
    { value: 'visitor', label: 'Visitor Information' },
    { value: 'investment', label: 'Investment Opportunities' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'media', label: 'Media & Press' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
              Get in <span className="text-blue-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to join the convergence? Let's connect.
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Whether you're looking to exhibit, invest, or visit, we're here to help you navigate Dubai's premier real estate showcase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact <span className="text-blue-600">Information</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="luxury-card text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <info.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="luxury-card">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="spinner"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Quick Actions */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Map */}
              <div className="luxury-card">
                <h3 className="text-2xl font-bold mb-6">Visit Our Location</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="text-blue-600 mx-auto mb-2" size={48} />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Main Umm Seqiem Road, Barsh 2, Dubai</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
              </div>

              {/* Quick Actions */}
              <div className="luxury-card">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <motion.button
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar size={20} />
                    <span>Schedule a Visit</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Building size={20} />
                    <span>Become an Exhibitor</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare size={20} />
                    <span>Live Chat Support</span>
                  </motion.button>
                  
                  <motion.a
                    href="tel:+971-4-XXX-XXXX"
                    className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </div>

              {/* Contact Stats */}
              <div className="luxury-card">
                <h3 className="text-2xl font-bold mb-6">Why Choose DPS?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">24</span>
                    </div>
                    <span className="text-gray-700">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">30+</span>
                    </div>
                    <span className="text-gray-700">Premium Developers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">365</span>
                    </div>
                    <span className="text-gray-700">Days Open Per Year</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1K+</span>
                    </div>
                    <span className="text-gray-700">Daily Visitors</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay <span className="text-blue-600">Connected</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on social media and subscribe to our newsletter for the latest updates
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <motion.div
              className="luxury-card text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-8">
                Stay updated with real-time updates, exhibitor announcements, and behind-the-scenes content
              </p>
              
              <div className="flex justify-center space-x-4 mb-6">
                {[
                  { name: 'Facebook', color: 'bg-blue-600', icon: 'í³˜' },
                  { name: 'Instagram', color: 'bg-pink-600', icon: 'í³·' },
                  { name: 'LinkedIn', color: 'bg-blue-700', icon: 'í²¼' },
                  { name: 'Twitter', color: 'bg-blue-400', icon: 'í°¦' },
                  { name: 'YouTube', color: 'bg-red-600', icon: 'í³º' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>Use hashtags:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">#DubaiPropertyShow</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">#InvestInDubai</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">#DPSExpo</span>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="luxury-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-8">
                Subscribe to get exclusive insights, market updates, and first access to new properties
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter-terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="newsletter-terms" className="text-sm text-gray-600">
                    I agree to receive marketing emails and accept the{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe Now
                </motion.button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">Join 10,000+ subscribers</p>
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Unsubscribe Anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience DPS Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't just take our word for it - come see why DPS is transforming Dubai's real estate landscape
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Tour
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <MapPin className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">Prime Location</h3>
                <p className="text-blue-100 text-sm">Easily accessible from anywhere in Dubai</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Clock className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">Open Daily</h3>
                <p className="text-blue-100 text-sm">Visit us 7 days a week for your convenience</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Building className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">All Under One Roof</h3>
                <p className="text-blue-100 text-sm">30+ developers, hundreds of properties to explore</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
