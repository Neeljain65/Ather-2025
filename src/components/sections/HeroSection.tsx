"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BackgroundDecorations = () => {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 0.3 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-purple-300 rounded-full opacity-20 sm:opacity-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating abstract shapes - responsive sizing */}
      <motion.div 
        className="absolute top-16 left-4 sm:top-20 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-3xl"
        animate={{ y: [-8, 12, -8], x: [-4, 6, -4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-4 sm:bottom-28 sm:right-16 lg:bottom-32 lg:right-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
        animate={{ y: [12, -8, 12], x: [6, -4, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional floating elements for larger screens */}
      <motion.div
        className="hidden lg:block absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-lg"
        animate={{ y: [-6, 10, -6], x: [-3, 5, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      
      {/* Light purple blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-48 h-48 bg-purple-300/15 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-72 h-72 bg-purple-100/25 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-56 h-56 bg-blue-200/20 rounded-full blur-2xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Decorative lines/scribbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left scribbles */}
        <svg className="absolute top-10 left-4 md:top-20 md:left-10 w-24 h-24 md:w-32 md:h-32 text-purple-200" viewBox="0 0 200 200" fill="none">
          <path d="M20 20C40 40 60 20 80 40C100 60 120 40 140 60C160 80 180 60 200 80" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <path d="M10 60C30 80 50 60 70 80C90 100 110 80 130 100C150 120 170 100 190 120" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
          <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.3"/>
          <circle cx="160" cy="30" r="2" fill="currentColor" opacity="0.4"/>
        </svg>

        

        
        {/* Bottom right scribbles */}
        <svg className="absolute bottom-20 right-4 md:bottom-32 md:right-20 w-20 h-20 md:w-24 md:h-24 text-blue-200" viewBox="0 0 200 200" fill="none">
          <path d="M20 180C40 160 60 180 80 160C100 140 120 160 140 140C160 120 180 140 200 120" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          <path d="M30 160C50 140 70 160 90 140" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="160" cy="160" r="2.5" fill="currentColor" opacity="0.4"/>
          <circle cx="50" cy="170" r="1.5" fill="currentColor" opacity="0.3"/>
        </svg>
        
        {/* Additional scribbles for mobile */}
        <svg className="absolute top-1/3 right-8 w-16 h-16 md:w-20 md:h-20 text-purple-100" viewBox="0 0 100 100" fill="none">
          <path d="M10 10C30 30 50 10 70 30C90 50" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="20" cy="80" r="2" fill="currentColor" opacity="0.3"/>
          <circle cx="80" cy="20" r="1.5" fill="currentColor" opacity="0.4"/>
        </svg>
        
        <svg className="absolute bottom-1/3 left-8 w-14 h-14 md:w-18 md:h-18 text-blue-100" viewBox="0 0 100 100" fill="none">
          <path d="M80 10C60 30 40 10 20 30" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <path d="M70 70C50 50 30 70 10 50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <circle cx="70" cy="30" r="1" fill="currentColor" opacity="0.4"/>
        </svg>
        
        {/* Floating decorative elements */}
        <svg className="absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 text-purple-200" viewBox="0 0 100 100" fill="none">
          <path d="M20 50C40 30 60 70 80 50" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="1" fill="currentColor" />
          <circle cx="70" cy="70" r="1.5" fill="currentColor" />
        </svg>  
      </div>
      
      {/* Background decorations */}
      <BackgroundDecorations />
      
      {/* Content */}
      <div className="mt-32 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[60vh]">

  {/* <Sparkles className=" absolute top-6 left-4  w-16 h-16 text-purple-400 " />
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 50"
  fill="none"
  stroke="currentColor"
  className="w-28 h-10 text-purple-400 absolute top-0 right-10 opacity-50 z-0"
>
  <path
    d="M10 40 C 40 10, 60 10, 90 40 S 150 70, 190 20"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg> */}

          {/* Left side - Image/Visual placeholder */}
          <motion.div 
            className=" relative order-2 lg:order-1 h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 border border-purple-100 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Placeholder for conference image */}
            <Image
              src="/hero.png"
              alt="Aether 2025 Conference"
              className="w-full h-full object-cover object-center"
              layout="fill"
              objectFit="cover"
            />
            {/* Decorative elements */}
           
          </motion.div>

          {/* Right side - Text content */}
           <motion.div className="order-1 lg:order-2 text-center lg:text-left">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="text-purple-800 text-xs sm:text-sm font-medium">
                National Level Technical Conference
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              TSDW <span>Presents</span>
              <br className="hidden sm:block" />
              <span className="block text-pink-300 sm:inline"> Aether 2025</span>
             
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover breakthrough ideas, connect with experts, and unlock the
              future of technology.
            </motion.p>

            </motion.div>
          <div className="order-2 lg:order-2 text-center lg:text-left">
          </div>
           <div className="order-2 mb-5">
              <motion.div
              className=" flex flex-col sm:flex-row items-center justify-between bg-purple-100/60 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-lg border border-purple-200/50 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-gray-800 mb-4 sm:mb-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-sm sm:text-base font-medium">26 September 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-sm sm:text-base font-medium">TCET Mumbai</span>
                </div>
              </div>
              <Link href={"https://unstop.com/hackathons/herspark-ideathon-2025-thakur-college-of-engineering-and-technology-tcet-mumbai-1551098"}>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 text-sm sm:text-base rounded-full shadow-md transition-all duration-300">
                  Register Now
                </Button>
              </Link>
            </motion.div>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className=" absolute bottom-4 opacity-0 lg:opacity-100 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400/70 rounded-full flex justify-center">
          <motion.div
            className="w-0.5 sm:w-1 h-2 sm:h-3 bg-gray-500 rounded-full mt-1.5 sm:mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
