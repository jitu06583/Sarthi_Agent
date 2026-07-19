import Link from "next/link";
import { HeroBanner } from "@/components/HeroBanner";
import { Terminal } from "@/components/Terminal";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    title: "Learns from every task",
    body: "SARTHI creates reusable skills after complex work, improves them during use, and nudges itself to persist what it learned. Your agent on day 30 is smarter than on day 1.",
  },
  {
    title: "Remembers who you are",
    body: "Persistent memory, session search, and a deepening model of your preferences across conversations. You never re-explain yourself.",
  },
  {
    title: "Lives where you do",
    body: "Terminal, desktop app, Telegram, Discord, Slack, WhatsApp, Signal — one agent, one memory, every platform. Send a voice memo; it just works.",
  },
  {
    title: "Any model, no lock-in",
    body: "OpenRouter, Nous Portal, OpenAI, NVIDIA NIM, Hugging Face, or your own endpoint. Switch with one command: sarthi model.",
  },
  {
    title: "Works while you sleep",
    body: "A built-in cron scheduler runs daily reports, nightly backups, and weekly audits — written in plain language, delivered to any platform.",
  },
  {
    title: "Runs anywhere",
    body: "Your laptop, a $5 VPS, Docker, SSH, or serverless clouds that hibernate when idle. Your agent isn't chained to one machine.",
  },
];

const steps = [
  { cmd: "curl -fsSL https://sarthi-agent.vercel.app/install.sh | bash", label: "Install in one line" },
  { cmd: "sarthi setup", label: "Pick your model & keys" },
  { cmd: "sarthi", label: "Start talking" },
];

export default function Home() {
  return (
    <>
      {/* ---------------- Hero (baked banner + real CTAs) ---------------- */}
      <HeroBanner />

      {/* ---------------- Terminal demo ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Watch it <span className="text-brand-gradient">learn</span>
            </h2>
            <p className="mt-3 text-ink/60">
              A real session: SARTHI does the work, notices the pattern, automates it — and keeps
              the skill forever.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-8 max-w-3xl">
          <Terminal />
        </Reveal>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One agent. <span className="text-brand-gradient">A closed learning loop.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article className="glass h-full rounded-2xl p-6 transition hover:shadow-lift">
                <div className="h-1.5 w-10 rounded-full bg-brand-gradient" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 3 steps ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Running in <span className="text-brand-gradient">three commands</span>
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.cmd} className="rounded-2xl border border-ink/10 bg-white/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-peacock">
                    Step {i + 1} — {s.label}
                  </p>
                  <code className="mt-3 block break-all font-mono text-[13px] text-ink/80">
                    $ {s.cmd}
                  </code>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-royal"
              >
                Read the full guide
              </Link>
              <Link
                href="/api-config"
                className="rounded-xl border border-ink/15 px-5 py-3 text-sm font-semibold text-ink/80 transition hover:border-royal/40 hover:text-royal"
              >
                Configure your LLM API
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Your charioteer for the
            <br />
            <span className="text-brand-gradient">age of AI.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink/60">
            Sarthi (सारथी) means charioteer — the trusted guide who knows the road and knows you.
            Free forever, open source, yours.
          </p>
          <Link
            href="/download"
            className="mt-8 inline-block rounded-2xl bg-brand-gradient px-8 py-4 text-sm font-semibold text-white shadow-lift transition hover:opacity-90"
          >
            Get SARTHI free
          </Link>
        </Reveal>
      </section>
    </>
  );
}
