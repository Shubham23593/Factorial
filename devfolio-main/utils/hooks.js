import { useEffect, useState } from "react";

/** True when the visitor prefers reduced motion. SSR-safe (defaults false). */
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return reduced;
};

/** True on devices with a fine pointer (mouse / trackpad). SSR-safe. */
export const useFinePointer = () => {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const onChange = (e) => setFine(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return fine;
};

/** Desktop-width heuristic used by layout switches. SSR-safe. */
export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const { orientation, userAgent } = window.navigator;
    const result =
      typeof orientation === "undefined" &&
      userAgent.indexOf("IEMobile") === -1;
    setIsDesktop(result);
  }, []);

  return isDesktop;
};
