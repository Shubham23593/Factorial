/* Editorial chapter heading: index · kicker (scramble-decoded) · display title. */
import Scramble from "../Scramble/Scramble";

const ChapterHeading = ({
  index,
  kicker,
  title,
  accent,
  dark = false,
  className = "",
}) => (
  <header className={`max-w-5xl ${className}`}>
    <p
      className={`mono-label flex items-center gap-4 ${
        dark ? "text-paper/60" : "text-muted"
      }`}
    >
      <span className="text-vermilion">{index}</span>
      <span
        aria-hidden="true"
        className={`h-px w-12 ${dark ? "bg-paper/30" : "bg-ink/25"}`}
      />
      <Scramble text={kicker} />
    </p>
    <h2 className="display mt-6 text-[clamp(2.6rem,7vw,5.5rem)]">
      {title}
      {accent && (
        <>
          {" "}
          <em className={`serif-accent ${dark ? "text-vermilion" : "text-vermilion"}`}>
            {accent}
          </em>
        </>
      )}
    </h2>
  </header>
);

export default ChapterHeading;
