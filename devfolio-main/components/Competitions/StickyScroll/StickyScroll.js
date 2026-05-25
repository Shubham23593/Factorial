import React, { useState, useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import DotPattern from "../DotPattern/DotPattern";
import { cn } from "utils/cn";

const backgroundColors = ["#000000"];

const linearGradients = [
  "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
  "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
  "linear-gradient(to bottom right, #7038ff, #c9c9c9)",
];

const StickyScroll = ({ contentItems }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardLength = contentItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contentItems.map(
      (_, index) => index / cardLength - 0.1
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-2xl py-3 px-2 md:px-0 z-20"
        )}
      />

      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black to-transparent z-10 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent z-10 rounded-2xl" />

      <motion.div
        ref={containerRef}
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[28rem] flex justify-center space-x-10 p-4 rounded-2xl outline outline-1 outline-gray-dark-1 overflow-y-auto no-scrollbar"
      >
        <div className="flex items-start px-4">
          <div className="max-w-2xl">
            {contentItems.map((item, index) => (
              <div key={item.title + index} className="my-8">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg text-slate-300 max-w-sm mt-4"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Right side - Logo Display */}
        <motion.div
          className="hidden lg:block h-80 w-80 rounded-md bg-gray-dark-2 sticky top-10 overflow-hidden flex-shrink-0"
          animate={{
            backgroundColor:
              backgroundColors[activeCard % backgroundColors.length],
          }}
        >
          <motion.div
            animate={{
              y: activeCard * -400,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {contentItems.map((item, index) => (
              <div
                key={"content-" + index}
                className="h-80 w-80 rounded-md flex items-center justify-center bg-gradient-to-br from-gray-dark-2 to-gray-dark-3"
              >
                {item.logo ? (
                  <div className="flex items-center justify-center h-full w-full p-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-64 w-64 object-contain"
                    />
                  </div>
                ) : (
                  <motion.div
                    style={{
                      background: linearGradients[index % linearGradients.length],
                    }}
                    className="h-full w-full rounded-md"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StickyScroll;