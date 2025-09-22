import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/properties", label: "Properties" },
    { path: "/exhibitors", label: "Exhibitors" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              {/* <div className="text-2xl font-bold text-blue-600">DPS</div>
              <div className="ml-2 text-sm font-semibold">
                <div className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>DUBAI</div>
                <div className={`text-xs ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>PROPERTY SHOW</div>
              </div> */}
              <img src="/DPS_LOGOWIDE.png" alt="DPS Logo" className="w-44" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 relative ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-800"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
            <motion.button
              className="btn-primary text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className={scrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3 text-gray-800 hover:text-blue-600 transition-colors font-medium ${
                      location.pathname === item.path ? "text-blue-600" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="w-full mt-4 btn-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Register Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
