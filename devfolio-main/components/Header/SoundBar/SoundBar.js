import { useEffect, useRef, useState } from "react";

/* Streamed from /public on demand — never inlined into the JS bundle. */
const audio = "/sounds/song.mp3";

/* Optional ambient soundtrack. Never autoplays; fully keyboard accessible. */
const SoundBar = ({ dark = false }) => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const el = soundBarEl.current;
    if (!el) return;
    if (!isPlaying) {
      el.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => () => soundBarEl.current?.pause(), []);

  return (
    <button
      type="button"
      onClick={togglePlayPause}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
      className={`soundBars group relative flex h-8 w-8 items-center justify-center gap-[3px] rounded-full border transition-colors duration-300 ${
        dark
          ? "border-paper/30 text-paper hover:border-vermilion"
          : "border-ink/25 text-ink hover:border-vermilion hover:text-vermilion"
      } ${isPlaying ? "text-vermilion border-vermilion" : ""}`}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`w-[2px] rounded-full bg-current transition-transform origin-bottom ${
            isPlaying ? "sound-bar-play" : ""
          }`}
          style={{
            height: `${[60, 90, 45, 75][i]}%`,
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
      <audio ref={soundBarEl} src={audio} loop preload="none" />
      <style jsx>{`
        .sound-bar-play {
          animation: soundbar 1.1s ease-in-out infinite alternate;
        }
        @keyframes soundbar {
          from {
            transform: scaleY(0.35);
          }
          to {
            transform: scaleY(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sound-bar-play {
            animation: none;
            transform: scaleY(1);
          }
        }
      `}</style>
    </button>
  );
};

export default SoundBar;
