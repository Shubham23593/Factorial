import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Button/Button";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

const ROW_A = "FULL STACK DEVELOPMENT ✳ BACKEND ✳ FRONTEND ✳ APIS ✳ DATABASES ✳ ";
const ROW_B = "REACT ✳ NODE.JS ✳ EXPRESS ✳ TAILWIND ✳ POSTGRESQL ✳ MONGODB ✳ ";

const MarqueeRow = ({ text, reverse = false, className = "" }) => (
  <div className={`marquee ${className}`} aria-hidden="true">
    <div
      className="marquee-track items-baseline gap-0 py-2"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {[0, 1].map((n) => (
        <span key={n} className="display whitespace-nowrap pr-8 text-[clamp(2rem,5vw,4rem)] text-ink/15">
          {text.repeat(3)}
        </span>
      ))}
    </div>
  </div>
);

/* Chapter 07 — good work is better together. */
const Collaboration = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from("[data-collab-reveal]", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <MarqueeRow text={ROW_A} />

      <div className="section-container my-14 flex flex-col items-start gap-8 md:my-20">
        <p className="mono-label flex items-center gap-4 text-muted" data-collab-reveal>
          <span className="text-vermilion">07</span>
          <span aria-hidden="true" className="h-px w-12 bg-ink/25" />
          <span>Collaboration</span>
        </p>
        <h2
          className="display max-w-4xl text-[clamp(2.4rem,6vw,5rem)]"
          data-collab-reveal
        >
          Good work is{" "}
          <em className="serif-accent text-vermilion">better</em> together.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl" data-collab-reveal>
          Recruiters, developers, founders — if you are building something that
          deserves careful execution, I would love to hear about it. Internship,
          collaboration or full-time: the door is open.
        </p>
        <div data-collab-reveal>
          <Button href="#contact" type="primary" classes="link">
            Start a conversation
          </Button>
        </div>
      </div>

      <MarqueeRow text={ROW_B} reverse />
    </section>
  );
};

export default Collaboration;
