export function CodeBlock({ title, lines }: { title?: string; lines: string[] }) {
  return (
    <div className="glass-deep overflow-hidden rounded-xl">
      {title && (
        <p className="border-b border-white/10 px-4 py-2 font-mono text-xs text-white/50">{title}</p>
      )}
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-teal-100">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

export function DocSection({
  step,
  title,
  children,
}: {
  step?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass rounded-2xl p-6 sm:p-8">
      {step && (
        <p className="text-xs font-semibold uppercase tracking-widest text-peacock">{step}</p>
      )}
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/70">{children}</div>
    </section>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="mx-auto max-w-3xl pt-14 text-center">
      <p className="inline-block rounded-full border border-peacock/30 bg-peacock/10 px-3 py-1 text-xs font-semibold tracking-wide text-peacock">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-ink/60">{sub}</p>
    </div>
  );
}
