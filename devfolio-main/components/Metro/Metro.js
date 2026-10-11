import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Metro.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Metro = () => {
  const sectionRef = useRef(null);
  const metroRef = useRef(null);
  const trackRef = useRef(null);
  const billboardRefs = useRef([]);

  const billboards = [
    {
      title: "CodeVerse",
      subtitle: "Real-time Code Editor",
      description: "Collaborative coding with live chat & compiler",
      tech: ["React", "Socket.io", "Node.js"],
      gradient: "from-blue-600 to-cyan-500",
      emoji: "💻",
    },
    {
      title: "ToggleNest",
      subtitle: "Project Management",
      description: "Kanban boards with real-time collaboration",
      tech: ["React", "MongoDB", "Express"],
      gradient: "from-purple-600 to-pink-500",
      emoji: "📋",
    },
    {
      title: "Deepali Studio",
      subtitle: "E-Commerce Platform",
      description: "Production-level makeup artist website",
      tech: ["React", "Firebase", "Tailwind"],
      gradient: "from-rose-600 to-pink-500",
      emoji: "💄",
    },
    {
      title: "TeleMed Queue",
      subtitle: "Healthcare Innovation",
      description: "AI-powered patient queue optimization",
      tech: ["React", "ML", "Socket.io"],
      gradient: "from-green-600 to-emerald-500",
      emoji: "🏥",
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

      // Track appears
      gsap.from(trackRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Metro train animation - moves across screen on scroll
      gsap.fromTo(
        metroRef.current,
        { x: -800 },
        {
          x: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: metroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous subtle metro movement
      gsap.to(metroRef.current, {
        x: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // Billboards pop up one by one
      billboardRefs.current.forEach((billboard, index) => {
        if (!billboard) return;
        
        gsap.from(billboard, {
          y: 100,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: billboard,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Hover effect enhancement
        billboard.addEventListener("mouseenter", () => {
          gsap.to(billboard, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        billboard.addEventListener("mouseleave", () => {
          gsap.to(billboard, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Floating particles (city lights effect)
      const particles = sectionRef.current.querySelectorAll(".particle");
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -100,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          delay: Math.random() * 2,
          ease: "power1.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addBillboardRef = (el) => {
    if (el && !billboardRefs.current.includes(el)) {
      billboardRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <style jsx>{`
        @keyframes trainMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        @keyframes lightPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes particleRise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
          }
        }
        
        .metro-train {
          animation: trainMove 4s ease-in-out infinite;
        }
        
        .billboard-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .billboard-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 50px rgba(14, 165, 233, 0.3);
        }
        
        .track-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(14, 165, 233, 0.3) 20%,
            rgba(14, 165, 233, 0.6) 50%,
            rgba(14, 165, 233, 0.3) 80%,
            transparent 100%
          );
        }
        
        .particle {
          animation: particleRise 3s ease-out infinite;
        }
      `}</style>

      {/* Background city silhouette */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/metro-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-sky-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Section heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Project Metro
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Each project is a station on my journey. Hop on and explore.
        </p>
      </div>

      {/* Metro Track */}
      <div className="relative max-w-7xl mx-auto">
        {/* Track line */}
        <div 
          ref={trackRef}
          className="track-line h-2 w-full mb-12 rounded-full"
        />

        {/* Metro Train */}
        <div 
          ref={metroRef}
          className="metro-train relative mb-16 flex justify-center"
        >
          <div className="relative">
            {/* Train body */}
            <div className="bg-gradient-to-r from-sky-600 to-cyan-500 rounded-xl px-8 py-4 shadow-2xl shadow-sky-500/30">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚇</div>
                <div>
                  <div className="text-white font-bold text-xl">Shubham Express</div>
                  <div className="text-sky-100 text-sm">Next Stop: Your Project</div>
                </div>
              </div>
            </div>
            
            {/* Train lights */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
          </div>
        </div>

        {/* Billboards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {billboards.map((billboard, index) => (
            <div
              key={index}
              ref={addBillboardRef}
              className="billboard-card relative group cursor-pointer"
            >
              {/* Billboard structure */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-sky-400/50 transition-colors duration-300">
                {/* Billboard header */}
                <div className={`bg-gradient-to-br ${billboard.gradient} p-6 relative overflow-hidden`}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-3">{billboard.emoji}</div>
                    <h3 className="text-white font-bold text-2xl mb-1">
                      {billboard.title}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {billboard.subtitle}
                    </p>
                  </div>
                </div>

                {/* Billboard content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {billboard.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {billboard.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-500/10 border border-sky-400/30 rounded-full text-sky-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project button */}
                  <button className="w-full py-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/30 rounded-lg text-sky-300 font-medium text-sm transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    View Project →
                  </button>
                </div>

                {/* Station marker */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Station {index + 1}
                </div>
              </div>

              {/* Track connection */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-sky-400/0 to-sky-400/50" />
            </div>
          ))}
        </div>

        {/* Bottom track */}
        <div className="track-line h-2 w-full mt-12 rounded-full" />
      </div>

      {/* Fun fact */}
      <div className="text-center mt-12 text-gray-500 text-sm italic">
        💡 Fun fact: This metro has transported {billboards.length} projects and counting...
      </div>
    </section>
  );
};

export default Metro;
