"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Zap, Code, Presentation, Lightbulb, Award } from "lucide-react";
import ExpandableCompetitionsCard from "@/components/ui/expandable-competitions-card";

export const CompetitionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const competitions = [
    {
      title: "HerSpark Ideathon",
      description: "Empowering women in STEM to showcase innovative ideas and breakthrough solutions.",
      teamSize: "2–4 girl members",
      deadline: "19 September 2025",
      icon: Lightbulb,
      gradient: "from-pink-500 to-purple-600",
      bgGradient: "from-pink-50 to-purple-50",
      src: "placeholder",
      ctaText: "Register Now",
      ctaLink: "#register",
      duration: "2 days",
      prizes: ["₹50,000 Cash Prize", "Internship Opportunities", "Mentorship Program"],
      requirements: ["Women participants only", "Original idea presentation", "Technical feasibility"],
      content: () => (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            HerSpark Ideathon is exclusively designed to empower women in STEM fields. This competition 
            encourages female participants to present innovative solutions to real-world problems.
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-pink-500" />
              Prizes & Benefits
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ₹50,000 Cash Prize for winners</li>
              <li>• Internship opportunities with partner companies</li>
              <li>• One-year mentorship program</li>
              <li>• Certificate of participation</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Requirements</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Team of 2-4 female members</li>
              <li>• Original idea with technical implementation</li>
              <li>• Presentation slides and prototype demo</li>
              <li>• Submit abstract by deadline</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Paper Presentation",
      description: "Present your research and technical findings to a panel of expert judges.",
      teamSize: "1–4 members",
      deadline: "19 September 2025",
      icon: Presentation,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      src: "placeholder",
      ctaText: "Submit Paper",
      ctaLink: "#submit",
      duration: "1 day",
      prizes: ["₹30,000 Cash Prize", "Publication Opportunity", "Industry Recognition"],
      requirements: ["Original research work", "IEEE format", "15-minute presentation"],
      content: () => (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Showcase your research work and technical innovations through comprehensive paper presentations. 
            Present your findings to industry experts and academic professionals.
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              Prizes & Recognition
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ₹30,000 Cash Prize for best paper</li>
              <li>• Publication opportunity in conference proceedings</li>
              <li>• Industry recognition and networking</li>
              <li>• Certificate of excellence</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Submission Guidelines</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 4-6 pages in IEEE conference format</li>
              <li>• Original research with proper citations</li>
              <li>• 15-minute presentation + 5-minute Q&A</li>
              <li>• Submit via conference portal</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Poster Presentation",
      description: "Showcase your innovative projects and research through compelling visual presentations.",
      teamSize: "1–4 members",
      deadline: "19 September 2025",
      icon: Trophy,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      src: "placeholder",
      ctaText: "Create Poster",
      ctaLink: "#poster",
      duration: "1 day",
      prizes: ["₹20,000 Cash Prize", "Best Design Award", "Industry Exposure"],
      requirements: ["A0/A1 size poster", "Visual appeal", "Technical accuracy"],
      content: () => (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Transform your research and projects into visually compelling posters. This competition 
            focuses on effective visual communication of technical concepts.
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              Awards & Recognition
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ₹20,000 Cash Prize for best poster</li>
              <li>• Best Design and Innovation awards</li>
              <li>• Industry exposure and feedback</li>
              <li>• Digital showcase on conference website</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Poster Specifications</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Size: A0 or A1 portrait orientation</li>
              <li>• High-resolution images and graphics</li>
              <li>• Clear methodology and results section</li>
              <li>• Professional design and layout</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Hackconquest Hackathon",
      description: "36 hours of intensive coding, collaboration, and innovation. Build the future!",
      teamSize: "2–4 members",
      deadline: "19 September 2025",
      icon: Code,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      special: "36 hours",
      src: "placeholder",
      ctaText: "Join Hackathon",
      ctaLink: "#hackathon",
      duration: "36 hours",
      prizes: ["₹1,00,000 Cash Prize", "Startup Incubation", "Tech Gadgets"],
      requirements: ["Working prototype", "Source code", "Live demo"],
      content: () => (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The ultimate 36-hour coding marathon! Work in teams to solve real-world challenges 
            using cutting-edge technology. Build, innovate, and compete for amazing prizes.
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-500" />
              Grand Prizes
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ₹1,00,000 Cash Prize for winning team</li>
              <li>• Startup incubation opportunity</li>
              <li>• Latest tech gadgets and equipment</li>
              <li>• Industry mentorship program</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">What to Expect</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 36 hours of non-stop coding</li>
              <li>• Mentorship from industry experts</li>
              <li>• Free meals and refreshments</li>
              <li>• Networking with like-minded developers</li>
              <li>• Live demo and judging session</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-purple-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 left-20 w-16 h-16 text-purple-200" viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.4"/>
          <circle cx="80" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="70" r="2.5" fill="currentColor" opacity="0.5"/>
        </svg>
        <svg className="absolute bottom-20 right-20 w-20 h-20 text-blue-200" viewBox="0 0 200 200" fill="none">
          <path d="M20 20C40 40 60 20 80 40" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
          <path d="M120 160C140 140 160 160 180 140" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
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
          <motion.div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Competitions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showcase Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brilliance
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your arena and compete with the best minds from across the nation. 
            Each competition offers unique opportunities to learn, grow, and win amazing prizes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExpandableCompetitionsCard cards={competitions} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-medium text-gray-800">
              Amazing prizes and certificates await the winners!
            </span>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
