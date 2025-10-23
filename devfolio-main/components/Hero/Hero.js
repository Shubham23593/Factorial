import { useEffect, useRef, useLayoutEffect } from "react";
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

const Hero = () => {
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const resumeButtonRef = useRef(null); // Resume button ref

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);
    return () => typed.destroy();
  }, [typedElementRef]);

  // Resume button click animation (same as Contact Send button)
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
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>{`
        .typed-cursor {
          font-size: 2rem;
        }
      `}</style>

      {/* Left Side Content */}
      <div className="flex flex-col pt-40 md:pt-0 select-none md:w-1/2">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}
        >
          Hi, my name is
        </h5>

        <h1 className={`${styles.heroName} text-white text-6xl font-semibold`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Shubham
          </span>
          <span className="staggered-reveal"> Dalvi</span>
        </h1>

        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>

        <div className="staggered-reveal">
          <Profiles />
        </div>

        {/* Buttons Section */}
        <div className="staggered-reveal pt-4 flex items-center gap-4">
          {/* Let's Talk Button */}
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>

          {/* Resume Button with click animation */}
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
      </div>

      {/* Right Side - Profile Image */}
      <div className="hidden md:flex md:w-1/2 md:justify-start lg:justify-start items-center">
        <div className="relative w-80 lg:w-96 h-80 lg:h-96 overflow-hidden shadow-2xl rounded-2xl 
                        transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
          <img
            src="/profile/shubham-profile.png"
            alt="Shubham Dalvi"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
