import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChapterHeading from "../Chapter/ChapterHeading";
import { WORK_TIMELINE } from "../../constants";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

/* Chapter 04 — the path of progress.
   A continuous chronology drawn down a single rail. */
const Work = () => {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      if (railRef.current) {
        gsap.fromTo(
          railRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      }

      gsap.utils.toArray("[data-work-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
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
    <section id="work" className="relative border-t border-line bg-paper-2 py-24 md:py-36">
      <div className="section-container">
        <ChapterHeading
          index="04"
          kicker="Experience"
          title="The path of"
          accent="progress."
        />

        <div className="relative mt-20">
          {/* rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-ink/15 md:left-[9px]"
          >
            <div ref={railRef} className="h-full w-full bg-vermilion" />
          </div>

          <ol className="flex flex-col gap-16 md:gap-24">
            {WORK_TIMELINE.map((job, i) => (
              <li
                key={job.company}
                className="relative grid grid-cols-1 gap-6 pl-10 md:grid-cols-12 md:gap-10 md:pl-14"
                data-work-reveal
              >
                {/* node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-[15px] w-[15px] rotate-45 border border-vermilion bg-paper-2 md:h-[19px] md:w-[19px]"
                />

                <div className="md:col-span-3">
                  <p className="mono-label text-vermilion">{job.period}</p>
                  <p className="mono-label mt-2 text-muted">{job.location}</p>
                </div>

                <div className="md:col-span-6">
                  <h3 className="display text-2xl md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="serif-accent mt-2 text-xl text-ink/70">
                    {job.role}
                  </p>
                  {job.full && (
                    <p className="mono-label mt-3 text-muted">{job.full}</p>
                  )}
                  <ul className="mt-5 flex max-w-xl flex-col gap-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-base leading-relaxed text-ink/75">
                        <span aria-hidden="true" className="mt-[0.6em] h-px w-5 flex-none bg-vermilion" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 md:justify-self-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-16 w-16 border border-ink/20 bg-paper object-contain p-2"
                  />
                  <p className="mono-label mt-4 max-w-[12rem] text-muted">
                    {job.stack.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Work;
