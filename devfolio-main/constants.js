export const METADATA = {
  author: "Shubham Dalvi",
  title: "Shubham Dalvi | Portfolio — The Art of the Build",
  description:
    "Shubham Dalvi is a passionate Full Stack Developer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://shubham-portfolio-nine-eta.vercel.app/",
  twitterHandle: "@shubhamdalvi775",
  keywords: [
    "Shubham Dalvi",
    "Frontend Engineer",
    "Full Stack Engineer",
    "MERN Stack Engineer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
  ].join(", "),
  image: "https://shubham-portfolio-nine-eta.vercel.app/images/hero-image.png",
  language: "English",
  themeColor: "#F4F0E8",
};

export const MENULINKS = [
  { name: "Home", ref: "home", num: "00" },
  { name: "About", ref: "about", num: "01" },
  { name: "Skills", ref: "skills", num: "02" },
  { name: "Projects", ref: "projects", num: "03" },
  { name: "Work", ref: "work", num: "04" },
  { name: "Competitions", ref: "competitions", num: "05" },
  { name: "Achievements", ref: "achievements", num: "06" },
  { name: "Contact", ref: "contact", num: "08" },
];

export const TYPED_STRINGS = [
  "Full Stack Developer",
  "Turning ideas into websites",
  "Building scalable solutions",
  "Crafting modern apps",
  "Creating engaging interfaces",
];

export const SOCIAL_LINKS = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubham-dalvi-7586b0342/",
  },
  {
    name: "github",
    url: "https://github.com/Shubham23593",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shubham__7883/",
  },
  {
    name: "email",
    url: "mailto:shubhamdalvi775@gmail.com",
  },
];

export const SKILLS = {
  languagesAndTools: [
    { name: "javascript", image: "/skills/javascript.png" },
    { name: "typescript", image: "/skills/typescript.png" },
    { name: "java", image: "/skills/java.png" },
    { name: "c", image: "/skills/c.png" },
  ],
  librariesAndFrameworks: [
    { name: "react", image: "/skills/react.png" },
    { name: "next.js", image: "/skills/next.js.png" },
    { name: "node.js", image: "/skills/nodejs.png" },
    { name: "express.js", image: "/skills/express.png" },
    { name: "tailwindcss", image: "/skills/tailwindcss.png" },
    { name: "bootstrap", image: "/skills/bootstrap.png" },
    { name: "sass", image: "/skills/sass.png" },
    { name: "GSAP", image: "/skills/gsap.png" },
  ],
  databases: [
    { name: "mysql", image: "/skills/mysql.png" },
    { name: "postgresql", image: "/skills/postgresql.png" },
    { name: "mongodb", image: "/skills/mongodb.png" },
    { name: "firebase", image: "/skills/firebase.png" },
  ],
  other: [
    { name: "git", image: "/skills/git.png" },
    { name: "github", image: "/skills/github.png" },
    { name: "vscode", image: "/skills/vscode.png" },
  ],
};

/* The six-stage build pipeline shown in the Skills chapter.
   Every technology listed exists in the SKILLS inventory above. */
export const SKILL_STAGES = [
  {
    id: "idea",
    label: "Idea",
    blurb:
      "Every build begins as a problem statement. I scope the problem, sketch user flows and decide what is actually worth building — before a single line of code.",
    practices: ["Problem scoping", "User flows", "Wireframes"],
    tech: [],
  },
  {
    id: "design",
    label: "Design",
    blurb:
      "Interfaces composed with type, space and motion — utility-first styling systems that stay consistent from 320px to 4K.",
    practices: [],
    tech: ["tailwindcss", "bootstrap", "sass", "GSAP"],
  },
  {
    id: "architecture",
    label: "Architecture",
    blurb:
      "Component trees, routing and data models planned up front, so the codebase scales beyond the demo.",
    practices: [],
    tech: ["typescript", "next.js", "react", "mysql", "postgresql", "mongodb", "firebase"],
  },
  {
    id: "implementation",
    label: "Implementation",
    blurb:
      "The core of the craft: typed JavaScript where it matters, React on the client, Node and Express on the wire — with Java and C underneath the fundamentals.",
    practices: [],
    tech: ["javascript", "java", "c", "react", "node.js", "express.js"],
  },
  {
    id: "refinement",
    label: "Refinement",
    blurb:
      "Motion polish, responsive QA and the last ten percent that separates done from shipped.",
    practices: [],
    tech: ["GSAP", "sass", "vscode"],
  },
  {
    id: "delivery",
    label: "Delivery",
    blurb:
      "Versioned, reviewed and deployed — Git discipline with releases on Firebase, Vercel, Netlify and Render.",
    practices: [],
    tech: ["git", "github", "firebase", "vscode"],
  },
];

/* width/height mirror the real asset dimensions to prevent layout shift.
   repo links are the project's public source where one exists. */
export const PROJECTS = [
  {
    name: "CodeVerse",
    image: "/projects/codeverse.webp",
    width: 876,
    height: 616,
    description:
      "Real-time collaborative code editor with live code sharing, instant chat, an online compiler and a dark-mode UI 💻",
    url: "https://realtime-code-editor-ehmj.onrender.com/",
    repo: "https://github.com/Shubham23593/realtime_code_editor",
    tech: ["react", "nodejs", "express", "socket.io", "tailwindcss"],
  },
  {
    name: "ToggleNest",
    image: "/projects/toggle.png",
    width: 1913,
    height: 905,
    description:
      "Kanban-style collaborative project management platform with drag-and-drop task boards, role-based access and real-time progress tracking 📋",
    url: "https://togglenestproject.netlify.app/",
    repo: "https://github.com/Shubham23593/Togglenest-",
    tech: ["react", "nodejs", "express", "mongodb"],
  },
  {
    name: "Deepali Makeup Studio",
    image: "/projects/deepali.png",
    width: 470,
    height: 757,
    description:
      "Production-level makeup artist website with order management, service booking, portfolio showcase and client communication 💄",
    url: "https://deepalimakeup.vercel.app/",
    repo: "https://github.com/Shubham23593/Makeup_Artist",
    tech: ["react", "nodejs", "tailwindcss", "firebase"],
  },
  {
    name: "Mobile E-Commerce Website",
    image: "/projects/ecommerce.webp",
    width: 673,
    height: 651,
    description:
      "Responsive mobile-first e-commerce website with user authentication, product browsing, cart management and checkout 🛒",
    url: "https://authentication-939a7.web.app/",
    tech: ["react", "tailwindcss", "firebase"],
  },
  {
    name: "Restaurant Management System",
    image: "/projects/restaurant.webp",
    width: 567,
    height: 667,
    description:
      "Web-based restaurant operations system with online table reservations, digital menu, QR payments and offers 🍽️",
    url: "https://wondrous-clafoutis-4235be.netlify.app/",
    repo: "https://github.com/Shubham23593/Restaurant-Management",
    tech: ["java", "mysql"],
  },
  {
    name: "Virtual Banking System",
    image: "/projects/banking.webp",
    width: 680,
    height: 490,
    description:
      "Secure online banking platform with user authentication, transaction processing, digital passbook and account management 🏦",
    url: "https://github.com/Shubham23593",
    tech: ["react", "firebase", "redux", "tailwindcss"],
  },
  {
    name: "Telemedicine Queue System",
    image: "/projects/hackproject.jpeg",
    width: 800,
    height: 1012,
    description:
      "AI-powered patient queue optimizer using priority scheduling, ML duration prediction and Socket.io real-time updates for telemedicine 🏥 — built as team leader at HACKVERSE 2.0.",
    url: "https://github.com/Shubham23593",
    tech: ["react", "nodejs", "express", "socket.io"],
  },
];

/* Verified internship chronology. */
export const WORK_TIMELINE = [
  {
    company: "AECCI",
    full: "Asian Exporters Chamber of Commerce and Industry",
    role: "Frontend Developer Intern",
    period: "SEP 2025 — DEC 2025",
    location: "Navi Mumbai, India",
    stack: ["Redux Toolkit", "React.js", "Tailwind CSS"],
    points: [
      "Developed responsive web interfaces and interactive components for business applications.",
      "Optimised UI/UX while collaborating with cross-functional teams.",
    ],
    logo: "/logos/aecci-logo.png",
  },
  {
    company: "Ideamagix",
    role: "MERN Stack Developer Intern",
    period: "DEC 2025 — JAN 2026",
    location: "Remote",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    points: [
      "Short-term internship with strict quality review and mentorship processes.",
      "Worked alongside an experienced team before leaving due to academic commitments.",
    ],
    logo: "/logos/Ideamagix.jpg",
  },
  {
    company: "Sapphire Infocom",
    full: "Sapphire Infocom Private Limited",
    role: "Full-Stack Developer Intern",
    period: "DEC 2025 — MAR 2026",
    location: "India",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    points: [
      "Conceptualised and developed a full-stack project end-to-end on the MERN stack.",
      "Implemented key functionalities with modern web technologies.",
    ],
    logo: "/logos/shipre.png",
  },
];

/* Verified hackathon & competition record. */
export const COMPETITIONS = [
  {
    name: "Hackverse 2.0",
    org: "24-HOUR HACKATHON · TEAM CODERAFT",
    role: "Team Leader",
    points: [
      "Led the team to build a Telemedicine Queue Optimization System in 24 hours.",
      "Priority scheduling, ML duration prediction and a fairness algorithm.",
      "Socket.io real-time queue status updates; reduced waiting time vs normal queues.",
    ],
    logo: "/logos/hackverse.jpeg",
    image: "/logos/hackproject.jpeg",
  },
  {
    name: "Pragati 2.0 — Build-it On",
    org: "THAKUR COLLEGE OF ENGINEERING & TECHNOLOGY (TCET), MUMBAI",
    role: "Cross-college team with Watumull Institute (WIEECT)",
    points: [
      "Rapid prototyping and problem-solving under strict time constraints.",
      "Collaborative build across institutes — teamwork under pressure.",
    ],
    logo: "/logos/build it on.jpg",
  },
  {
    name: "Frontend Odyssey",
    org: "IIT PATNA · WITH UNSTOP",
    role: "The Interactive Web Experience Challenge",
    result: "Runner-Up",
    points: [
      "Crafted highly interactive web experiences against top national participants.",
      "Recognised with the Runner-Up position — see the Achievements chapter.",
    ],
    logo: "/logos/iitpatna.jpg",
    image: "/logos/lifeof.png",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
