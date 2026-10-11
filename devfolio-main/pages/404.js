import Head from "next/head";
import Link from "next/link";
import { BuildMark } from "@/components/Signature/Signature";

/* A missing page is simply an unfinished build. */
const Custom404 = () => (
  <>
    <Head>
      <title>404 — Under construction · Shubham Dalvi</title>
      <meta name="robots" content="noindex" />
    </Head>

    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper text-ink">
      <header className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="link flex items-center gap-3" aria-label="Shubham Dalvi — home">
          <BuildMark size={26} />
          <span className="font-semibold tracking-tight">Shubham Dalvi</span>
        </Link>
        <p className="mono-label text-muted">ERROR / 404</p>
      </header>

      <div className="section-container flex flex-1 flex-col justify-center py-16">
        <p className="mono-label flex items-center gap-4 text-muted">
          <span className="text-vermilion">✳</span>
          <span>Blueprint not found</span>
        </p>

        <h1 className="display mt-8 text-[clamp(3.5rem,12vw,10rem)]">
          This page was
          <br />
          <em className="serif-accent text-vermilion">never</em> built.
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
          The address you followed doesn&apos;t exist in this exhibition.
          No scaffolding, no structure — just an empty plot. Let&apos;s walk
          back to the studio.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="link group inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:border-vermilion hover:bg-vermilion"
          >
            Back to home
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* faint unfinished blueprint */}
      <svg
        aria-hidden="true"
        viewBox="0 0 560 620"
        className="pointer-events-none absolute -right-24 bottom-0 hidden w-[30rem] text-ink/10 lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M280 380 L470 460 L280 540 L90 460 Z" />
        <path d="M280 280 L470 360 L280 440 L90 360 Z" strokeDasharray="6 8" />
        <path d="M280 180 L470 260 L280 340 L90 260 Z" strokeDasharray="2 10" />
        <line x1="280" y1="120" x2="280" y2="600" strokeDasharray="4 8" />
      </svg>
    </main>
  </>
);

export default Custom404;
