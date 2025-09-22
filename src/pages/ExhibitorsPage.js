import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Building2,
  Users,
  Award,
  // Globe,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
  TrendingUp,
} from "lucide-react";

const ExhibitorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { value: "all", label: "All Exhibitors" },
    { value: "luxury", label: "Luxury Developers" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "international", label: "International" },
  ];

  const exhibitors = [
    {
      id: 1,
      name: "Emaar Properties",
      category: "luxury",
      description:
        "Dubai's premier master developer, creator of iconic destinations including Burj Khalifa and Dubai Mall.",
      logo: "/brand-logos/emaar-logo.svg",
      projects: "Burj Khalifa, Dubai Mall, Downtown Dubai",
      established: "1997",
      portfolio: "200+",
      website: "www.emaar.com",
      contact: "+971-4-367-3333",
      email: "info@emaar.ae",
      specialties: [
        "Mixed-Use Communities",
        "Luxury Residential",
        "Hospitality",
      ],
      rating: 5,
    },
    {
      id: 2,
      name: "Dubai Properties",
      category: "residential",
      description:
        "A leading real estate developer in Dubai, known for creating vibrant communities and innovative projects.",
      logo: "/brand-logos/dp-logo.svg",
      projects: "Business Bay, JBR, Dubai Wharf",
      established: "2004",
      portfolio: "150+",
      website: "www.dubaiproperties.ae",
      contact: "+971-4-368-0000",
      email: "info@dubaiproperties.ae",
      specialties: [
        "Waterfront Living",
        "Urban Communities",
        "Investment Properties",
      ],
      rating: 5,
    },
    {
      id: 3,
      name: "DAMAC Properties",
      category: "luxury",
      description:
        "A luxury real estate developer with a focus on high-end residential and commercial properties.",
      logo: "/brand-logos/damac-logo.svg",
      projects: "DAMAC Hills, Business Bay, Dubai Marina",
      established: "2002",
      portfolio: "100+",
      website: "www.damacproperties.com",
      contact: "+971-4-420-0000",
      email: "info@damac.com",
      specialties: [
        "Luxury Apartments",
        "Golf Communities",
        "Branded Residences",
      ],
      rating: 4,
    },
    {
      id: 4,
      name: "Nakheel",
      category: "luxury",
      description:
        "Master developer of some of Dubai's most prestigious developments including Palm Jumeirah.",
      logo: "/brand-logos/nakheel-logo.svg",
      projects: "Palm Jumeirah, The World, Dubai Islands",
      established: "2000",
      portfolio: "80+",
      website: "www.nakheel.com",
      contact: "+971-4-390-3333",
      email: "info@nakheel.com",
      specialties: [
        "Waterfront Properties",
        "Master Communities",
        "Retail Destinations",
      ],
      rating: 5,
    },
    {
      id: 5,
      name: "Sobha Group",
      category: "residential",
      description:
        "International luxury real estate developer known for premium residential and commercial projects.",
      logo: "/brand-logos/shoba-logo.svg",
      projects: "Sobha Hartland, One at Palm Jumeirah",
      established: "1976",
      portfolio: "60+",
      website: "www.sobharealty.com",
      contact: "+971-4-425-8888",
      email: "dubai@sobha.com",
      specialties: ["Premium Residential", "Luxury Villas", "High-Rise Towers"],
      rating: 4,
    },
    {
      id: 6,
      name: "Meraas",
      category: "commercial",
      description:
        "Dubai-based holding company creating unique destinations that enhance the city's position as a global hub.",
      logo: "/brand-logos/meras-logo.svg",
      projects: "City Walk, Bluewaters Island, La Mer",
      established: "2007",
      portfolio: "40+",
      website: "www.meraas.com",
      contact: "+971-4-568-8888",
      email: "info@meraas.com",
      specialties: [
        "Mixed-Use Developments",
        "Entertainment Districts",
        "Retail Destinations",
      ],
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How can I become an exhibitor at DPS?",
      answer:
        "To become an exhibitor at DPS, you can contact our partnerships team at partners@dps-expo.com or call our dedicated exhibitor hotline. We'll schedule a consultation to discuss your requirements and available booth options.",
    },
    {
      question: "What are the benefits of exhibiting at DPS?",
      answer:
        "Exhibiting at DPS provides 30x amplified visibility, reduced customer acquisition costs, 24/7 exposure to potential buyers, state-of-the-art presentation technology, and access to a curated network of serious investors and buyers.",
    },
    {
      question: "What booth sizes and configurations are available?",
      answer:
        "We offer various booth sizes from premium branded spaces to luxury showcase areas. Each booth comes with 4K screens, immersive audiovisual technology, and professional meeting spaces. Our team will work with you to design the perfect setup for your brand.",
    },
    {
      question: "How does DPS drive traffic to exhibitor booths?",
      answer:
        "DPS drives global investor traffic through targeted digital campaigns, international partnerships, high-visibility advertising at airports and key locations, and our omni-channel marketing approach. We ensure maximum visibility for your brand and projects.",
    },
    {
      question: "What support services are provided to exhibitors?",
      answer:
        "We provide comprehensive support including booth design consultation, technical setup, marketing amplification, lead management systems, professional hospitality services, and dedicated account management throughout your partnership with DPS.",
    },
  ];

  const filteredExhibitors = exhibitors.filter(
    (exhibitor) =>
      selectedCategory === "all" || exhibitor.category === selectedCategory
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
              Premier <span className="text-blue-300">Exhibitors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Dubai's top developers all under one roof
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Connect with the industry's leading developers and discover
              exclusive investment opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                30+
              </div>
              <div className="text-gray-600">Premium Developers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Active Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                AED 50B+
              </div>
              <div className="text-gray-600">Portfolio Value</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                25
              </div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitors Grid */}
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
              {filteredExhibitors.length} Premium Developers
            </h2>
            <p className="text-gray-600">
              Discover exclusive opportunities from Dubai's leading real estate
              developers
            </p>
          </motion.div>

          <AnimatePresence>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredExhibitors.map((exhibitor, index) => (
                <motion.div
                  key={exhibitor.id}
                  className="luxury-card group"
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {/* <Building2 className="text-blue-600" size={24} /> */}
                      <img
                        src={exhibitor.logo}
                        alt={exhibitor.name}
                        className="w-14"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold">{exhibitor.name}</h3>
                        <div className="flex items-center">
                          {[...Array(exhibitor.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="text-yellow-400 fill-current"
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {exhibitor.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exhibitor.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500">Established</div>
                      <div className="font-semibold">
                        {exhibitor.established}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Portfolio</div>
                      <div className="font-semibold">
                        {exhibitor.portfolio} Projects
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Rating</div>
                      <div className="font-semibold">
                        {exhibitor.rating}/5 ⭐
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-500 text-sm mb-1">
                      Key Projects
                    </div>
                    <div className="font-medium text-sm">
                      {exhibitor.projects}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex space-x-4 text-sm">
                      <a
                        href={`mailto:${exhibitor.email}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Mail size={16} className="mr-1" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${exhibitor.contact}`}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Phone size={16} className="mr-1" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://${exhibitor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>Website</span>
                      </a>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      View Projects
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about exhibiting at DPS
            </p>
          </motion.div>

          <div className="w-full mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full bg-white p-6 rounded-lg shadow-sm text-left flex items-center justify-between hover:shadow-md transition-shadow"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp
                      className="text-blue-600 flex-shrink-0"
                      size={20}
                    />
                  ) : (
                    <ChevronDown
                      className="text-blue-600 flex-shrink-0"
                      size={20}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Join the Convergence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Secure your position in Dubai's most comprehensive real estate
              showcase
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Become an Exhibitor
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Download Brochure
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={fadeInUp}>
                <TrendingUp className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">Amplified Visibility</h3>
                <p className="text-blue-100 text-sm">
                  30x more exposure than standalone showrooms
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Users className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">Quality Leads</h3>
                <p className="text-blue-100 text-sm">
                  Pre-qualified serious investors and buyers
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Award className="mx-auto mb-3 text-blue-300" size={32} />
                <h3 className="font-semibold mb-2">Premium Environment</h3>
                <p className="text-blue-100 text-sm">
                  State-of-the-art facilities and technology
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitorsPage;
