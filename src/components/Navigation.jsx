import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Calendar,
  Phone,
  ChevronDown,
  Users,
  Building2,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  console.log(location);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "For You",
      path: "#",
      submenu: [
        {
          name: "Developers",
          path: "/developers",
          icon: Building2,
          description: "Showcase your projects",
        },
        {
          name: "Agents",
          path: "/agents",
          icon: Users,
          description: "Connect with buyers",
        },
        {
          name: "Buyers",
          path: "/buyers",
          icon: Target,
          description: "Find your dream property",
        },
      ],
    },
    // {
    //   name: "Properties",
    //   path: "/properties",
    //   submenu: [
    //     { name: "All Properties", path: "/properties" },
    //     { name: "Luxury Apartments", path: "/properties?type=apartment" },
    //     { name: "Premium Villas", path: "/properties?type=villa" },
    //     { name: "Penthouses", path: "/properties?type=penthouse" },
    //     { name: "Commercial", path: "/properties?type=commercial" },
    //   ],
    // },
    { name: "Exhibitors", path: "/exhibitors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* <div className="w-12 h-12 bg-gradient-to-br from-[#073c75] to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">DPS</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div> */}
                <img
                  src={
                    location.pathname !== "/" &&
                      location.pathname !== "/buyers" &&
                      location.pathname !== "/agents" &&
                      location.pathname !== "/developers"
                      ? "/DPS_LOGOWIDE.png"
                      : scrolled || isOpen
                        ? "/DPS_LOGOWIDE.png"
                        : "/DPS_LOGOWIDE_WHITE.png"
                  }
                  alt="DPS Logo"
                  className="w-44"
                />
              </motion.div>
              {/* <div className="hidden sm:block">
                <div
                  className={cn(
                    "text-xl font-bold transition-colors",
                    scrolled || isOpen ? "text-gray-900" : "text-white"
                  )}
                >
                  Dubai Property Show
                </div>
                <div className="text-xs text-[#073c75] font-medium tracking-wider">
                  ONE PLATFORM. EVERY DEAL.
                </div> */}
              {/* </div> */}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.path === "#" ? (
                    <div
                      className={cn(
                        "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative cursor-pointer",
                        location.pathname !== "/" &&
                          location.pathname !== "/buyers" &&
                          location.pathname !== "/agents" &&
                          location.pathname !== "/developers"
                          ? "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                          : scrolled || isOpen
                            ? "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                            : "text-white/90 hover:text-white hover:bg-white/20"
                      )}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group/link",
                        location.pathname !== "/" &&
                          location.pathname !== "/buyers" &&
                          location.pathname !== "/agents" &&
                          location.pathname !== "/developers"
                          ? location.pathname === item.path
                            ? "text-[#073c75] bg-blue-50"
                            : "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                          : location.pathname === item.path
                            ? scrolled || isOpen
                              ? "text-[#073c75] bg-blue-50"
                              : "text-white bg-white/20"
                            : scrolled || isOpen
                              ? "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                              : "text-white/90 hover:text-white hover:bg-white/20"
                      )}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.submenu && (
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                        item.name === "For You" ? "w-80" : "w-56"
                      )}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 backdrop-blur-xl">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            className={cn(
                              "block px-4 py-3 text-sm hover:bg-blue-50 transition-colors duration-200 mx-2 rounded-lg",
                              item.name === "For You"
                                ? "border-b border-gray-50 last:border-b-0"
                                : ""
                            )}
                          >
                            <div className="flex items-start gap-3">
                              {subItem.icon && (
                                <div className="mt-0.5">
                                  <subItem.icon className="w-4 h-4 text-[#073c75]" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-gray-900 hover:text-[#073c75] transition-colors">
                                  {subItem.name}
                                </div>
                                {subItem.description && (
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:flex items-center gap-3 ml-6 hidden">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "transition-colors duration-200",
                  location.pathname !== "/" &&
                    location.pathname !== "/buyers" &&
                    location.pathname !== "/agents" &&
                    location.pathname !== "/developers"
                    ? "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                    : scrolled || isOpen
                      ? "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/20"
                )}
              >
                <Phone size={16} className="mr-2" />
                +971 4 XXX XXXX
              </Button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white shadow-lg hover:shadow-xl transition-all duration-200 gap-2">
                  <Calendar size={16} />
                  Book Visit
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-200",
                scrolled || isOpen
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/20 text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.path !== "#" ? (
                      <Link
                        to={item.path}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                          location.pathname === item.path
                            ? "text-[#073c75] bg-blue-50 border-l-4 border-[#073c75]"
                            : "text-gray-700 hover:text-[#073c75] hover:bg-gray-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div className="px-4 py-2">
                        <div className="text-base font-medium text-gray-900 mb-2">
                          {item.name}
                        </div>
                      </div>
                    )}

                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="flex items-center gap-3 px-3 py-3 text-sm text-gray-600 hover:text-[#073c75] hover:bg-blue-50 rounded-lg transition-colors duration-200 border border-gray-100"
                          >
                            {subItem.icon && (
                              <subItem.icon className="w-4 h-4 text-[#073c75] flex-shrink-0" />
                            )}
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              {subItem.description && (
                                <div className="text-xs text-gray-400 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="pt-6 border-t border-gray-100 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2"
                  >
                    <Phone size={16} />
                    Call: +971 4 XXX XXXX
                  </Button>

                  <Button className="w-full bg-gradient-to-r from-[#073c75] to-[#51779e] hover:from-[#073c75] hover:to-[#51779e] text-white gap-2">
                    <Calendar size={16} />
                    Book Your Visit
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
