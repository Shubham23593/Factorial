import { useEffect, useLayoutEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from "../Button/Button";
import Magnetic from "../Magnetic/Magnetic";
import { Blueprint } from "../Signature/Signature";
import { useReducedMotion } from "../../utils/hooks";
import { TYPED_STRINGS } from "../../constants";

const EASE = [0.22, 1, 0.36, 1];

const typedOptions = {
  strings: TYPED_STRINGS,
  typeSpeed: 45,
  startDelay: 2200,
  backSpeed: 40,
  backDelay: 6000,
  loop: true,
};

const h1V = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};
const lineV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.028 } },
};
const charV = {
  hidden: { y: "120%", rotate: 10 },
  visible: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
};

const Chars = ({ text }) => (
  <>
    {text.split("").map((c, i) => (
      <motion.span key={i} className="inline-block" variants={charV}>
        {c === " " ? " " : c}
      </motion.span>
    ))}
  </>
);

const RotBadge = () => (
  <div className="spin-slow relative h-28 w-28 md:h-32 md:w-32" aria-hidden="true">
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <text fill="currentColor" style={{ font: "500 8px var(--font-jetbrains-mono)", letterSpacing: "0.24em" }}>
        <textPath href="#badge-circle">
          SCROLL TO EXPLORE • THE ART OF THE BUILD •
        </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-xl">↓</span>
  </div>
);

const Hero = ({ start = true }) => {
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const reduced = useReducedMotion();

  /* scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFig = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* mouse parallax on the blueprint */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 18 });
  const sy = useSpring(my, { stiffness: 45, damping: 18 });

  const onMouseMove = (e) => {
    if (reduced) return;
    mx.set((e.clientX / window.innerWidth - 0.5) * 26);
    my.set((e.clientY / window.innerHeight - 0.5) * 20);
  };

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      const strokes = sectionRef.current.querySelectorAll(
        ".bp-stroke path, .bp-stroke line"
      );
      strokes.forEach((s) => {
        const len = s.getTotalLength ? s.getTotalLength() : 0;
        gsap.set(s, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap
        .timeline({ delay: 0.9 })
        .to(strokes, {
          strokeDashoffset: 0,
          duration: 1.8,
          stagger: 0.03,
          ease: "power2.inOut",
        })
        .from(
          ".bp-fill",
          { opacity: 0, duration: 0.9, ease: "power1.inOut" },
          "-=0.9"
        )
        .from(
          "[data-hero-fig-text]",
          { opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, typedOptions);
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* vertical watermark with slow drift parallax */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: yFig }}
        className="text-stroke-faint display pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[11rem] leading-none xl:block"
      >
        DALVI
      </motion.div>

      <div className="section-container grid flex-1 grid-cols-1 items-center gap-10 pb-16 pt-28 md:pt-32 lg:grid-cols-12 lg:gap-6">
        {/* left — kinetic typographic statement */}
        <motion.div style={reduced ? undefined : { y: yText, opacity: fade }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mono-label flex items-center gap-4 text-muted"
          >
            <span className="text-vermilion">00</span>
            <span aria-hidden="true" className="h-px w-12 bg-ink/25" />
            <span>The art of the build</span>
          </motion.p>

          <motion.h1
            variants={h1V}
            initial="hidden"
            animate={start ? "visible" : "hidden"}
            className="display mt-8 text-[clamp(3rem,10.5vw,8.5rem)]"
          >
            <motion.span variants={lineV} className="block overflow-hidden pb-[0.06em]">
              <Chars text="GOOD IDEAS" />
            </motion.span>
            <motion.span variants={lineV} className="block overflow-hidden pb-[0.12em] pt-[0.08em]">
              <Chars text="DESERVE " />
              <motion.em variants={charV} className="serif-accent text-vermilion">
                better
              </motion.em>
            </motion.span>
            <motion.span variants={lineV} className="block overflow-hidden">
              <Chars text="EXECUTION." />
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-10 flex max-w-xl flex-col gap-6"
          >
            <p className="text-lg leading-relaxed text-ink/80">
              I&apos;m <strong className="font-semibold">Shubham Dalvi</strong> — a
              full stack developer who turns rough ideas into precise,
              production-grade web experiences.
            </p>
            <p className="mono-label min-h-[1.2em] text-muted">
              <span className="mr-2 text-vermilion">›</span>
              <span ref={typedElementRef} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="#projects" type="primary" classes="link">
                View the work
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href="/resume/shubham dalvi.pdf"
                type="secondary"
                classes="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* right — the assembly, mouse-tracked */}
        <div className="relative lg:col-span-5">
          <motion.div
            style={reduced ? undefined : { x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={start ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            <Blueprint className="drift mx-auto w-full max-w-[26rem] text-ink lg:max-w-none" />
          </motion.div>
        </div>
      </div>

      {/* bottom strip: cue + rotating badge */}
      <div className="section-container flex items-end justify-between pb-8">
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="link group inline-flex items-center gap-4 text-ink/60 transition-colors hover:text-ink"
        >
          <span className="mono-label">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-ink/15">
            <span className="scroll-cue absolute inset-0 bg-vermilion" />
          </span>
          <span className="mono-label text-ink/40">01 — About</span>
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden text-ink sm:block"
        >
          <RotBadge />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
