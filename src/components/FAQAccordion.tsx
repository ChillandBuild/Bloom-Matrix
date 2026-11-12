import { faqPageSchema, jsonLd, type FAQItem } from "@/lib/schema";

/**
 * FAQ list plus its FAQPage JSON-LD. Built on native <details>/<summary> so
 * every answer is in the server-rendered HTML from the first byte — search
 * engines and AI crawlers read the answers without clicking anything. The
 * first item starts open.
 */
export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="border-t border-ink/10">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqPageSchema(items))} />
      {items.map((item, index) => (
        <details key={item.question} className="group border-b border-ink/10" open={index === 0}>
          <summary className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="font-inter font-semibold text-ink text-base group-hover:text-oxblood transition-colors">
              {item.question}
            </h3>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
              className="shrink-0 text-oxblood transition-transform duration-300 group-open:rotate-45"
            >
              <path d="M9 3 V15 M3 9 H15" />
            </svg>
          </summary>
          <div className="pb-5 pr-8">
            <p className="font-inter text-sm text-ink/65 leading-relaxed">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
