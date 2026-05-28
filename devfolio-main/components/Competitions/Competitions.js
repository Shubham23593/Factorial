import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, HACKATHON_CONTENTS } from "../../constants";

const Competitions = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "Hackverse 2.0",
        value: "hackverse",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={HACKATHON_CONTENTS.HACKVERSE}
          />
        ),
      },
      {
        title: "Build-it On",
        value: "buildit",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={HACKATHON_CONTENTS.BUILD_IT}
          />
        ),
      },
      /* IIT Patna - commented out
      {
        title: "IIT Patna",
        value: "iitpatna",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={HACKATHON_CONTENTS.IIT_PATNA}
          />
        ),
      },
      */
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
      id={MENULINKS[4].ref}
      className="w-full relative select-none xs:mt-16 sm:mt-24 mb-16"
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
              PARTICIPATION
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Hackathons & Competitions
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              A look at my competitive programming and hackathon journey.
            </h2>

          </div>
          <Tabs tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Competitions;