"use client";

import { skillCategories } from "@/data";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    if (window.innerWidth < 768) {
      setExpandedCategory(expandedCategory === index ? null : index);
    }
  };

  return (
    <section className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">tech stack</span>
      </h1>
      <p className="text-center text-white-200 mt-4 mb-10 text-sm md:text-base px-4">
        Technologies I work with to build scalable full-stack applications
      </p>

      <div className="w-full mt-12 max-w-7xl mx-auto px-4">
        <div
          className="relative rounded-3xl border border-white/[0.1] overflow-visible p-4 sm:p-6 md:p-12 min-h-[500px] md:min-h-[600px]"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          {/* SVG for curved lines - Hidden on mobile */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Curved lines from root to categories */}
            {skillCategories.map((_, index) => {
              const totalCategories = skillCategories.length;
              const startX = 50; // Center of root (percentage)
              const startY = 15; // Bottom of root
              const endX = ((index + 0.5) / totalCategories) * 100; // Distribute evenly
              const endY = 25; // Top of category boxes
              const controlY = 20; // Control point for curve

              return (
                <path
                  key={index}
                  d={`M ${startX}% ${startY}% Q ${endX}% ${controlY}%, ${endX}% ${endY}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Tree Structure */}
          <div className="relative w-full h-full flex flex-col items-center" style={{ zIndex: 1 }}>
            {/* Root - Full Stack Engineer */}
            <div className="text-center mb-6 md:mb-16">
              <div className="inline-block px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-purple/[0.3] to-purple/[0.2] border-2 border-purple/[0.6] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg shadow-purple/[0.3]">
                Full Stack Engineer
              </div>
            </div>

            {/* Mobile: Accordion Style */}
            <div className="md:hidden w-full space-y-3">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="w-full">
                  {/* Category Header - Clickable */}
                  <button
                    onClick={() => toggleCategory(catIndex)}
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-b from-purple/[0.15] to-purple/[0.05] border border-purple/[0.4] text-purple font-semibold text-sm text-center shadow-md transition-all duration-300 active:scale-95 flex items-center justify-between"
                  >
                    <span>{category.category}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedCategory === catIndex ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Skills - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCategory === catIndex ? 'max-h-[500px] mt-3' : 'max-h-0'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-2 px-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 border bg-[#0a0a1f]/[0.6] border-purple/[0.25] text-white-200"
                        >
                          <div className="font-semibold">{skill.name}</div>
                          <div className="text-[10px] text-purple-300 mt-1">
                            {skill.level}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Tree Layout */}
            <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 w-full mb-4 md:mb-8">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col items-center">
                  {/* Category Box */}
                  <div className="px-3 py-2 rounded-xl bg-gradient-to-b from-purple/[0.15] to-purple/[0.05] border border-purple/[0.4] text-purple font-semibold text-xs md:text-sm text-center whitespace-nowrap mb-4 shadow-md hover:shadow-lg hover:shadow-purple/[0.2] transition-all duration-300 hover:scale-105">
                    {category.category}
                  </div>

                  {/* Skills Column */}
                  <div className="flex flex-col gap-2 w-full">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Connecting line to category */}
                        {skillIndex === 0 && (
                          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-gradient-to-b from-purple/[0.4] to-transparent -translate-x-1/2"></div>
                        )}
                        
                        {/* Skill Box */}
                        <div
                          className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center transition-all duration-300 cursor-pointer border
                            ${hoveredSkill === skill.name 
                              ? 'bg-purple/[0.3] border-purple/[0.7] text-white scale-105 shadow-lg shadow-purple/[0.4]' 
                              : 'bg-[#0a0a1f]/[0.6] border-purple/[0.25] text-white-200 hover:bg-purple/[0.15] hover:border-purple/[0.5]'
                            }`}
                        >
                          <div className="font-semibold">{skill.name}</div>
                          {hoveredSkill === skill.name && (
                            <div className="text-[9px] text-purple-300 mt-0.5 animate-fadeIn">
                              {skill.level}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
