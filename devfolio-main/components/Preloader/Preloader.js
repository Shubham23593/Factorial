import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BuildMark } from "../Signature/Signature";

/* Cinematic entry: a rapid counter, then a curtain lift.
   Never blocks content — skipped for reduced motion. */
const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return undefined;
    }
    let raf;
    const start = performance.now();
    const DURATION = 1100;
    const loop = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      // ease-out counter
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(loop);
      else setTimeout(onDone, 150);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-coal text-paper"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <BuildMark size={40} className="text-paper" />
      <p className="display text-[clamp(4rem,14vw,10rem)] tabular-nums leading-none">
        {count}
        <span className="text-vermilion">%</span>
      </p>
      <div className="h-px w-48 overflow-hidden bg-paper/15">
        <div
          className="h-full bg-vermilion transition-[width] duration-150 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
      <p className="mono-label text-paper/50">THE ART OF THE BUILD</p>
    </motion.div>
  );
};

export default Preloader;
