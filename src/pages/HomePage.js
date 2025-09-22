import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Target,
  Diamond,
  Users,
  Building,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

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

  return (
    <div>
      {/* Hero Section */}
      {/* <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
          style={{ y: yBg, opacity }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4">
              <span className="block">ONE PLATFORM.</span>
              <span className="block">EVERY DEAL.</span>
              <span className="block text-blue-300">ZERO FRICTION.</span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            The Central Nervous System of Dubai Real Estate
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Link
                to="/properties"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <span>Explore Properties</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/exhibitors"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Join as Exhibitor</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements 
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-400/20 rounded-full"
          animate={{ x: [0, 30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section> */}

      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/DECA.jpg')`,
          }}
        />

        <motion.div className="absolute inset-0" style={{ y: yBg, opacity }}>
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
          {/* <div className="absolute inset-0 bg-mesh opacity-10"></div> */}
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4">
              <span className="block">ONE PLATFORM.</span>
              <span className="block">EVERY DEAL.</span>
              <span className="block text-blue-600">ZERO FRICTION.</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            The Central Nervous System of Dubai Real Estate
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Link
                to="/properties"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <span>Explore Properties</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/exhibitors"
                className="group border-2  px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Join as Exhibitor</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Floating Elements */}
        {/* <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-400/20 rounded-full"
          animate={{ x: [0, 30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        /> */}
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter end={4} suffix="M+" />
              </div>
              <div className="text-gray-600 font-medium">People</div>
              <div className="text-sm text-gray-500">Dubai Residents</div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter end={100000} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">New Residents</div>
              <div className="text-sm text-gray-500">Every Year</div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter end={1.192} prefix="AED " suffix="T" />
              </div>
              <div className="text-gray-600 font-medium">Investment</div>
              <div className="text-sm text-gray-500">Real Estate Value</div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <Counter end={351538} />
              </div>
              <div className="text-gray-600 font-medium">Transactions</div>
              <div className="text-sm text-gray-500">Annual Deals</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              The Architect of{" "}
              <span className="gradient-text">Convergence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DPS is a strategic infrastructure built to optimize the entire
              real estate transaction chain
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="luxury-card text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To centralize discovery and transaction, creating the most
                efficient and transparent Real Estate market in the World.
              </p>
            </motion.div>

            <motion.div
              className="luxury-card text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Diamond className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Leveraged Visibility. We create a network effect where the
                success of each participant amplifies the success of all.
              </p>
            </motion.div>

            <motion.div
              className="luxury-card text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To assemble the complete collection of Dubai's premier Real
                Estate Developers, establishing our showcase as the
                indispensable first destination for discovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="text-blue-600">DPS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of real estate discovery and investment in
              Dubai
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "30x Amplified Visibility",
                description:
                  "Your brand benefits from the collective presence and marketing power of all showcased developers",
              },
              {
                icon: Users,
                title: "Center of Exposure",
                description:
                  "Maximize exposure to top agents who routinely bring clients to DPS—ensuring your project is never overlooked",
              },
              {
                icon: TrendingUp,
                title: "Reduced Acquisition Costs",
                description:
                  "Eliminate wasteful spending on inefficient marketing and standalone showrooms. DPS drastically reduces customer acquisition cost",
              },
              {
                icon: Eye,
                title: "24/7 Visibility",
                description:
                  "Gain round-the-clock visibility among agents who might otherwise bypass your sales centre",
              },
              {
                icon: Target,
                title: "Targeted Marketing",
                description:
                  "DPS drives global investor traffic through targeted digital campaigns, international partnerships, and high-visibility advertising",
              },
              {
                icon: CheckCircle,
                title: "Professional Environment",
                description:
                  "World-class meeting rooms, elegant lounge areas, and premium hospitality partners like Costa Coffee",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="luxury-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Convergence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of Dubai's most comprehensive real estate showcase. Secure
              your position in the future of property discovery.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Link
                  to="/contact"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <span>Secure Your Label</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/about"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center space-x-3"
              >
                <Calendar className="text-blue-300" size={24} />
                <span>Year-Round Operation</span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center space-x-3"
              >
                <MapPin className="text-blue-300" size={24} />
                <span>Prime Dubai Location</span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center space-x-3"
              >
                <Star className="text-blue-300" size={24} />
                <span>Premium Experience</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300/10 rounded-full"
          animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>
    </div>
  );
};

export default HomePage;
