import { SOCIAL_LINKS } from "../../constants";
import { Icon } from "@/components/Icons";

const Profiles = ({ className = "", size = 20 }) => (
  <ul className={`flex items-center gap-5 ${className}`}>
    {SOCIAL_LINKS &&
      SOCIAL_LINKS.map(({ name, url }) => (
        <li key={name}>
          <a
            href={url}
            className="link inline-flex p-1 opacity-70 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5 focus-visible:opacity-100"
            rel="noreferrer"
            target={name === "email" ? undefined : "_blank"}
            aria-label={name === "email" ? "Email" : name}
          >
            <Icon name={name} width={size} height={size} />
          </a>
        </li>
      ))}
  </ul>
);

export default Profiles;
