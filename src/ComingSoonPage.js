// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   Building2,
// // //   Calendar,
// // //   MapPin,
// // //   Mail,
// // //   Phone,
// // //   User,
// // //   ArrowRight,
// // //   Clock,
// // //   Star,
// // //   Sparkles,
// // //   Target,
// // //   TrendingUp,
// // //   Users,
// // //   CheckCircle,
// // //   Play,
// // //   Eye,
// // //   Diamond,
// // //   Globe,
// // // } from "lucide-react";

// // // // Animation variants
// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // // };

// // // const stagger = {
// // //   visible: { transition: { staggerChildren: 0.1 } },
// // // };

// // // const scaleIn = {
// // //   hidden: { opacity: 0, scale: 0.8 },
// // //   visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
// // // };

// // // const slideIn = {
// // //   hidden: { opacity: 0, x: -100 },
// // //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // };

// // // // Countdown Timer Component
// // // const CountdownTimer = ({ targetDate }) => {
// // //   const [timeLeft, setTimeLeft] = useState({
// // //     days: 0,
// // //     hours: 0,
// // //     minutes: 0,
// // //     seconds: 0,
// // //   });

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       const now = new Date().getTime();
// // //       const target = new Date(targetDate).getTime();
// // //       const difference = target - now;

// // //       if (difference > 0) {
// // //         setTimeLeft({
// // //           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // //           hours: Math.floor(
// // //             (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// // //           ),
// // //           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
// // //           seconds: Math.floor((difference % (1000 * 60)) / 1000),
// // //         });
// // //       }
// // //     }, 1000);

// // //     return () => clearInterval(timer);
// // //   }, [targetDate]);

// // //   return (
// // //     <div className="flex gap-4 justify-center">
// // //       {Object.entries(timeLeft).map(([unit, value]) => (
// // //         <motion.div
// // //           key={unit}
// // //           initial={{ scale: 0 }}
// // //           animate={{ scale: 1 }}
// // //           transition={{ delay: 0.5 }}
// // //           className="text-center"
// // //         >
// // //           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
// // //             <div className="text-3xl md:text-4xl font-bold text-white mb-1">
// // //               {value.toString().padStart(2, "0")}
// // //             </div>
// // //             <div className="text-blue-200 text-sm uppercase tracking-wider">
// // //               {unit}
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // // Registration Form Component
// // // const RegistrationForm = ({ onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     company: "",
// // //     interest: "visitor",
// // //   });

// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle form submission
// // //     console.log("Form submitted:", formData);
// // //     setSubmitted(true);
// // //     setTimeout(() => {
// // //       setSubmitted(false);
// // //       onClose();
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       exit={{ opacity: 0 }}
// // //       className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
// // //       onClick={onClose}
// // //     >
// // //       <motion.div
// // //         initial={{ scale: 0.8, opacity: 0 }}
// // //         animate={{ scale: 1, opacity: 1 }}
// // //         exit={{ scale: 0.8, opacity: 0 }}
// // //         className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         {submitted ? (
// // //           <motion.div
// // //             initial={{ scale: 0 }}
// // //             animate={{ scale: 1 }}
// // //             className="text-center py-8"
// // //           >
// // //             <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
// // //             <h3 className="text-2xl font-bold text-gray-900 mb-2">
// // //               Thank You!
// // //             </h3>
// // //             <p className="text-gray-600">
// // //               We'll be in touch soon with exclusive updates.
// // //             </p>
// // //           </motion.div>
// // //         ) : (
// // //           <>
// // //             <div className="text-center mb-6">
// // //               <h3 className="text-2xl font-bold text-gray-900 mb-2">
// // //                 Join the Revolution
// // //               </h3>
// // //               <p className="text-gray-600">
// // //                 Be the first to experience the future of real estate
// // //               </p>
// // //             </div>

// // //             <div className="space-y-4">
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Full Name
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   value={formData.name}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, name: e.target.value })
// // //                   }
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   placeholder="Enter your full name"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Email Address
// // //                 </label>
// // //                 <input
// // //                   type="email"
// // //                   value={formData.email}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, email: e.target.value })
// // //                   }
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   placeholder="Enter your email address"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Phone Number
// // //                 </label>
// // //                 <input
// // //                   type="tel"
// // //                   value={formData.phone}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, phone: e.target.value })
// // //                   }
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   placeholder="Enter your phone number"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Company (Optional)
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   value={formData.company}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, company: e.target.value })
// // //                   }
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                   placeholder="Your company name"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   I'm interested as a
// // //                 </label>
// // //                 <select
// // //                   value={formData.interest}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, interest: e.target.value })
// // //                   }
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// // //                 >
// // //                   <option value="visitor">Visitor/Investor</option>
// // //                   <option value="exhibitor">Exhibitor/Developer</option>
// // //                   <option value="media">Media Partner</option>
// // //                   <option value="sponsor">Sponsor</option>
// // //                 </select>
// // //               </div>

// // //               <button
// // //                 onClick={handleSubmit}
// // //                 className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
// // //               >
// // //                 Secure My Spot
// // //               </button>

// // //               <button
// // //                 onClick={onClose}
// // //                 className="w-full py-3 text-gray-500 hover:text-gray-700 transition-colors"
// // //               >
// // //                 Maybe Later
// // //               </button>
// // //             </div>
// // //           </>
// // //         )}
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // };

// // // // Main Coming Soon Page Component
// // // const ComingSoonPage = () => {
// // //   const [showRegistration, setShowRegistration] = useState(false);
// // //   const [emailSignup, setEmailSignup] = useState("");
// // //   const [emailSubmitted, setEmailSubmitted] = useState(false);

// // //   // Event date - March 15, 2025
// // //   const eventDate = "March 15, 2025 09:00:00";

// // //   const handleEmailSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Email submitted:", emailSignup);
// // //     setEmailSubmitted(true);
// // //     setEmailSignup("");
// // //     setTimeout(() => setEmailSubmitted(false), 3000);
// // //   };

// // //   const stats = [
// // //     { number: "4M+", label: "Dubai Residents", icon: Users },
// // //     { number: "100K+", label: "New Residents Yearly", icon: TrendingUp },
// // //     { number: "AED 1.2T", label: "Real Estate Investment", icon: Target },
// // //     { number: "350K+", label: "Annual Transactions", icon: Building2 },
// // //   ];

// // //   const features = [
// // //     {
// // //       icon: Eye,
// // //       title: "Unparalleled Visibility",
// // //       description:
// // //         "30x amplified visibility through collective developer presence",
// // //     },
// // //     {
// // //       icon: Target,
// // //       title: "Zero Friction Experience",
// // //       description:
// // //         "Compare all top developers under one roof - no driving, no hassle",
// // //     },
// // //     {
// // //       icon: Diamond,
// // //       title: "Premium Networking",
// // //       description:
// // //         "Connect with Dubai's elite developers and serious investors",
// // //     },
// // //     {
// // //       icon: Globe,
// // //       title: "Global Platform",
// // //       description: "Blueprint for international real estate markets",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 relative overflow-hidden">
// // //       {/* Background Effects */}
// // //       <div className="absolute inset-0">
// // //         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-purple-900/40"></div>
// // //         {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg')] width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}

// // //         {/* Animated Background Elements */}
// // //         <motion.div
// // //           animate={{
// // //             scale: [1, 1.1, 1],
// // //             rotate: [0, 360],
// // //             opacity: [0.1, 0.2, 0.1],
// // //           }}
// // //           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// // //           className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
// // //         ></motion.div>

// // //         <motion.div
// // //           animate={{
// // //             scale: [1, 1.2, 1],
// // //             rotate: [360, 0],
// // //             opacity: [0.1, 0.3, 0.1],
// // //           }}
// // //           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
// // //           className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
// // //         ></motion.div>
// // //       </div>

// // //       {/* Hero Section */}
// // //       <section className="relative z-10 min-h-screen flex items-center">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// // //           <div className="text-center">
// // //             {/* Logo/Brand */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: -30 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 1 }}
// // //               className="mb-8"
// // //             >
// // //               <div className="inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto">
// // //                 <div className="w-full h-full rounded-full border-4 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
// // //                   <Building2 size={32} className="text-white" />
// // //                 </div>
// // //               </div>
// // //               <div className="text-white/80 text-lg font-medium">
// // //                 Dubai Property Show
// // //               </div>
// // //             </motion.div>

// // //             {/* Main Headline */}
// // //             <motion.div
// // //               variants={stagger}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="mb-12"
// // //             >
// // //               <motion.div variants={fadeInUp} className="mb-4">
// // //                 <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-blue-200 text-sm font-medium border border-white/20 mb-6">
// // //                   <Sparkles className="inline mr-2" size={16} />
// // //                   Coming March 2025
// // //                 </span>
// // //               </motion.div>

// // //               <motion.h1
// // //                 variants={fadeInUp}
// // //                 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
// // //               >
// // //                 THE FUTURE OF
// // //                 <br />
// // //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
// // //                   REAL ESTATE
// // //                 </span>
// // //                 <br />
// // //                 IS COMING
// // //               </motion.h1>

// // //               <motion.div
// // //                 variants={fadeInUp}
// // //                 className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
// // //               >
// // //                 One Platform. Every Deal. Zero Friction.
// // //                 <br />
// // //                 <span className="text-lg text-blue-200">
// // //                   The Central Nervous System of Dubai Real Estate
// // //                 </span>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* Countdown Timer */}
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.8 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ delay: 1, duration: 0.8 }}
// // //               className="mb-12"
// // //             >
// // //               <div className="text-white/80 text-lg mb-6">Event Starts In:</div>
// // //               <CountdownTimer targetDate={eventDate} />
// // //             </motion.div>

// // //             {/* CTA Buttons */}
// // //             <motion.div
// // //               variants={fadeInUp}
// // //               initial="hidden"
// // //               animate="visible"
// // //               transition={{ delay: 1.5 }}
// // //               className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
// // //             >
// // //               <motion.button
// // //                 onClick={() => setShowRegistration(true)}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/25 flex items-center gap-2"
// // //               >
// // //                 <Star className="w-5 h-5" />
// // //                 Register Interest
// // //                 <ArrowRight className="w-5 h-5" />
// // //               </motion.button>

// // //               <motion.button
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
// // //               >
// // //                 <Play className="w-5 h-5" />
// // //                 Watch Preview
// // //               </motion.button>
// // //             </motion.div>

// // //             {/* Quick Email Signup */}
// // //             {/* <motion.div
// // //               variants={fadeInUp}
// // //               initial="hidden"
// // //               animate="visible"
// // //               transition={{ delay: 2 }}
// // //               className="max-w-md mx-auto"
// // //             >
// // //               <div className="text-white/80 text-sm mb-4">
// // //                 Get notified when registration opens:
// // //               </div>
// // //               {emailSubmitted ? (
// // //                 <motion.div
// // //                   initial={{ scale: 0 }}
// // //                   animate={{ scale: 1 }}
// // //                   className="flex items-center justify-center gap-2 text-green-400 font-medium"
// // //                 >
// // //                   <CheckCircle size={20} />
// // //                   Thank you! We'll be in touch.
// // //                 </motion.div>
// // //               ) : (
// // //                 <div className="flex gap-3">
// // //                   <input
// // //                     type="email"
// // //                     value={emailSignup}
// // //                     onChange={(e) => setEmailSignup(e.target.value)}
// // //                     placeholder="Enter your email"
// // //                     className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
// // //                   />
// // //                   <button
// // //                     onClick={handleEmailSubmit}
// // //                     className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
// // //                   >
// // //                     Notify Me
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </motion.div> */}
// // //           </div>
// // //         </div>

// // //         {/* Floating Elements */}
// // //         {/* <motion.div
// // //           animate={{ y: [0, -20, 0] }}
// // //           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// // //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
// // //         >
// // //           <div className="flex flex-col items-center gap-2">
// // //             <span className="text-sm">Scroll to explore</span>
// // //             <motion.div
// // //               animate={{ y: [0, 10, 0] }}
// // //               transition={{ duration: 2, repeat: Infinity }}
// // //               className="w-1 h-8 bg-white/40 rounded-full"
// // //             ></motion.div>
// // //           </div>
// // //         </motion.div> */}
// // //       </section>

// // //       {/* Stats Section */}
// // //       <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="text-center mb-16"
// // //           >
// // //             <motion.h2
// // //               variants={fadeInUp}
// // //               className="text-4xl font-bold text-white mb-6"
// // //             >
// // //               Dubai's Real Estate Revolution
// // //             </motion.h2>
// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className="text-xl text-blue-100 max-w-3xl mx-auto"
// // //             >
// // //               Join the convergence that's reshaping how Dubai discovers,
// // //               compares, and invests in real estate
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="grid grid-cols-2 md:grid-cols-4 gap-8"
// // //           >
// // //             {stats.map((stat, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={scaleIn}
// // //                 className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
// // //               >
// // //                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                   <stat.icon className="text-blue-400" size={24} />
// // //                 </div>
// // //                 <div className="text-3xl font-bold text-white mb-2">
// // //                   {stat.number}
// // //                 </div>
// // //                 <div className="text-blue-200 text-sm">{stat.label}</div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section className="relative z-10 py-20">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="text-center mb-16"
// // //           >
// // //             <motion.h2
// // //               variants={fadeInUp}
// // //               className="text-4xl font-bold text-white mb-6"
// // //             >
// // //               Why DPS Changes Everything
// // //             </motion.h2>
// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className="text-xl text-blue-100 max-w-3xl mx-auto"
// // //             >
// // //               The paradigm shift Dubai's real estate market has been waiting for
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
// // //           >
// // //             {features.map((feature, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={slideIn}
// // //                 className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
// // //               >
// // //                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
// // //                   <feature.icon className="text-blue-400" size={28} />
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-white mb-3">
// // //                   {feature.title}
// // //                 </h3>
// // //                 <p className="text-blue-200 text-sm leading-relaxed">
// // //                   {feature.description}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Event Details */}
// // //       <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
// // //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //           >
// // //             <motion.h2
// // //               variants={fadeInUp}
// // //               className="text-4xl font-bold text-white mb-8"
// // //             >
// // //               Save the Date
// // //             </motion.h2>

// // //             <motion.div
// // //               variants={fadeInUp}
// // //               className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
// // //             >
// // //               <div className="flex flex-col items-center gap-3">
// // //                 <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
// // //                   <Calendar className="text-blue-400" size={28} />
// // //                 </div>
// // //                 <div>
// // //                   <div className="text-white font-semibold">
// // //                     March 15-17, 2025
// // //                   </div>
// // //                   <div className="text-blue-200 text-sm">
// // //                     3 Days of Innovation
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="flex flex-col items-center gap-3">
// // //                 <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
// // //                   <Clock className="text-blue-400" size={28} />
// // //                 </div>
// // //                 <div>
// // //                   <div className="text-white font-semibold">
// // //                     9:00 AM - 6:00 PM
// // //                   </div>
// // //                   <div className="text-blue-200 text-sm">Daily Hours</div>
// // //                 </div>
// // //               </div>

// // //               <div className="flex flex-col items-center gap-3">
// // //                 <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
// // //                   <MapPin className="text-blue-400" size={28} />
// // //                 </div>
// // //                 <div>
// // //                   <div className="text-white font-semibold">
// // //                     DPS Exhibition Center
// // //                   </div>
// // //                   <div className="text-blue-200 text-sm">Barsha 2, Dubai</div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>

// // //             <motion.div variants={fadeInUp}>
// // //               <button
// // //                 onClick={() => setShowRegistration(true)}
// // //                 className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
// // //               >
// // //                 Be Part of History
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Registration Modal */}
// // //       <AnimatePresence>
// // //         {showRegistration && (
// // //           <RegistrationForm onClose={() => setShowRegistration(false)} />
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default ComingSoonPage;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Mail,
// //   User,
// //   Phone,
// //   Building2,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";

// // // Animation variants
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // };

// // const slideIn = {
// //   hidden: { opacity: 0, x: 100 },
// //   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// // };

// // const slideOut = {
// //   hidden: { opacity: 0, x: -100 },
// //   exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
// // };

// // // Question Slider Component
// // const QuestionSlider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const questions = [
// //     {
// //       category: "For Buyers & Investors",
// //       questions: [
// //         "What if your next property investment was available 365 days a year, on your schedule?",
// //         "Are you ready to unlock direct access to Dubai's most exclusive opportunities?",
// //       ],
// //       gradient: "from-blue-500 to-blue-700",
// //     },
// //     {
// //       category: "For Real Estate Agents",
// //       questions: [
// //         "What if closing deals took hours instead of weeks?",
// //         "Are you ready for an always-on marketplace that fuels your commissions?",
// //       ],
// //       gradient: "from-purple-500 to-blue-600",
// //     },
// //     {
// //       category: "For Developers",
// //       questions: [
// //         "What if your projects had a permanent stage in Dubai's property hub?",
// //         "Are you ready to connect instantly with the city's top agents and qualified buyers?",
// //       ],
// //       gradient: "from-indigo-500 to-purple-600",
// //     },
// //   ];

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % questions.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, [questions.length]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev + 1) % questions.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev - 1 + questions.length) % questions.length);
// //   };

// //   return (
// //     <div className="relative mb-12">
// //       <div className="overflow-hidden rounded-2xl">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentSlide}
// //             initial={{ opacity: 0, x: 300 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -300 }}
// //             transition={{ duration: 0.8 }}
// //             className={`bg-gradient-to-r ${questions[currentSlide].gradient} p-8 text-white relative`}
// //           >
// //             <div className="text-center">
// //               <h3 className="text-xl font-semibold mb-6 text-blue-100">
// //                 {questions[currentSlide].category}
// //               </h3>

// //               <div className="space-y-4">
// //                 {questions[currentSlide].questions.map((question, index) => (
// //                   <motion.p
// //                     key={index}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: index * 0.2 }}
// //                     className="text-lg md:text-xl font-medium leading-relaxed"
// //                   >
// //                     {question}
// //                   </motion.p>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Navigation buttons */}
// //             <button
// //               onClick={prevSlide}
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
// //             >
// //               <ChevronLeft size={20} />
// //             </button>

// //             <button
// //               onClick={nextSlide}
// //               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
// //             >
// //               <ChevronRight size={20} />
// //             </button>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* Slide indicators */}
// //       <div className="flex justify-center mt-4 space-x-2">
// //         {questions.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentSlide(index)}
// //             className={`w-3 h-3 rounded-full transition-all duration-300 ${
// //               currentSlide === index
// //                 ? "bg-white"
// //                 : "bg-white/50 hover:bg-white/70"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Registration Form Component
// // const RegistrationForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     interest: "buyer",
// //   });
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     setSubmitted(true);
// //     setTimeout(() => {
// //       setSubmitted(false);
// //       setFormData({ name: "", email: "", phone: "", interest: "buyer" });
// //     }, 3000);
// //   };

// //   if (submitted) {
// //     return (
// //       <motion.div
// //         initial={{ scale: 0.8, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
// //       >
// //         <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
// //           <svg
// //             className="w-8 h-8 text-white"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M5 13l4 4L19 7"
// //             />
// //           </svg>
// //         </div>
// //         <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
// //         <p className="text-blue-100">
// //           We'll notify you as soon as DPS launches.
// //         </p>
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <motion.div
// //       variants={fadeInUp}
// //       initial="hidden"
// //       animate="visible"
// //       className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
// //     >
// //       <div className="text-center mb-6">
// //         <h3 className="text-2xl font-bold text-white mb-2">
// //           Be the First to Know
// //         </h3>
// //         <p className="text-blue-100">
// //           Join the waitlist and get exclusive early access
// //         </p>
// //       </div>

// //       <div className="space-y-4">
// //         <div>
// //           <div className="relative">
// //             <User
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
// //               size={20}
// //             />
// //             <input
// //               type="text"
// //               value={formData.name}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, name: e.target.value })
// //               }
// //               className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
// //               placeholder="Full Name"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <div className="relative">
// //             <Mail
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
// //               size={20}
// //             />
// //             <input
// //               type="email"
// //               value={formData.email}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, email: e.target.value })
// //               }
// //               className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
// //               placeholder="Email Address"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <div className="relative">
// //             <Phone
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60"
// //               size={20}
// //             />
// //             <input
// //               type="tel"
// //               value={formData.phone}
// //               onChange={(e) =>
// //                 setFormData({ ...formData, phone: e.target.value })
// //               }
// //               className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
// //               placeholder="Phone Number"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <select
// //             value={formData.interest}
// //             onChange={(e) =>
// //               setFormData({ ...formData, interest: e.target.value })
// //             }
// //             className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
// //           >
// //             <option value="buyer" className="bg-gray-900">
// //               Buyer/Investor
// //             </option>
// //             <option value="agent" className="bg-gray-900">
// //               Real Estate Agent
// //             </option>
// //             <option value="developer" className="bg-gray-900">
// //               Developer
// //             </option>
// //             <option value="other" className="bg-gray-900">
// //               Other
// //             </option>
// //           </select>
// //         </div>

// //         <motion.button
// //           onClick={handleSubmit}
// //           whileHover={{ scale: 1.02 }}
// //           whileTap={{ scale: 0.98 }}
// //           className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
// //         >
// //           Join the Revolution
// //           <ArrowRight size={20} />
// //         </motion.button>
// //       </div>

// //       <p className="text-center text-blue-200 text-sm mt-4">
// //         No spam, just exclusive updates about DPS launch
// //       </p>
// //     </motion.div>
// //   );
// // };

// // // Main Coming Soon Page Component
// // const ComingSoonPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
// //       {/* Background Pattern */}
// //       {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}

// //       {/* Floating gradient orbs */}
// //       <motion.div
// //         animate={{
// //           scale: [1, 1.2, 1],
// //           opacity: [0.3, 0.6, 0.3],
// //         }}
// //         transition={{ duration: 8, repeat: Infinity }}
// //         className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
// //       ></motion.div>

// //       <motion.div
// //         animate={{
// //           scale: [1, 1.3, 1],
// //           opacity: [0.2, 0.5, 0.2],
// //         }}
// //         transition={{ duration: 10, repeat: Infinity, delay: 2 }}
// //         className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
// //       ></motion.div>

// //       {/* Hero Section */}
// //       <div className="relative z-10 min-h-screen flex items-center">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             {/* Left Column - Content */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 1 }}
// //               className="text-center lg:text-left"
// //             >
// //               {/* Logo */}
// //               <div className="flex items-center justify-center lg:justify-start mb-8">
// //                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center mr-4">
// //                   <Building2 size={28} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <div className="text-2xl font-bold text-white">DPS</div>
// //                   <div className="text-sm text-blue-200">
// //                     Dubai Property Show
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Main Headline */}
// //               <motion.h1
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3, duration: 0.8 }}
// //                 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
// //               >
// //                 THE FUTURE
// //                 <br />
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
// //                   IS COMING
// //                 </span>
// //               </motion.h1>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.5, duration: 0.8 }}
// //                 className="mb-8"
// //               >
// //                 <p className="text-xl md:text-2xl text-blue-100 mb-2">
// //                   One Platform. Every Deal. Zero Friction.
// //                 </p>
// //                 <p className="text-lg text-blue-200">
// //                   The Central Nervous System of Dubai Real Estate
// //                 </p>
// //               </motion.div>

// //               {/* Question Slider */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.7, duration: 0.8 }}
// //               >
// //                 <QuestionSlider />
// //               </motion.div>

// //               {/* Launch Date */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.9, duration: 0.8 }}
// //                 className="text-center lg:text-left"
// //               >
// //                 <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
// //                   <span className="text-blue-200 text-sm font-medium">
// //                     Launching{" "}
// //                   </span>
// //                   <span className="text-white font-bold">March 2025</span>
// //                 </div>
// //               </motion.div>
// //             </motion.div>

// //             {/* Right Column - Form */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: 0.5, duration: 1 }}
// //               className="flex justify-center"
// //             >
// //               <div className="w-full max-w-md">
// //                 <RegistrationForm />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ComingSoonPage;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Mail,
//   User,
//   Phone,
//   Building2,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const slideIn = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const slideOut = {
//   hidden: { opacity: 0, x: -100 },
//   exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
// };

// // Question Slider Component
// const QuestionSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const questions = [
//     {
//       category: "For Buyers & Investors",
//       questions: [
//         "What if your next property investment was available 365 days a year, on your schedule?",
//         "Are you ready to unlock direct access to Dubai's most exclusive opportunities?",
//       ],
//       gradient: "from-blue-500 to-blue-700",
//     },
//     {
//       category: "For Real Estate Agents",
//       questions: [
//         "What if closing deals took hours instead of weeks?",
//         "Are you ready for an always-on marketplace that fuels your commissions?",
//       ],
//       gradient: "from-purple-500 to-blue-600",
//     },
//     {
//       category: "For Developers",
//       questions: [
//         "What if your projects had a permanent stage in Dubai's property hub?",
//         "Are you ready to connect instantly with the city's top agents and qualified buyers?",
//       ],
//       gradient: "from-indigo-500 to-purple-600",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % questions.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [questions.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % questions.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + questions.length) % questions.length);
//   };

//   return (
//     <div className="relative mb-12">
//       <div className="overflow-hidden rounded-2xl">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, x: 300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -300 }}
//             transition={{ duration: 0.8 }}
//             className={`bg-gradient-to-r ${questions[currentSlide].gradient} p-8 text-white relative`}
//           >
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-6 text-blue-100">
//                 {questions[currentSlide].category}
//               </h3>

//               <div className="space-y-4">
//                 {questions[currentSlide].questions.map((question, index) => (
//                   <motion.p
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                     className="text-lg md:text-xl font-medium leading-relaxed"
//                   >
//                     {question}
//                   </motion.p>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation buttons */}
//             {/* <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
//             >
//               <ChevronLeft size={20} />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
//             >
//               <ChevronRight size={20} />
//             </button> */}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Slide indicators */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "bg-white"
//                 : "bg-white/50 hover:bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Registration Form Component
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "buyer",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: "", email: "", phone: "", interest: "buyer" });
//     }, 3000);
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
//       >
//         <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-8 h-8 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
//         <p className="text-blue-100">
//           We'll notify you as soon as DPS launches.
//         </p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       animate="visible"
//       className="bg-gray-800/10 backdrop-blur-md rounded-2xl p-8 border border-gray-800/20"
//     >
//       <div className="text-center mb-6">
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">
//           Be the First to Know
//         </h3>
//         <p className="text-gray-800">
//           Join the waitlist and get exclusive early access
//         </p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <div className="relative">
//             <User
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800/60"
//               size={20}
//             />
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-gray-800/10 border border-gray-800/30 rounded-xl text-gray-800 placeholder-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
//               placeholder="Full Name"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <div className="relative">
//             <Mail
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800/60"
//               size={20}
//             />
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-gray-800/10 border border-gray-800/30 rounded-xl text-gray-800 placeholder-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
//               placeholder="Email Address"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <div className="relative">
//             <Phone
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800/60"
//               size={20}
//             />
//             <input
//               type="tel"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-gray-800/10 border border-gray-800/30 rounded-xl text-gray-800 placeholder-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
//               placeholder="Phone Number"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <select
//             value={formData.interest}
//             onChange={(e) =>
//               setFormData({ ...formData, interest: e.target.value })
//             }
//             className="w-full px-4 py-4 bg-gray-800/10 border border-gray-800/30 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
//           >
//             <option value="buyer" className="bg-white">
//               Buyer/Investor
//             </option>
//             <option value="agent" className="bg-white">
//               Real Estate Agent
//             </option>
//             <option value="developer" className="bg-white">
//               Developer
//             </option>
//             {/* <option value="other" className="bg-white">
//               Other
//             </option> */}
//           </select>
//         </div>

//         <motion.button
//           onClick={handleSubmit}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
//         >
//           Join the Revolution
//           <ArrowRight size={20} />
//         </motion.button>
//       </div>

//       <p className="text-center text-gray-800 text-sm mt-4">
//         No spam, just exclusive updates about DPS launch
//       </p>
//     </motion.div>
//   );
// };

// // Main Coming Soon Page Component
// const ComingSoonPage = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/DECA.jpg"
//           alt="Dubai Property Show Exhibition"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay for text readability */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/30"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div> */}
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="text-center lg:text-left"
//             >
//               {/* Logo - Placeholder for your DPS logo */}
//               <div className="flex items-center justify-start mb-4">
//                 <img
//                   src="/DPS_LOGOWIDE.png"
//                   alt="Dubai Property Show Exhibition"
//                   className="w-96 h-full object-cover"
//                 />
//               </div>

//               {/* Main Headline */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-2xl"
//               >
//                 THE FUTURE
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-gray-800 to-blue-200">
//                   IS COMING
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="mb-8"
//               >
//                 <p className="text-xl md:text-2xl text-gray-800 mb-2 drop-shadow-lg font-medium">
//                   One Platform. Every Deal. Zero Friction.
//                 </p>
//                 <p className="text-lg text-gray-800 drop-shadow">
//                   The Central Nervous System of Dubai Real Estate
//                 </p>
//               </motion.div>

//               {/* Question Slider */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//               >
//                 <QuestionSlider />
//               </motion.div>

//               {/* Launch Date */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.8 }}
//                 className="text-center lg:text-left"
//               >
//                 <div className="inline-block px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-white/30 shadow-xl">
//                   <span className="text-blue-600 text-sm font-medium">
//                     Launching{" "}
//                   </span>
//                   <span className="text-blue-800 font-bold">March 2025</span>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="flex justify-center"
//             >
//               <div className="w-full max-w-md">
//                 <RegistrationForm />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComingSoonPage;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Mail,
//   User,
//   Phone,
//   Building2,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const slideIn = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const slideOut = {
//   hidden: { opacity: 0, x: -100 },
//   exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
// };

// // Question Carousel Component
// const QuestionCarousel = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const questions = [
//     {
//       category: "For Buyers & Investors",
//       question:
//         "What if your next property investment was available 365 days a year, on your schedule?",
//       gradient: "from-[#073c75] via-[#0f4d87] to-[#1a5ea3]",
//     },
//     {
//       category: "For Buyers & Investors",
//       question:
//         "Are you ready to unlock direct access to Dubai's most exclusive opportunities?",
//       gradient: "from-[#073c75] via-[#0f4d87] to-[#1a5ea3]",
//     },
//     {
//       category: "For Real Estate Agents",
//       question: "What if closing important deals took hours instead of weeks?",
//       gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
//     },
//     {
//       category: "For Real Estate Agents",
//       question:
//         "Are you ready for an always-on marketplace that fuels your commissions?",
//       gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
//     },
//     {
//       category: "For Developers",
//       question:
//         "What if your projects had a permanent stage in Dubai's property hub?",
//       gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
//     },
//     {
//       category: "For Developers",
//       question:
//         "Are you ready to connect instantly with the city's top agents and qualified buyers?",
//       gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentQuestion((prev) => (prev + 1) % questions.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [questions.length]);

//   const nextQuestion = () => {
//     setCurrentQuestion((prev) => (prev + 1) % questions.length);
//   };

//   const prevQuestion = () => {
//     setCurrentQuestion(
//       (prev) => (prev - 1 + questions.length) % questions.length
//     );
//   };

//   return (
//     <div className="relative mb-4">
//       <div className="overflow-hidden rounded-3xl shadow-2xl">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentQuestion}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.7 }}
//             className={`bg-gradient-to-br ${questions[currentQuestion].gradient} p-8 md:p-12 text-white relative min-h-[200px] flex items-center`}
//           >
//             <div className="text-center w-full">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//                 className="mb-6"
//               >
//                 <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/30">
//                   {questions[currentQuestion].category}
//                 </span>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-xl md:text-2xl  font-medium leading-relaxed text-white w-full mx-auto"
//               >
//                 {questions[currentQuestion].question}
//               </motion.p>
//             </div>

//             {/* Navigation buttons */}
//             {/* <button
//               onClick={prevQuestion}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
//             >
//               <ChevronLeft size={24} />
//             </button>

//             <button
//               onClick={nextQuestion}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
//             >
//               <ChevronRight size={24} />
//             </button> */}

//             {/* Decorative elements */}
//             <div className="absolute top-4 left-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
//             <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Question indicators */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentQuestion(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentQuestion === index
//                 ? "bg-[#073c75] scale-125"
//                 : "bg-[#073c75]/40 hover:bg-[#073c75]/70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Registration Form Component
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "buyer",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: "", email: "", phone: "", interest: "buyer" });
//     }, 3000);
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/40 text-center shadow-2xl"
//       >
//         <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-8 h-8 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-[#073c75] mb-2">You're In!</h3>
//         <p className="text-[#073c75]/80">
//           We'll notify you as soon as DPS launches.
//         </p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       variants={fadeInUp}
//       initial="hidden"
//       animate="visible"
//       className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl"
//     >
//       <div className="text-center mb-8">
//         <h3 className="text-3xl font-bold text-[#073c75] mb-3">
//           Be the First to Know
//         </h3>
//         <p className="text-[#073c75]/80 text-lg">
//           Join the waitlist and get exclusive early access
//         </p>
//       </div>

//       <div className="space-y-6">
//         <div>
//           <div className="relative">
//             <User
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
//               size={22}
//             />
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
//               placeholder="Full Name"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <div className="relative">
//             <Mail
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
//               size={22}
//             />
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
//               placeholder="Email Address"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <div className="relative">
//             <Phone
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
//               size={22}
//             />
//             <input
//               type="tel"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
//               placeholder="Phone Number"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <select
//             value={formData.interest}
//             onChange={(e) =>
//               setFormData({ ...formData, interest: e.target.value })
//             }
//             className="w-full px-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-[#073c75]/20 rounded-xl text-[#073c75] focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
//           >
//             {/* <option value="buyer" className="bg-white text-[#073c75]">
//               Buyer/Investor
//             </option> */}
//             <option value="agent" className="bg-white text-[#073c75]">
//               Real Estate Agent
//             </option>
//             <option value="developer" className="bg-white text-[#073c75]">
//               Developer
//             </option>
//           </select>
//         </div>

//         <motion.button
//           onClick={handleSubmit}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full py-4 bg-gradient-to-r from-[#073c75] to-[#0f4d87] hover:from-[#0f4d87] hover:to-[#1a5ea3] text-white rounded-xl font-semibold transition-all duration-300 transform hover:shadow-2xl hover:shadow-[#073c75]/25 flex items-center justify-center gap-3 text-lg"
//         >
//           Join the Revolution
//           <ArrowRight size={22} />
//         </motion.button>
//       </div>

//       <p className="text-center text-[#073c75]/70 text-sm mt-6">
//         No spam, just exclusive updates about DPS launch
//       </p>
//     </motion.div>
//   );
// };

// // Main Coming Soon Page Component
// const ComingSoonPage = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#073c75] to-[#1e3a8a]">
//         {/* Animated gradient orbs */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
//         />

//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.5, 0.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
//         />

//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.4, 0.7, 0.4],
//             rotate: [0, 90, 180],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl"
//         />

//         {/* Subtle pattern overlay */}
//         {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> */}
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left Column - Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="text-center lg:text-left"
//             >
//               {/* Logo */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="flex items-center justify-center lg:justify-start mb-8"
//               >
//                 <img
//                   src="/DPS_LOGOWIDE_white.png"
//                   alt="Dubai Property Show"
//                   className="h-16 md:h-20 w-auto object-contain filter drop-shadow-lg"
//                 />
//               </motion.div>

//               {/* Main Headline */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
//               >
//                 The Future
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 ">
//                   Is Coming
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="mb-12"
//               >
//                 <p className="text-2xl md:text-3xl text-white mb-4 font-medium">
//                   One Platform. Every Deal. Zero Friction.
//                 </p>
//                 <p className="text-xl text-blue-200">
//                   The Central Nervous System of Dubai Real Estate
//                 </p>
//               </motion.div>

//               {/* Question Carousel */}
//               {/* <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               >
//                 <QuestionCarousel />
//               </motion.div> */}

//               {/* Launch Date */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 className="text-center lg:text-left"
//               >
//                 <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
//                   <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
//                   <span className="text-white/90 text-sm font-medium mr-2">
//                     Launching{" "}
//                   </span>
//                   <span className="text-white font-bold text-lg">Soon</span>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 1 }}
//               className="flex justify-center"
//             >
//               <div className="w-full max-w-lg">
//                 <RegistrationForm />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComingSoonPage;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, User, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Question Carousel Component
const QuestionCarousel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    // {
    //   category: "For Buyers & Investors",
    //   question:
    //     "What if your next property investment was available 365 days a year, on your schedule?",
    //   gradient: "from-[#073c75] via-[#0f4d87] to-[#1a5ea3]",
    // },
    // {
    //   category: "For Buyers & Investors",
    //   question:
    //     "Are you ready to unlock direct access to Dubai's most exclusive opportunities?",
    //   gradient: "from-[#073c75] via-[#0f4d87] to-[#1a5ea3]",
    // },
    {
      category: "For Real Estate Agents",
      question: "What if closing important deals took hours instead of weeks?",
      gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
    },
    {
      category: "For Real Estate Agents",
      question:
        "Are you ready for an always-on marketplace that fuels your commissions?",
      gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
    },
    {
      category: "For Developers",
      question:
        "What if your projects had a permanent stage in Dubai's property hub?",
      gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
    },
    {
      category: "For Developers",
      question:
        "Are you ready to connect instantly with the city's top agents and qualified buyers?",
      gradient: "from-[#073c75] via-[#1e3a8a] to-[#3b82f6]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [questions.length]);

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  const prevQuestion = () => {
    setCurrentQuestion(
      (prev) => (prev - 1 + questions.length) % questions.length
    );
  };

  return (
    <div className="relative mb-4">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            className={`bg-gradient-to-br ${questions[currentQuestion].gradient} p-8 md:p-12 text-white relative min-h-[200px] flex items-center`}
          >
            <div className="text-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/30">
                  {questions[currentQuestion].category}
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl  font-medium leading-relaxed text-white w-full mx-auto"
              >
                {questions[currentQuestion].question}
              </motion.p>
            </div>

            {/* Navigation buttons */}
            {/* <button
              onClick={prevQuestion}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextQuestion}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
            >
              <ChevronRight size={24} />
            </button> */}

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Question indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestion(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentQuestion === index
                ? "bg-[#073c75] scale-125"
                : "bg-[#073c75]/40 hover:bg-[#073c75]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Registration Form Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "buyer",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      await emailjs.send(
        "service_otx1rwi", // replace with EmailJS service ID
        "template_reojebe", // replace with EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
        },
        "DsWeIlaGUWjO8AFSt" // replace with your EmailJS public key
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", interest: "buyer" });
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again!");
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "buyer" });
    }, 3000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/40 text-center shadow-2xl"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#073c75] mb-2">You're In!</h3>
        <p className="text-[#073c75]/80">
          We'll notify you as soon as DPS launches.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#073c75] mb-3">
          Be the First to Know
        </h3>
        <p className="text-[#073c75]/80 text-lg">
          Join the waitlist and get exclusive early access
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
              size={22}
            />
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
              placeholder="Full Name"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
              size={22}
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <Phone
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#073c75]/60"
              size={22}
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-[#073c75]/20 rounded-xl text-[#073c75] placeholder-[#073c75]/60 focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div>
          <select
            value={formData.interest}
            onChange={(e) =>
              setFormData({ ...formData, interest: e.target.value })
            }
            className="w-full px-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-[#073c75]/20 rounded-xl text-[#073c75] focus:outline-none focus:ring-2 focus:ring-[#073c75]/50 focus:border-[#073c75] transition-all duration-300 text-lg"
          >
            <option value="agent" className="bg-white text-[#073c75]">
              Real Estate Agent
            </option>
            <option value="developer" className="bg-white text-[#073c75]">
              Developer
            </option>
          </select>
        </div>

        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-[#073c75] to-[#0f4d87] hover:from-[#0f4d87] hover:to-[#1a5ea3] text-white rounded-xl font-semibold transition-all duration-300 transform hover:shadow-2xl hover:shadow-[#073c75]/25 flex items-center justify-center gap-3 text-lg"
        >
          Join the Revolution
          <ArrowRight size={22} />
        </motion.button>
      </div>

      <p className="text-center text-[#073c75]/70 text-sm mt-6">
        No spam, just exclusive updates about DPS launch
      </p>
    </motion.div>
  );
};

// Main Coming Soon Page Component
const ComingSoonPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#073c75] to-[#1e3a8a]">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center justify-center lg:justify-start mb-8"
              >
                <img
                  src="/DPS_LOGOWIDE_WHITE.png"
                  alt="Dubai Property Show"
                  className="h-16 md:h-20 w-auto object-contain filter drop-shadow-lg"
                />
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              >
                The Future
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300 ">
                  Is Coming
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-12"
              >
                <p className="text-2xl md:text-3xl text-white mb-4 font-medium">
                  One Platform. Every Deal. Zero Friction.
                </p>
                <p className="text-xl text-blue-200">
                  The Central Nervous System of Dubai Real Estate
                </p>
              </motion.div>

              {/* Question Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <QuestionCarousel />
              </motion.div>

              {/* Launch Date */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium mr-2">
                    Launching{" "}
                  </span>
                  <span className="text-white font-bold text-lg">Soon</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg">
                <RegistrationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
