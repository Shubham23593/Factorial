import { useEffect, useRef } from "react";

/* Vermilion reading-progress hairline pinned to the top edge. */
const ProgressIndicator = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const totalScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? totalScroll / windowHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px]"
      aria-hidden="true"
    >
      <div
        ref={progressRef}
        className="h-full w-full origin-left scale-x-0 bg-vermilion will-change-transform"
      />
    </div>
  );
};

export default ProgressIndicator;
