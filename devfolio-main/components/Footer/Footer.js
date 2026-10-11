import { MENULINKS } from "../../constants";
import { BuildMark } from "../Signature/Signature";
import Profiles from "../Profiles/Profiles";

/* The final page of the publication — motif returns, completed. */
const Footer = () => (
  <footer className="relative bg-coal text-paper">
    <div className="section-container pb-10 pt-20 md:pt-28">
      <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mono-label flex items-center gap-3 text-paper/50">
            <BuildMark size={22} className="text-paper" />
            THE ASSEMBLY, COMPLETED
          </p>
          <p className="display mt-6 text-[clamp(2.8rem,8vw,7rem)] leading-[0.9]">
            Shubham
            <br />
            Dalvi<span className="text-vermilion">.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <nav aria-label="Footer">
            <p className="mono-label text-paper/50">INDEX</p>
            <ul className="mt-5 flex flex-col gap-2">
              {MENULINKS.filter((l) => l.ref !== "home").map((l) => (
                <li key={l.ref}>
                  <a href={`#${l.ref}`} className="link u-slide text-paper/80 hover:text-paper">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label text-paper/50">ELSEWHERE</p>
            <div className="mt-5 text-paper">
              <Profiles />
            </div>
          </div>

          <div>
            <p className="mono-label text-paper/50">WRITE</p>
            <a
              href="mailto:shubhamdalvi775@gmail.com"
              className="link u-slide mt-5 inline-block max-w-[12rem] break-all text-paper/80 hover:text-paper"
            >
              shubhamdalvi775@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="mono-label text-paper/40">
          © {new Date().getFullYear()} SHUBHAM DALVI — DESIGNED &amp; BUILT BY HAND
        </p>
        <p className="mono-label text-paper/40">
          NEXT.JS · GSAP · FRAMER MOTION · TAILWIND
        </p>
        <a
          href="#home"
          className="link mono-label group inline-flex items-center gap-2 text-paper/60 hover:text-vermilion"
        >
          BACK TO TOP
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
