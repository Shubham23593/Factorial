import { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PROJECTS } from "../../constants";
import styles from "./ProjectsExpand.module.scss";

gsap.registerPlugin(ScrollTrigger);

const techColors = {
  react: { name: "React", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
  nodejs: { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-400/30" },
  express: { name: "Express", color: "bg-gray-500/20 text-gray-300 border-gray-400/30" },
  mongodb: { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" },
  firebase: { name: "Firebase", color: "bg-amber-500/20 text-amber-300 border-amber-400/30" },
  tailwindcss: { name: "Tailwind", color: "bg-sky-500/20 text-sky-300 border-sky-400/30" },
  "socket.io": { name: "Socket.io", color: "bg-purple-500/20 text-purple-300 border-purple-400/30" },
  java: { name: "Java", color: "bg-orange-500/20 text-orange-300 border-orange-400/30" },
  mysql: { name: "MySQL", color: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
  redux: { name: "Redux", color: "bg-violet-500/20 text-violet-300 border-violet-400/30" },
  gsap: { name: "GSAP", color: "bg-lime-500/20 text-lime-300 border-lime-400/30" },
};

const ProjectsExpand = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = PROJECTS.slice(0, 4);
  const allProjects = PROJECTS;
  const displayProjects = showAll ? allProjects : featuredProjects;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleCardClick = (index) => {
    const card = document.querySelector(`[data-project-index="${index}"]`);
    if (!card) return;

    if (expandedProject === index) {
      // Collapse
      gsap.to(card, {
        scale: 1,
        zIndex: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => setExpandedProject(null),
      });
    } else {
      // Expand
      setExpandedProject(index);
      gsap.fromTo(
        card,
        { scale: 1 },
        {
          scale: 1.02,
          zIndex: 50,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <style jsx>{`
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          transform: translateY(-8px);
        }
        
        .project-card.expanded {
          position: relative;
        }
        
        .project-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover .project-image {
          transform: scale(1.1);
        }
        
        .gradient-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            transparent 100%
          );
        }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Each project is a chapter of my development journey. Click to explore.
        </p>
      </div>

      {/* Shortcut note (from document tip #2) */}
      <div className="text-center mb-12">
        <div className="inline-block bg-sky-500/10 border border-sky-400/20 rounded-full px-6 py-2 text-sky-300 text-sm">
          💡 These are foundational projects. For my best work, check out <a href="#competitions" className="underline hover:text-sky-200 transition-colors">Hackathons & Achievements</a>
        </div>
      </div>

      {/* Projects Grid */}
      <div 
        ref={gridRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {displayProjects.map((project, index) => (
          <div
            key={index}
            data-project-index={index}
            className={`project-card relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-sky-400/50 ${
              expandedProject === index ? "expanded" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="project-image w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gradient-overlay absolute inset-0" />
              
              {/* Project number badge */}
              <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                #{String(index + 1).padStart(2, "0")}
              </div>

              {/* Live link icon */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => {
                  const techInfo = techColors[tech] || { name: tech, color: "bg-gray-500/20 text-gray-300 border-gray-400/30" };
                  return (
                    <span
                      key={i}
                      className={`px-3 py-1 ${techInfo.color} border rounded-full text-xs font-medium`}
                    >
                      {techInfo.name}
                    </span>
                  );
                })}
              </div>

              {/* Expand indicator */}
              <div className="mt-4 flex items-center gap-2 text-sky-400 text-sm font-medium">
                <span>{expandedProject === index ? "Click to collapse" : "Click to explore"}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${expandedProject === index ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Expanded content */}
            {expandedProject === index && (
              <div className="px-6 pb-6 border-t border-gray-700/50 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Category</div>
                    <div className="text-white font-medium">Full Stack</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Status</div>
                    <div className="text-green-400 font-medium">✓ Live</div>
                  </div>
                </div>
                
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-colors shadow-lg shadow-sky-500/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Live Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show more/less button */}
      {allProjects.length > featuredProjects.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border-2 border-sky-400 text-sky-400 hover:bg-sky-400/10 font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less ↑" : `View All ${allProjects.length} Projects ↓`}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsExpand;
