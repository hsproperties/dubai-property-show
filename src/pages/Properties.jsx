import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Heart,
  Eye,
  ArrowRight,
  Building2,
  Home,
  Waves,
  TreePine,
  Zap,
  Wifi,
  Car,
  Shield,
} from "lucide-react";

const PropertyCard = ({ property, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Property Status Badge */}
          <Badge
            className={`absolute top-4 left-4 ${
              property.status === "Available"
                ? "bg-green-500 hover:bg-green-600"
                : property.status === "Sold Out"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-yellow-500 hover:bg-yellow-600"
            } text-white border-0`}
          >
            {property.status}
          </Badge>

          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 shadow-lg"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`w-4 h-4 ${
                isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>

          {/* Quick View Button */}
          <Button
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-900"
            size="sm"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {property.name}
              </CardTitle>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
            </div>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {property.rating}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {property.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.amenities.length - 3} more
              </Badge>
            )}
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{property.type}</span>
            <span>{property.size}</span>
            <span>{property.bedrooms} Bed</span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {property.price}
              </div>
              {property.pricePerSqft && (
                <div className="text-xs text-gray-500">
                  {property.pricePerSqft}/sqft
                </div>
              )}
            </div>
            <Button variant="gradient" size="sm" className="group/btn">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FilterSection = ({ filters, onFilterChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg border-0 p-6 mb-8"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search properties, locations, developers..."
              className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500"
              value={filters.search}
              onChange={(e) =>
                onFilterChange({ ...filters, search: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex gap-4">
          <select
            className="px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
            value={filters.type}
            onChange={(e) =>
              onFilterChange({ ...filters, type: e.target.value })
            }
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhouse">Townhouse</option>
          </select>

          <select
            className="px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
            value={filters.location}
            onChange={(e) =>
              onFilterChange({ ...filters, location: e.target.value })
            }
          >
            <option value="">All Locations</option>
            <option value="Downtown Dubai">Downtown Dubai</option>
            <option value="Dubai Marina">Dubai Marina</option>
            <option value="Palm Jumeirah">Palm Jumeirah</option>
            <option value="Business Bay">Business Bay</option>
            <option value="JBR">JBR</option>
            <option value="DIFC">DIFC</option>
          </select>

          <select
            className="px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
            value={filters.priceRange}
            onChange={(e) =>
              onFilterChange({ ...filters, priceRange: e.target.value })
            }
          >
            <option value="">Any Price</option>
            <option value="1-2">AED 1M - 2M</option>
            <option value="2-5">AED 2M - 5M</option>
            <option value="5-10">AED 5M - 10M</option>
            <option value="10+">AED 10M+</option>
          </select>

          <Button variant="outline" size="default" className="px-6">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Properties = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    location: "",
    priceRange: "",
  });

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Sample properties data
  const properties = [
    {
      id: 1,
      name: "Burj Crown",
      location: "Downtown Dubai",
      price: "AED 2.5M",
      pricePerSqft: "AED 1,500",
      type: "Apartment",
      size: "1,650 sqft",
      bedrooms: 2,
      rating: 4.8,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Luxury apartment with stunning Burj Khalifa views, premium finishes, and world-class amenities in the heart of Downtown Dubai.",
      amenities: ["Pool", "Gym", "Concierge", "Parking", "Security"],
    },
    {
      id: 2,
      name: "Marina Pinnacle",
      location: "Dubai Marina",
      price: "AED 3.2M",
      pricePerSqft: "AED 1,800",
      type: "Penthouse",
      size: "1,800 sqft",
      bedrooms: 3,
      rating: 4.9,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Exclusive penthouse offering panoramic marina views, private terrace, and access to premium amenities.",
      amenities: ["Private Pool", "Terrace", "Marina View", "Gym", "Concierge"],
    },
    {
      id: 3,
      name: "Palm Residence",
      location: "Palm Jumeirah",
      price: "AED 8.5M",
      pricePerSqft: "AED 2,500",
      type: "Villa",
      size: "3,400 sqft",
      bedrooms: 4,
      rating: 4.7,
      status: "Limited",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Beachfront villa with private beach access, infinity pool, and unparalleled luxury on the iconic Palm Jumeirah.",
      amenities: [
        "Private Beach",
        "Pool",
        "Garden",
        "Parking",
        "Security",
        "Maid Room",
      ],
    },
    {
      id: 4,
      name: "Business Bay Tower",
      location: "Business Bay",
      price: "AED 1.8M",
      pricePerSqft: "AED 1,400",
      type: "Apartment",
      size: "1,285 sqft",
      bedrooms: 1,
      rating: 4.6,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Modern studio apartment with canal views, contemporary design, and proximity to Dubai's financial district.",
      amenities: ["Canal View", "Gym", "Pool", "Parking"],
    },
    {
      id: 5,
      name: "JBR Beachfront",
      location: "JBR",
      price: "AED 4.1M",
      pricePerSqft: "AED 2,200",
      type: "Apartment",
      size: "1,850 sqft",
      bedrooms: 3,
      rating: 4.8,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Beachfront apartment with direct beach access, sea views, and walking distance to The Beach mall.",
      amenities: ["Beach Access", "Sea View", "Pool", "Gym", "Restaurants"],
    },
    {
      id: 6,
      name: "DIFC Heights",
      location: "DIFC",
      price: "AED 5.5M",
      pricePerSqft: "AED 2,800",
      type: "Penthouse",
      size: "1,950 sqft",
      bedrooms: 2,
      rating: 4.9,
      status: "Sold Out",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Ultra-luxury penthouse in the financial district with skyline views and premium business amenities.",
      amenities: [
        "Skyline View",
        "Business Center",
        "Concierge",
        "Gym",
        "Parking",
        "Security",
      ],
    },
  ];

  // Filter properties based on current filters
  const filteredProperties = properties.filter((property) => {
    if (
      filters.search &&
      !property.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !property.location.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    if (filters.type && property.type !== filters.type) return false;
    if (filters.location && property.location !== filters.location)
      return false;
    if (filters.priceRange) {
      const price = parseFloat(property.price.replace(/[AED,M\s]/g, ""));
      const [min, max] = filters.priceRange
        .split("-")
        .map((p) => (p === "10+" ? 999 : parseFloat(p)));
      if (price < min || (max && price > max)) return false;
    }
    return true;
  });

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
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm font-semibold px-4 py-2">
              Premium Properties
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Discover Dubai's{" "}
              <span className="text-gradient">Finest Properties</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From luxury apartments with Burj Khalifa views to beachfront
              villas on Palm Jumeirah. Compare, explore, and find your perfect
              property all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <FilterSection filters={filters} onFilterChange={setFilters} />

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} Properties Found
              </h3>
              <p className="text-gray-600">
                Showing the best matches for your search
              </p>
            </div>

            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Rating: High to Low</option>
            </select>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button variant="outline" size="lg" className="px-12 py-4">
              Load More Properties
            </Button>
            <p className="text-gray-500 mt-4">
              Showing {filteredProperties.length} of 150+ available properties
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Our expert team can help you discover off-market opportunities and
            exclusive properties that match your exact requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="xl"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl"
            >
              Speak to an Expert
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Create Property Alert
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Properties;
