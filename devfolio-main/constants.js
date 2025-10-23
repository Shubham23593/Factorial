export const METADATA = {
  author: "Shubham Dalvi",
  title: "Shubham | Portfolio ",
  description:
    "Shubham Dalvi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhamdalvi.me/",
  twitterHandle: "@shubhamdalvi775",
  keywords: [
    "Shubham Dalvi",
    "Full stack Engineer",
    "Mern stack Engineer",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#0ea5e9",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full Stack Developer",
  "Turning ideas into websites",
  "Building scalable solutions",
];

export const SOCIAL_LINKS = [
  
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubham-dalvi-7586b0342/",
  },
  {
    name: "github",
    url: "https://github.com/shubham23593",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shubham__7883/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    {
      name: "javascript",
      image: "/skills/javascript.png",
    },
    {
      name: "typescript",
      image: "/skills/typescript.png",
    },
    {
      name: "java",
      image: "/skills/java.png",
    },
    {
      name: "c",
      image: "/skills/c.png",
    },
   
  ],
  librariesAndFrameworks: [
    {
      name: "react",
      image: "/skills/react.png",
    },
    {
      name: "node.js",
      image: "/skills/nodejs.png",
    },
    {
      name: "express.js",
      image: "/skills/express.png",
    },
    {
      name: "tailwindcss",
      image: "/skills/tailwindcss.png",
    },
    {
      name: "bootstrap",
      image: "/skills/bootstrap.png",
    },
  ],
  databases: [
    {
      name: "mysql",
      image: "/skills/mysql.png",
    },
    {
      name: "postgresql",
      image: "/skills/postgresql.png",
    },
    {
      name: "mongodb",
      image: "/skills/mongodb.png",
    },
    {
      name: "firebase",
      image: "/skills/firebase.png",
    },
  ],
  other: [
    {
      name: "git",
      image: "/skills/git.png",
    },
    {
      name: "github",
      image: "/skills/github.png",
    },
    {
      name: "vscode",
      image: "/skills/vscode.png",
    },
    
  ],
};

export const PROJECTS = [
  {
    name: "CodeVerse",
    image: "/projects/codeverse.webp",
    blurImage: "/projects/codeverse.webp",
    description:
      "Real-time collaborative code editor with live code sharing, instant chat, online compiler, and dark-mode UI 💻",
    gradient: ["#0ea5e9", "#06b6d4"],
    url: "https://realtime-code-editor-ehmj.onrender.com/",
    tech: ["react", "nodejs", "express", "socket.io", "tailwindcss"],
  },
  {
    name: "Mobile E-Commerce Website",
    image: "/projects/ecommerce.webp",
    blurImage: "/projects/blur/ecommerce-blur.webp",
    description:
      "Responsive mobile-first e-commerce website with user authentication, product browsing, cart management, and checkout 🛒",
    gradient: ["#06b6d4", "#00d9ff"],
    url: "https://authentication-939a7.web.app/",
    tech: ["react", "tailwindcss", "firebase"],
  },
  {
    name: "Virtual Banking System",
    image: "/projects/banking.webp",
    blurImage: "/projects/blur/banking-blur.webp",
    description:
      "Secure online banking platform with user authentication, transaction processing, digital passbook, and account management 🏦",
    gradient: ["#38bdf8", "#0ea5e9"],
    url: "",
    tech: ["react", "firebase", "redux", "tailwindcss"],
  },
  {
    name: "Restaurant Management System",
    image: "/projects/restaurant.webp",
    blurImage: "/projects/blur/restaurant-blur.webp",
    description:
      "Web-based restaurant operations system with online table reservations, digital menu, QR payments, and offers 🍽️",
    gradient: ["#0284c7", "#38bdf8"],
    url: "https://wondrous-clafoutis-4235be.netlify.app/",
    tech: ["java", "mysql"],
  },
];


export const WORK_CONTENTS = {
  AECCI: [
    {
      title: "Asian Exporters Chamber of Commerce and Industry",
      description:
        "Frontend Developer Internship at AECCI. Contributing to the development of responsive web interfaces and interactive components using modern frontend technologies.",
      logo: "/logos/aecci-logo.png",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
    {
      title: "Tech Stack",
      description:
        "Leveraging Redux Toolkit, React.js, and Tailwind CSS to build efficient and scalable user interfaces. Implementing modern frontend development practices and best practices.",
      logo: "/logos/1st.png",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Redux Toolkit · React.js · Tailwind CSS
        </div>
      ),
    },
    {
      title: "Responsibilities",
      description:
        "Developing responsive web components, optimizing UI/UX, and collaborating with cross-functional teams to deliver high-quality frontend solutions for business applications.",
      logo: "/logos/2nd.webp",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Sep 2025 - Present · Navi Mumbai, India
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";