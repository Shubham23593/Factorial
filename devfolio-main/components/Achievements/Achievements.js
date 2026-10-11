import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

/* Custom award rosette — drawn, not stock. */
const Rosette = () => (
  <svg
    viewBox="0 0 220 280"
    className="w-full max-w-[16rem] text-paper"
    role="img"
    aria-label="Award rosette marking the Runner-Up result at Frontend Odyssey, IIT Patna"
  >
    <g className="award-stroke" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="110" cy="100" r="72" />
      <circle cx="110" cy="100" r="56" strokeDasharray="4 6" />
      <path d="M78 158 L58 250 L88 228 L102 262 L110 172" />
      <path d="M142 158 L162 250 L132 228 L118 262 L110 172" />
    </g>
    <path
      className="award-fill"
      d="M110 62 L121 88 L149 90 L128 108 L135 136 L110 121 L85 136 L92 108 L71 90 L99 88 Z"
      fill="var(--vermilion)"
    />
    <text
      x="110"
      y="272"
      textAnchor="middle"
      fill="currentColor"
      opacity="0.6"
      style={{ font: "500 10px var(--font-jetbrains-mono)", letterSpacing: "0.3em" }}
    >
      IIT PATNA · UNSTOP
    </text>
  </svg>
);

/* Chapter 06 — proof of the build. The mandatory honours chapter. */
const Achievements = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  /* giant ghost word drifts sideways with scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const wordX = useTransform(scrollYProgress, [0, 1], ["8%", "-38%"]);

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      const strokes = sectionRef.current.querySelectorAll(
        ".award-stroke circle, .award-stroke path"
      );
      strokes.forEach((s) => {
        const len = s.getTotalLength ? s.getTotalLength() : 0;
        gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
      });

      tl.from("[data-award-reveal]", {
        y: 44,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      })
        .to(strokes, {
          strokeDashoffset: 0,
          duration: 1.6,
          stagger: 0.15,
          ease: "power2.inOut",
        }, "-=0.5")
        .from(".award-fill", { scale: 0, transformOrigin: "110px 100px", duration: 0.7, ease: "back.out(2)" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative overflow-hidden bg-coal py-24 text-paper md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
      >
        <motion.p
          style={reduced ? undefined : { x: wordX }}
          className="display whitespace-nowrap text-[16vw] leading-none text-paper/[0.05]"
        >
          RUNNER-UP ✳ PROOF OF THE BUILD ✳ RUNNER-UP ✳ PROOF OF THE BUILD ✳
        </motion.p>
      </div>

      <div className="section-container relative">
        <p className="mono-label flex items-center gap-4 text-paper/50" data-award-reveal>
          <span className="text-vermilion">06</span>
          <span aria-hidden="true" className="h-px w-12 bg-paper/30" />
          <span>Winning &amp; achievements</span>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(3rem,9vw,7.5rem)]" data-award-reveal>
              Runner<span className="text-vermilion">—</span>Up
            </h2>
            <p className="serif-accent mt-6 max-w-xl text-2xl text-paper/80 md:text-3xl" data-award-reveal>
              Frontend Odyssey: The Interactive Web Experience Challenge
            </p>
            <p className="mono-label mt-4 text-paper/50" data-award-reveal>
              ORGANISED BY INDIAN INSTITUTE OF TECHNOLOGY (IIT), PATNA · WITH UNSTOP
            </p>

            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-paper/75 md:text-lg" data-award-reveal>
              <p>
                Achieved the Runner-Up position in a national challenge focused
                on crafting highly interactive web experiences — testing
                frontend skill, creativity and the ability to build genuinely
                engaging interfaces alongside top participants from across the
                country.
              </p>
              <p>
                The winning entry, <em className="serif-accent">Life of Developer</em>,
                is an immersive scroll-driven story of a developer&apos;s journey —
                the same instinct for narrative motion that shapes this site.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4" data-award-reveal>
              <Button
                href="https://life-of-developers.vercel.app/"
                target="_blank"
                rel="noreferrer"
                type="primary"
                onDark
                classes="link"
              >
                View winning project
              </Button>
              <Button
                href="https://github.com/Shubham23593/Life_Of_Developers"
                target="_blank"
                rel="noreferrer"
                type="secondary"
                onDark
                classes="link"
              >
                Source
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-10 lg:col-span-5 lg:items-center">
            <Rosette />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/winiit.png"
              alt="Frontend Odyssey winner badge"
              width={140}
              height={140}
              loading="lazy"
              className="h-28 w-28 border border-paper/20 object-contain p-2"
              data-award-reveal
            />
          </div>
        </div>

        {/* secondary verified credential */}
        <div
          className="mt-24 grid grid-cols-1 gap-10 border-t border-paper/15 pt-14 md:grid-cols-12"
          data-award-reveal
        >
          <div className="md:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/certificate.jpg"
              alt="Certificate of completion — Java Programming, awarded to Shubham Dalvi by Success Classes of Engineering, 2024–25"
              className="block w-full border border-paper/20"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-8">
            <p className="mono-label text-paper/50">ALSO ON RECORD</p>
            <h3 className="display mt-4 text-3xl md:text-4xl">
              Java Programming <em className="serif-accent text-vermilion">certified.</em>
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
              Certificate of Completion for the Java Programming course
              (2024–25), Success Classes of Engineering — the language layer
              beneath projects like the Restaurant Management System.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
