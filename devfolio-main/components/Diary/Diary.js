import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Diary.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Diary = () => {
  const sectionRef = useRef(null);
  const diaryRef = useRef(null);
  const pagesRef = useRef([]);
  const stickerRefs = useRef([]);

  const diaryPages = [
    {
      title: "How It All Started...",
      content: `Back in school, I was that kid who was fascinated by how websites worked. I remember seeing my first website and thinking - "How does this magic happen?" That curiosity led me to write my first line of HTML in 11th standard.`,
      sticker: "💡",
      note: "The spark that started it all",
      color: "from-yellow-500/10 to-orange-500/10",
    },
    {
      title: "The Grind Phase",
      content: `College gave me the structure, but late-night coding sessions gave me the skill. From building basic calculators to full-stack applications, every project taught me something new. Sleep? What's that? ☕`,
      sticker: "🌙",
      note: "3 AM coding sessions hit different",
      color: "from-purple-500/10 to-blue-500/10",
    },
    {
      title: "First Real Project",
      content: `Deepali Makeup Studio was my first production-level website. Seeing a real business use something I built? That feeling is unmatched. It wasn't just code anymore - it was solving real problems for real people.`,
      sticker: "💄",
      note: "First client, first real impact",
      color: "from-pink-500/10 to-rose-500/10",
    },
    {
      title: "The Hackathon Rush",
      content: `HACKVERSE 2.0 - 24 hours, one team, and an idea that could change telemedicine. As team leader of 'Coderaft', we built a patient queue optimization system. The adrenaline, the pizza, the debugging at 4 AM - pure magic.`,
      sticker: "🏃",
      note: "24 hours of pure chaos & creativity",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "IIT Patna Called...",
      content: `Runner-Up in the Frontend Odyssey Challenge by IIT Patna. Competing against the brightest minds and standing on the podium - this wasn't just a certificate, it was validation of years of hard work.`,
      sticker: "🏆",
      note: "The moment everything clicked",
      color: "from-sky-500/10 to-cyan-500/10",
    },
    {
      title: "What Drives Me Now",
      content: `Today, I'm not just building websites - I'm crafting experiences. Every animation, every interaction, every pixel matters. I want to build things that make people stop and say "wow, how did they do that?"`,
      sticker: "🚀",
      note: "The journey continues...",
      color: "from-sky-500/10 to-indigo-500/10",
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
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Diary book entrance
      gsap.from(diaryRef.current, {
        scale: 0.9,
        opacity: 0,
        rotationY: -10,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: diaryRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Each page reveals on scroll
      pagesRef.current.forEach((page, index) => {
        if (!page) return;
        
        gsap.from(page, {
          y: 60,
          opacity: 0,
          rotationX: -5,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: page,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Sticker pop-in animations
      stickerRefs.current.forEach((sticker) => {
        if (!sticker) return;
        
        gsap.from(sticker, {
          scale: 0,
          rotation: -180,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sticker,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Floating animation for stickers (continuous)
      stickerRefs.current.forEach((sticker, i) => {
        if (!sticker) return;
        gsap.to(sticker, {
          y: -8,
          rotation: i % 2 === 0 ? 3 : -3,
          duration: 2 + (i * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addPageRef = (el) => {
    if (el && !pagesRef.current.includes(el)) {
      pagesRef.current.push(el);
    }
  };

  const addStickerRef = (el) => {
    if (el && !stickerRefs.current.includes(el)) {
      stickerRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        .diary-page {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .diary-page:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.15);
        }
        
        .sticky-note {
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }
        
        .sticky-note:hover {
          transform: rotate(0deg) scale(1.05);
        }
        
        .sticker {
          animation: float 3s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .sticker:hover {
          animation-play-state: paused;
          transform: scale(1.3) !important;
        }
        
        .tape {
          position: absolute;
          width: 60px;
          height: 20px;
          background: rgba(255, 255, 200, 0.4);
          transform: rotate(-5deg);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .ruled-line {
          background-image: repeating-linear-gradient(
            transparent,
            transparent 31px,
            rgba(14, 165, 233, 0.1) 31px,
            rgba(14, 165, 233, 0.1) 32px
          );
        }
      `}</style>

      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            My Journey
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Every developer has a story. Here&apos;s mine — told through pages of a diary.
        </p>
      </div>

      {/* Diary Container */}
      <div 
        ref={diaryRef}
        className="max-w-5xl mx-auto relative"
      >
        {/* Decorative elements scattered around */}
        <div 
          ref={addStickerRef}
          className="sticker absolute -top-4 -left-4 text-5xl z-20"
          title="Coffee addict ☕"
        >
          ☕
        </div>
        <div 
          ref={addStickerRef}
          className="sticker absolute top-20 -right-8 text-4xl z-20"
          title="Night owl 🦉"
          style={{ animationDelay: '0.5s' }}
        >
          🦉
        </div>
        <div 
          ref={addStickerRef}
          className="sticker absolute top-1/2 -left-12 text-4xl z-20 hidden lg:block"
          title="Code is life 💻"
          style={{ animationDelay: '1s' }}
        >
          💻
        </div>
        <div 
          ref={addStickerRef}
          className="sticker absolute bottom-20 -right-4 text-5xl z-20"
          title="Always learning 📚"
          style={{ animationDelay: '1.5s' }}
        >
          📚
        </div>

        {/* Diary pages */}
        <div className="space-y-8">
          {diaryPages.map((page, index) => (
            <div
              key={index}
              ref={addPageRef}
              className={`diary-page relative bg-gradient-to-br ${page.color} border border-gray-700/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm`}
            >
              {/* Tape effect on top */}
              <div className="tape" style={{ top: '-10px', left: '30px' }} />
              <div className="tape" style={{ top: '-10px', right: '30px', transform: 'rotate(5deg)' }} />

              {/* Page number */}
              <div className="absolute top-4 right-4 text-gray-500 font-mono text-sm">
                Page {index + 1}
              </div>

              {/* Sticker for this page */}
              <div 
                ref={addStickerRef}
                className="sticker absolute -top-6 -right-6 text-5xl"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {page.sticker}
              </div>

              {/* Content */}
              <div className="ruled-line">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 pr-12">
                  {page.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {page.content}
                </p>
              </div>

              {/* Sticky note */}
              <div className="sticky-note mt-6 inline-block bg-yellow-200/20 border border-yellow-300/30 px-4 py-2 rounded-lg">
                <span className="text-yellow-300 text-sm font-medium italic">
                  📌 {page.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final page - Call to action */}
        <div 
          ref={addPageRef}
          className="diary-page relative bg-gradient-to-br from-sky-500/10 to-purple-500/10 border-2 border-sky-400/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm mt-8 text-center"
        >
          <div className="tape" style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(0deg)' }} />
          <h3 className="text-3xl font-bold text-white mb-4">
            The Story Continues... ✨
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            This is just the beginning. Every project, every challenge, every late-night debugging session 
            is adding a new page to this diary. Want to be part of the next chapter?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/40 hover:scale-105"
            >
              See My Projects →
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-sky-400 text-sky-400 hover:bg-sky-400/10 font-bold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diary;
