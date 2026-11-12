/**
 * Insights (blog) posts. Each post gets its own page at /insights/<slug>, is
 * listed on /insights (newest first) and is added to the sitemap with its own
 * date automatically.
 *
 * To publish a post, add an entry below. `date` is ISO (YYYY-MM-DD); `updated`
 * is optional and only needed when a post is edited after publishing. The
 * body is a list of blocks — paragraphs, H2 subheadings and bullet lists —
 * which keeps posts plain data with no markup to break.
 *
 * Posts are sent separately by the team; none are published yet.
 */

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  body: InsightBlock[];
};

export const INSIGHTS_AUTHOR = "Bloom Matrix Team";

export const INSIGHT_POSTS: InsightPost[] = [];

export function getSortedPosts(): InsightPost[] {
  return [...INSIGHT_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): InsightPost | undefined {
  return INSIGHT_POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
