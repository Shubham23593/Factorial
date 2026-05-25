import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "../Competitions/Tabs/Tabs";
import StickyScroll from "../Competitions/StickyScroll/StickyScroll";
import { MENULINKS, WINNING_CONTENTS } from "../../constants";

const Achievements = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "Frontend Odyssey",
        value: "frontend-odyssey",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WINNING_CONTENTS.WINNER}
          />
        ),
      },
    ],
    [isDesktop]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[5].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt="left pattern"
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              AWARDS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Winning & Achievements
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Showcasing my awards, honors, and winning projects.
            </h2>

          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
