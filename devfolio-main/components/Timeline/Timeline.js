import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WORK_CONTENTS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  const experiences = [
    {
      company: "Sapphire Infocom Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      duration: "Dec 2025 - Mar 2026",
      location: "Remote",
      logo: "/logos/shipre.png",
      highlights: [
        "Developed full-stack MERN applications from scratch",
        "Implemented RESTful APIs and database schemas",
        "Collaborated with senior developers on production code",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      company: "Ideamagix",
      role: "MERN Stack Developer Intern",
      duration: "Dec 2025 - Jan 2026",
      location: "Mumbai, India",
      logo: "/logos/Ideamagix.jpg",
      highlights: [
        "Gained hands-on exposure to professional development workflows",
        "Worked under strict code review and mentorship processes",
        "Demonstrated ability to crack corporate interviews",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      company: "Asian Exporters Chamber of Commerce & Industry",
      role: "Frontend Developer Intern",
      duration: "Sep 2025 - Dec 2025",
      location: "Navi Mumbai, India",
      logo: "/logos/1766508138301.jpeg",
      highlights: [
        "Built responsive web interfaces with Redux Toolkit",
        "Optimized UI/UX for business applications",
        "Collaborated with cross-functional teams",
      ],
      tech: ["Redux Toolkit", "React.js", "Tailwind CSS"],
      gradient: "from-green-600 to-emerald-500",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.from(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Timeline line grows
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Each experience card slides in
      timelineRefs.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.from(card, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Hover enhancement
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addTimelineRef = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <style jsx>{`
        .timeline-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);
        }
        
        .timeline-dot {
          transition: all 0.3s ease;
        }
        
        .timeline-card:hover .timeline-dot {
          transform: scale(1.5);
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.6);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey through internships and real-world projects.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical timeline line */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-400 via-cyan-400 to-sky-400 rounded-full"
          style={{ top: 0, bottom: 0 }}
        />

        {/* Timeline items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="timeline-dot w-6 h-6 bg-sky-400 rounded-full border-4 border-gray-900 pulse-dot shadow-lg shadow-sky-400/50" />
              </div>

              {/* Card */}
              <div 
                ref={addTimelineRef}
                className={`timeline-card w-full md:w-[calc(50%-3rem)] bg-gradient-to-br ${exp.gradient} p-1 rounded-2xl`}
              >
                <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sky-300 font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-sky-400 mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-500/10 border border-sky-400/30 rounded-full text-sky-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-8 z-10 md:hidden">
                <div className="timeline-dot w-4 h-4 bg-sky-400 rounded-full border-2 border-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
