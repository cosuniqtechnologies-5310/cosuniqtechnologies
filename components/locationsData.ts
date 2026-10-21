export interface LocationData {
  slug: string;
  cityName: string;
  region: string;
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  metaTitle: string;
  metaDesc: string;
  bannerImage: string;
  localContext: {
    heading: string;
    description: string;
    highlight: string;
  };
  targetServices: {
    num: string;
    title: string;
    desc: string;
    serviceLink: string;
    serviceName: string;
  }[];
  practicalSolutions: {
    problem: string;
    solution: string;
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

export const locationsMap: Record<string, LocationData> = {
  "coimbatore": {
    slug: "coimbatore",
    cityName: "Coimbatore",
    region: "Western Tamil Nadu",
    eyebrow: "COIMBATORE • ENGINEERING & TECH CORRIDOR",
    heroTitle: "High-performance software engineering & modern web development in Coimbatore.",
    heroDesc: "We partner with ambitious enterprises, industrial manufacturers, healthcare providers, and high-growth startups across Coimbatore to build scalable digital products that endure.",
    metaTitle: "Software Development & Web Design Company in Coimbatore | Cosuniq",
    metaDesc: "Cosuniq Technologies builds enterprise web applications, custom SaaS platforms, mobile apps, and brand systems for growing businesses in Coimbatore.",
    bannerImage: "/assets/images/laptop.webp",
    localContext: {
      heading: "Engineering Digital Power for the Manchester of South India",
      description: "Coimbatore is renowned for precision engineering, manufacturing excellence, higher education, and rapid tech entrepreneurship. As modern businesses expand beyond regional borders, having fragile off-the-shelf templates or slow monolithic websites is no longer viable. Cosuniq Technologies engineers bespoke full-stack web applications, custom ERP/CRM engines, and intuitive design systems built to perform at global standards.",
      highlight: "Precision full-stack code built for scale, reliability, and measurable business impact."
    },
    targetServices: [
      {
        num: "01",
        title: "Enterprise Web Applications",
        desc: "High-concurrency portals and web applications built with Next.js, React, and TypeScript for sub-second page speeds and bulletproof security.",
        serviceLink: "/services/web-development",
        serviceName: "Web Development"
      },
      {
        num: "02",
        title: "Custom Software & SaaS Platforms",
        desc: "Tailor-made operational tools, workflow automations, and custom cloud software replacing fragmented legacy databases.",
        serviceLink: "/services/ai-software",
        serviceName: "AI & Custom Software"
      },
      {
        num: "03",
        title: "UI / UX & Product Design",
        desc: "Human-centered product design, interactive Figma prototypes, and modular design systems that convert visitors into committed buyers.",
        serviceLink: "/services/ui-ux-design",
        serviceName: "UI/UX Design"
      },
      {
        num: "04",
        title: "High-Conversion E-Commerce",
        desc: "Custom headless storefronts and Shopify Plus architectures engineered for high catalogue volumes, instant search, and automated inventory sync.",
        serviceLink: "/services/ecommerce",
        serviceName: "E-Commerce Solutions"
      }
    ],
    practicalSolutions: [
      {
        problem: "Legacy internal desktop software cannot be accessed securely by remote teams or clients.",
        solution: "We re-architect proprietary business logic into modern, role-secured cloud web portals with automated backups and real-time syncing."
      },
      {
        problem: "Slow WordPress or monolithic websites failing Google Core Web Vitals and leaking qualified leads.",
        solution: "We build statically generated, edge-cached web platforms that load in under 1 second and rank with technical SEO excellence."
      },
      {
        problem: "Fragmented mobile user experience causing high customer drop-offs during transactions.",
        solution: "We build intuitive React Native and responsive web applications with frictionless checkout flows and thumb-ergonomic layouts."
      }
    ],
    caseStudy: {
      title: "Sellgy Multi-Vendor Commerce Platform",
      tag: "E-Commerce & High Concurrency",
      metricVal: "4.2x",
      metricLbl: "Faster Checkout Speed",
      desc: "Architected a scalable digital commerce platform handling high concurrent transactions with sub-second page transitions and seamless payment integrations.",
      link: "/case-studies"
    },
    faqs: [
      {
        q: "How does Cosuniq collaborate with businesses in Coimbatore?",
        a: "We work directly with founders, CTOs, and marketing leaders through structured weekly agile sprints, interactive Figma prototypes, and live staging deployments. Direct engineering communication ensures zero handoff delays."
      },
      {
        q: "Can you modernize our existing business software without disrupting active operations?",
        a: "Yes. We specialize in phased migrations — building secure APIs and modern web frontends alongside legacy databases to ensure zero business downtime during transition."
      },
      {
        q: "What technologies do you use for custom software development?",
        a: "We develop primarily with Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Redis, Docker, and AWS cloud infrastructure."
      }
    ]
  },

  "tiruppur": {
    slug: "tiruppur",
    cityName: "Tiruppur",
    region: "Western Tamil Nadu",
    eyebrow: "TIRUPPUR • APPAREL & EXPORT CORRIDOR",
    heroTitle: "Web development & textile e-commerce platforms for businesses in Tiruppur.",
    heroDesc: "We build high-converting e-commerce engines, B2B wholesale portals, and automated inventory software for garment manufacturers, textile exporters, and growing brands in Tiruppur.",
    metaTitle: "Web Development & E-Commerce Solutions in Tiruppur | Cosuniq",
    metaDesc: "Custom web development, apparel export portals, inventory synchronization, and B2B digital solutions for manufacturers and brands in Tiruppur.",
    bannerImage: "/assets/images/orangebabe_mockup.webp",
    localContext: {
      heading: "Digital Transformation for the Global Textile & Knitwear Hub",
      description: "As the knitwear and textile export capital of India, Tiruppur drives billions in international commerce. However, many established manufacturers and fast-growing apparel brands still rely on manual spreadsheets, disconnected offline inventories, or basic static brochures. Cosuniq Technologies builds scalable B2B export portals, automated inventory synchronization systems, and international-standard D2C storefronts that help Tiruppur enterprises scale globally.",
      highlight: "Automating inventory, streamlining B2B buyer inquiries, and scaling direct-to-consumer apparel sales."
    },
    targetServices: [
      {
        num: "01",
        title: "Textile E-Commerce & D2C Stores",
        desc: "High-volume apparel storefronts with advanced color/size variant swatches, lookbooks, sticky buy bars, and lightning-fast checkout.",
        serviceLink: "/services/ecommerce",
        serviceName: "E-Commerce Solutions"
      },
      {
        num: "02",
        title: "B2B Manufacturer & Export Portals",
        desc: "International buyer showcase portals with password-protected wholesale catalogs, sample request tracking, and digital spec sheets.",
        serviceLink: "/services/web-development",
        serviceName: "Web Development"
      },
      {
        num: "03",
        title: "Automated Inventory & ERP Sync",
        desc: "Real-time webhooks connecting Shopify, WooCommerce, and warehouse databases to prevent stock discrepancy and overselling.",
        serviceLink: "/services/ai-software",
        serviceName: "AI & Custom Software"
      },
      {
        num: "04",
        title: "Apparel Brand Identity & Guidelines",
        desc: "Distinctive logo design, packaging collateral, typography, and visual brand manuals that elevate emerging fashion labels.",
        serviceLink: "/services/brand-identity",
        serviceName: "Brand Identity"
      }
    ],
    practicalSolutions: [
      {
        problem: "Stock counts frequently desynchronize between physical factory warehouses and multiple online sales channels.",
        solution: "We build automated webhooks and custom background sync engines that update inventory across all sales channels in under 2 seconds."
      },
      {
        problem: "International garment buyers struggle to browse product catalogs and request fabric samples easily.",
        solution: "We architect clean, responsive B2B digital portals where verified buyers can filter fabric specs, request swatches, and track quotes online."
      },
      {
        problem: "High customer return rates on e-commerce stores due to poor visual presentation and unclear size guides.",
        solution: "We design conversion-optimized product detail pages with interactive size recommenders, multi-angle zoom, and mobile-first ergonomics."
      }
    ],
    caseStudy: {
      title: "Shopify Inventory Sync 4",
      tag: "15,000+ SKUs Synchronized",
      metricVal: "99.8%",
      metricLbl: "Inventory Accuracy",
      desc: "Engineered an automated real-time inventory synchronization engine connecting enterprise warehousing with multi-store channels, eliminating stock disputes.",
      link: "/case-studies"
    },
    faqs: [
      {
        q: "Can you build both B2B wholesale portals and D2C online stores?",
        a: "Yes. We architect hybrid commerce systems that allow retail customers to purchase directly while granting international wholesale buyers tier-based volume pricing and bulk ordering tools."
      },
      {
        q: "How do you handle multi-currency payments for export portals?",
        a: "We integrate global payment gateways such as Stripe, Razorpay International, and PayPal with automated currency conversion and localized tax invoicing."
      },
      {
        q: "Can our existing factory database integrate with our new website?",
        a: "Yes. We build custom REST/GraphQL APIs and automated data pipelines that securely sync product catalogues and order status with your internal systems."
      }
    ]
  },

  "pollachi": {
    slug: "pollachi",
    cityName: "Pollachi",
    region: "Western Tamil Nadu",
    eyebrow: "POLLACHI • AGRO & COMMERCIAL CORRIDOR",
    heroTitle: "Website design & modern software solutions for businesses in Pollachi.",
    heroDesc: "We empower agro-exporters, family-owned enterprises, healthcare clinics, and retail brands in Pollachi with professional website design, custom software, and digital branding.",
    metaTitle: "Website Design & Software Development in Pollachi | Cosuniq",
    metaDesc: "Professional website design, custom business software, and e-commerce development for agro-exporters, local brands, and retail businesses in Pollachi.",
    bannerImage: "/assets/images/office.webp",
    localContext: {
      heading: "Elevating Regional Enterprises to National & International Markets",
      description: "Pollachi is a vital commercial and agricultural center known for coconut and coir exports, agro-processing, education, eco-tourism, and traditional commerce. To capture national markets and international buyer interest, local businesses need more than basic social media pages. Cosuniq Technologies provides high-calibre website development, online storefronts, and brand design that establish credibility and drive direct sales inquiries.",
      highlight: "Modern web architecture and brand identity that communicate trust, quality, and heritage."
    },
    targetServices: [
      {
        num: "01",
        title: "Business Website Design & Development",
        desc: "Custom, fast-loading corporate websites engineered to rank on search engines and convert prospective commercial clients.",
        serviceLink: "/services/web-development",
        serviceName: "Web Development"
      },
      {
        num: "02",
        title: "Agro-Export & Product Catalogs",
        desc: "Digital export showcase portals highlighting international quality certifications, product specifications, and direct inquiry forms.",
        serviceLink: "/services/ecommerce",
        serviceName: "E-Commerce Solutions"
      },
      {
        num: "03",
        title: "Brand Identity, Logos & Packaging",
        desc: "Distinctive logo design, export packaging labels, business stationery, and brand guidelines that elevate local products.",
        serviceLink: "/services/brand-identity",
        serviceName: "Brand Identity"
      },
      {
        num: "04",
        title: "Custom Business Management Tools",
        desc: "Tailored customer database portals, billing systems, and booking managers that automate daily administrative tasks.",
        serviceLink: "/services/ai-software",
        serviceName: "AI & Custom Software"
      }
    ],
    practicalSolutions: [
      {
        problem: "Agro-processing and export firms losing high-value buyers because their digital presence looks outdated.",
        solution: "We build modern, credibility-focused export portals detailing laboratory certifications, export grades, and direct container quote forms."
      },
      {
        problem: "Local retail and service businesses relying solely on word-of-mouth without organic Google visibility.",
        solution: "We build fast, responsive websites with technical local SEO structure that helps customers in Pollachi and nearby towns find services immediately."
      },
      {
        problem: "Family enterprises launching new consumer goods without a cohesive visual identity or retail packaging.",
        solution: "We design complete brand systems — from distinctive logo marks and color palettes to print-ready packaging labels and social media kits."
      }
    ],
    caseStudy: {
      title: "Classbell Institutional Mobile Platform",
      tag: "120,000+ Active Users",
      metricVal: "98.4%",
      metricLbl: "Parent Engagement",
      desc: "Engineered an intuitive mobile application that centralized institutional communication, eliminating fragmented SMS costs and streamlining administrative workflows.",
      link: "/case-studies"
    },
    faqs: [
      {
        q: "Why should a local business in Pollachi invest in a custom website?",
        a: "A custom website provides an authoritative 24/7 digital storefront, builds instant credibility with out-of-town and international clients, and appears on Google when customers search for your products."
      },
      {
        q: "Do you design websites that load quickly on mobile networks in rural areas?",
        a: "Yes. Every website we build uses modern static pre-rendering, WebP image compression, and minimal script bloat to ensure instant loading even on 3G and 4G mobile connections."
      },
      {
        q: "Can we sell our products online with direct payment gateway integration?",
        a: "Yes. We integrate secure UPI, credit card, and net banking gateways like Razorpay, Cashfree, and Stripe with automated WhatsApp order alerts."
      }
    ]
  },

  "udumalpet": {
    slug: "udumalpet",
    cityName: "Udumalpet",
    region: "Western Tamil Nadu",
    eyebrow: "UDUMALPET • REGIONAL DIGITAL STUDIO",
    heroTitle: "Web development & custom software engineering in Udumalpet.",
    heroDesc: "We provide startups, manufacturing units, agricultural suppliers, and educational institutions in Udumalpet with high-performance web development, custom software, and brand design.",
    metaTitle: "Web Development & Software Company in Udumalpet | Cosuniq",
    metaDesc: "Modern website design, custom software development, mobile apps, and branding services for businesses, startups, and institutions in Udumalpet.",
    bannerImage: "/assets/images/brainstorm.webp",
    localContext: {
      heading: "Local Roots, World-Class Creative & Engineering Craft",
      description: "Udumalpet is a rapidly advancing commercial hub with strong manufacturing, renewable wind energy, poultry, and retail sectors. As regional businesses modernize, having reliable software partners who understand local commercial realities while delivering cutting-edge engineering is critical. Cosuniq Technologies brings world-class digital craftsmanship to Udumalpet — building custom software, high-speed websites, and memorable brand identities.",
      highlight: "Direct collaboration, clean modern code, and enduring digital solutions for regional leaders."
    },
    targetServices: [
      {
        num: "01",
        title: "Custom Web Application Development",
        desc: "Fast, modern websites and client portals engineered with Next.js and TypeScript, completely avoiding fragile templates.",
        serviceLink: "/services/web-development",
        serviceName: "Web Development"
      },
      {
        num: "02",
        title: "Bespoke Business Software & CRMs",
        desc: "Custom operational software designed around your exact workflows to manage inventory, billing, customer data, and inquiries.",
        serviceLink: "/services/ai-software",
        serviceName: "AI & Custom Software"
      },
      {
        num: "03",
        title: "Graphic Design, Logos & Brand Identity",
        desc: "Timeless logo design, signage, marketing collateral, and brand strategy that turn regional businesses into trusted household names.",
        serviceLink: "/services/brand-identity",
        serviceName: "Brand Identity"
      },
      {
        num: "04",
        title: "Native & Cross-Platform Mobile Apps",
        desc: "Intuitive iOS and Android applications built with React Native for seamless customer engagement, bookings, and alerts.",
        serviceLink: "/services/mobile-apps",
        serviceName: "Mobile Applications"
      }
    ],
    practicalSolutions: [
      {
        problem: "Local enterprises spending recurring fees on generic software that doesn't fit their actual day-to-day operations.",
        solution: "We build proprietary, tailor-made digital tools that automate your exact business steps with zero unnecessary subscription bloat."
      },
      {
        problem: "Websites built with insecure plugins getting hacked, breaking after updates, or loading sluggishly.",
        solution: "We build secure, static-exported Next.js web applications with immutable code, zero database attack surfaces, and 95+ Lighthouse speed."
      },
      {
        problem: "Inability to find reliable, direct software engineering partners nearby who communicate with complete transparency.",
        solution: "We offer direct, transparent collaboration with core designers and developers, clear pricing, and ongoing support without outsourcing."
      }
    ],
    caseStudy: {
      title: "Cosuniq Technologies Visual Identity System",
      tag: "Brand Strategy & Design",
      metricVal: "100%",
      metricLbl: "In-House Engineering",
      desc: "Developed a comprehensive, iconic visual identity and engineering architecture representing precision, creative dynamism, and technical mastery.",
      link: "/about"
    },
    faqs: [
      {
        q: "What kinds of businesses in Udumalpet do you work with?",
        a: "We work with manufacturers, agricultural and poultry enterprises, retail brands, educational trusts, renewable energy firms, and emerging local startups."
      },
      {
        q: "How long does it take to design and launch a new business website?",
        a: "A focused corporate or institutional website takes 3 to 6 weeks from initial architecture to final testing and deployment."
      },
      {
        q: "Do you offer post-launch maintenance and technical support?",
        a: "Yes. We provide ongoing hosting management, security updates, feature expansions, and technical support to ensure your digital assets always perform."
      }
    ]
  },

  "palani": {
    slug: "palani",
    cityName: "Palani",
    region: "Dindigul & Central Tamil Nadu",
    eyebrow: "PALANI • HOSPITALITY & TRADE REGION",
    heroTitle: "Website design & digital solutions for enterprises in Palani.",
    heroDesc: "We build high-speed hospitality websites, e-commerce storefronts, institutional portals, and brand identities for businesses across Palani and the Dindigul region.",
    metaTitle: "Website Design & Digital Solutions in Palani | Cosuniq",
    metaDesc: "Professional website development, hospitality portals, retail digital platforms, and brand design for businesses and institutions in Palani.",
    bannerImage: "/assets/images/team.webp",
    localContext: {
      heading: "Connecting Heritage Commerce & Hospitality with Modern Digital Velocity",
      description: "Palani is a renowned pilgrimage and cultural destination welcoming millions of visitors annually, fostering an active hospitality, retail, traditional food, and educational ecosystem. To capture high-intent travelers and commercial buyers, businesses need modern, mobile-optimized digital platforms. Cosuniq Technologies delivers high-converting booking portals, authentic product e-commerce sites, and institutional web solutions that operate seamlessly under high seasonal traffic.",
      highlight: "Sub-second mobile speed, direct booking capabilities, and authoritative digital branding."
    },
    targetServices: [
      {
        num: "01",
        title: "Hospitality & Direct Booking Portals",
        desc: "Mobile-first booking systems and hotel websites that allow travelers to reserve directly, eliminating heavy OTA commissions.",
        serviceLink: "/services/web-development",
        serviceName: "Web Development"
      },
      {
        num: "02",
        title: "Traditional Foods & Retail E-Commerce",
        desc: "Online storefronts for authentic local sweets, food products, and retail merchandise with secure pan-India shipping integration.",
        serviceLink: "/services/ecommerce",
        serviceName: "E-Commerce Solutions"
      },
      {
        num: "03",
        title: "Brand Identity, Logos & Packaging",
        desc: "Authentic, memorable logo marks, traditional-modern packaging, and visual identities that build customer loyalty.",
        serviceLink: "/services/brand-identity",
        serviceName: "Brand Identity"
      },
      {
        num: "04",
        title: "Institutional & Trust Web Portals",
        desc: "Clear, accessible, and high-concurrency web platforms for educational trusts, charitable foundations, and community organizations.",
        serviceLink: "/services/ui-ux-design",
        serviceName: "UI/UX Design"
      }
    ],
    practicalSolutions: [
      {
        problem: "Hotels and lodges paying 20–30% in third-party OTA commissions due to lack of an easy direct booking website.",
        solution: "We build fast direct booking engines with integrated UPI and instant WhatsApp confirmation that boost direct reservation profits."
      },
      {
        problem: "Renowned traditional sweet and handicraft producers unable to fulfill delivery orders outside town.",
        solution: "We build high-converting e-commerce storefronts with automated shipping label generation and reliable payment rails."
      },
      {
        problem: "Websites crashing or slowing to a crawl during festival peak seasons when thousands of visitors search simultaneously.",
        solution: "We deploy edge-cached, static-rendered web architectures on modern cloud networks that maintain 100% uptime during traffic surges."
      }
    ],
    caseStudy: {
      title: "Orangebabe E-Commerce Storefront",
      tag: "High-Traffic Retail UX",
      metricVal: "+140%",
      metricLbl: "Mobile Conversion Increase",
      desc: "Designed and engineered an intuitive, mobile-first e-commerce shopping experience with joyful micro-interactions and seamless one-thumb checkout.",
      link: "/case-studies"
    },
    faqs: [
      {
        q: "Can you build a direct hotel booking website with automated room availability?",
        a: "Yes. We build responsive hotel websites with real-time calendar availability, instant payment processing, and automatic customer notification via SMS and WhatsApp."
      },
      {
        q: "How can our traditional confectionery or retail shop sell products across India?",
        a: "We set up an e-commerce platform integrated with domestic shipping partners (Delhivery, Shiprocket, Bluedart) and automated tracking notifications."
      },
      {
        q: "Will our website be easy to navigate on mobile phones for travelers on the go?",
        a: "Yes. All our designs prioritize mobile ergonomics with tap-friendly buttons, clear maps integration, fast click-to-call buttons, and instant loading."
      }
    ]
  }
};
