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

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/word-sarthi.png"
      alt="SARTHI"
      className={`w-auto object-contain ${className}`}
    />
  );
}

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-lockup.png"
      alt="SARTHI Agent — Knows You. Grow With You."
      className={`w-auto object-contain ${className}`}
    />
  );
}
