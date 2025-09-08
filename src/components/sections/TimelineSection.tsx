"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Timeline } from "@/components/ui/timeline";
import { Calendar, Users, Award, Rocket, Star } from "lucide-react";

export const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      title: "Registration Opens",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">1 September 2025</h4>
              <p className="text-sm text-gray-600">Early  Registration</p>
            </div>
          </div>
          
        </div>
      ),
    },
    {
      title: "Team Formation",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Team Building Phase</h4>
             
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              Team formation period begins! Connect with talented individuals from across the nation 
              to form your dream team. Access to exclusive networking platform and mentor guidance.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-900">HerSpark Ideathon:</span>
                <p className="text-gray-600">2-4 girl members</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Hackconquest:</span>
                <p className="text-gray-600">2-4 members</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">NSC-ETT Paper/Poster:</span>
                <p className="text-gray-600">1-4 members</p>
              </div>
              <div>
                <span className="font-medium text-wrap text-gray-900">NMRTC</span>
                <p className="text-gray-600">1-4 members</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Registration & Submission Deadlines",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">12-20 September 2025</h4>
              <p className="text-sm text-gray-600">Competition Deadlines</p>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="font-medium text-gray-900">NSC-ETT Paper/Poster:</span>
                <p className="text-gray-600">Registration: 12 Sept</p>
                <p className="text-gray-600">Submission: 15 Sept</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">AKHYAAN/Manthan (NMTRC):</span>
                <p className="text-gray-600">Registration: 12 Sept</p>
                <p className="text-gray-600">Submission: 15 Sept</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">HerSpark Ideathon:</span>
                <p className="text-gray-600">Deadline: 17 Sept</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Hackconquest:</span>
                <p className="text-gray-600">Deadline: 20 Sept</p>
              </div>
            </div>
            
            <div className="bg-red-100 border border-red-200 rounded-lg p-3 mt-3">
              <p className="text-red-800 font-medium text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                No extensions will be granted after these dates
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results Announcement",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">21 September 2025</h4>
              <p className="text-sm text-gray-600">Round 1 Results</p>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Results for Round 1 of NSC-ETT Paper/Poster presentations  and shortlisting announcements. Top 5 teams per track will be selected for the final round.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Results for Round 1 of NMTRC Manthan/AKHYAAN  and shortlisting announcements
            </p>
             <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 mt-3">
              <p className="text-purple-800 font-medium text-sm">
                  Shortlisting for HackconQuest Hackthon will be on on 22nd September 2025
              </p>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 mt-3">
              <p className="text-purple-800 font-medium text-sm">
                Finalists will be notified via email and announcements will be made 
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Conference Day",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">26 September 2025</h4>
              <p className="text-sm text-gray-600">The Big Day</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              The grand finale at TCET Mumbai! All final round presentations, demos, and competitive events 
              happen today. Hackconquest participants will showcase their online demos and finalist presentations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 border">
                <h5 className="font-semibold text-purple-700">Morning</h5>
                <p className="text-gray-600">Opening Ceremony & Keynotes</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <h5 className="font-semibold text-purple-700">Day</h5>
                <p className="text-gray-600">Final Presentations & Demos</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <h5 className="font-semibold text-purple-700">Evening</h5>
                <p className="text-gray-600">Workshops & Networking</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Awards & Recognition",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">27 September 2025</h4>
              <p className="text-sm text-gray-600">Closing Ceremony</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Grand closing ceremony with award distribution, winner announcements, 
              and certificate presentation. Network with fellow participants and celebrate innovation!
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm rounded-full font-medium flex items-center gap-1">
                <Award className="w-4 h-4" />
                Exciting Prizes
              </span>
              <span className="px-3 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm rounded-full font-medium">
                Certificates
              </span>
              <span className="px-3 py-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-white text-sm rounded-full font-medium">
                Goodies & Swag
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-20 w-16 h-16 text-purple-100" viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.5"/>
          <circle cx="80" cy="40" r="1.5" fill="currentColor" opacity="0.4"/>
          <path d="M10 80C30 60 50 80 70 60C90 40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </svg>
        <svg className="absolute bottom-20 left-20 w-12 h-12 text-blue-100" viewBox="0 0 100 100" fill="none">
          <path d="M20 20C40 40 60 20 80 40" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="30" cy="70" r="1" fill="currentColor" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100/60 backdrop-blur-sm rounded-full border border-purple-200/50">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Event Timeline</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

          
        </motion.div>
      </div>

      {/* Timeline Component */}
      <Timeline data={timelineData} />
    </section>
  );
};
