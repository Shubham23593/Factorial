import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const about1 = quoteRef.current.querySelector(".about-1");
      const about2 = quoteRef.current.querySelector(".about-2");

      // --- Scroll-triggered fade animation ---
      const tl = gsap
        .timeline({ defaults: { ease: "none", duration: 0.1 } })
        .fromTo(about1, { opacity: 0.2 }, { opacity: 1 })
        .to(about1, { opacity: 0.2, delay: 0.5 })
        .fromTo(about2, { opacity: 0.2 }, { opacity: 1 }, "<")
        .to(about2, { opacity: 0.2, delay: 1 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });

      // --- Continuous gradient animation (moving effect) ---
      const gradientSpans = about1.querySelectorAll(".gradient-inline");

      gradientSpans.forEach((span) => {
        gsap.to(span, {
          backgroundPosition: "200% 50%",
          duration: 3,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // --- Inline gradient style (white to blue) ---
  const gradientStyle = {
    background: "linear-gradient(90deg, #ffffff, #0ea5e9, #38bdf8, #0ea5e9, #ffffff)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    backgroundPosition: "0% 50%",
  };

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight">
            I&apos;m a Third-year{" "}
            <span style={gradientStyle} className="gradient-inline">
              Computer Engineering
            </span>{" "}
            student and Full Stack Developer focused on building modern and responsive{" "}
            <span style={gradientStyle} className="gradient-inline">
              websites
            </span>
            .
          </span>
          <span className="about-2 leading-tight">
            I create seamless user experiences and efficient backend systems.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
