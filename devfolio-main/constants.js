export const METADATA = {
  author: "Shubham Dalvi",
  title: "Shubham Dalvi | Portfolio",
  description:
    "Shubham Dalvi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://shubham-portfolio-nine-eta.vercel.app/",  // ✅ UPDATED
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
  image: "https://shubham-portfolio-nine-eta.vercel.app/images/hero-image.png",  // ✅ UPDATED
  language: "English",
  themeColor: "#0ea5e9",  // ✅ KEPT Sky Blue (No Change)
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
    name: "Competitions",
    ref: "competitions",
  },
  {
    name: "Achievements",
    ref: "achievements",
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
      name: "next.js",
      image: "/skills/next.js.png",
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
    {
      name: "sass",
      image: "/skills/sass.png",
    },
    {
      name: "GSAP",
      image: "/skills/gsap.png",
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
    url: "https://github.com/Shubham23593",
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
  {
    name: "ToggleNest",
    image: "/projects/toggle.png",
    blurImage: "/projects/toggle.png",
    description:
      "Kanban-style collaborative project management platform with drag-and-drop task boards, role-based access, and real-time progress tracking 📋",
    gradient: ["#0ea5e9", "#06b6d4"],
    url: "https://togglenestproject.netlify.app/",
    tech: ["react", "nodejs", "express", "mongodb"],
  },
  {
    name: "Deepali Makeup Studio",
    image: "/projects/deepali.png",
    blurImage: "/projects/deepali.png",
    description:
      "Production-level makeup artist website with order management, service booking, portfolio showcase, and client communication 💄",
    gradient: ["#06b6d4", "#00d9ff"],
    url: "https://deepalimakeup.vercel.app/",
    tech: ["react", "nodejs", "tailwindcss", "firebase"],
  },
  {
    name: "Life of Developer",
    image: "/projects/lifeofdev.png",
    blurImage: "/projects/lifeofdev.png",
    description:
      "Immersive storytelling website narrating the journey of a developer's life with interactive visuals and scroll-based animations 🧑‍💻",
    gradient: ["#38bdf8", "#0ea5e9"],
    url: "https://life-of-developers.vercel.app/",
    tech: ["react", "gsap", "tailwindcss"],
  },
  {
    name: "Telemedicine Queue System",
    image: "/projects/hackproject.jpeg",
    blurImage: "/projects/hackproject.jpeg",
    description:
      "AI-powered patient queue optimizer using priority scheduling, ML duration prediction, and Socket.io real-time updates for telemedicine 🏥",
    gradient: ["#0284c7", "#38bdf8"],
    url: "https://github.com/Shubham23593",
    tech: ["react", "nodejs", "express", "socket.io"],
  },
];

export const WORK_CONTENTS = {
  SAPPHIRE: [
    {
      title: "Sapphire Infocom Private Limited",
      description:
        "Completed a Full-Stack Developer Internship. Conceptualized and developed a full-stack project using the MERN stack, demonstrating strong proficiency in both front-end and back-end development.",
      logo: "/logos/shipre.png",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "Tech Stack",
      description:
        "Leveraged the MERN stack (MongoDB, Express.js, React.js, Node.js) to build comprehensive solutions. Showcased exceptional technical expertise by implementing key functionalities and utilizing modern web technologies.",
      logo: "/logos/logoo ship.png",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MongoDB · Express.js · React.js · Node.js
        </div>
      ),
    },
    {
      title: "Responsibilities",
      description:
        "Conceptualizing and developing full-stack projects, implementing key functionalities, and leveraging modern web technologies to showcase exceptional technical expertise and problem-solving ability.",
      logo: "/logos/toggle.png",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Dec 18, 2025 - Mar 18, 2026
        </div>
      ),
    },
  ],
  IDEAMAGIX: [
    {
      title: "MERN Stack Developer Intern",
      description: (
        <div className="flex flex-col gap-4 text-base md:text-lg">
          <p>
            Completed a short-term MERN Stack Developer Internship at Ideamagix (Dec 2025 - Jan 2026).
          </p>
          <p>
            Gained hands-on exposure to a professional work environment. Utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) while following strict quality review and mentorship processes.
          </p>
          <p>
            Showcased ability to crack corporate interviews and worked alongside an experienced team before leaving due to academic commitments.
          </p>
        </div>
      ),
      logo: "/logos/Ideamagix.jpg",
      content: (
        <div className="relative h-full w-full flex items-center justify-center rounded-xl overflow-hidden shadow-[0_0_40px_rgba(14,165,233,0.3)] border border-gray-700/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logos/Ideamagix.jpg" 
            alt="Ideamagix Intern" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-6 text-center w-full px-4">
            <h3 className="text-2xl font-bold text-white tracking-wide">MERN Stack</h3>
            <p className="text-sky-400 font-medium mt-1 uppercase tracking-widest text-sm">Developer</p>
          </div>
        </div>
      ),
    },
  ],
  AECCI: [
    {
      title: "Asian Exporters Chamber of Commerce and Industry",
      description:
        "Completed a Frontend Developer Internship at AECCI. Contributed to the development of responsive web interfaces and interactive components using modern frontend technologies.",
      logo: "/logos/1766508138301.jpeg",
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
      logo: "/logos/aecci-logo.png",
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
          Sep 2025 - Dec 2025 · Navi Mumbai, India
        </div>
      ),
    },
  ],
};

export const HACKATHON_CONTENTS = {
  HACKVERSE: [
    {
      title: "HACKVERSE 2.0 Hackathon",
      description:
        "Participated as a Team Leader in a 24-hour hackathon. Led a team (Coderaft) to conceptualize and build an innovative Telemedicine Queue Optimization System.",
      logo: "/logos/hackverse.jpeg",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/hackproject.jpeg" alt="Hackverse" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },

    {
      title: "Project & Tech Stack",
      description:
        "Developed a system using priority scheduling, machine learning for duration prediction, and a fairness algorithm. Integrated Socket.io for real-time queue status updates.",
      logo: "/logos/hackproject.jpeg",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hackathon/hackverse.jpeg" alt="Hackverse" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "Successfully optimized patient queues vs normal queues, reducing waiting time and demonstrating better performance. Gained real-world problem-solving and teamwork experience.",
      logo: "/logos/pose.jpeg",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hackathon/hackverse3.jpg" alt="Hackverse" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },
  ],
  BUILD_IT: [
    {
      title: "Pragati 2.0 Build-it On",
      description:
        "Participated in the Pragati 2.0 Build-it On Hackathon organized by Thakur College of Engineering and Technology (TCET), Mumbai. Collaborated with team members from Watumull Institute (WIEECT) to develop an innovative project. Gained valuable experience in rapid prototyping, teamwork, and problem-solving under strict time constraints.",
      logo: "/logos/build it on.jpg",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hackathon/buildit1.jpg" alt="Build-it On" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },
  ],
  IIT_PATNA: [
    {
      title: "Frontend Odyssey Challenge",
      description:
        "Participated in the 'Frontend Odyssey: The Interactive Web Experience Challenge' organized by Indian Institute of Technology (IIT), Patna on Unstop.",
      logo: "/logos/iitpatna.jpg",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hackathon/iitpatna1.jpg" alt="IIT Patna" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },
    {
      title: "Competition Focus",
      description:
        "The competition focused on crafting highly interactive web experiences, rigorously testing frontend skills, creativity, and the ability to build engaging user interfaces. Showcased frontend development expertise alongside top participants in a competitive environment hosted by a premier institute.",
      logo: "/logos/lifeof.png",
      content: (
        <div className="h-full w-full flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hackathon/iitpatna2.jpg" alt="IIT Patna" className="w-full h-full object-cover rounded-xl border border-gray-700/50" />
        </div>
      ),
    },
  ],
};

export const WINNING_CONTENTS = {
  WINNER: [
    {
      title: "Runner-Up: Frontend Odyssey",
      description: (
        <div className="flex flex-col gap-4 text-base md:text-lg">
          <p>
            🏆 Proud to share that I achieved the Runner-Up position in the <strong>Frontend Odyssey: The Interactive Web Experience Challenge</strong> organized by Indian Institute of Technology (IIT), Patna in collaboration with Unstop! 🚀
          </p>
          <p>
            This achievement reflects my passion for frontend development, creativity, and building engaging web experiences. Participating in this challenge helped me enhance my problem-solving abilities and improve my practical development skills. 🌐✨
          </p>
        </div>
      ),
      logo: "/logos/winiit.png",
    },
    {
      title: "Continuous Growth & Projects",
      description: (
        <div className="flex flex-col gap-4 text-base md:text-lg">
          <p>
            This journey has been incredibly rewarding, fueling my drive to create seamless, performant, and visually stunning web applications.
          </p>
          <p>
            I’m continuously exploring and building innovative web projects to grow as a developer.<br />
          </p>
          <a
            href="https://life-of-developers.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-colors w-fit shadow-md shadow-sky-500/20"
          >
            🌍 View Winning Project
          </a>
        </div>
      ),
      logo: "/logos/lifeof.png",
    },
  ]
};

export const GTAG = "G-5HCTL2TJ5W";