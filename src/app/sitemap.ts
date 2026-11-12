import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { INSIGHT_POSTS } from "@/lib/content/insights";

/**
 * Real last-updated date for each page (YYYY-MM-DD). When you change a page's
 * content, bump its date here in the same commit — search engines use it to
 * decide what to re-crawl, so every page sharing the build date is useless.
 * Insight posts take their dates from the content file automatically.
 */
const PAGES: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-11-12", priority: 1 },
  { path: "/services", lastModified: "2026-11-12", priority: 0.9 },
  { path: "/products", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/products/anril", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/about", lastModified: "2026-11-12", priority: 0.7 },
  { path: "/contact", lastModified: "2026-11-12", priority: 0.7 },
  { path: "/uae", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/uk", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/malaysia", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/singapore", lastModified: "2026-11-12", priority: 0.8 },
  { path: "/insights", lastModified: "2026-11-12", priority: 0.6 },
  { path: "/privacy", lastModified: "2026-11-04", priority: 0.3 },
  { path: "/terms", lastModified: "2026-11-04", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: "monthly",
    priority: page.priority,
  }));

  const posts: MetadataRoute.Sitemap = INSIGHT_POSTS.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
