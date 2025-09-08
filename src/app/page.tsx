'use client'
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  // null = not decided yet, true = content visible, false = loader visible
  const [isLoaded, setIsLoaded] = useState<null | boolean>(null);
  const [stellarPulse, setStellarPulse] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      // Show loader first time
      setIsLoaded(false);
      const timer = setTimeout(() => {
        setIsLoaded(true);
        sessionStorage.setItem("hasSeenLoader", "true");
      }, 7000);

      const statusInterval = setInterval(() => {
        setStellarPulse(prev => !prev);
      }, 4500);

      return () => {
        clearTimeout(timer);
        clearInterval(statusInterval);
      };
    } else {
      // Skip loader instantly
      setIsLoaded(true);
    }
  }, []);

  // Prevent flash of loader while deciding
  if (isLoaded === null) return null;

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className=" fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="text-center">
              <div className="font-bold text-2xl mb-4 min-h-[40px]">
                <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-2 mx-auto" />
                <div className="text-white text-opacity-70">Loading</div>
                <FlipWords 
                  words={["HerSpark", "NSC-ETT", "NMTRC", "Hackconquest", "Aether 2025"]} 
                  duration={800}
                  className="text-2xl font-semibold"
                />
              </div>

              <div className="w-64 h-2 bg-gray-800 mt-6 relative overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 7, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingNavbar />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="competitions"><CompetitionsSection /></div>
      <div id="timeline"><TimelineSection /></div>
      <div id="highlights"><HighlightsSection /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
}
