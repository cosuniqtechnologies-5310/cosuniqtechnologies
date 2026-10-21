import { MetadataRoute } from 'next';
import { servicesMap } from '../components/servicesData';
import { blogPosts } from '../components/blogData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cosuniq.in';
  const lastMod = new Date('2026-10-21');

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academy`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
  ];

  // Individual service pages
  const servicePages: MetadataRoute.Sitemap = Object.keys(servicesMap).map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Individual blog posts
  const blogArticlePages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...corePages, ...servicePages, ...blogArticlePages];
}
