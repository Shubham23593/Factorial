import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import HeroNew from "@/components/Hero/HeroNew";
import Diary from "@/components/Diary/Diary";
import Skills from "@/components/Skills/Skills";
import Metro from "@/components/Metro/Metro";
import ProjectsExpand from "@/components/Projects/ProjectsExpand";
import Timeline from "@/components/Timeline/Timeline";
import TrophyShowcase from "@/components/TrophyShowcase/TrophyShowcase";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import EasterEggs from "@/components/EasterEggs/EasterEggs";
import InsomniacWork from "@/components/InsomniacWork/InsomniacWork";
import { displayFancyLogs } from "utils/log";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Menu />
          </Header>
          <ProgressIndicator />
          <Cursor isDesktop={isDesktop} />
          <EasterEggs />
          <main className="flex flex-col">
            {/* Background decorative text */}
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96 select-none"
            >
              DALVI
            </div>
            
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />
            
            {/* Section 1: Hero - Cinematic intro with silhouette & smoke */}
            <HeroNew />
            
            {/* Section 2: Diary - Personal journey story */}
            <Diary />
            
            {/* Section 3: Skills - Interactive skill matrix */}
            <Skills />
            
            {/* Section 4: Metro Station - Creative project showcase */}
            <Metro />
            
            {/* Section 5: Projects - Expandable project cards */}
            <ProjectsExpand />
            
            {/* Section 6: Timeline - Work experience journey */}
            <Timeline />
            
            {/* Section 7: Trophy Showcase - Achievements & awards */}
            <TrophyShowcase />
            
            {/* Section 7.5: Insomniac Work - Discoverable hidden section */}
            <InsomniacWork />
            
            {/* Section 8: Contact - Simple and calm ending */}
            <Contact />
          </main>
          
          {/* Footer with meteor shower */}
          <Footer />
        </>
      )}
    </>
  );
}
