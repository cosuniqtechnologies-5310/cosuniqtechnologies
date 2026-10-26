"use client";

import { useState } from "react";
import styles from "./Careers.module.css";
import { OPEN_JOBS } from "./careersData";

export default function CareersClient() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const departments = ["All", "Engineering", "Mobile", "Design", "Freshers & Walk-In"];

  const filteredJobs =
    selectedDept === "All"
      ? OPEN_JOBS
      : OPEN_JOBS.filter((job) => job.department === selectedDept);

  return (
    <div className={styles.careersPage}>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <span className={styles.spark} />
              We Are Hiring in Udumalpet, Tamil Nadu
            </span>
            <h1 className={styles.title}>
              Build Software That <span className={styles.titleHighlight}>Matters.</span>
            </h1>
            <p className={styles.subtitle}>
              Join Cosuniq Technologies at our Udumalpet headquarters. We are an elite team of engineers and designers building high-speed Next.js web applications, custom enterprise software, and mobile platforms.
            </p>

            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Udumalpet, Tamil Nadu</span>
              </div>
              <div className={styles.metaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>Full-Time & Walk-In Openings</span>
              </div>
              <div className={styles.metaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Direct Mentorship from Core Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars / Culture ────────────────────────────────────────────── */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Engineering Culture</span>
            <h2 className={styles.sectionTitle}>Why Build Your Career at Cosuniq?</h2>
            <p className={styles.sectionDesc}>
              No bloated corporate bureaucracy. You work directly on production-grade software using the modern edge stack.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Modern Tech Stack</h3>
              <p className={styles.pillarDesc}>
                Work with Next.js 15, TypeScript, React Server Components, React Native, and AI workflows instead of legacy PHP or WordPress.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Competitive Compensation</h3>
              <p className={styles.pillarDesc}>
                Attractive salary packages, performance bonuses, transparent milestone appraisals, and rapid career progression.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Real Ownership & Impact</h3>
              <p className={styles.pillarDesc}>
                Direct ownership of software architecture, code reviews, and deployment pipelines. Your code serves real businesses every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ───────────────────────────────────────────────── */}
      <section className={styles.jobsSection} id="openings">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Active Openings</span>
            <h2 className={styles.sectionTitle}>Software Developer Jobs in Udumalpet</h2>
            <p className={styles.sectionDesc}>
              Find your next role at Cosuniq Technologies. Apply directly or walk in to our Udumalpet studio.
            </p>
          </div>

          {/* Department Filters */}
          <div className={styles.filterBar}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`${styles.filterBtn} ${selectedDept === dept ? styles.filterBtnActive : ""}`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className={styles.jobsList}>
            {filteredJobs.map((job) => (
              <article key={job.id} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <div className={styles.jobBadges}>
                    <span className={styles.badgeDepartment}>{job.department}</span>
                    <span className={styles.badgeType}>{job.type}</span>
                    {job.urgent && <span className={styles.badgeUrgent}>Actively Hiring</span>}
                  </div>

                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobDescription}>{job.summary}</p>

                  <div className={styles.jobDetails}>
                    <div className={styles.detailItem}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{job.location}</span>
                    </div>

                    <div className={styles.detailItem}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{job.experience}</span>
                    </div>

                    <div className={styles.detailItem}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <span className={styles.salaryText}>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.jobAction}>
                  <a
                    href={`mailto:founder@cosuniq.in?subject=Application for ${encodeURIComponent(job.title)}&body=Hi Cosuniq Team,%0D%0A%0D%0AI am applying for the ${encodeURIComponent(job.title)} position in Udumalpet.%0D%0A%0D%0APlease find my resume attached.`}
                    className={styles.applyBtn}
                  >
                    Apply Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* ── Walk-In & Direct Contact Card ────────────────────────────── */}
          <div className={styles.walkInCard}>
            <div>
              <span className={styles.sectionEyebrow}>Walk-In Interviews in Udumalpet</span>
              <h3 className={styles.walkInTitle}>Prefer Face-to-Face Walk-In?</h3>
              <p className={styles.walkInDesc}>
                We welcome passionate software engineers, mobile developers, and creative UI/UX designers to walk in directly for an interview and code review session at our Udumalpet office.
              </p>

              <div className={styles.addressBox}>
                <p className={styles.addressTitle}>Udumalpet Studio Address</p>
                <p className={styles.addressText}>
                  Cosuniq Technologies<br />
                  5/233C, Sarathamani Layout, KVS Colony,<br />
                  Udumalaipettai, Tamil Nadu - 642126, India.
                </p>
              </div>

              <div className={styles.walkInTimings}>
                <span>• Monday – Friday: 10:00 AM – 5:00 PM</span>
                <span>• Prior Call Appreciated</span>
              </div>
            </div>

            <div className={styles.walkInActions}>
              <a href="tel:+917358696546" className={styles.callDirectBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call for Walk-In (+91 73586 96546)
              </a>

              <a
                href="mailto:founder@cosuniq.in?subject=Resume Submission - Software Developer Udumalpet&body=Hi Cosuniq Team,%0D%0A%0D%0APlease find my resume attached for consideration for current or future software development opportunities in Udumalpet."
                className={styles.emailResumeBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Resume (founder@cosuniq.in)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
