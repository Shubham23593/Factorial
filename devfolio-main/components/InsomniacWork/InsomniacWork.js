import { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InsomniacWork = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);

  const lateNightProjects = [
    {
      time: "2:47 AM",
      title: "Debugging ToggleNest",
      description: "Fixed a race condition in the drag-and-drop system. Coffee #4 helped.",
      emoji: "🐛",
    },
    {
      time: "3:15 AM",
      title: "CodeVerse Socket.io",
      description: "Finally got real-time sync working across multiple browsers. Pure magic.",
      emoji: "⚡",
    },
    {
      time: "4:02 AM",
      title: "HACKVERSE Final Hours",
      description: "Last 2 hours of the hackathon. Team running on pizza and determination.",
      emoji: "🍕",
    },
    {
      time: "1:30 AM",
      title: "Portfolio Animations",
      description: "Perfecting the GSAP timeline for the metro section. Worth every minute.",
      emoji: "🎨",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Make this section discoverable but not forced
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 90%",
        onEnter: () => {
          setIsVisible(true);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isVisible || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      });

      const cards = sectionRef.current.querySelectorAll(".insomniac-card");
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        rotation: -2,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <>
      {/* Invisible trigger area */}
      <div ref={triggerRef} className="h-1 w-full" />

      {isVisible && (
        <section
          ref={sectionRef}
          className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
        >
          <style jsx>{`
            .insomniac-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .insomniac-card:hover {
              transform: translateY(-4px) scale(1.02);
              box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);
            }
            
            @keyframes flicker {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }
            
            .flicker {
              animation: flicker 2s ease-in-out infinite;
            }
            
            .night-glow {
              box-shadow: 0 0 40px rgba(14, 165, 233, 0.1);
            }
          `}</style>

          {/* Section heading */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-4xl flicker">🌙</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Insomniac Work Sessions
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto italic">
              Some of my best work happens when the world sleeps. 
              These are the moments that don&apos;t make it to LinkedIn.
            </p>
          </div>

          {/* Late night cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {lateNightProjects.map((project, index) => (
              <div
                key={index}
                className="insomniac-card night-glow relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 overflow-hidden"
              >
                {/* Time badge */}
                <div className="absolute top-4 right-4 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-3 py-1 text-indigo-300 text-xs font-mono font-bold">
                  {project.time}
                </div>

                {/* Emoji */}
                <div className="text-3xl mb-3">{project.emoji}</div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 pr-16">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Subtle glow effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
              </div>
            ))}
          </div>

          {/* Fun disclaimer */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-xs italic">
              * No developers were harmed in the making of these late-night sessions. 
              (Okay, maybe just some sleep deprivation) 😅
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default InsomniacWork;
