import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChapterHeading from "../Chapter/ChapterHeading";
import { SKILLS, SKILL_STAGES } from "../../constants";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

/* name → skill entry lookup, normalised to lowercase */
const skillByName = (() => {
  const map = {};
  Object.values(SKILLS)
    .flat()
    .forEach((s) => {
      map[s.name.toLowerCase()] = s;
    });
  return map;
})();

/* Chapter 02 — how ideas become systems.
   A six-stage pipeline; selecting a stage reveals the real
   technologies used at that point of the build. */
const Skills = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const stage = SKILL_STAGES[active];

  const techItems = useMemo(
    () =>
      (stage.tech || [])
        .map((t) => skillByName[t.toLowerCase()])
        .filter(Boolean),
    [stage]
  );

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.from("[data-skills-reveal]", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /* decorative circuit line draws itself across the section */
      const circuit = sectionRef.current?.querySelector("[data-circuit]");
      if (circuit && typeof circuit.getTotalLength === "function") {
        const len = circuit.getTotalLength();
        gsap.set(circuit, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(circuit, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  const progress = (active / (SKILL_STAGES.length - 1)) * 100;

  return (
    <section ref={sectionRef} id="skills" className="relative bg-paper-2 py-24 md:py-36">
      <div className="section-container">
        <ChapterHeading
          index="02"
          kicker="Capabilities"
          title="How ideas become"
          accent="systems."
        />

        {/* ——— pipeline rail ——— */}
        <div data-skills-reveal className="relative mt-20" role="tablist" aria-label="Build stages">
          {/* base + accent lines */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[9px] h-px bg-ink/20" />
          <div
            aria-hidden="true"
            className="absolute left-0 top-[9px] h-px bg-vermilion transition-all duration-700"
            style={{ width: `${progress}%`, transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          />

          <div className="no-scrollbar -mx-1 flex gap-6 overflow-x-auto px-1 pb-2 sm:justify-between sm:gap-2 sm:overflow-visible">
            {SKILL_STAGES.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skills-panel"
                  id={`stage-tab-${s.id}`}
                  onClick={() => setActive(i)}
                  className="group flex flex-none cursor-pointer flex-col items-start gap-3 sm:items-center"
                >
                  <span
                    className={`relative z-10 block h-[18px] w-[18px] rotate-45 border transition-all duration-500 ${
                      isActive
                        ? "scale-125 border-vermilion bg-vermilion"
                        : "border-ink/50 bg-paper-2 group-hover:border-vermilion"
                    }`}
                  />
                  <span
                    className={`mono-label transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    <span className="mr-1 text-vermilion">0{i + 1}</span>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* decorative circuit path */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 120"
          className="mt-6 hidden w-full text-ink/25 md:block"
          fill="none"
        >
          <path
            data-circuit
            d="M0 60 H180 l30 -30 H420 l30 30 H640 l30 -30 H880 l30 30 H1200"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        {/* ——— stage detail panel ——— */}
        <div
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`stage-tab-${stage.id}`}
          className="mt-10 border border-ink/15 bg-paper p-8 md:mt-6 md:p-12"
        >
          <div
              key={stage.id}
              className="panel-swap grid grid-cols-1 gap-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="mono-label text-vermilion">
                  STAGE 0{active + 1} / 06
                </p>
                <h3 className="display mt-4 text-4xl md:text-5xl">
                  {stage.label}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 md:text-lg">
                  {stage.blurb}
                </p>
              </div>

              <div className="lg:col-span-7">
                {stage.practices?.length > 0 && (
                  <ul className="flex flex-wrap gap-3">
                    {stage.practices.map((p) => (
                      <li
                        key={p}
                        className="mono-label border border-ink/25 px-4 py-2 text-ink/70"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {techItems.length > 0 && (
                  <ul className="flex flex-wrap gap-x-8 gap-y-6">
                    {techItems.map((t) => (
                      <li key={t.name} className="group flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={t.image}
                          alt=""
                          width={36}
                          height={36}
                          loading="lazy"
                          className="h-9 w-9 object-contain transition-transform duration-300 group-hover:-translate-y-1"
                        />
                        <span className="mono-label text-ink/70">{t.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
        </div>

        <p data-skills-reveal className="mono-label mt-8 text-muted">
          SELECT A STAGE TO INSPECT THE TOOLKIT — NO PERCENTAGE BARS WERE HARMED
          IN THE MAKING OF THIS SECTION.
        </p>
      </div>
    </section>
  );
};

export default Skills;
