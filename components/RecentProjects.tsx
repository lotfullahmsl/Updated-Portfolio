"use client";

import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 max-w-7xl mx-auto px-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl border border-white/[0.1] overflow-hidden transition-all duration-500 md:hover:border-purple/[0.5] md:hover:shadow-xl md:hover:shadow-purple/[0.2] md:hover:-translate-y-1"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex items-stretch gap-4 md:gap-6 p-4 md:p-6">
              {/* Project Image - Hidden on mobile, visible on md+ */}
              <div className="hidden md:flex flex-shrink-0 w-28 lg:w-32 rounded-2xl overflow-hidden bg-[#13162D] items-center justify-center border border-white/[0.1] group-hover:border-purple/[0.3] transition-all duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold md:group-hover:text-purple transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.status && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500/[0.2] border border-yellow-500/[0.5] text-yellow-400 w-fit">
                      {item.status}
                    </span>
                  )}
                </div>
                <p
                  className="text-xs sm:text-sm lg:text-base font-light mb-4"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                {/* Bottom Section - Button and Tech Stack */}
                <div className="mt-auto">
                  {/* View Project Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-purple/[0.1] border border-purple/[0.3] text-purple text-xs sm:text-sm font-semibold transition-all duration-300 md:hover:bg-purple/[0.2] md:hover:border-purple/[0.5] md:hover:gap-3 mb-3"
                  >
                    View Project
                    <FaLocationArrow className="text-xs transition-transform duration-300 md:group-hover:rotate-45" />
                  </a>

                  {/* Tech Stack Text Badges */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    {(item.techStack || item.iconLists || []).map((tech: any, index: number) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-purple/[0.1] border border-purple/[0.3] text-purple transition-all duration-300 md:group-hover:bg-purple/[0.2] md:group-hover:border-purple/[0.4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
