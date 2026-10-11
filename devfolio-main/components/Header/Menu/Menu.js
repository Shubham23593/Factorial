import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MENULINKS, SOCIAL_LINKS } from "../../../constants";
import Profiles from "../../Profiles/Profiles";

const EASE = [0.22, 1, 0.36, 1];

/* Full-screen editorial index of the exhibition. */
const Menu = ({ open, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[70] bg-coal text-paper"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="section-container flex h-full flex-col justify-between py-24">
            <div className="flex items-start justify-between">
              <p className="mono-label text-paper/50">INDEX — THE ART OF THE BUILD</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="mono-label border border-paper/30 px-4 py-2 transition-colors hover:border-vermilion hover:text-vermilion"
              >
                Close ✕
              </button>
            </div>

            <nav aria-label="Primary" className="no-scrollbar my-6 overflow-y-auto">
              <ul className="flex flex-col gap-1 md:gap-2">
                {MENULINKS.map((el, i) => (
                  <motion.li
                    key={el.ref}
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.05 }}
                    className="overflow-hidden"
                  >
                    <a
                      href={`#${el.ref}`}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 md:gap-6"
                    >
                      <span className="mono-label text-vermilion">{el.num}</span>
                      <span className="display text-[clamp(2rem,6.5vw,4.5rem)] leading-none transition-colors duration-300 group-hover:text-vermilion">
                        {el.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <a
                href="mailto:shubhamdalvi775@gmail.com"
                className="mono-label u-slide text-paper/70 hover:text-paper"
              >
                shubhamdalvi775@gmail.com
              </a>
              <div className="[&_svg]:text-paper">
                <Profiles />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
