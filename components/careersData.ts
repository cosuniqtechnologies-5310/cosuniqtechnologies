export interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  urgent?: boolean;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const OPEN_JOBS: Job[] = [
  {
    id: "fullstack-developer",
    title: "Senior Full Stack Software Developer (Next.js / TypeScript)",
    department: "Engineering",
    type: "Full Time",
    location: "Udumalpet, Tamil Nadu (In-Office / Hybrid)",
    experience: "1 - 4 Years",
    salary: "₹3,60,000 - ₹7,20,000 / Year",
    urgent: true,
    summary: "Build high-performance web applications, enterprise dashboards, and custom client portals on Next.js 15, React, TypeScript, and serverless edge databases.",
    responsibilities: [
      "Architect and code fast, accessible frontends using Next.js App Router and Tailwind/CSS Modules.",
      "Develop secure RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL/Prisma.",
      "Optimize web applications for 95+ Google Core Web Vitals, sub-second LCP, and zero CLS.",
      "Collaborate directly with designers to turn Figma prototypes into production code."
    ],
    requirements: [
      "Solid proficiency in modern JavaScript/TypeScript, React, Next.js, and CSS layout engines.",
      "Experience integrating relational databases, JWT authentication, and third-party payment APIs.",
      "Strong debugging and performance profiling skills using Chrome DevTools."
    ]
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer (React Native / Flutter)",
    department: "Mobile",
    type: "Full Time",
    location: "Udumalpet, Tamil Nadu",
    experience: "1 - 3 Years",
    salary: "₹3,00,000 - ₹6,00,000 / Year",
    urgent: true,
    summary: "Engineer fluid, cross-platform Android and iOS mobile applications for e-commerce, logistics dispatching, and field operations.",
    responsibilities: [
      "Develop, deploy, and maintain cross-platform mobile apps for iOS and Android.",
      "Implement smooth 60fps micro-animations, offline SQLite caching, and push notifications.",
      "Integrate hardware features including Camera, Geolocation, and Biometric authentication.",
      "Manage app store release lifecycles on Google Play Console and Apple App Store."
    ],
    requirements: [
      "Hands-on experience with React Native or Flutter.",
      "Understanding of state management (Zustand, Redux, or Riverpod) and REST integration.",
      "Familiarity with mobile UI guidelines (Material 3 and iOS Human Interface Guidelines)."
    ]
  },
  {
    id: "uiux-designer",
    title: "UI/UX Product & Web Designer",
    department: "Design",
    type: "Full Time",
    location: "Udumalpet, Tamil Nadu",
    experience: "1 - 3 Years",
    salary: "₹3,00,000 - ₹5,50,000 / Year",
    summary: "Craft iconic visual identities, design systems, mobile mockup interfaces, and high-converting web experiences that elevate brands.",
    responsibilities: [
      "Design end-to-end user flows, interactive prototypes, and wireframes in Figma.",
      "Establish cohesive design tokens, typography scales, and modular design components.",
      "Conduct user journey audits and optimize interfaces for conversion rates and readability.",
      "Collaborate directly with frontend engineers during code reviews for design fidelity."
    ],
    requirements: [
      "Mastery of Figma, auto-layout, components, and interactive prototyping.",
      "Strong portfolio showcasing web application dashboards, landing pages, and mobile UI.",
      "Deep understanding of typography, color contrast compliance (WCAG), and responsive layout grids."
    ]
  },
  {
    id: "walkin-associate-developer",
    title: "Associate Software Developer (Freshers / Walk-In)",
    department: "Freshers & Walk-In",
    type: "Full Time / Walk-In",
    location: "Udumalpet, Tamil Nadu",
    experience: "Freshers / 0 - 1 Year",
    salary: "₹1,80,000 - ₹3,00,000 / Year",
    urgent: true,
    summary: "Direct walk-in and hiring opportunity in Udumalpet for motivated engineering and computer science graduates passionate about full-stack web and app engineering.",
    responsibilities: [
      "Write clean HTML, CSS, and modern JavaScript under the direct mentorship of senior engineers.",
      "Assist in building and testing real-world client websites, internal tools, and mobile features.",
      "Learn and master Git version control, Next.js, and modern software development lifecycles."
    ],
    requirements: [
      "B.E / B.Tech / B.Sc / BCA / MCA in Computer Science, IT, or related technical disciplines.",
      "Basic understanding of JavaScript, HTML, CSS, and relational databases.",
      "High curiosity, strong problem-solving attitude, and hunger to master modern software craftsmanship."
    ]
  }
];
