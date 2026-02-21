import { certifications, education } from "@/data";

const Education = () => {
  return (
    <section className="py-20" id="education">
      <h1 className="heading">
        Education & <span className="text-purple">Certifications</span>
      </h1>

      {/* Education */}
      <div className="w-full mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-purple">Education</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-purple font-semibold mb-2">
                  {item.institution}
                </p>
                <p className="text-white-200 text-sm">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="w-full mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-purple">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300 group cursor-pointer"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="flex flex-col text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-purple text-sm font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-white-200 text-xs">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
