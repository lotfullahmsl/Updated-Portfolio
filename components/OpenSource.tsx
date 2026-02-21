"use client";

import { openSourceProjects } from "@/data";
import { FaCodeBranch, FaGithub, FaNpm, FaStar } from "react-icons/fa6";

const OpenSource = () => {
  return (
    <section className="py-20" id="opensource">
      <h1 className="heading">
        Open Source <span className="text-purple">Contributions</span>
      </h1>
      <p className="text-center text-white-200 mt-4 mb-10 text-sm md:text-base">
        Contributing to the developer community through open source projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {openSourceProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="p-6 rounded-2xl border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 h-full group"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.type === "github" ? (
                    <FaGithub className="text-2xl text-purple" />
                  ) : (
                    <FaNpm className="text-2xl text-purple" />
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>

              <p className="text-white-200 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-white-200 text-sm">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch />
                  <span>{project.forks}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-purple/[0.2] text-purple border border-purple/[0.3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
