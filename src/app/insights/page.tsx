import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { formatPostDate, getSortedPosts } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights from the Bloom Matrix team on custom software development, mobile apps, AI assistants and running software products.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getSortedPosts();

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        titleSegments={[
          { text: "Notes from the team that " },
          { text: "builds and runs", emphasis: true },
          { text: " software." },
        ]}
        description="Practical writing on custom software development, mobile apps, AI assistants and keeping products working after launch."
        flowerRotation={8}
      />

      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-container-margin">
          {posts.length === 0 ? (
            <Reveal>
              <p className="font-inter text-ink/65 leading-relaxed border-t border-ink/10 pt-8">
                Our first posts are on the way. In the meantime,{" "}
                <Link href="/contact" className="text-oxblood font-semibold hover:underline">
                  tell us what you&apos;re building
                </Link>
                .
              </p>
            </Reveal>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={post.slug}>
                  <Reveal delay={Math.min(index * 0.05, 0.2)}>
                    <article className="border-t border-ink/10 py-8">
                      <p className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-2">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.author}
                      </p>
                      <h2 className="font-bm-serif text-2xl md:text-3xl text-ink mb-3">
                        <Link href={`/insights/${post.slug}`} className="hover:text-oxblood transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="font-inter text-ink/65 leading-relaxed max-w-2xl">
                        {post.description}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
