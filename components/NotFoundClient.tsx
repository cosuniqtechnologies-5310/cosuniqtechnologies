"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiHome,
  FiCpu,
  FiBriefcase,
  FiBookOpen,
  FiUsers,
  FiMail,
  FiArrowLeft,
  FiCompass,
  FiArrowUpRight,
} from "react-icons/fi";
import styles from "./NotFound.module.css";

const QUICK_ROUTES = [
  {
    href: "/",
    title: "Mission Control",
    sub: "Return to the Cosuniq homepage",
    icon: <FiHome />,
  },
  {
    href: "/services",
    title: "Capabilities & Services",
    sub: "Web apps, mobile, AI & custom software",
    icon: <FiCpu />,
  },
  {
    href: "/portfolio",
    title: "Selected Showcase",
    sub: "Real-world client software & brands",
    icon: <FiBriefcase />,
  },
  {
    href: "/insights",
    title: "Engineering Insights",
    sub: "Architecture guides, tech blogs & tutorials",
    icon: <FiBookOpen />,
  },
  {
    href: "/careers",
    title: "Careers & Open Roles",
    sub: "Join our engineering team in Udumalpet",
    icon: <FiUsers />,
  },
  {
    href: "/contact",
    title: "Direct Transmission",
    sub: "Discuss a new product build or audit",
    icon: <FiMail />,
  },
];

export default function NotFoundClient() {
  const router = useRouter();

  return (
    <div className={styles.root}>
      {/* Ambient background glows */}
      <div className={styles.cosmicGlow1} aria-hidden="true" />
      <div className={styles.cosmicGlow2} aria-hidden="true" />

      <div className={styles.container}>
        {/* Orbital Status Badge */}
        <div className={styles.statusBadge}>
          <span className={styles.pulseDot} />
          <span>Orbital Coordinates Not Found</span>
        </div>

        {/* 404 Headline */}
        <h1 className={styles.codeTitle}>404</h1>
        <h2 className={styles.heading}>Lost in the Digital Cosmos</h2>
        <p className={styles.description}>
          The digital destination you are attempting to reach has drifted beyond our reachable orbit, was moved to a new trajectory, or never existed in this universe.
        </p>

        {/* Quick Navigation Cards Grid */}
        <nav className={styles.navGrid} aria-label="Quick site destinations">
          {QUICK_ROUTES.map((route, idx) => (
            <Link key={idx} href={route.href} className={styles.navCard}>
              <div className={styles.cardIcon}>{route.icon}</div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>
                  {route.title} <FiArrowUpRight size={14} style={{ opacity: 0.7 }} />
                </div>
                <div className={styles.cardSub}>{route.sub}</div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className={styles.actionRow}>
          <Link href="/" className={styles.primaryBtn}>
            <FiCompass size={17} /> Back to Homepage
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className={styles.secondaryBtn}
            aria-label="Go back to the previous page"
          >
            <FiArrowLeft size={16} /> Go to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
