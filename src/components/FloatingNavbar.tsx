"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const direction = latest > lastScrollY ? "down" : "up";
  //   const atTop = latest < 50;
    
  //   if (direction === "down" && latest > 100 && !atTop) {
  //     setIsVisible(false);
  //   } else if (direction === "up" || atTop) {
  //     setIsVisible(true);
  //   }
  //   setLastScrollY(latest);
  // });

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Competitions", href: "#competitions" },
    { name: "Timeline", href: "#timeline" },
    { name: "Highlights", href: "#highlights" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl  mx-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between px-4 py- bg-white/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg">
          {/* Logo/Brand */}
          
            <img
              src="/logo.png"
              alt="Aether Logo"

              className="object-contain w-full h-12 lg:h-12"
            />
       

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => ( 
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium text-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
         

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <motion.div
          className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            y: isMobileMenuOpen ? 0 : -20,
            scale: isMobileMenuOpen ? 1 : 0.95 
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
