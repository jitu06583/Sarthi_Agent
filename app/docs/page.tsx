import type { Metadata } from "next";
import { CodeBlock, DocSection, PageHero } from "@/components/CodeBlock";

export const metadata: Metadata = { title: "How to use — SARTHI Agent" };

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6">
      <PageHero
        eyebrow="Guide"
        title={<>How to use <span className="text-brand-gradient">SARTHI</span></>}
        sub="From install to your first conversation in under five minutes — then the commands you'll use every day."
      />

      <DocSection step="Step 1" title="Install">
        <p>One line on Linux, macOS, WSL2, or Termux:</p>
        <CodeBlock lines={["curl -fsSL https://sarthi-agent.vercel.app/install.sh | bash"]} />
        <p>On native Windows, run this in PowerShell:</p>
        <CodeBlock lines={["iex (irm https://sarthi-agent.vercel.app/install.ps1)"]} />
        <p>
          The installer handles everything — Python, Node.js, and all dependencies. No admin
          rights needed. Prefer source? Clone the <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">sarthi-agent</code> folder and run{" "}
          <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">uv pip install -e &quot;.[all]&quot;</code>.
        </p>
      </DocSection>

      <DocSection step="Step 2" title="Set up your model">
        <CodeBlock lines={["sarthi setup    # full setup wizard", "sarthi model    # or just pick a provider & model"]} />
        <p>
          SARTHI works with any LLM provider — see the{" "}
          <a href="/api-config" className="font-semibold text-royal hover:underline">LLM API configuration guide</a>{" "}
          for OpenRouter, Nous Portal, OpenAI, and more.
        </p>
      </DocSection>

      <DocSection step="Step 3" title="Start chatting">
        <CodeBlock
          lines={[
            "sarthi          # interactive terminal UI",
            "sarthi gateway  # connect Telegram, Discord, Slack, WhatsApp…",
            "sarthi doctor   # diagnose any issue",
          ]}
        />
        <p>
          Inside a conversation, slash commands give you control — they work the same in the
          terminal and on messaging platforms:
        </p>
        <CodeBlock
          title="everyday commands"
          lines={[
            "/new         start a fresh conversation",
            "/model       switch provider or model",
            "/skills      browse your agent's learned skills",
            "/personality set a personality",
            "/compress    compress context, keep going",
            "/usage       see token usage",
            "/undo /retry fix the last turn",
          ]}
        />
      </DocSection>

      <DocSection step="Going further" title="Let it work while you're away">
        <p>
          Ask SARTHI to schedule anything in plain language — it has a built-in cron system with
          delivery to any connected platform:
        </p>
        <CodeBlock
          lines={[
            '❯ "every morning at 7, summarize my inbox and send it to telegram"',
            "✓ Scheduled: morning-inbox · daily 07:00 → Telegram",
          ]}
        />
        <p>
          It can also spawn parallel subagents for big jobs, search its own past sessions, and
          write scripts that call its tools directly. The more you use it, the more it learns —
          that&apos;s the point.
        </p>
      </DocSection>
    </div>
  );
}
