import Link from "next/link";

/**
 * Full baked hero image (Sarthi Agent_ HERO.png) with real, working CTA buttons
 * overlaid exactly on top of the drawn ones. Button geometry matches the source
 * design (container-query units so text scales with the image at every width).
 *
 * - Primary  → /download  ("Download for Desktop")   covers the gradient button
 * - Secondary→ /create    ("Create Your Agent")       covers the white button
 */
export function HeroBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pt-6 md:pt-8">
      <div className="hero-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/hero-full.png"
          alt="SARTHI Agent — Your AI Companion. Your Path to Victory."
          className="hero-banner-img"
        />

        {/* Download for Desktop — overlays the gradient button */}
        <Link
          href="/download"
          aria-label="Download for Desktop"
          className="hero-cta hero-cta-primary"
          style={{ left: "5.22%", top: "69.7%", width: "15.8%", height: "6.15%" }}
        >
          <span>Download for Desktop</span>
          <span className="hero-cta-arrow" aria-hidden="true">&#8594;</span>
        </Link>

        {/* Create Your Agent — overlays the white button */}
        <Link
          href="/create"
          aria-label="Create Your Agent"
          className="hero-cta hero-cta-secondary"
          style={{ left: "21.55%", top: "69.7%", width: "14.65%", height: "6.15%" }}
        >
          <svg className="hero-cta-play" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10.4" fill="none" stroke="#1746d8" strokeWidth="1.6" />
            <path d="M10 8.4 L16 12 L10 15.6 Z" fill="#1746d8" />
          </svg>
          <span>Create Your Agent</span>
        </Link>
      </div>
    </section>
  );
}
