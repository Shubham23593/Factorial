import { useState, useLayoutEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import Profiles from "../Profiles/Profiles";
import { useReducedMotion } from "../../utils/hooks";

gsap.registerPlugin(ScrollTrigger);

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: 0,
    background: "#171717",
    color: "#F4F0E8",
    fontFamily: "var(--font-jetbrains-mono)",
    fontSize: "13px",
    letterSpacing: "0.08em",
  },
  iconTheme: { primary: "#F04428", secondary: "#F4F0E8" },
};

const EMAIL_RE = /^\S+@\S+\.\S+$/;

const inputClasses =
  "block w-full border border-ink/30 bg-transparent px-4 py-3 text-base font-mono text-ink placeholder:text-transparent focus:border-vermilion focus:outline-none transition-colors duration-300";

/* Chapter 08 — what happens next. Calm, spacious, functional. */
const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFieldErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = filter.clean(formData.name.trim());
    const email = formData.email.trim();
    const message = filter.clean(formData.message.trim());

    const errors = {};
    if (!name) errors.name = "Please tell me your name.";
    if (!email) errors.email = "An email address is required.";
    else if (!EMAIL_RE.test(email)) errors.email = "That email doesn't look right.";
    if (!message) errors.message = "A short message helps me reply well.";

    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      toast.error("Please fix the highlighted fields.", { id: "form" });
      return;
    }

    setStatus("sending");
    mail({ name, email, message })
      .then((res) => {
        if (res.status === 200) {
          setStatus("success");
          setFormData(initialState);
          toast.success("Message sent — talk soon.", { id: "form" });
        } else {
          setStatus("error");
          toast.error("Something went wrong on the wire. Try again?", { id: "form" });
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        toast.error("Something went wrong on the wire. Try again?", { id: "form" });
      });
  };

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-reveal]", {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative border-t border-line bg-paper-2 py-24 md:py-36"
    >
      <Toaster toastOptions={toastOptions} position="bottom-right" />

      <div className="section-container grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* left — the invitation */}
        <div className="lg:col-span-5">
          <p className="mono-label flex items-center gap-4 text-muted" data-contact-reveal>
            <span className="text-vermilion">08</span>
            <span aria-hidden="true" className="h-px w-12 bg-ink/25" />
            <span>Contact</span>
          </p>
          <h2 className="display mt-6 text-[clamp(2.6rem,7vw,5.5rem)]" data-contact-reveal>
            What happens{" "}
            <em className="serif-accent text-vermilion">next?</em>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/75" data-contact-reveal>
            The fastest route is the form — it lands straight in my inbox.
            Or write to me directly:
          </p>
          <a
            href="mailto:shubhamdalvi775@gmail.com"
            className="link u-slide mt-4 inline-block font-mono text-base font-bold text-ink md:text-lg"
            data-contact-reveal
          >
            shubhamdalvi775@gmail.com
          </a>
          <div className="mt-10 text-ink" data-contact-reveal>
            <Profiles />
          </div>
        </div>

        {/* right — the form */}
        <form
          className="lg:col-span-7"
          onSubmit={handleSubmit}
          noValidate
          data-contact-reveal
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mono-label mb-3 block text-muted">
                YOUR NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className={inputClasses}
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={Boolean(fieldErrors.name)}
              />
              {fieldErrors.name && (
                <p className="mt-2 font-mono text-xs text-vermilion">{fieldErrors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mono-label mb-3 block text-muted">
                YOUR EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={inputClasses}
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={Boolean(fieldErrors.email)}
              />
              {fieldErrors.email && (
                <p className="mt-2 font-mono text-xs text-vermilion">{fieldErrors.email}</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="mono-label mb-3 block text-muted">
              MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`${inputClasses} resize-y`}
              value={formData.message}
              onChange={handleChange}
              required
              aria-invalid={Boolean(fieldErrors.message)}
            />
            {fieldErrors.message && (
              <p className="mt-2 font-mono text-xs text-vermilion">{fieldErrors.message}</p>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="link group inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:border-vermilion hover:bg-vermilion disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <p aria-live="polite" className="mono-label text-muted">
              {status === "success" && (
                <span className="text-cobalt">DELIVERED — THANKS, I&apos;LL REPLY SOON.</span>
              )}
              {status === "error" && (
                <span className="text-vermilion">NOT SENT — PLEASE RETRY OR EMAIL ME.</span>
              )}
              {status === "sending" && "IN TRANSIT…"}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
