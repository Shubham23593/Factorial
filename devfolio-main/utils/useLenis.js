import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Ultra-smooth inertial scrolling (Lenis) synced with GSAP ScrollTrigger.
   Skipped entirely for reduced-motion users; anchor links are intercepted
   and scrolled through Lenis so navigation stays buttery. */
export const useLenis = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.start();
      lenis.scrollTo(target, { offset: -72, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    window.__lenis = lenis;

    return () => {
      document.removeEventListener("click", onClick);
      delete window.__lenis;
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
};
