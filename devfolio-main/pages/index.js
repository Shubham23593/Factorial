import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "@/components/Header/Header";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Preloader from "@/components/Preloader/Preloader";
import { useLenis } from "utils/useLenis";
import { displayFancyLogs } from "utils/log";

const Cursor = dynamic(() => import("@/components/Cursor/Cursor"), {
  ssr: false,
});

const Hero = dynamic(() => import("@/components/Hero/Hero"));
const About = dynamic(() => import("@/components/About/About"));
const Skills = dynamic(() => import("@/components/Skills/Skills"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Work = dynamic(() => import("@/components/Work/Work"));
const Competitions = dynamic(() => import("@/components/Competitions/Competitions"));
const Achievements = dynamic(() => import("@/components/Achievements/Achievements"));
const Collaboration = dynamic(() => import("@/components/Collaboration/Collaboration"));
const Contact = dynamic(() => import("@/components/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

/* THE ART OF THE BUILD — an interactive digital exhibition. */
export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useLenis();

  /* mount the curtain before first paint so the reveal feels authored */
  useLayoutEffect(() => {
    setShowPreloader(true);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    displayFancyLogs();
  }, []);

  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {showPreloader && !loaded && <Preloader onDone={handleDone} />}
      </AnimatePresence>
      <Header />
      <ProgressIndicator />
      <Cursor />
      <main className="flex flex-col">
        <Hero start={loaded || !showPreloader} />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Competitions />
        <Achievements />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
