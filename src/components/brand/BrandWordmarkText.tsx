import type React from "react";

interface BrandWordmarkTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text with every "A"/"a" swapped for an inverted-V mark — two
 * square-capped strokes meeting at a point, no crossbar — sized to the same
 * cap-height and advance width as a normal capital letter (0.72em / 0.6em,
 * matching Inter's own cap-height ratio) rather than the full line box, so it
 * sits flush with the surrounding letters instead of towering over them.
 *
 * The mark is drawn by masking the real letter's box (the glyph itself is
 * transparent), so the "A" stays ordinary inline text: DOM text, innerText,
 * copy/paste and accessibility checks all read the full word. Without it, anything that reads the page as
 * text (search engines, AI crawlers, copy/paste, screen readers) saw
 * "BLOOM MTRIX".
 */
/** The inverted-V, as a mask: only its alpha matters. */
const A_MARK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 62 72'%3E%3Cpath d='M31 3 L59 69 M31 3 L3 69' fill='none' stroke='black' stroke-width='12' stroke-linecap='square'/%3E%3C/svg%3E\")";

/** Inter's descent is ~0.24em, so this puts the mark's foot on the baseline. */
const A_STYLE: React.CSSProperties = {
  WebkitTextFillColor: "transparent",
  backgroundColor: "currentColor",
  WebkitMaskImage: A_MARK,
  maskImage: A_MARK,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "0.62em 0.72em",
  maskSize: "0.62em 0.72em",
  WebkitMaskPosition: "center calc(100% - 0.24em)",
  maskPosition: "center calc(100% - 0.24em)",
};

export default function BrandWordmarkText({ text, className }: BrandWordmarkTextProps) {
  return (
    <span className={className}>
      {Array.from(text).map((ch, i) =>
        ch.toLowerCase() === "a" ? (
          <span key={i} style={A_STYLE}>
            {ch}
          </span>
        ) : (
          <span key={i}>{ch}</span>
        )
      )}
    </span>
  );
}
