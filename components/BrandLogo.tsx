/* Real SARTHI logo assets (from /public/brand). No redrawn artwork. */

export function BrandMark({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/mark-192.png"
      alt="SARTHI logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}

export function BrandHero({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-square.png"
      alt="SARTHI — Knows You. Grow With You."
      className={`logo-hero h-auto w-full object-contain ${className}`}
    />
  );
}

/* Horizontal nav lockup: mark + "SARTHI" wordmark, pre-composited and aligned
   from the real logo art (2x for retina). Single image = no alignment drift. */
export function BrandNavLockup({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/nav-lockup.png"
      alt="SARTHI"
      className={`w-auto object-contain ${className}`}
    />
  );
}

/* Just the "SARTHI" wordmark, cropped straight from the real logo file — its
   actual font, not an HTML approximation. */
export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/word-sarthi.png"
      alt="SARTHI"
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}

/* Full lockup: mark + "SARTHI / AGENT" wordmark + tagline, cropped straight
   from the real logo file. Use this wherever the wordmark needs to render in
   its actual font (nav, footer) instead of an HTML text approximation. */
export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-lockup.png"
      alt="SARTHI AGENT — Knows You. Grow With You."
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}
