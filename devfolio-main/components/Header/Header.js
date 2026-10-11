import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MENULINKS } from "../../constants";
import { BuildMark } from "../Signature/Signature";
import SoundBar from "./SoundBar/SoundBar";

/* Menu carries framer-motion — loaded on first open, not on first paint. */
const Menu = dynamic(() => import("./Menu/Menu"), { ssr: false });

/* Fixed editorial masthead: brand · inline index · sound · full menu. */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const inlineLinks = MENULINKS.filter((l) =>
    ["skills", "projects", "work", "achievements"].includes(l.ref)
  );

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            className="link group flex items-center gap-3 text-ink"
            aria-label="Shubham Dalvi — back to top"
          >
            <BuildMark size={26} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
            <span className="font-semibold tracking-tight text-base">
              Shubham&nbsp;Dalvi
            </span>
            <span className="mono-label mt-0.5 hidden text-muted sm:inline">
              / full stack dev
            </span>
          </a>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-7 lg:flex">
              {inlineLinks.map((l) => (
                <li key={l.ref}>
                  <a
                    href={`#${l.ref}`}
                    className="link mono-label u-slide text-ink/70 hover:text-ink"
                  >
                    <span className="mr-1 text-vermilion">{l.num}</span>
                    {l.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="link mono-label border border-ink px-4 py-2 transition-colors duration-300 hover:border-vermilion hover:bg-vermilion hover:text-paper"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>

            <SoundBar />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="link group flex h-8 w-8 flex-col items-center justify-center gap-[7px] border border-ink/25 transition-colors hover:border-vermilion"
            >
              <span className="h-px w-4 bg-ink transition-all duration-300 group-hover:w-5 group-hover:bg-vermilion" />
              <span className="h-px w-5 bg-ink transition-all duration-300 group-hover:bg-vermilion" />
            </button>
          </div>
        </div>
      </nav>

      <Menu open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
