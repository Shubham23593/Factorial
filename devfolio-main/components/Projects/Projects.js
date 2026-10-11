import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChapterHeading from "../Chapter/ChapterHeading";
import { PROJECTS } from "../../constants";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

const accentFor = (i) => (i % 2 === 0 ? "var(--vermilion)" : "var(--cobalt)");

const StackLine = ({ tech }) => (
  <p className="mono-label mt-4 text-muted">
    {tech.map((t, i) => (
      <span key={t}>
        {t}
        {i < tech.length - 1 && <span className="mx-2 text-vermilion">/</span>}
      </span>
    ))}
  </p>
);

const ProjectLinks = ({ project }) => (
  <div className="mt-6 flex flex-wrap items-center gap-6">
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="link mono-label u-slide font-bold text-ink"
    >
      Live demo ↗
    </a>
    <a
      href={project.repo || "https://github.com/Shubham23593"}
      target="_blank"
      rel="noreferrer"
      className="link mono-label u-slide text-muted hover:text-ink"
    >
      {project.repo ? "Source ↗" : "More on GitHub ↗"}
    </a>
  </div>
);

/* Chapter 03 — the main exhibition.
   Desktop: a pinned, scrubbed horizontal gallery (scroll = dolly shot).
   Mobile: a natural vertical sequence. */
const Projects = () => {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-proj-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, sectionRef);

    const mm = gsap.matchMedia();

    /* pinned horizontal dolly — desktop only */
    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth;

      const dolly = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* images pan inside their frames as they cross the viewport */
      gsap.utils.toArray("[data-hslide-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -14, scale: 1.18 },
          {
            xPercent: 14,
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest("[data-hslide]"),
              containerAnimation: dolly,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });

      /* ghost numbers drift the opposite way */
      gsap.utils.toArray("[data-hslide-num]").forEach((num) => {
        gsap.fromTo(
          num,
          { xPercent: 45 },
          {
            xPercent: -45,
            ease: "none",
            scrollTrigger: {
              trigger: num.closest("[data-hslide]"),
              containerAnimation: dolly,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden">
      <div className="section-container pt-24 md:pt-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <ChapterHeading
            index="03"
            kicker="Selected work"
            title="The main"
            accent="exhibition."
          />
          <p data-proj-reveal className="mono-label max-w-xs pb-2 text-muted">
            {String(PROJECTS.length).padStart(2, "0")} PIECES · KEEP SCROLLING —
            THE GALLERY MOVES SIDEWAYS
          </p>
        </div>
      </div>

      {/* pinned viewport (desktop) / vertical flow (mobile) */}
      <div ref={wrapRef} className="md:h-screen md:overflow-hidden">
        <div className="section-container py-16 md:h-full md:items-center md:py-0">
          <div
            ref={trackRef}
            className="flex flex-col gap-20 md:h-full md:w-max md:flex-row md:items-center md:gap-0 md:pl-2"
          >
            {PROJECTS.map((project, i) => {
              const accent = accentFor(i);
              return (
                <article
                  key={project.name}
                  data-hslide
                  className="relative md:w-[78vw] md:flex-none lg:w-[62vw] xl:w-[54vw] md:pr-16 lg:pr-24"
                >
                  <span
                    data-hslide-num
                    aria-hidden="true"
                    className="text-stroke-faint display pointer-events-none absolute -top-10 right-4 z-0 text-[24vw] leading-none md:-top-6 md:text-[13vw]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-media link relative z-10 block overflow-hidden border border-ink"
                    aria-label={`Open ${project.name} live demo`}
                  >
                    <div className="h-72 overflow-hidden sm:h-96 md:h-[52vh]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        data-hslide-img
                        src={project.image}
                        alt={`${project.name} interface screenshot`}
                        width={project.width}
                        height={project.height}
                        className="h-full w-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <span
                      className="mono-label absolute left-0 top-0 z-10 px-3 py-2 text-paper"
                      style={{ background: accent }}
                    >
                      EXHIBIT {String(i + 1).padStart(2, "0")}
                      {i === 0 && " · FEATURED"}
                    </span>
                  </a>

                  <div className="relative z-10 mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xl">
                      <h3 className="display text-2xl md:text-4xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-ink/75">
                        {project.description}
                      </p>
                      <StackLine tech={project.tech} />
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              );
            })}

            {/* end card */}
            <article className="flex md:h-full md:w-[40vw] md:flex-none md:items-center md:pr-8">
              <a
                href="https://github.com/Shubham23593"
                target="_blank"
                rel="noreferrer"
                className="link group flex flex-col gap-4"
              >
                <span className="display text-4xl md:text-6xl">
                  More in
                  <br />
                  the archive
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-3 text-vermilion">
                    ↗
                  </span>
                </span>
                <span className="mono-label text-muted">GITHUB / SHUBHAM23593</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
