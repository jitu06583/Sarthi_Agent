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
