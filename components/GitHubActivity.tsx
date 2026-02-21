"use client";


const GitHubActivity = () => {
  const githubUsername = "lotfullahmsl"; // Replace with your actual GitHub username

  return (
    <section className="py-20" id="activity">
      <h1 className="heading">
        My <span className="text-purple">coding activity</span>
      </h1>
      <p className="text-center text-white-200 mt-4 mb-10 text-sm md:text-base">
        Consistent contributions and active development
      </p>

      <div className="max-w-5xl mx-auto px-4">
        <div
          className="rounded-3xl border border-white/[0.1] overflow-hidden p-4 sm:p-6 transition-all duration-500 md:hover:border-purple/[0.5]"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          {/* GitHub Contribution Graph */}
          <div className="flex justify-center overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/39d353/${githubUsername}`}
              alt="GitHub Contribution Graph"
              className="w-full max-w-4xl rounded-lg min-w-[300px]"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-center p-3 sm:p-4 rounded-xl bg-black/[0.3] border border-white/[0.1]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple mb-1 sm:mb-2">
                493+
              </p>
              <p className="text-white-200 text-xs sm:text-sm">
                Contributions this year
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-black/[0.3] border border-white/[0.1]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple mb-1 sm:mb-2">
                40+
              </p>
              <p className="text-white-200 text-xs sm:text-sm">
                Repositories
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-black/[0.3] border border-white/[0.1]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple mb-1 sm:mb-2">
                95%
              </p>
              <p className="text-white-200 text-xs sm:text-sm">
                Commits
              </p>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-purple/[0.1] border border-purple/[0.3] text-purple text-xs sm:text-sm font-semibold transition-all duration-300 md:hover:bg-purple/[0.2] md:hover:border-purple/[0.5]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
