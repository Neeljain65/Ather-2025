"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Gift, 
  Users, 
  BookOpen, 
  Award, 
  Mic, 
  HandHeart,
  Star,
  Zap
} from "lucide-react";

export const HighlightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      title: "Amazing Prizes",
      description: "Win cash prizes, gadgets, and exclusive tech merchandise worth lakhs",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      title: "Premium Goodies",
      description: "Exclusive conference merchandise, t-shirts, and tech accessories",
      icon: Gift,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Expert Talks",
      description: "Learn from industry leaders and renowned researchers in technology",
      icon: Mic,
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      title: "Mentoring Sessions",
      description: "One-on-one guidance from experienced professionals and entrepreneurs",
      icon: HandHeart,
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      title: "Networking",
      description: "Connect with like-minded peers and build lasting professional relationships",
      icon: Users,
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
    },
    {
      title: "Certificates",
      description: "Digital and physical certificates for all participants and winners",
      icon: BookOpen,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-32 left-32 w-12 h-12 text-purple-200" viewBox="0 0 100 100" fill="none">
          <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.4"/>
          <circle cx="70" cy="20" r="1.5" fill="currentColor" opacity="0.3"/>
          <circle cx="40" cy="80" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
        <svg className="absolute bottom-32 right-32 w-16 h-16 text-blue-200" viewBox="0 0 200 200" fill="none">
          <path d="M20 180C40 160 60 180 80 160" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Conference Highlights</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aether Special
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond competitions, Aether 2025 offers a complete experience filled with 
            learning opportunities, networking, prizes, and memories that will last a lifetime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 rounded-xl bg-gray-50/50 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group overflow-hidden border border-gray-100"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-500 opacity-50" />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${highlight.gradient} rounded-lg mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <highlight.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 cursor-pointer group">
            <Zap className="w-6 h-6 group-hover:animate-pulse" />
            <div>
              <p className="text-lg font-semibold">Ready to Experience the Future?</p>
              <p className="text-purple-100 text-sm">Join thousands of innovators at Aether 2025</p>
            </div>
            <Zap className="w-6 h-6 group-hover:animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
