import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChapterHeading from "../Chapter/ChapterHeading";
import { COMPETITIONS } from "../../constants";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

/* Chapter 05 — built under pressure. Mission-log style event records. */
const Competitions = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-comp-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="competitions" ref={sectionRef} className="relative py-24 md:py-36">
      <div className="section-container">
        <ChapterHeading
          index="05"
          kicker="Hackathons & competitions"
          title="Built under"
          accent="pressure."
        />

        <ol className="mt-20 flex flex-col">
          {COMPETITIONS.map((event, i) => (
            <li
              key={event.name}
              data-comp-reveal
              className="group grid grid-cols-1 gap-8 border-t border-line py-12 last:border-b md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-1">
                <span className="display text-4xl text-stroke-faint md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-6">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="display text-2xl md:text-3xl">{event.name}</h3>
                  {event.result && (
                    <span className="mono-label border border-vermilion px-3 py-1 text-vermilion">
                      {event.result}
                    </span>
                  )}
                </div>
                <p className="mono-label mt-3 text-muted">{event.org}</p>
                {event.role && (
                  <p className="serif-accent mt-3 text-lg text-ink/70">
                    {event.role}
                  </p>
                )}
                <ul className="mt-5 flex max-w-xl flex-col gap-2">
                  {event.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-base leading-relaxed text-ink/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-px w-5 flex-none bg-vermilion"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-6 md:col-span-5 md:justify-end">
                <div className="flex flex-col items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.logo}
                    alt={`${event.name} emblem`}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-24 w-24 border border-ink/20 bg-paper object-cover transition-transform duration-500 group-hover:-translate-y-1"
                  />
                  <p className="mono-label text-muted">EVENT MARK</p>
                </div>
                {event.image && (
                  <div className="hidden flex-col items-start gap-3 sm:flex">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.image}
                      alt={`${event.name} — team work in progress`}
                      width={112}
                      height={112}
                      loading="lazy"
                      className="h-24 w-24 border border-ink/20 bg-paper object-cover"
                    />
                    <p className="mono-label text-muted">FIELD NOTE</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Competitions;
