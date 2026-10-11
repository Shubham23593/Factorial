import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

/* Decode-on-view text: characters scramble and resolve left → right
   the first time the element enters the viewport. */
const Scramble = ({ text, className = "" }) => {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let raf;
    let frame = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        io.disconnect();
        const total = 26;
        const step = () => {
          frame += 1;
          const progress = frame / total;
          const revealed = Math.floor(progress * text.length);
          let out = "";
          for (let i = 0; i < text.length; i += 1) {
            if (i < revealed || text[i] === " ") out += text[i];
            else out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          setDisplay(frame < total ? out : text);
          if (frame < total) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
};

export default Scramble;
