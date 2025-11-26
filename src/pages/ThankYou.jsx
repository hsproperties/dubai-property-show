import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  Heart,
} from "lucide-react";

const ThankYou = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description:
        "We've sent you a confirmation email with all the details. Please check your inbox.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Phone,
      title: "We'll Contact You",
      description:
        "Our team will reach out to you within 24 hours to discuss your requirements.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Calendar,
      title: "Schedule a Visit",
      description:
        "Book a personalized tour of our exhibition center and explore properties in person.",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-[#073c75]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#51779e]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <CheckCircle className="w-14 h-14 text-white" />
            </motion.div>

            <Badge className="mb-6 bg-blue-50 text-[#073c75] border-blue-200 hover:text-white text-sm font-semibold px-4 py-2">
              Submission Successful
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Thank You for{" "}
              <span className="text-gradient">Your Submission!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've received your inquiry and our team is already working on it.
              You'll hear from us very soon!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Happens <span className="text-gradient">Next?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect in the coming days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <step.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
              <div className="p-12 lg:p-16">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="text-white" size={40} />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  While You Wait...
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Explore our website to discover more about Dubai's premier
                  property showcase, browse featured properties, or learn about
                  our upcoming events.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-[#073c75] hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl"
                    asChild
                  >
                    <Link to="/">
                      <Home className="w-5 h-5 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <p className="text-lg">
                We appreciate your interest in Dubai Property Show
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              If you have any urgent questions, feel free to contact us directly
              at{" "}
              <a
                href="tel:+971545727505"
                className="text-[#073c75] hover:underline font-semibold"
              >
                +971 5 457 27505
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@dpsexpo.com"
                className="text-[#073c75] hover:underline font-semibold"
              >
                info@dpsexpo.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;

