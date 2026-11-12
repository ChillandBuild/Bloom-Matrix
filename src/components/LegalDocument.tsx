import type { ReactNode } from "react";

export type LegalSection = { heading?: string; body: ReactNode };

/** Plain, readable body for the Privacy Policy and Terms of Use pages. */
export default function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-3xl mx-auto px-container-margin space-y-8">
        {sections.map((section, index) => (
          <div key={section.heading ?? index}>
            {section.heading && (
              <h2 className="font-bm-serif text-2xl text-ink mb-2">{section.heading}</h2>
            )}
            <p className="font-inter text-ink/75 leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
