import { useEffect, useRef, useLayoutEffect, useState } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const HeroNew = () => {
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const resumeButtonRef = useRef(null);
  const smokeRef = useRef(null);
  const silhouetteRef = useRef(null);
  const ribbonRef = useRef(null);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const timerRef = useRef(null);

  // Easter egg quotes for the ribbon
  const ribbonQuotes = [
    "Building the future, one line at a time",
    "Code is poetry",
    "Debugging is like being a detective in a crime movie where you're also the murderer",
    "First, solve the problem. Then, write the code",
    "Simplicity is the soul of efficiency",
    "Make it work, make it right, make it fast",
    "The best error message is the one that never shows up",
    "Code never lies, comments sometimes do",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.to(sectionRef.current, { opacity: 1, duration: 1.5 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, y: 30, duration: 0.8, stagger: 0.3 },
          "<"
        )
        // Silhouette entrance
        .from(
          silhouetteRef.current,
          { scale: 0.8, opacity: 0, duration: 1.2, ease: "back.out(1.7)" },
          "-=0.5"
        )
        // Smoke animation
        .from(
          smokeRef.current,
          { opacity: 0, scale: 0.5, duration: 1.5 },
          "-=1"
        )
        // Ribbon animation
        .from(
          ribbonRef.current,
          { x: -200, opacity: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        );

      // Continuous smoke animation
      gsap.to(smokeRef.current, {
        y: -20,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Ribbon continuous scroll
      gsap.to(ribbonRef.current.querySelector(".ribbon-content"), {
        x: -500,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Silhouette subtle float
      gsap.to(silhouetteRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);
    return () => typed.destroy();
  }, [typedElementRef]);

  // Timer popup - shows after 90 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShowTimerPopup(true);
      
      // Animate popup entrance
      setTimeout(() => {
        gsap.fromTo(
          ".timer-popup",
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
        );
      }, 100);

      // Auto-hide after 8 seconds
      setTimeout(() => {
        gsap.to(".timer-popup", {
          scale: 0.8,
          opacity: 0,
          y: 20,
          duration: 0.4,
          onComplete: () => setShowTimerPopup(false),
        });
      }, 8000);
    }, 90000); // 90 seconds

    return () => clearTimeout(timerRef.current);
  }, []);

  // Resume button click animation
  useEffect(() => {
    const btn = resumeButtonRef.current;
    if (!btn) return;

    const handleClick = () => {
      if (!btn.classList.contains("active")) {
        btn.classList.add("active");

        gsap.to(btn, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(btn, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  btn.removeAttribute("style");
                  gsap.fromTo(
                    btn,
                    { opacity: 0, y: -8 },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        btn.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });
      }
    };

    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <style global jsx>{`
        .typed-cursor {
          font-size: 2rem;
          color: #0ea5e9;
        }
        
        @keyframes smokeRise {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        .smoke-effect {
          animation: smokeRise 4s ease-in-out infinite;
        }
        
        .ribbon-scroll {
          animation: ribbonScroll 30s linear infinite;
        }
        
        @keyframes ribbonScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .timer-popup {
          backdrop-filter: blur(10px);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.3);
        }
      `}</style>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 -z-10" />

      {/* Left Side Content */}
      <div className="flex flex-col pt-40 md:pt-0 select-none md:w-1/2 z-10">
        <h5
          className={`${styles.intro} font-mono font-medium text-sky-400 staggered-reveal text-lg`}
        >
          Hi, my name is
        </h5>

        <h1 className={`${styles.heroName} text-white text-6xl md:text-7xl lg:text-8xl font-bold mt-2`}>
          <span className={`relative ${styles.emphasize} staggered-reveal bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent`}>
            Shubham
          </span>
          <span className="staggered-reveal block md:inline"> Dalvi</span>
        </h1>

        <p className="mt-4">
          <span
            ref={typedElementRef}
            className="staggered-reveal text-2xl md:text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>

        <div className="staggered-reveal mt-6">
          <Profiles />
        </div>

        {/* Buttons Section */}
        <div className="staggered-reveal pt-6 flex items-center gap-4 flex-wrap">
          <Button href={`#${MENULINKS[6].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>

          <Button
            ref={resumeButtonRef}
            href="/resume/shubham dalvi.pdf"
            classes="link"
            type="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </div>

        {/* Quick stats */}
        <div className="staggered-reveal mt-8 flex gap-8 text-sm">
          <div>
            <div className="text-3xl font-bold text-sky-400">3+</div>
            <div className="text-gray-400">Internships</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-400">7+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-400">🏆</div>
            <div className="text-gray-400">IIT Patna</div>
          </div>
        </div>
      </div>

      {/* Right Side - Cinematic Silhouette with Smoke */}
      <div className="hidden md:flex md:w-1/2 md:justify-center lg:justify-center items-center relative">
        {/* Smoke effect background */}
        <div 
          ref={smokeRef}
          className="absolute inset-0 opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
          }}
        />
        
        {/* Silhouette container */}
        <div 
          ref={silhouetteRef}
          className="relative w-96 lg:w-[500px] h-96 lg:h-[500px] flex items-center justify-center"
        >
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-sky-400/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-sky-300/20" />
          
          {/* Profile image with silhouette effect */}
          <div className="relative w-80 lg:w-96 h-80 lg:h-96 overflow-hidden rounded-full shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 to-transparent z-10" />
            <img
              src="/profile/hero-silhouette.png"
              alt="Shubham Dalvi"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
          </div>
        </div>

        {/* Floating ribbon with easter egg quotes */}
        <div 
          ref={ribbonRef}
          className="absolute bottom-20 left-0 right-0 overflow-hidden h-12 opacity-60"
        >
          <div className="ribbon-scroll flex gap-8 whitespace-nowrap">
            {[...ribbonQuotes, ...ribbonQuotes].map((quote, idx) => (
              <span 
                key={idx} 
                className="text-sky-300/60 text-sm font-mono inline-block px-4 py-2 border border-sky-400/20 rounded-full bg-sky-500/5"
              >
                {quote}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timer popup - appears after 90 seconds */}
      {showTimerPopup && (
        <div className="timer-popup fixed bottom-8 right-8 max-w-md p-6 rounded-2xl shadow-2xl z-50">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⏱️</div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                You&apos;ve spent more time here than most recruiters do!
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Guess you like what you see? Let&apos;s collaborate and build something amazing together.
              </p>
              <Button 
                href={`#${MENULINKS[6].ref}`} 
                classes="link" 
                type="primary"
              >
                Let&apos;s Talk →
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroNew;
