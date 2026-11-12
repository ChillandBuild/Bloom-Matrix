import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { jsonLd, SITE_URL } from "@/lib/schema";
import { formatPostDate, getPost, INSIGHT_POSTS } from "@/lib/content/insights";

// Only posts listed in the content file exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHT_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/insights/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
    },
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: "Bloom Matrix", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <PageHero
        eyebrow={`Insights · ${formatPostDate(post.date)} · ${post.author}`}
        titleSegments={[{ text: post.title }]}
        description={post.description}
        flowerRotation={8}
      />

      <article className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-container-margin space-y-6">
          {post.body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="font-bm-serif text-2xl md:text-3xl text-ink pt-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 font-inter text-ink/75 leading-relaxed">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="font-inter text-ink/75 leading-relaxed">
                {block.text}
              </p>
            );
          })}
          <p className="font-inter text-sm pt-6 border-t border-ink/10">
            <Link href="/insights" className="text-oxblood font-semibold hover:underline">
              ← All insights
            </Link>
          </p>
        </div>
      </article>

      <CTABand />
    </main>
  );
}
