"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin,
  QrCode,
  Heart,
  ExternalLink
} from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer id="contact" className="mt-16 min-h-96 w-screen bg-gradient-to-b from-white via-white to-purple-400">

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-10 right-20 w-16 h-16 text-gray-700" viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5"/>
          <circle cx="80" cy="40" r="1.5" fill="currentColor" opacity="0.4"/>
          <path d="M10 80C30 60 50 80 70 60C90 40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </svg>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-4xl font-bold mb-2">
                  AETHER{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    2025
                  </span>
                </h3>
                <p className="text-black text-lg mb-4">
                  National Level Technical Conference
                </p>
                <p className="text-purple-950 max-w-md leading-relaxed">
                  Join us for an extraordinary journey of innovation, learning, and networking 
                  at India&apos;s most prestigious student-driven technical conference.
                </p>
              </div>

              <div className="space-y-3 text-purple-950">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Thakur College of Engineering and Technology, Mumbai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@aether2025.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-purple-950">Quick Links</h4>
              <ul className="space-y-3">
                {["About", "Competitions", "Schedule", "Sponsors", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-purple-950 hover:text-purple-950 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Registration & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* QR Code Section */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-950">Quick Registration</h4>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <QrCode className="w-16 h-16 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm text-gray-300 mb-3">Scan to register</p>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium w-full"
                  >
                    Register Now
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-950">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-white/10 rounded-full border border-white/20 text-gray-300 ${social.color} transition-all duration-200 hover:bg-white/20 hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/20 mt-12 pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-purple-950">
                © 2025 Aether Conference. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-purple-950">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>by TCET Students</span>
              </div>
            </div>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent">
                Where Innovation Meets Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
