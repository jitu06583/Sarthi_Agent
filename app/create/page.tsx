import type { Metadata } from "next";
import { CodeBlock, DocSection, PageHero } from "@/components/CodeBlock";

export const metadata: Metadata = { title: "Create your agent — SARTHI" };

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6">
      <PageHero
        eyebrow="Build"
        title={<>Create <span className="text-brand-gradient">your own agent</span></>}
        sub="SARTHI isn't one agent — it's a foundation. Shape its personality, teach it skills, wire it into your platforms, and it becomes yours."
      />

      <DocSection step="1 · Identity" title="Give it a soul">
        <p>
          Your agent&apos;s persona lives in a single file — <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">SOUL.md</code> in
          your SARTHI home directory. Write who it is, how it speaks, and what it cares about:
        </p>
        <CodeBlock
          title="~/.sarthi/SOUL.md"
          lines={[
            "# Sarthi",
            "You are Sarthi — a calm, sharp guide.",
            "Speak simply. Prefer action over explanation.",
            "You know Jitendra's projects and priorities.",
          ]}
        />
        <p>Or switch personalities on the fly with <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">/personality</code>.</p>
      </DocSection>

      <DocSection step="2 · Knowledge" title="Teach it your world">
        <p>
          Drop an <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">AGENTS.md</code> context file into any project folder — your
          agent reads it automatically and understands the project. Memory does the rest: SARTHI
          curates what it learns about you into persistent memory, across every session.
        </p>
        <CodeBlock
          lines={[
            "my-project/",
            "├── AGENTS.md      ← project context your agent always sees",
            "└── …",
          ]}
        />
      </DocSection>

      <DocSection step="3 · Skills" title="Let it learn — or teach it directly">
        <p>
          Skills are reusable procedures. SARTHI creates them <em>autonomously</em> after complex
          tasks and improves them during use. You can also write one yourself — a skill is just a
          folder with a <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">SKILL.md</code>:
        </p>
        <CodeBlock
          title="~/.sarthi/skills/weekly-report/SKILL.md"
          lines={[
            "---",
            "name: weekly-report",
            "description: Build my Monday status report",
            "---",
            "1. Read the sprint board export",
            "2. Summarize wins, risks, next steps",
            "3. Save as report-{date}.md",
          ]}
        />
        <p>
          Browse what your agent has learned with <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">/skills</code>. Skills follow the
          open <a href="https://agentskills.io" className="font-semibold text-royal hover:underline">agentskills.io</a> standard.
        </p>
      </DocSection>

      <DocSection step="4 · Reach" title="Put it where you live">
        <CodeBlock
          lines={[
            "sarthi gateway setup   # connect Telegram, Discord, Slack…",
            "sarthi gateway start   # your agent is now reachable 24/7",
          ]}
        />
        <p>
          One gateway process serves every platform with shared memory — start a thought on
          Telegram, finish it in the terminal. Add MCP servers for any extra tools your agent
          needs.
        </p>
      </DocSection>

      <DocSection step="5 · Autonomy" title="Give it a schedule">
        <p>
          The final step from assistant to agent: recurring work it does without you.
        </p>
        <CodeBlock
          lines={[
            '❯ "every friday 5pm, back up my notes and message me a summary"',
            "✓ Scheduled: notes-backup · Fri 17:00 → WhatsApp",
          ]}
        />
        <p>
          Your agent now knows you, learns from every task, reaches you anywhere, and works on its
          own. That&apos;s a SARTHI. <span className="font-semibold text-brand-gradient">Knows You. Grow With You.</span>
        </p>
      </DocSection>
    </div>
  );
}
