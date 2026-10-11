import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChapterHeading from "../Chapter/ChapterHeading";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

const ANNOTATIONS = [
  "Final-year · Computer Engineering",
  "MERN + modern frontend",
  "Responsive by default",
  "Detail-obsessed",
];

/* Chapter 01 — the person behind the pixels. */
const About = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from("[data-about-media]", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "[data-about-media]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.utils.toArray("[data-about-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="about" className="relative border-t border-line py-24 md:py-36">
      <div className="section-container grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        {/* portrait plate */}
        <div className="lg:col-span-4">
          <figure className="relative">
            <div
              data-about-media
              className="relative overflow-hidden border border-ink bg-paper-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile/shubham-profile.png"
                alt="Portrait of Shubham Dalvi"
                className="block aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mono-label mt-3 flex justify-between text-muted">
              <span>FIG. 01 — THE BUILDER</span>
              <span className="text-vermilion">SD·26</span>
            </figcaption>
            {/* registration ticks */}
            <span aria-hidden="true" className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-vermilion" />
            <span aria-hidden="true" className="absolute -right-2 -bottom-8 h-4 w-4 border-b border-r border-vermilion" />
          </figure>
        </div>

        {/* narrative */}
        <div className="lg:col-span-8">
          <ChapterHeading
            index="01"
            kicker="About"
            title="The person behind"
            accent="the pixels."
          />

          <div className="mt-12 flex max-w-3xl flex-col gap-8 text-xl leading-relaxed text-ink/85 md:text-2xl">
            <p data-about-reveal>
              I&apos;m a final-year{" "}
              <em className="serif-accent text-vermilion">Computer Engineering</em>{" "}
              student and full stack developer, focused on building modern,
              responsive websites that people actually enjoy using.
            </p>
            <p data-about-reveal>
              I care about the whole journey of a product — the first sketch,
              the component architecture, the last easing curve. Seamless
              experiences on the front, efficient systems on the back.
            </p>
            <p data-about-reveal>
              And I write{" "}
              <strong className="font-semibold">clean, efficient code</strong>{" "}
              with an eye for detail — because the craft is the point.
            </p>
          </div>

          <ul className="mt-14 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {ANNOTATIONS.map((a, i) => (
              <li
                key={a}
                data-about-reveal
                className="tick mono-label flex items-center text-muted"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
