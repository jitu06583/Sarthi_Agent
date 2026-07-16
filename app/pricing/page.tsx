import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/CodeBlock";

export const metadata: Metadata = { title: "Pricing — SARTHI Agent" };

const included = [
  "The full agent — terminal UI, desktop app, messaging gateway",
  "Self-improving skills & persistent memory",
  "Scheduled automations (cron) on every platform",
  "All 40+ tools, subagents, MCP integrations",
  "Every LLM provider — bring your own key",
  "MIT licensed — modify it, ship it, own it",
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <PageHero
        eyebrow="Pricing"
        title={<>Free. <span className="text-brand-gradient">Actually free.</span></>}
        sub="SARTHI is open source under the MIT license. No seats, no tiers, no trial clocks. You only ever pay your chosen LLM provider for tokens — and free-tier models exist too."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        {/* Free plan */}
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:col-span-3">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />
          <p className="text-xs font-semibold uppercase tracking-widest text-peacock">SARTHI Agent</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-6xl font-semibold text-ink">₹0</span>
            <span className="pb-2 text-ink/50">forever</span>
          </div>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/download"
            className="mt-8 inline-block w-full rounded-2xl bg-brand-gradient px-6 py-3.5 text-center text-sm font-semibold text-white shadow-card transition hover:opacity-90"
          >
            Get SARTHI free
          </Link>
        </div>

        {/* Model costs explainer */}
        <div className="glass rounded-3xl p-8 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
            What about model costs?
          </p>
          <div className="mt-4 space-y-5 text-sm leading-relaxed text-ink/70">
            <p>
              SARTHI talks to the LLM provider <em>you</em> choose. Your options:
            </p>
            <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
              <p className="font-semibold text-ink">Free-tier models</p>
              <p className="mt-1 text-ink/60">
                OpenRouter and Hugging Face offer free models. ₹0 total cost.
              </p>
            </div>
            <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
              <p className="font-semibold text-ink">Pay-as-you-go</p>
              <p className="mt-1 text-ink/60">
                Your own API key — pay only for the tokens you use.
              </p>
            </div>
            <div className="rounded-xl border border-ink/10 bg-white/60 p-4">
              <p className="font-semibold text-ink">One subscription</p>
              <p className="mt-1 text-ink/60">
                <a
                  href="https://portal.nousresearch.com/manage-subscription"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-royal hover:underline"
                >
                  Nous Portal
                </a>{" "}
                bundles 300+ models plus web search, image generation, and TTS —{" "}
                <code className="font-mono text-xs">sarthi setup --portal</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink/50">
        Self-host on a ₹400/month VPS, your laptop, or serverless clouds that cost nearly nothing
        when idle. Your agent, your infrastructure, your data.
      </p>
    </div>
  );
}
