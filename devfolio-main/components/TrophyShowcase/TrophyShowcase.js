import { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HACKATHON_CONTENTS, WINNING_CONTENTS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const TrophyShowcase = () => {
  const sectionRef = useRef(null);
  const trophyRefs = useRef([]);
  const [activeTab, setActiveTab] = useState("achievements");

  const achievements = [
    {
      title: "Runner-Up: Frontend Odyssey Challenge",
      organization: "IIT Patna × Unstop",
      description:
        "Achieved Runner-Up position among top participants nationwide. Built an interactive web experience that showcased creativity, technical skills, and attention to detail.",
      icon: "🏆",
      gradient: "from-yellow-500 to-amber-600",
      date: "2025",
      link: "https://life-of-developers.vercel.app/",
      linkText: "View Winning Project",
    },
    {
      title: "HACKVERSE 2.0 Hackathon",
      organization: "24-Hour Coding Marathon",
      description:
        "Led team 'Coderaft' to build a Telemedicine Queue Optimization System using priority scheduling, ML prediction, and real-time Socket.io updates.",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-600",
      date: "2025",
    },
    {
      title: "Pragati 2.0 Build-it On",
      organization: "TCET Mumbai",
      description:
        "Collaborated with cross-college teams in rapid prototyping. Gained experience in teamwork, time management, and problem-solving under pressure.",
      icon: "🛠️",
      gradient: "from-blue-500 to-cyan-600",
      date: "2025",
    },
    {
      title: "Full Stack Developer Certification",
      organization: "Sapphire Infocom",
      description:
        "Successfully completed intensive Full Stack Developer internship, demonstrating proficiency in MERN stack and professional development practices.",
      icon: "🎓",
      gradient: "from-green-500 to-emerald-600",
      date: "2026",
    },
  ];

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

      trophyRefs.current.forEach((trophy, index) => {
        if (!trophy) return;

        gsap.from(trophy, {
          y: 80,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: trophy,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Hover effect
        trophy.addEventListener("mouseenter", () => {
          gsap.to(trophy, {
            y: -10,
            scale: 1.03,
            rotationY: 5,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        trophy.addEventListener("mouseleave", () => {
          gsap.to(trophy, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addTrophyRef = (el) => {
    if (el && !trophyRefs.current.includes(el)) {
      trophyRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="competitions"
      className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <style jsx>{`
        .trophy-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .trophy-card:hover {
          box-shadow: 0 30px 60px rgba(14, 165, 233, 0.3);
        }
        
        .trophy-icon {
          transition: all 0.4s ease;
        }
        
        .trophy-card:hover .trophy-icon {
          transform: scale(1.2) rotate(10deg);
        }
        
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shine 3s ease-in-out infinite;
        }
        
        .tab-active {
          background: linear-gradient(135deg, rgb(14, 165, 233), rgb(6, 182, 212));
          color: white;
        }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Achievements & Awards
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Milestones that shaped my journey and validated my passion for development.
        </p>
      </div>

      {/* Trophy Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            ref={addTrophyRef}
            className="trophy-card relative group cursor-pointer"
          >
            {/* Card */}
            <div className={`relative bg-gradient-to-br ${achievement.gradient} p-1 rounded-2xl overflow-hidden`}>
              {/* Shine effect */}
              <div className="shine-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full relative">
                {/* Trophy Icon */}
                <div className="trophy-icon text-6xl mb-4 inline-block">
                  {achievement.icon}
                </div>

                {/* Date badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                  {achievement.date}
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-16">
                  {achievement.title}
                </h3>
                <p className="text-sky-300 font-medium mb-4">
                  {achievement.organization}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Link button */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-colors shadow-lg shadow-sky-500/20"
                  >
                    {achievement.linkText}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "3+", label: "Internships", icon: "💼" },
          { number: "7+", label: "Projects", icon: "🚀" },
          { number: "3+", label: "Hackathons", icon: "⚡" },
          { number: "🏆", label: "IIT Patna", icon: "🎯" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-sky-400/50 transition-colors"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-1">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrophyShowcase;
