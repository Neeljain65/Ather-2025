"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Users, Target } from "lucide-react";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Showcasing cutting-edge technology and breakthrough ideas",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Bringing together brilliant minds from across the nation",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Setting new standards in technical education and research",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-32 right-20 w-24 h-24 text-purple-100" viewBox="0 0 200 200" fill="none">
          <path d="M20 20C40 40 60 20 80 40C100 60 120 40 140 60C160 80 180 60 200 80" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          <circle cx="50" cy="150" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="150" cy="50" r="3" fill="currentColor" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-20 left-20 w-20 h-20 text-blue-100" viewBox="0 0 200 200" fill="none">
          <path d="M180 20C160 40 140 20 120 40C100 60 80 40 60 60C40 80 20 60 0 80" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aether 2025
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Aether 2025 is a premier national-level technical conference that brings together 
            the brightest minds in technology, innovation, and research. Join us for an 
            extraordinary journey of learning, networking, and discovering the future of 
            technology at TCET Mumbai.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-gray-50/50 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group border border-gray-100"
              whileHover={{ y: -3 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-50 rounded-full border border-purple-100">
            <span className="text-lg">🚀</span>
            <p className="text-base font-medium text-gray-800">
              Experience the future of technology at India&apos;s most innovative conference
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
