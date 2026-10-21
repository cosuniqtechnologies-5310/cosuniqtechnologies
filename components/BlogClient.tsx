"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts, BlogPost } from "./blogData";
import styles from "./Blog.module.css";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Engineering", "Design & UX", "Mobile", "AI & Automation", "Cloud & DevOps"];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = filteredPosts[0] || blogPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <section className={styles.blogSection}>
      <div className="container">
        {/* Category filter pills */}
        <div className={styles.filterBar}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featured && (
          <article className={styles.featuredCard}>
            <div className={styles.featuredThumb}>
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                decoding="async"
                width={700}
                height={440}
              />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.categoryTag}>{featured.category}</span>
              <h2 className={styles.featuredTitle}>
                <Link href={`/blog/${featured.slug}`} style={{ color: 'inherit' }}>
                  {featured.title}
                </Link>
              </h2>
              <p className={styles.featuredSummary}>{featured.summary}</p>
              <div className={styles.metaInfo}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiCalendar /> {featured.date}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiClock /> {featured.readTime}
                </span>
              </div>
              <Link href={`/blog/${featured.slug}`} className={styles.readMoreBtn}>
                Read full article <FiArrowRight />
              </Link>
            </div>
          </article>
        )}

        {/* Remaining Articles Grid */}
        <div className={styles.articlesGrid}>
          {rest.map(post => (
            <article key={post.slug} className={styles.articleCard}>
              <div className={styles.cardThumb}>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={380}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.categoryTag} style={{ marginBottom: '0.75rem' }}>{post.category}</span>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className={styles.cardSummary}>{post.summary}</p>
                <div className={styles.cardFooter}>
                  <span style={{ fontSize: '0.8rem', color: '#777777', fontWeight: 600 }}>{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn} style={{ fontSize: '0.88rem' }}>
                    Read <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
