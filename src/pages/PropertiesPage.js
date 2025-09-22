import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Eye,
  ArrowRight,
} from "lucide-react";

const PropertiesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filterOptions = [
    { value: "all", label: "All Properties" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "luxury", label: "Luxury" },
    { value: "investment", label: "Investment" },
  ];

  const properties = [
    {
      id: 1,
      title: "Burj Khalifa Residence",
      developer: "Emaar Properties",
      location: "Downtown Dubai",
      type: "luxury",
      price: "AED 2,500,000",
      bedrooms: 2,
      bathrooms: 3,
      area: "1,200 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Burj Khalifa View", "Premium Finishing", "Smart Home"],
      description:
        "Luxury apartment with stunning views of Dubai's iconic skyline",
    },
    {
      id: 2,
      title: "Marina Bay Towers",
      developer: "Dubai Properties",
      location: "Dubai Marina",
      type: "residential",
      price: "AED 1,800,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,450 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Marina View", "Balcony", "Gym Access"],
      description: "Modern apartment overlooking the beautiful Dubai Marina",
    },
    {
      id: 3,
      title: "Palm Jumeirah Villa",
      developer: "Nakheel",
      location: "Palm Jumeirah",
      type: "luxury",
      price: "AED 8,500,000",
      bedrooms: 5,
      bathrooms: 6,
      area: "4,200 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Private Beach", "Pool", "Garden"],
      description: "Exclusive villa on the world-famous Palm Jumeirah",
    },
    {
      id: 4,
      title: "Business Bay Office",
      developer: "Damac Properties",
      location: "Business Bay",
      type: "commercial",
      price: "AED 1,200,000",
      bedrooms: 0,
      bathrooms: 1,
      area: "800 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["City View", "24/7 Security", "Parking"],
      description: "Prime office space in Dubai's central business district",
    },
    {
      id: 5,
      title: "JBR Beachfront Apartment",
      developer: "Dubai Properties",
      location: "Jumeirah Beach Residence",
      type: "investment",
      price: "AED 2,200,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Beach Access", "High ROI", "Tourist Area"],
      description: "Perfect investment opportunity with guaranteed returns",
    },
    {
      id: 6,
      title: "DIFC Luxury Penthouse",
      developer: "Index Holdings",
      location: "Dubai International Financial Centre",
      type: "luxury",
      price: "AED 15,000,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,500 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=500&h=300&fit=crop",
      features: ["Penthouse", "Private Elevator", "Terrace"],
      description: "Ultra-luxury penthouse in the heart of DIFC",
    },
  ];

  const filteredProperties = properties.filter((property) => {
    const matchesFilter =
      selectedFilter === "all" || property.type === selectedFilter;
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.developer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 },
  // };

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
              Featured <span className="text-blue-300">Properties</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover Dubai's finest real estate offerings all under one roof
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              See More. Compare Faster. Decide Smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by property name, location, or developer..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400" size={20} />
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedFilter(option.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === option.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
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
              {filteredProperties.length} Properties Available
            </h2>
            <p className="text-gray-600">
              All of Dubai's top developers under one roof
            </p>
          </motion.div>

          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="luxury-card group overflow-hidden"
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Property Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Heart
                        className={`${
                          favorites.includes(property.id)
                            ? "text-red-500 fill-current"
                            : "text-gray-600"
                        }`}
                        size={18}
                      />
                    </button>

                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {property.developer}
                      </p>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                      {property.price}
                    </div>

                    {/* Property Features */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed size={16} className="mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath size={16} className="mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize size={16} className="mr-1" />
                        <span>{property.area}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm">
                      {property.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-4">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                        <Eye size={16} />
                        <span>View Details</span>
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProperties.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No properties found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
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
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Visit DPS to explore all properties in person and make
              side-by-side comparisons
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg">
                <span>Schedule a Visit</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2">
                <span>Contact Agent</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
