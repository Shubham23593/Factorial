/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  const proficiencyData = {
    javascript: 90,
    typescript: 75,
    java: 70,
    c: 65,
    react: 92,
    "next.js": 88,
    "node.js": 85,
    "express.js": 82,
    tailwindcss: 95,
    bootstrap: 80,
    sass: 75,
    GSAP: 85,
    mysql: 78,
    postgresql: 72,
    mongodb: 85,
    firebase: 80,
    git: 88,
    github: 90,
    vscode: 92,
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Animation
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, y: 30, duration: 0.6, stagger: 0.4 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });

      // Animate proficiency bars
      const bars = sectionRef.current.querySelectorAll(".proficiency-bar");
      bars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        gsap.from(bar, {
          width: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Hover Animation for skill icons
      const icons = sectionRef.current.querySelectorAll(".skill-icon");

      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            y: -10,
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const SkillCard = ({ skill }) => {
    const proficiency = proficiencyData[skill.name] || 75;
    
    return (
      <div className="flex flex-col items-center gap-3 group cursor-pointer p-4 rounded-xl hover:bg-sky-500/5 transition-colors duration-300">
        <div className="relative">
          <Image
            src={skill.image}
            alt={skill.name}
            width={60}
            height={60}
            className="skill-icon transition-all duration-300"
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>
        <span className="text-sm text-gray-300 font-medium capitalize">
          {skill.name}
        </span>
        {/* Proficiency bar */}
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="proficiency-bar h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
            data-width={`${proficiency}%`}
            style={{ width: `${proficiency}%` }}
          />
        </div>
        <span className="text-xs text-sky-400 font-mono">{proficiency}%</span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className="w-full relative select-none mt-44 py-20"
    >
      <style jsx>{`
        .skill-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-card:hover {
          transform: translateY(-4px);
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .proficiency-bar {
          background: linear-gradient(
            90deg,
            rgb(14, 165, 233) 0%,
            rgb(6, 182, 212) 50%,
            rgb(14, 165, 233) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

      <div className="section-container px-4 md:px-12 lg:px-20">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block opacity-20"
          loading="lazy"
          height={700}
          width={320}
        />
        
        <div className="flex flex-col skills-wrapper">
          {/* Header */}
          <div className="flex flex-col mb-12">
            <p className="uppercase tracking-widest text-sky-400 staggered-reveal text-sm font-medium">
              SKILLS & EXPERTISE
            </p>
            <h1 className="text-5xl md:text-6xl mt-2 font-bold staggered-reveal">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                My Tech Arsenal
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium md:max-w-2xl w-full mt-4 text-gray-300 staggered-reveal">
              I build full-stack websites that combine smooth user experiences
              with reliable backend performance. Here are the tools I use to bring ideas to life.
            </h2>
          </div>

          {/* LANGUAGES AND TOOLS */}
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-6 staggered-reveal flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-400"></span>
              Languages & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* LIBRARIES AND FRAMEWORKS */}
          <div className="mt-12">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-6 staggered-reveal flex items-center gap-2">
              <span className="w-8 h-0.5 bg-sky-400"></span>
              Libraries & Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* DATABASES AND OTHERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-sky-400"></span>
                Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SKILLS.databases.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-sky-400"></span>
                Others
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SKILLS.other.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Fun fact */}
          <div className="mt-16 text-center staggered-reveal">
            <div className="inline-block bg-sky-500/10 border border-sky-400/20 rounded-full px-6 py-3 text-sky-300 text-sm">
              💡 Always learning, always building — new tools added every month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
