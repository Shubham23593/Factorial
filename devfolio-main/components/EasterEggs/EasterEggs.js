import { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EasterEggs = () => {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const konamiSequence = useRef([]);
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  // Konami Code Easter Egg
  useEffect(() => {
    const handleKeyDown = (e) => {
      konamiSequence.current.push(e.key);
      
      if (konamiSequence.current.length > konamiCode.length) {
        konamiSequence.current.shift();
      }

      if (
        konamiSequence.current.length === konamiCode.length &&
        konamiSequence.current.every((key, i) => key === konamiCode[i])
      ) {
        setKonamiActivated(true);
        
        // Crazy animation when Konami code is activated
        document.body.style.transition = "filter 0.5s ease";
        document.body.style.filter = "hue-rotate(180deg)";
        
        setTimeout(() => {
          document.body.style.filter = "none";
        }, 3000);
        
        konamiSequence.current = [];
        
        setTimeout(() => setKonamiActivated(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Custom right-click menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      // Could add a custom context menu here
    };

    // Only prevent right-click on desktop
    if (window.innerWidth > 768) {
      document.addEventListener("contextmenu", handleContextMenu);
    }
    
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Console easter egg
  useEffect(() => {
    console.log(
      "%c🚀 Hey there, curious developer!",
      "font-size: 24px; font-weight: bold; color: #0ea5e9;"
    );
    console.log(
      "%cLooking at the source code? I like your style. Let's connect!",
      "font-size: 14px; color: #06b6d4;"
    );
    console.log(
      "%c📧 shubhamdalvi775@gmail.com",
      "font-size: 14px; color: #38bdf8;"
    );
    console.log(
      "%c💡 Try the Konami Code: ↑↑↓↓←→←→BA",
      "font-size: 12px; color: #888;"
    );
  }, []);

  // Title change on tab blur
  useEffect(() => {
    const originalTitle = document.title;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👋 Come back! | Shubham Dalvi";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      {/* Konami Code Activation Notification */}
      {konamiActivated && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">🎮</div>
            <div className="text-4xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent px-8 py-4 rounded-2xl backdrop-blur-sm bg-black/50 border border-white/20">
              KONAMI CODE ACTIVATED!
            </div>
            <div className="text-xl text-white mt-4">
              You found the secret! 🎉
            </div>
          </div>
        </div>
      )}

      {/* Secret corner trigger - hover in bottom-left corner */}
      <div
        className="fixed bottom-0 left-0 w-20 h-20 z-50 cursor-pointer"
        onMouseEnter={() => setShowSecret(true)}
        onMouseLeave={() => setShowSecret(false)}
      >
        {showSecret && (
          <div className="absolute bottom-20 left-4 bg-gray-900/95 backdrop-blur-sm border border-sky-400/30 rounded-xl p-4 max-w-xs shadow-2xl animate-fadeIn">
            <div className="text-sm text-gray-300">
              <p className="font-bold text-sky-400 mb-2">🔍 You found a secret!</p>
              <p className="text-xs leading-relaxed">
                This portfolio was crafted with attention to every detail. 
                Try the Konami Code (↑↑↓↓←→←→BA) for a surprise, or check 
                the browser console for more easter eggs!
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default EasterEggs;
