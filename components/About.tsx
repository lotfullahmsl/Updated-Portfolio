"use client";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 mt-32 sm:mt-0" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="heading mb-6 sm:mb-8 md:mb-10" style={{ color: "#FFFFFF" }}>
          About <span className="text-purple">Me</span>
        </h1>
        
        <div
          className="rounded-2xl sm:rounded-3xl border border-white/[0.1] p-5 sm:p-6 md:p-8 lg:p-10"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p 
              className="leading-relaxed antialiased"
              style={{
                color: "#FFFFFF",
                fontSize: "15px",
                lineHeight: "1.7",
                fontWeight: "400",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              I'm a software engineer currently pursuing my degree at Bahria University Islamabad, 
              where I'm building a foundation in full-stack development. I founded Algoryum to work 
              on projects that solve real problems—from e-commerce platforms to AI-powered tools.
            </p>
            
            <p 
              className="leading-relaxed antialiased"
              style={{
                color: "#FFFFFF",
                fontSize: "15px",
                lineHeight: "1.7",
                fontWeight: "400",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Most of my work involves the MERN stack, but I also enjoy working with Flask, Django, 
              and Flutter when the project calls for it. I've built everything from a HIPAA-compliant 
              case management system to a social network used across multiple university campuses. 
              Each project teaches me something new about writing better code and designing better systems.
            </p>
            
            <p 
              className="leading-relaxed antialiased"
              style={{
                color: "#FFFFFF",
                fontSize: "15px",
                lineHeight: "1.7",
                fontWeight: "400",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              I'm active in the developer community—contributing to open source projects like OWASP Nest 
              and staying involved with IAENG. When I'm not coding, I'm usually exploring new technologies 
              or working on side projects that push me to learn something different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
