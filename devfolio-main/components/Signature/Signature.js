/* ————————————————————————————————————————————————
   SIGNATURE MOTIF · "The Assembly"
   An isometric stack of three slats — idea, build, ship.
   Introduced as a blueprint in the hero, echoed as a compact
   mark in the header / footer, completed in the closing chapter.
———————————————————————————————————————————————— */

export const BuildMark = ({ className = "", size = 28, filled = true }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M32 44 L56 54 L32 64 L8 54 Z" transform="translate(0,-8)" />
      <path d="M32 32 L56 42 L32 52 L8 42 Z" transform="translate(0,-8)" />
    </g>
    <path
      d="M32 12 L56 22 L32 32 L8 22 Z"
      fill={filled ? "var(--vermilion)" : "none"}
      stroke="currentColor"
      strokeWidth="2.5"
    />
  </svg>
);

const Cross = ({ x, y }) => (
  <g className="bp-stroke" stroke="currentColor" strokeWidth="1.5">
    <line x1={x - 7} y1={y} x2={x + 7} y2={y} />
    <line x1={x} y1={y - 7} x2={x} y2={y + 7} />
  </g>
);

/** Large hero figure. `animate` strokes are drawn by the Hero GSAP timeline. */
export const Blueprint = ({ className = "" }) => (
  <svg
    viewBox="0 0 560 620"
    className={className}
    role="img"
    aria-label="Blueprint illustration: three stacked planes labelled idea, build and ship — an abstract structure being assembled"
  >
    {/* construction guides */}
    <g className="bp-stroke" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="5 6" fill="none">
      <line x1="90" y1="250" x2="90" y2="560" />
      <line x1="470" y1="250" x2="470" y2="560" />
      <line x1="280" y1="120" x2="280" y2="600" />
    </g>

    {/* dimension line */}
    <g className="bp-stroke" stroke="var(--muted)" strokeWidth="1.5" fill="none">
      <line x1="42" y1="260" x2="42" y2="540" />
      <line x1="34" y1="260" x2="50" y2="260" />
      <line x1="34" y1="540" x2="50" y2="540" />
    </g>
    <text
      x="26"
      y="400"
      transform="rotate(-90 26 400)"
      textAnchor="middle"
      fill="var(--muted)"
      style={{ font: "500 11px var(--font-jetbrains-mono)", letterSpacing: "0.28em" }}
    >
      FIG. 00 — THE ASSEMBLY
    </text>

    {/* crosshairs */}
    <g color="var(--vermilion)">
      <Cross x={48} y={140} />
      <Cross x={512} y={110} />
      <Cross x={512} y={470} />
    </g>

    {/* bottom slat — IDEA */}
    <g className="bp-stroke" fill="none" stroke="var(--ink)" strokeWidth="2.5">
      <path d="M280 380 L470 460 L280 540 L90 460 Z" />
      <line x1="90" y1="460" x2="90" y2="484" />
      <line x1="470" y1="460" x2="470" y2="484" />
      <line x1="280" y1="540" x2="280" y2="564" />
      <path d="M90 484 L280 564 L470 484" />
    </g>

    {/* middle slat — BUILD */}
    <g className="bp-stroke" fill="none" stroke="var(--ink)" strokeWidth="2.5">
      <path d="M280 280 L470 360 L280 440 L90 360 Z" />
      <line x1="90" y1="360" x2="90" y2="384" />
      <line x1="470" y1="360" x2="470" y2="384" />
      <line x1="280" y1="440" x2="280" y2="464" />
      <path d="M90 384 L280 464 L470 384" />
    </g>

    {/* top slat — SHIP (the only filled plane: the finished product) */}
    <path
      className="bp-fill"
      d="M280 180 L470 260 L280 340 L90 260 Z"
      fill="var(--vermilion)"
      stroke="var(--ink)"
      strokeWidth="2.5"
    />
    <g className="bp-stroke" fill="none" stroke="var(--ink)" strokeWidth="2.5">
      <line x1="90" y1="260" x2="90" y2="284" />
      <line x1="470" y1="260" x2="470" y2="284" />
      <line x1="280" y1="340" x2="280" y2="364" />
      <path d="M90 284 L280 364 L470 284" />
    </g>

    {/* stage annotations */}
    <g
      fill="var(--muted)"
      style={{ font: "500 12px var(--font-jetbrains-mono)", letterSpacing: "0.3em" }}
    >
      <text x="486" y="466">01 IDEA</text>
      <text x="486" y="366">02 BUILD</text>
      <text x="486" y="266" fill="var(--vermilion)">03 SHIP</text>
    </g>
  </svg>
);
