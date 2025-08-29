"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faqs } from "@/lib/data";
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
import Slider from "./Gallery";
import { FaqTeachers } from "./Faq";

export const HighlightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  

 
  
  return (
    <section className="pb-20 px-6  overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-32 left-32 w-12 h-12 text-purple-600" viewBox="0 0 100 100" fill="none">
          <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.4"/>
          <circle cx="70" cy="20" r="1.5" fill="currentColor" opacity="0.3"/>
          <circle cx="40" cy="80" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
        <svg className="absolute bottom-32 right-32 w-16 h-16 text-blue-600" viewBox="0 0 200 200" fill="none">
          <path d="M20 180C40 160 60 180 80 160" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative ">
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
        
        <Slider/>
        <div className="flex lg:mx-52 mt-24 mx-8 mb-24">
          <div className="relative z-50 before:content-[''] before:absolute before:bg-gradient-to-b before:from-purple-200 before:via-purple-300 before:to-purple-400 before:-inset-2 before:-z-10 before:blur-3xl before:rounded-3xl">
            <FaqTeachers faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
};
