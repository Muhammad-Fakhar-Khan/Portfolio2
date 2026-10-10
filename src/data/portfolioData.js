export const personalInfo = {
  name: "Muhammad Fakhar Khan",
  shortName: "Fakhar",
  title: "IT Support Engineer & Full-Stack Developer",
  tagline: "Building high-performance web applications, robust IT infrastructure, and immersive 3D/VR experiences.",
  email: "fakharkhan3312@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/Muhammad-Fakhar-Khan",
  linkedin: "https://www.linkedin.com/in/muhammad-fakhar-khan/",
  resumeUrl: "#",
  bio: `I am an IT Support Engineer and Full-Stack Developer with a Bachelor of Science in Computer Engineering from Sir Syed University of Engineering and Technology (SSUET). Currently managing critical IT infrastructure at Samba Bank Limited, I combine deep operational hardware/network expertise with a passionate background in modern web engineering (React, Next.js, Node.js, Tailwind CSS) and award-winning 3D/VR development (MindScape-VR).`,
  quickFacts: [
    { label: "Experience", value: "3+ Years", icon: "Briefcase" },
    { label: "Key Focus", value: "React & Full-Stack", icon: "Code2" },
    { label: "Infrastructure", value: "Samba Bank Ltd", icon: "ShieldCheck" },
    { label: "Awards", value: "2x Hackathon Winner", icon: "Award" },
  ]
};

export const stats = [
  { value: "1.5+", label: "Years Experience", description: "In IT support & web development" },
  { value: "15+", label: "Projects Completed", description: "From full-stack apps to VR simulations" },
  { value: "2", label: "National Awards", description: "40th IEEEP & Technova 2025" },
  { value: "99.9%", label: "Uptime Maintained", description: "Enterprise infrastructure reliability" },
];

export const experiences = [
  {
    role: "IT Support Engineer",
    company: "Samba Bank Limited",
    period: "FEB 2026 - Present",
    type: "Full-Time",
    location: "Karachi, Pakistan",
    description: "Responsible for managing and maintaining enterprise system infrastructure, desktop provisioning, active directory administration, network troubleshooting, and ensuring secure continuous operations across banking branches.",
    achievements: [
      "Streamlined desktop configuration and automated workstation rollouts across departments.",
      "Conducted network diagnostics and peripheral system monitoring, ensuring strict banking security standards.",
      "Delivered swift L1/L2 incident resolution with high SLA compliance and user satisfaction."
    ],
    skills: ["System Infrastructure", "Active Directory", "Network Monitoring", "Hardware Diagnostics", "Windows Server", "ITIL"]
  },
  {
    role: "Senior WordPress & Frontend Developer",
    company: "Stolidzone Technologies",
    period: "2024 - 2025",
    type: "Contract / Full-Time",
    location: "Karachi, Pakistan",
    description: "Led development of high-performance WordPress client applications, architecting custom backend workflows, fixing database bottlenecks, and crafting responsive frontend components.",
    achievements: [
      "Optimized client site load times by over 50% via database indexing, caching strategies, and asset minification.",
      "Engineered bespoke WordPress themes and plugins integrated with third-party payment gateways and REST APIs.",
      "Mentored junior team members in modern JavaScript and responsive CSS best practices."
    ],
    skills: ["WordPress", "PHP", "MySQL", "JavaScript (ES6+)", "PageSpeed Optimization", "Tailwind CSS", "REST APIs"]
  },
  {
    role: "Web Development Intern",
    company: "Cohexify",
    period: "2023-2024",
    type: "Internship",
    location: "Karachi, Pakistan",
    description: "Developed modular client web application interfaces from Figma wireframes, tested cross-browser compatibility, and integrated frontends with backend APIs.",
    achievements: [
      "Implemented responsive UI layouts using React.js and modern styling libraries.",
      "Collaborated in Agile sprints to ship user-friendly web portals ahead of schedule."
    ],
    skills: ["React.js", "JavaScript", "HTML5/CSS3", "Git/GitHub", "Responsive Web Design"]
  },
  {
    role: "Web Development Intern",
    company: "KunjiSoft Technologies",
    period: "2021",
    type: "Internship",
    location: "Karachi, Pakistan",
    description: "Assisted senior developers in building web application frontends, resolving UI bugs, and constructing MySQL database schemas for client portals.",
    achievements: [
      "Constructed clean, reusable UI components and conducted usability testing.",
      "Assisted in database query formulation and backend endpoint testing."
    ],
    skills: ["Frontend Development", "PHP", "MySQL", "Bootstrap", "UI/UX Prototyping"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Sir Syed University of Engineering and Technology (SSUET)",
    location: "Karachi, Pakistan",
    period: "2021 - 2025",
    details: "Comprehensive coursework in Software Engineering, Object-Oriented Programming, Computer Networks, Database Systems, Computer Graphics, Operating Systems, and Microprocessors.",
    capstone: "MindScape-VR: Educational VR Simulation Platform (Awarded 2nd place at 40th IEEEP & 3rd place at Technova 2025)"
  }
];

export const projects = [
  {
    id: "mindscape-vr",
    title: "MindScape-VR",
    subtitle: "Educational VR Simulation Platform",
    category: "3D & VR",
    description: "An award-winning interactive VR educational platform built with Unity, C#, Flutter, Firebase, and custom Blender 3D assets. Designed to immerse students in visual, hands-on scientific and technical concepts.",
    longDescription: "MindScape-VR revolutionizes educational environments by taking theoretical concepts and rendering them in fully interactive 3D virtual spaces. Built using Unity and C# with spatialized 3D audio and physics-driven interactions, paired with a companion Flutter mobile dashboard connected to Firebase for progress tracking.",
    tags: ["Unity", "C#", "Flutter", "Firebase", "Blender 3D", "VR Interaction"],
    award: "2nd Place @ 40th IEEEP & 3rd Place @ Technova 2025",
    image: "/images/mindscape_vr.jpg",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: true,
    highlights: [
      "Secured 2nd Prize at 40th All Pakistan IEEEP International Symposium",
      "Won 3rd Place at Technova 2025 National Tech Competition",
      "Interactive 3D physics engine and custom 3D asset modeling in Blender",
      "Real-time learner analytics synced via Google Firebase"
    ]
  },
  {
    id: "zylithics",
    title: "Zylithics",
    subtitle: "Digital Agency Web Application",
    category: "Web Apps",
    description: "A multi-disciplinary digital agency portfolio application built with React.js and Tailwind CSS featuring modern glassmorphism aesthetics, dynamic service showcases, and interactive quote estimation.",
    longDescription: "Zylithics provides an agency-grade web presence built for high conversion. Featuring dark-mode aesthetics, fluid micro-interactions, dynamic case studies filter, responsive testimonials, and an interactive cost calculator for clients.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"],
    award: null,
    image: "/images/zylithics.jpg",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: true,
    highlights: [
      "Lighthouse performance score of 98+ with zero layout shifts",
      "Fluid glassmorphic UI components with dark mode glowing accents",
      "Interactive project filtering and animated state transitions",
      "Integrated lead capture and client consultation workflow"
    ]
  },
  {
    id: "cafe-hawaii",
    title: "Cafe Hawaii",
    subtitle: "Tropical Dining & Reservation Platform",
    category: "Web Apps",
    description: "A tropical restaurant website demo with category-based menu browsing, chef special showcases, party reservations, and online table booking hosted on Vercel.",
    longDescription: "Cafe Hawaii delivers a tropical culinary digital experience. Customers can explore categorized menus (Starters, Island Mains, Tropical Beverages, Desserts), view rich ingredient breakdowns, reserve tables for special events, and check live restaurant hours.",
    tags: ["React.js", "Tailwind CSS", "Vercel", "JavaScript", "Responsive UI"],
    award: null,
    image: "/images/cafe_hawaii.jpg",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: true,
    highlights: [
      "Dynamic category filtering for culinary menus with dietary badges",
      "Interactive table & private party reservation booking system",
      "Fully responsive mobile-first menu navigation",
      "High-speed edge deployment on Vercel"
    ]
  },
  {
    id: "wedd-and-casual",
    title: "Wedd & Casual",
    subtitle: "Luxury Apparel E-Commerce Portal",
    category: "E-Commerce",
    description: "A modern e-commerce web interface for luxury bridal and wedding wear alongside trendy casual apparel collections, equipped with filtering, cart workflows, and interactive galleries.",
    longDescription: "Wedd & Casual is an e-commerce showcase engineered with React and Tailwind CSS. It provides smooth product discovery across couture wedding collections and modern everyday wear, featuring quick view modals, size selection guides, cart state management, and an aesthetic lookbook.",
    tags: ["React.js", "Tailwind CSS", "Context API", "E-Commerce UI", "Responsive Design"],
    award: null,
    image: "/images/wedd_casual.jpg",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: true,
    highlights: [
      "Comprehensive product filtering by occasion, size, fabric, and pricing",
      "Interactive product quick-view modal and dynamic image zoom",
      "Persistent shopping cart state and checkout flow mockup",
      "Curated bridal lookbook with high-resolution imagery"
    ]
  },
  {
    id: "it-infrastructure-toolkit",
    title: "IT Support & Network Audit Suite",
    subtitle: "Enterprise Diagnostics & Automation Scripts",
    category: "IT & Systems",
    description: "Automated diagnostic scripts and workstation health inspection tools built to accelerate hardware troubleshooting, subnet scanning, and active directory audits.",
    longDescription: "Developed to enhance enterprise IT operations at Samba Bank, this suite includes PowerShell and Python automation scripts for remote workstation diagnostics, network interface latency tracking, and automated service health verification.",
    tags: ["PowerShell", "Python", "Active Directory", "Network Diagnostics", "Windows Server"],
    award: null,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: false,
    highlights: [
      "Automated batch audit for workstation security compliance",
      "Subnet IP discovery and ping latency diagnostic report generation",
      "Active Directory group policy sanity checker"
    ]
  },
  {
    id: "wp-performance-booster",
    title: "Custom WordPress Engine & Optimizer",
    subtitle: "High-Speed CMS Architecture",
    category: "Web Apps",
    description: "Bespoke PHP/MySQL WordPress framework engineered for optimal Core Web Vitals, lazy asset streaming, and scalable database query indexing.",
    longDescription: "Engineered at Stolidzone Technologies to eliminate bloated third-party page builders, achieving sub-second load times on heavy content publishing portals.",
    tags: ["PHP", "WordPress", "MySQL", "REST API", "Tailwind CSS"],
    award: null,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://github.com/Muhammad-Fakhar-Khan",
    githubUrl: "https://github.com/Muhammad-Fakhar-Khan",
    featured: false,
    highlights: [
      "Achieved 95+ Google PageSpeed mobile score across 8+ production websites",
      "Custom REST API endpoints for decoupled frontend components",
      "Automated database caching and image WebP conversions"
    ]
  }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    color: "from-cyan-500 to-blue-600",
    description: "Building responsive, accessible, and ultra-fast client-side applications.",
    skills: [
      { name: "JavaScript (ES6+)", level: 92, icon: "⚡" },
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "HTML5 / Semantic Web", level: 95, icon: "🌐" },
      { name: "CSS3 / Modern Layouts", level: 90, icon: "✨" },
      { name: "Bootstrap", level: 88, icon: "🅱️" },
      { name: "Three.js / WebGL Basics", level: 70, icon: "🧊" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: "Server",
    color: "from-purple-500 to-indigo-600",
    description: "Designing RESTful APIs, server logic, and structured database architectures.",
    skills: [
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "PHP", level: 85, icon: "🐘" },
      { name: "Laravel", level: 75, icon: "🔴" },
      { name: "C# / .NET", level: 78, icon: "🎯" },
      { name: "MySQL", level: 88, icon: "🐬" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "PostgreSQL", level: 76, icon: "🐘" },
    ]
  },
  {
    id: "tools",
    title: "Tools & 3D / Creative",
    icon: "Wrench",
    color: "from-emerald-500 to-teal-600",
    description: "Developer tooling, version control, 3D modeling, and modern deployment.",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Vercel / Netlify", level: 90, icon: "▲" },
      { name: "Figma UI Prototyping", level: 85, icon: "🖌️" },
      { name: "Unity Engine", level: 80, icon: "🎮" },
      { name: "Blender 3D", level: 75, icon: "🍩" },
      { name: "Postman API", level: 88, icon: "📮" },
      { name: "Vite / Webpack", level: 86, icon: "⚡" },
    ]
  },
  {
    id: "it-infra",
    title: "IT Infrastructure & Security",
    icon: "Shield",
    color: "from-amber-500 to-rose-600",
    description: "Enterprise system administration, networking, and IT service desk management.",
    skills: [
      { name: "Active Directory", level: 90, icon: "👥" },
      { name: "Windows Server", level: 88, icon: "🪟" },
      { name: "Network Routing / DNS / DHCP", level: 85, icon: "🔌" },
      { name: "Hardware Diagnostics & Repair", level: 92, icon: "🔧" },
      { name: "ITIL Incident Handling", level: 85, icon: "📋" },
      { name: "Endpoint Security & Anti-Malware", level: 88, icon: "🛡️" },
    ]
  }
];

export const certificationsAndAchievements = [
  {
    title: "2nd Place Winner - MindScape-VR",
    organization: "40th All Pakistan IEEEP Multi-Topic International Symposium",
    year: "2025",
    type: "Award",
    icon: "Trophy"
  },
  {
    title: "3rd Place Winner - MindScape-VR",
    organization: "Technova 2024 National Tech Competition",
    year: "2025",
    type: "Award",
    icon: "Award"
  },
  {
    title: "Enterprise IT Support & Network Ops",
    organization: "Samba Bank Limited",
    year: "FEB 2026 - Present",
    type: "Professional",
    icon: "ShieldCheck"
  },
  {
    title: "B.S. in Computer Engineering",
    organization: "Sir Syed University of Engineering and Technology",
    year: "2021 - 2025",
    type: "Degree",
    icon: "GraduationCap"
  }
];
