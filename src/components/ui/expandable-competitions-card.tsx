"use client";

import React, { RefObject, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Users, Calendar, Zap } from "lucide-react";

interface CompetitionCard {
  title: string;
  image: string;
  description: string;
  teamSize: string;
  deadline: string;
  icon: React.ElementType;
  gradient: string;
  bgGradient: string;
  special?: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
  prizes: string[];
  duration: string;
  requirements: string[];
}

interface ExpandableCompetitionsCardProps {
  cards: CompetitionCard[];
}

export default function ExpandableCompetitionsCard({ cards }: ExpandableCompetitionsCardProps) {
  const [active, setActive] = useState<CompetitionCard | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    if (active && typeof active === "object") setActive(null);
  });
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ borderRadius: "12px" }}
              animate={{ borderRadius: "12px" }}
              exit={{ borderRadius: "12px" }}
              className="p-1 z-50 absolute top-6 right-6 bg-white rounded-full h-6 w-6 flex items-center justify-center border border-neutral-200"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div
                  className={`w-full h-80 bg-gradient-to-br ${active.bgGradient} relative flex items-center justify-center`}
                >
                  <div className={` bg-gradient-to-br ${active.gradient} rounded-2xl shadow-lg`}>
                    <img src={active.image} alt={active.title} className=" object-cover rounded-lg" />
                  </div>
                  {active.special && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 bg-white/90 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                      <Zap className="w-4 h-4 text-orange-500" />
                      {active.special}
                    </div>
                  )}
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 text-base mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className={`px-4 py-2 text-sm rounded-full font-bold bg-gradient-to-r ${active.gradient} text-white shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="bg-gradient-to-br from-blue-350 to-purple-300 to-blue-300 p-4 flex flex-col hover:bg-white rounded-xl cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div
                  className={`h-40 w-full rounded-lg bg-gradient-to-br ${card.bgGradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className={`bg-gradient-to-br ${card.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover  rounded-md" />

                  </div>
                  {card.special && (
                    <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 bg-white/80 text-gray-700 rounded-full text-xs font-medium">
                      <Zap className="w-3 h-3 text-orange-500" />
                      {card.special}
                    </div>
                  )}
                </div>
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-neutral-800 text-center text-lg group-hover:text-neutral-700 transition-colors"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-center text-sm mt-2 line-clamp-2"
                >
                  {card.description}
                </motion.p>
                <div className="flex flex-col gap-2 mt-4 w-full">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{card.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">Deadline: {card.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
