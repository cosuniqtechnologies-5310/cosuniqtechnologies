export interface ServiceData {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  metaTitle: string;
  metaDesc: string;
  bannerImage: string;
  deliverables: {
    num: string;
    title: string;
    desc: string;
  }[];
  techStack: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  caseStudy: {
    title: string;
    tag: string;
    metricVal: string;
    metricLbl: string;
    desc: string;
    link: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export const servicesMap: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    name: "Web Development",
    eyebrow: "01 / HIGH-PERFORMANCE WEB ENGINEERING",
    heroTitle: "Web applications engineered for velocity, scale & security.",
    heroDesc: "We build modern enterprise web applications, customer portals, and high-converting marketing platforms using Next.js, React, Node.js, and cloud-native architecture.",
    metaTitle: "Web Development Services | Next.js & React Engineering",
    metaDesc: "Custom web development services by Cosuniq Technologies. Building enterprise-grade, lightning-fast web applications with Next.js, TypeScript, and Node.js.",
    bannerImage: "/assets/images/laptop.webp",
    deliverables: [
      {
        num: "01",
        title: "Modern SaaS & Web Applications",
        desc: "Full-stack cloud applications built with robust state management, role-based access, and sub-second data synchronization."
      },
      {
        num: "02",
        title: "Enterprise Portals & Dashboards",
        desc: "Data-dense interfaces optimized for deep analytics, transactional auditing, and operational management."
      },
      {
        num: "03",
        title: "Headless CMS & Content Systems",
        desc: "Dynamic editorial publishing workflows built on Sanity, Strapi, or Contentful with instantaneous static rebuilds."
      },
      {
        num: "04",
        title: "API Design & Microservices",
        desc: "Scalable REST and GraphQL backend architectures engineered for zero bottleneck transactions and high concurrency."
      },
      {
        num: "05",
        title: "Speed & Core Web Vitals Audits",
        desc: "Deep frontend performance optimization achieving 95+ Google Lighthouse scores and sub-second Largest Contentful Paint."
      },
      {
        num: "06",
        title: "Custom Integrations & Webhooks",
        desc: "Bi-directional connections with CRM, ERP, Stripe, payment rails, marketing automation, and third-party SaaS tools."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Docker", "AWS", "GraphQL"],
    process: [
      { step: "Phase 01", title: "Architecture & Schema", desc: "We map out data models, server boundaries, API endpoints, and caching strategies." },
      { step: "Phase 02", title: "Sprint-Based Development", desc: "Rapid iterative agile builds with bi-weekly staging deployments and live test access." },
      { step: "Phase 03", title: "Automated QA & Security", desc: "End-to-end integration testing, vulnerability scans, and strict type safety validation." },
      { step: "Phase 04", title: "Cloud Deployment", desc: "Zero-downtime rolling releases with automated CI/CD pipelines and immutable infrastructure." },
      { step: "Phase 05", title: "Monitoring & Evolution", desc: "Telemetry tracking, error reporting, uptime alarms, and ongoing performance tuning." }
    ],
    caseStudy: {
      title: "Sellgy Multi-Vendor Marketplace",
      tag: "E-Commerce & High Concurrency",
      metricVal: "4.2x",
      metricLbl: "Faster Checkout Speed",
      desc: "Re-engineered core web architecture from a slow monolithic stack to Next.js and Node.js microservices, handling 10k+ concurrent shoppers flawlessly.",
      link: "/case-studies"
    },
    faqs: [
      { q: "What tech stack do you recommend for new web applications?", a: "For modern production web apps, we primarily build with Next.js (App Router), TypeScript, Tailwind CSS on the frontend, and Node.js or Go with PostgreSQL and Redis on the backend deployed on AWS or Vercel." },
      { q: "How long does a custom web development project take?", a: "A focused corporate web portal or MVP takes approximately 4–8 weeks. Complex multi-tenant SaaS platforms typically take 10–16 weeks with sprint-by-sprint staging releases." },
      { q: "Do you build SEO-friendly web applications?", a: "Yes. All web applications are engineered with server-side rendering (SSR) or static site generation (SSG), automatic OpenGraph metadata, structured JSON-LD schemas, and near-perfect Core Web Vitals." }
    ]
  },

  "mobile-apps": {
    slug: "mobile-apps",
    name: "Mobile App Development",
    eyebrow: "02 / CROSS-PLATFORM & NATIVE MOBILE",
    heroTitle: "Intuitive mobile apps engineered for iOS, Android & IoT.",
    heroDesc: "We design, develop, and publish fluid mobile applications with offline-first capabilities, real-time push gateways, and delightful 60fps micro-animations.",
    metaTitle: "Mobile App Development Services | iOS & Android",
    metaDesc: "Cross-platform and native mobile app development by Cosuniq Technologies. Building high-performance iOS and Android apps using React Native and Flutter.",
    bannerImage: "/assets/images/bento-mobile.webp",
    deliverables: [
      {
        num: "01",
        title: "Cross-Platform iOS & Android Apps",
        desc: "Single codebase, native-grade speed. Built with React Native or Flutter to reduce time-to-market by 40%."
      },
      {
        num: "02",
        title: "Offline-First Data Architecture",
        desc: "Reliable mobile experiences that function seamlessly in low-connectivity environments with automatic background syncing."
      },
      {
        num: "03",
        title: "Real-Time Push & Messaging Gateways",
        desc: "High-volume notification infrastructure delivering personalized, targeted mobile alerts with sub-second latency."
      },
      {
        num: "04",
        title: "Mobile Payment & In-App Purchases",
        desc: "Secure Apple Pay, Google Pay, Razorpay, and Stripe integration complying with strict PCI-DSS and app store guidelines."
      },
      {
        num: "05",
        title: "IoT & Hardware Interfacing",
        desc: "Bluetooth Low Energy (BLE), RFID/QR scanning, GPS geolocation, and sensor telemetry integrations."
      },
      {
        num: "06",
        title: "App Store Publishing & Compliance",
        desc: "Complete management of Apple App Store and Google Play submissions, compliance review, and release pipelines."
      }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL", "WebSockets", "App Store Connect"],
    process: [
      { step: "Phase 01", title: "User Flows & Wireframing", desc: "We map intuitive gesture journeys and screen interactions designed for thumb ergonomics." },
      { step: "Phase 02", title: "Native Architecture", desc: "Configuring state containers, secure offline storage, and responsive layout foundations." },
      { step: "Phase 03", title: "API & Device Integration", desc: "Connecting backend endpoints, hardware cameras, sensors, and push notification tokens." },
      { step: "Phase 04", title: "Beta Flight & Field QA", desc: "Distributing TestFlight and Play Store Internal tracks to stress-test on dozens of devices." },
      { step: "Phase 05", title: "Global App Store Launch", desc: "Publishing to stores with optimized app screenshots, descriptions, and release monitoring." }
    ],
    caseStudy: {
      title: "Classbell Institutional Mobile App",
      tag: "120,000+ Active Users",
      metricVal: "120K+",
      metricLbl: "Daily Push Notifications",
      desc: "Delivered a cross-platform mobile app that eliminated fragmented SMS costs and increased school-to-parent engagement to 98.4%.",
      link: "/case-studies"
    },
    faqs: [
      { q: "Should we build with React Native, Flutter, or Native Swift/Kotlin?", a: "For 90% of business applications, React Native or Flutter delivers identical 60fps performance to native code while saving 40–50% on development and maintenance costs. If your app requires heavy custom hardware drivers or complex 3D shaders, native Swift/Kotlin is considered." },
      { q: "Do you handle App Store and Play Store review approvals?", a: "Yes, we handle the entire submission, certificates, privacy manifest declaration, and guideline adherence until the app is live." }
    ]
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI / UX & Product Design",
    eyebrow: "03 / PRODUCT EXPERIENCE & DESIGN SYSTEMS",
    heroTitle: "Interfaces that perform, delight users, and drive conversions.",
    heroDesc: "We merge human cognitive psychology with state-of-the-art visual craft to create digital products that feel intuitive from the very first tap.",
    metaTitle: "UI/UX & Product Design Services | Cosuniq Technologies",
    metaDesc: "World-class UI/UX design, wireframing, user research, and comprehensive Figma design systems engineered by Cosuniq Technologies.",
    bannerImage: "/assets/images/bento-ui-ux.webp",
    deliverables: [
      {
        num: "01",
        title: "User Journey & Experience Mapping",
        desc: "Deep research into user friction points, mental models, and optimal navigational architecture."
      },
      {
        num: "02",
        title: "Interactive Prototyping in Figma",
        desc: "Clickable, high-fidelity prototypes that mimic production behavior for accurate user testing and stakeholder alignment."
      },
      {
        num: "03",
        title: "Scalable Design Systems & Tokens",
        desc: "Comprehensive component libraries with typography, color tokens, and variants designed for effortless developer handoff."
      },
      {
        num: "04",
        title: "Conversion-Focused UI Design",
        desc: "Checkout funnels, onboarding flows, and landing page layouts engineered to eliminate cognitive hesitation."
      },
      {
        num: "05",
        title: "Micro-Interactions & Motion Design",
        desc: "Subtle physics-based animations that reward user input and communicate system status smoothly."
      },
      {
        num: "06",
        title: "Product UX Audits & Redesigns",
        desc: "Rigorous heuristic evaluation of legacy applications with pinpointed recommendations for immediate conversion lift."
      }
    ],
    techStack: ["Figma", "Framer", "Miro", "Principle", "Storybook", "Maze", "Tokens Studio"],
    process: [
      { step: "Phase 01", title: "Discovery & User Empathy", desc: "Auditing competitor products, interviewing stakeholders, and mapping personas." },
      { step: "Phase 02", title: "Information Architecture", desc: "Low-fidelity wireframing to establish layout hierarchies and frictionless paths to action." },
      { step: "Phase 03", title: "Visual Language & Moodboards", desc: "Defining the aesthetic direction: color palettes, typography, spacing, and micro-delights." },
      { step: "Phase 04", title: "Component System Creation", desc: "Building modular, atomic design components with interactive states and variants." },
      { step: "Phase 05", title: "Developer Handoff & Specs", desc: "Exporting production tokens, CSS variables, and redline specs for 100% faithful code execution." }
    ],
    caseStudy: {
      title: "Orangebabe Mobile Storefront Redesign",
      tag: "UI/UX & Mobile Commerce",
      metricVal: "+140%",
      metricLbl: "Mobile Conversion Increase",
      desc: "Completely redesigned mobile UX with one-thumb navigation, joyful micro-animations, and simplified checkout steps.",
      link: "/case-studies"
    },
    faqs: [
      { q: "What deliverables do we receive at the end of a design project?", a: "You receive an organized Figma file with all responsive artboards (desktop, tablet, mobile), an interactive clickable prototype, a modular component library with variants, design tokens (colors, typography, spacing), and complete developer handoff documentation." },
      { q: "Do your designers understand frontend engineering?", a: "Yes. Our design team designs with flexbox, CSS grid, and realistic data limits in mind, ensuring zero handoff friction between design and engineering." }
    ]
  },

  "brand-identity": {
    slug: "brand-identity",
    name: "Brand Identity & Strategy",
    eyebrow: "04 / BRAND STRATEGY & VISUAL SYSTEMS",
    heroTitle: "Brand identities that establish authority and command attention.",
    heroDesc: "We craft iconic logo marks, comprehensive typography systems, and strategic positioning frameworks that turn modern businesses into unmistakable market leaders.",
    metaTitle: "Brand Identity & Visual Strategy | Cosuniq Technologies",
    metaDesc: "Comprehensive brand strategy, logo systems, brand guidelines, and visual identity design by Cosuniq Technologies.",
    bannerImage: "/assets/images/hero-brand.webp",
    deliverables: [
      {
        num: "01",
        title: "Strategic Brand Positioning",
        desc: "Clarifying your unique value proposition, competitive whitespace, and core brand narrative."
      },
      {
        num: "02",
        title: "Logo Systems & Iconography",
        desc: "Versatile, timeless logo marks built with strict mathematical grids for clarity at 16px or 100ft billboards."
      },
      {
        num: "03",
        title: "Color Psychology & Typography",
        desc: "Curated harmonious palettes and custom font pairings that evoke trust, sophistication, and momentum."
      },
      {
        num: "04",
        title: "Brand Style Guide & Rules",
        desc: "Comprehensive multi-page manual detailing spacing, clear zones, forbidden treatments, and usage rules."
      },
      {
        num: "05",
        title: "Digital & Print Collateral",
        desc: "Social media design kits, business cards, pitch deck templates, signage, packaging, and email signatures."
      },
      {
        num: "06",
        title: "Brand Voice & Messaging Manual",
        desc: "Tone of voice guidelines, headline frameworks, and copy examples for consistent marketing communication."
      }
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects", "InDesign"],
    process: [
      { step: "Phase 01", title: "Market Immersion", desc: "Analyzing your competitive landscape, target demographic desires, and brand archetype." },
      { step: "Phase 02", title: "Creative Directions", desc: "Presenting 3 distinct visual conceptual territories with moodboards and preliminary marks." },
      { step: "Phase 03", title: "Refinement & Vector Craft", desc: "Perfecting curves, optical balancing, responsive lockups, and color contrast tests." },
      { step: "Phase 04", title: "Real-World Mockups", desc: "Applying the visual identity across packaging, software screens, apparel, and signage." },
      { step: "Phase 05", title: "Asset Delivery & Brand Book", desc: "Exporting print-ready vector files (SVG, EPS, PDF), web assets, and comprehensive guidelines." }
    ],
    caseStudy: {
      title: "Cosuniq Technologies Visual Identity",
      tag: "Next-Gen Tech Branding",
      metricVal: "100%",
      metricLbl: "Cohesive Brand Architecture",
      desc: "Crafted a distinctive, modern brand identity centered on precision, creative dynamism, and deep technological competence.",
      link: "/about"
    },
    faqs: [
      { q: "What files do we get for our logo?", a: "You receive vectors (SVG, EPS, PDF, AI) for infinite scaling, high-res web transparent PNGs and WebP, black and white mono variations, horizontal and stacked lockups, and social avatar marks." },
      { q: "How many logo concepts do you present?", a: "We present 2–3 thoroughly developed, strategically distinct concepts with real-world mockups rather than dozen unpolished sketches." }
    ]
  },

  "ecommerce": {
    slug: "ecommerce",
    name: "E-Commerce Solutions",
    eyebrow: "05 / HIGH-CONVERSION COMMERCE ARCHITECTURE",
    heroTitle: "E-Commerce platforms engineered for maximum conversion & volume.",
    heroDesc: "From custom Shopify Plus storefronts to headless Next.js commerce engines, we build online shopping experiences that turn casual browsers into loyal repeat buyers.",
    metaTitle: "E-Commerce Development Services | Shopify Plus & Headless",
    metaDesc: "High-conversion e-commerce development by Cosuniq Technologies. Building custom Shopify Plus, WooCommerce, and headless commerce platforms.",
    bannerImage: "/assets/images/orangebabe_mockup.webp",
    deliverables: [
      {
        num: "01",
        title: "Custom Shopify & Shopify Plus",
        desc: "Bespoke themes and custom checkout extensibility apps without clunky third-party app bloat."
      },
      {
        num: "02",
        title: "Headless E-Commerce Frontends",
        desc: "Sub-second page transitions powered by Next.js commerce connecting via GraphQL to Shopify or custom backends."
      },
      {
        num: "03",
        title: "Checkout Optimization & Upsells",
        desc: "Frictionless checkout flows, smart cart drawers, bundle engines, and post-purchase one-click upsells."
      },
      {
        num: "04",
        title: "ERP & Inventory Synchronization",
        desc: "Real-time automated sync across warehouses, retail POS terminals, and multi-channel online marketplaces."
      },
      {
        num: "05",
        title: "Payment Gateway Integrations",
        desc: "Global payment processing: Stripe, Razorpay, Cashfree, PayPal, Apple Pay, and Buy Now Pay Later (BNPL)."
      },
      {
        num: "06",
        title: "Conversion Rate Optimization (CRO)",
        desc: "A/B testing, speed enhancement, and user analytics tracking to maximize Average Order Value (AOV)."
      }
    ],
    techStack: ["Shopify Plus", "Next.js Commerce", "Liquid", "GraphQL", "Stripe", "WooCommerce", "Redis", "Klaviyo"],
    process: [
      { step: "Phase 01", title: "Commerce Audit & Strategy", desc: "Analyzing catalogue taxonomy, shipping logic, payment rails, and conversion drop-offs." },
      { step: "Phase 02", title: "Storefront UX & Design", desc: "Designing high-converting product pages, collection filters, and sticky buy bars." },
      { step: "Phase 03", title: "Theme & Custom App Build", desc: "Coding fast, clean Liquid or React components with zero performance drag." },
      { step: "Phase 04", title: "Inventory & Migration Test", desc: "Migrating customer history, products, SEO redirect maps, and payment test runs." },
      { step: "Phase 05", title: "Launch & Sales Scaling", desc: "Deploying with live order monitoring, analytics tags, and post-launch conversion tuning." }
    ],
    caseStudy: {
      title: "Shopify Inventory Sync 4",
      tag: "15,000+ SKUs Synchronized",
      metricVal: "99.8%",
      metricLbl: "Stock Accuracy",
      desc: "Eliminated overselling and customer cancellation disputes with automated sub-2-second inventory webhooks.",
      link: "/case-studies"
    },
    faqs: [
      { q: "Can you migrate our store from WooCommerce or Magento to Shopify?", a: "Yes. We execute seamless migrations including product catalogues, variant attributes, customer passwords/accounts, historical orders, and 301 SEO URL redirects to protect organic traffic." },
      { q: "How do you ensure our store loads fast?", a: "We avoid installing dozens of slow third-party apps by writing custom lightweight Liquid or React components, compressing assets, and using edge caching." }
    ]
  },

  "ai-software": {
    slug: "ai-software",
    name: "AI & Custom Software",
    eyebrow: "06 / ARTIFICIAL INTELLIGENCE & BESPOKE SOFTWARE",
    heroTitle: "Intelligent software & custom automation built for business advantage.",
    heroDesc: "We engineer proprietary digital platforms, custom CRM/ERP engines, and LLM-powered automation pipelines that transform complex manual work into effortless speed.",
    metaTitle: "AI & Custom Software Development | Cosuniq Technologies",
    metaDesc: "Custom software engineering and AI automation by Cosuniq Technologies. Building bespoke SaaS platforms, CRM/ERP systems, and intelligent workflows.",
    bannerImage: "/assets/images/bento-ai.webp",
    deliverables: [
      {
        num: "01",
        title: "Custom SaaS & Business Platforms",
        desc: "Ground-up software engineering tailored specifically to your exact proprietary business logic."
      },
      {
        num: "02",
        title: "LLM & Generative AI Integration",
        desc: "Intelligent AI agents, automated document summarization, semantic search, and custom knowledge assistants."
      },
      {
        num: "03",
        title: "Custom CRM & Internal Portals",
        desc: "Centralized operational hubs for customer management, invoicing, pipeline tracking, and team delegation."
      },
      {
        num: "04",
        title: "Workflow & Data Automation",
        desc: "Autonomous background pipelines that eliminate hundreds of hours of manual copy-paste spreadsheet entry."
      },
      {
        num: "05",
        title: "Secure Database Architecture",
        desc: "Scalable PostgreSQL, MongoDB, or vector databases designed with strict ACID compliance and automated backups."
      },
      {
        num: "06",
        title: "Enterprise API Gateways",
        desc: "High-throughput microservices connecting proprietary legacy databases with modern cloud apps."
      }
    ],
    techStack: ["Python", "OpenAI / Anthropic APIs", "LangChain", "Node.js", "PostgreSQL", "pgvector", "Docker", "AWS", "FastAPI"],
    process: [
      { step: "Phase 01", title: "Operational Discovery", desc: "Mapping out exact business bottlenecks, manual steps, data schemas, and ROI goals." },
      { step: "Phase 02", title: "Software Architecture", desc: "Designing system flowcharts, database relationships, security protocols, and API contracts." },
      { step: "Phase 03", title: "Agile Development Sprints", desc: "Iterative engineering with interactive staging builds delivered every two weeks." },
      { step: "Phase 04", title: "Stress & Security Audits", desc: "Rigorous unit testing, concurrency load testing, and penetration security validation." },
      { step: "Phase 05", title: "Staff Onboarding & Rollout", desc: "System deployment, team training, documentation delivery, and 24/7 technical support." }
    ],
    caseStudy: {
      title: "Lumen Financial Real-Time Dashboard",
      tag: "Sub-110ms Query Speed",
      metricVal: "<110ms",
      metricLbl: "Query Latency Across 10M Rows",
      desc: "Delivered a custom financial ledger platform providing instantaneous regulatory reports across millions of transaction rows.",
      link: "/case-studies"
    },
    faqs: [
      { q: "Is our proprietary company data safe when integrating AI models?", a: "Yes. We configure private cloud instances and API integrations with zero data retention clauses, ensuring your confidential data is never used to train public foundation models." },
      { q: "Do we own the software code at completion?", a: "Yes, 100%. Upon completion and final payment, all intellectual property, source code, and deployment configs belong entirely to your company." }
    ]
  },

  "cloud-devops": {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    eyebrow: "07 / RESILIENT CLOUD INFRASTRUCTURE",
    heroTitle: "Rock-solid cloud infrastructure, automated CI/CD & 99.99% uptime.",
    heroDesc: "We design, automate, and manage high-availability cloud environments on AWS and Google Cloud that ensure your web and mobile platforms run securely at any scale.",
    metaTitle: "Cloud & DevOps Services | AWS, Docker & CI/CD",
    metaDesc: "Cloud architecture, Kubernetes, automated CI/CD pipelines, and infrastructure management by Cosuniq Technologies.",
    bannerImage: "/assets/images/office.webp",
    deliverables: [
      {
        num: "01",
        title: "AWS & Cloud Architecture",
        desc: "Multi-region, auto-scaling architectures designed according to AWS Well-Architected Framework principles."
      },
      {
        num: "02",
        title: "Automated CI/CD Pipelines",
        desc: "GitHub Actions and GitLab CI workflows that automate testing, building, and zero-downtime production releases."
      },
      {
        num: "03",
        title: "Containerization with Docker & K8s",
        desc: "Consistent development and production runtime environments that scale instantly under traffic spikes."
      },
      {
        num: "04",
        title: "Cloud Cost Optimization",
        desc: "Deep infrastructure audits that reduce unnecessary cloud spend by 25–40% without compromising performance."
      },
      {
        num: "05",
        title: "Security, SSL & Compliance",
        desc: "WAF firewalls, DDoS protection, encrypted storage, and automated vulnerability scanning."
      },
      {
        num: "06",
        title: "24/7 Monitoring & Alerting",
        desc: "Proactive telemetry tracking with Prometheus, Grafana, and Sentry with instant escalation protocols."
      }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Linux", "Cloudflare"],
    process: [
      { step: "Phase 01", title: "Infrastructure Audit", desc: "Reviewing existing server utilization, security flaws, bottlenecks, and billing waste." },
      { step: "Phase 02", title: "Infrastructure as Code", desc: "Writing modular Terraform scripts for predictable, version-controlled cloud provisioning." },
      { step: "Phase 03", title: "CI/CD Pipeline Setup", desc: "Automating branch testing, Docker container builds, and staging preview environments." },
      { step: "Phase 04", title: "Zero-Downtime Migration", desc: "Switching DNS traffic seamlessly with rollback safety nets and live load testing." },
      { step: "Phase 05", title: "Telemetry & SRE Support", desc: "Setting up real-time dashboards, uptime alerts, and regular security patching." }
    ],
    caseStudy: {
      title: "Multi-Region Cloud Deployment",
      tag: "Zero Downtime Deployments",
      metricVal: "99.99%",
      metricLbl: "Production Availability",
      desc: "Architected auto-scaling Docker containers behind AWS Application Load Balancers, surviving traffic spikes with zero service interruptions.",
      link: "/case-studies"
    },
    faqs: [
      { q: "Can you help lower our monthly AWS bill?", a: "Yes. Most cloud setups suffer from idle reserved instances, overprovisioned databases, and unoptimized egress traffic. Our audits regularly reduce cloud infrastructure costs by 25–45%." },
      { q: "Do you offer ongoing DevOps retainer support?", a: "Yes, we offer ongoing infrastructure management, patching, security audits, and guaranteed SLA incident response." }
    ]
  },

  "strategy-consulting": {
    slug: "strategy-consulting",
    name: "Strategy & Consulting",
    eyebrow: "08 / PRODUCT STRATEGY & ROADMAPPING",
    heroTitle: "Clarity, architectural roadmaps & strategic momentum for founders.",
    heroDesc: "Before writing a single line of code, we help ambitious companies clarify their product scope, choose the right technology architecture, and de-risk market execution.",
    metaTitle: "Digital Strategy & Technology Consulting | Cosuniq",
    metaDesc: "Product strategy, technology audits, digital roadmapping, and fractional CTO consulting by Cosuniq Technologies.",
    bannerImage: "/assets/images/bento-strategy.webp",
    deliverables: [
      {
        num: "01",
        title: "Product Scope & MVP Definition",
        desc: "Distilling broad ideas into focused, high-value feature roadmaps ready for swift market validation."
      },
      {
        num: "02",
        title: "Technology Stack Audits",
        desc: "Independent evaluation of existing codebases, scalability bottlenecks, and technical debt risk."
      },
      {
        num: "03",
        title: "Digital Transformation Blueprints",
        desc: "Step-by-step modernization roadmaps for replacing legacy manual processes with modern software."
      },
      {
        num: "04",
        title: "Fractional CTO Advisory",
        desc: "Senior engineering leadership guiding hiring decisions, vendor evaluations, and technical governance."
      },
      {
        num: "05",
        title: "Go-to-Market Tech Planning",
        desc: "Alignment of product release milestones with marketing launches, analytics tracking, and user onboarding."
      },
      {
        num: "06",
        title: "Cost & Timeline Forecasting",
        desc: "Transparent budget modeling, resource planning, and risk mitigation strategies."
      }
    ],
    techStack: ["Miro", "Notion", "Jira", "Figma", "Architecture Blueprints", "KPI Dashboards"],
    process: [
      { step: "Phase 01", title: "Stakeholder Discovery", desc: "Unpacking business models, unit economics, market opportunities, and founder goals." },
      { step: "Phase 02", title: "Landscape & Tech Audit", desc: "Reviewing existing systems, competitor solutions, and architectural trade-offs." },
      { step: "Phase 03", title: "Synthesized Blueprint", desc: "Drafting user journey requirements, technical architecture schemas, and risk matrix." },
      { step: "Phase 04", title: "Budget & Milestone Plan", desc: "Establishing sprint phases, resource allocation, and realistic launch timelines." },
      { step: "Phase 05", title: "Executive Presentation", desc: "Delivering actionable documentation ready for investor review and development execution." }
    ],
    caseStudy: {
      title: "Omnichannel Commerce Strategy",
      tag: "Strategic Architecture",
      metricVal: "6 Weeks",
      metricLbl: "From Discovery to Live MVP",
      desc: "Defined a phased delivery roadmap that allowed the client to start processing real customer revenue 2 months ahead of schedule.",
      link: "/case-studies"
    },
    faqs: [
      { q: "Who is this consulting service for?", a: "It is designed for founders launching new digital products, enterprise leaders modernizing legacy systems, and companies wanting an unbiased technical audit before committing large capital." },
      { q: "What is the final deliverable?", a: "You receive a complete Product Requirements Document (PRD), system architecture diagram, user flow map, sprint roadmap, and precise budget forecast." }
    ]
  }
};
