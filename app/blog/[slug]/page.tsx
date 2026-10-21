import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import InitReveal from "../../../components/InitReveal";
import InnerBanner from "../../../components/InnerBanner";
import FinalCta from "../../../components/FinalCta";
import { blogPosts } from "../../../components/blogData";
import styles from "../../../components/Blog.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Cosuniq Technologies",
    };
  }

  return {
    title: `${post.title} | Cosuniq Blogs`,
    description: post.summary,
    keywords: [
      ...(post.keywords || []),
      post.category,
      "Cosuniq Technologies",
      "software engineering",
      "design",
      "tech blog"
    ],
    openGraph: {
      title: `${post.title} | Cosuniq Technologies`,
      description: post.summary,
      url: `https://cosuniq.in/blog/${slug}`,
      images: [{ url: post.image || "/assets/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Cosuniq Technologies`,
      description: post.summary,
      images: [post.image || "/assets/og-image.png"],
    },
    alternates: { canonical: `https://cosuniq.in/blog/${slug}` },
  };
}

function renderFormattedText(text: string) {
  const parts = [];
  const regex = /\[(.*?)\]\((.*?)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];

    if (url.startsWith('/')) {
      parts.push(
        <Link
          key={`${match.index}-${url}`}
          href={url}
          style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 600 }}
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${match.index}-${url}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 600 }}
        >
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find next post for navigation
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cosuniq.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://cosuniq.in/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://cosuniq.in/blog/${slug}`
      }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": post.image ? (post.image.startsWith("http") ? post.image : `https://cosuniq.in${post.image}`) : "https://cosuniq.in/assets/og-image.png",
    "author": {
      "@type": "Organization",
      "@id": "https://cosuniq.in/#organization",
      "name": "Cosuniq Technologies",
      "url": "https://cosuniq.in"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://cosuniq.in/#organization",
      "name": "Cosuniq Technologies"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cosuniq.in/blog/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <InitReveal />
      <InnerBanner
        eyebrow={`INSIGHTS • ${post.category.toUpperCase()}`}
        title={post.title}
        description={post.summary}
        bgImage={post.image}
      />
      <article className={styles.singleArticleRoot}>
        <div className="container">
          <div className={styles.articleContainer}>
            {/* Top Navigation & Author Byline Row */}
            <div className={styles.topNavMetaRow}>
              <Link href="/insights" className={styles.backLink}>
                <FiArrowLeft /> All articles
              </Link>

              <div className={styles.authorBadge}>
                <div className={styles.authorAvatar}>
                  {post.author.slice(0, 1)}
                </div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{post.author}</span>
                  <div className={styles.authorMeta}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FiCalendar size={13} /> {post.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FiClock size={13} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Hero Image */}
            <div className={styles.articleHeroImg}>
              <img
                src={post.image}
                alt={post.title}
                width={820}
                height={460}
                loading="eager"
              />
            </div>

            {/* Content Blocks */}
            <div className={styles.articleContent}>
              {post.content.map((section, idx) => (
                <section key={idx}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={idx === 0 && pIdx === 0 ? styles.leadParagraph : undefined}
                    >
                      {renderFormattedText(p)}
                    </p>
                  ))}

                  {section.callout && (
                    <div className={styles.calloutBox}>
                      “{section.callout}”
                    </div>
                  )}

                  {section.bullets && (
                    <ul className={styles.bulletsList}>
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          {renderFormattedText(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Author Box at Bottom */}
            <div className={styles.bottomAuthorCard}>
              <div className={styles.bottomAuthorAvatar}>
                {post.author.slice(0, 1)}
              </div>
              <div className={styles.bottomAuthorInfo}>
                <h3>{post.author}</h3>
                <p>
                  Specialized insights and engineering practices from Cosuniq Technologies. We design, build, and scale high-performance web applications, mobile platforms, and digital systems.
                </p>
              </div>
            </div>

            {/* Article Footer Navigation */}
            <footer className={styles.articleNavFooter}>
              <Link href="/blog" className={styles.backLink}>
                <FiArrowLeft /> All Articles
              </Link>

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 700,
                    color: 'var(--brand)',
                    fontSize: '0.95rem'
                  }}
                >
                  <span>Next: {nextPost.title.slice(0, 36)}...</span>
                  <FiArrowRight />
                </Link>
              )}
            </footer>
          </div>
        </div>
      </article>

      <FinalCta />
    </>
  );
}
