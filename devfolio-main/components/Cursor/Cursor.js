import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useFinePointer, useReducedMotion } from "../../utils/hooks";

/* Restrained cursor accent: a vermilion dot with a trailing ring.
   The native cursor is NEVER hidden — this only adds a layer of depth
   on fine-pointer devices and respects reduced motion. */
const Cursor = () => {
  const finePointer = useFinePointer();
  const reduced = useReducedMotion();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!finePointer || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.classList.remove("hidden");
    ring.classList.remove("hidden");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.3 });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3 });

    const hoverables = () =>
      document.querySelectorAll("a, button, [role='button'], input, textarea");

    const nodes = hoverables();
    nodes.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    document.addEventListener("mousemove", move, { passive: true });

    return () => {
      document.removeEventListener("mousemove", move);
      nodes.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [finePointer, reduced]);

  if (!finePointer || reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-1.5 w-1.5 rounded-full bg-vermilion"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-8 w-8 rounded-full border border-vermilion/50"
      />
    </>
  );
};

export default Cursor;
