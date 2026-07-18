import type { Metadata } from "next";
import { CodeBlock, PageHero } from "@/components/CodeBlock";

export const metadata: Metadata = { title: "Download — SARTHI Agent" };

const RELEASES = "https://github.com/jitu06583/sarthi-agent_desktop/releases/latest/download";

const platforms = [
  {
    os: "Windows",
    kind: "Desktop app",
    note: "Native app with the full SARTHI experience — chat, skills, memory, scheduling.",
    downloads: [{ label: "Download for Windows (.exe)", href: `${RELEASES}/Sarthi-0.17.0-win-x64.exe` }],
    icon: "M3 5.5L10.5 4.4V11.5H3V5.5ZM3 18.5V12.5H10.5V19.6L3 18.5ZM11.5 19.8V12.5H21V21L11.5 19.8ZM21 3V11.5H11.5V4.2L21 3Z",
  },
  {
    os: "macOS",
    kind: "Desktop app",
    note: "Apple Silicon (M1/M2/M3/M4). Unsigned build — first launch needs a right-click → Open.",
    downloads: [{ label: "Download for macOS (.dmg)", href: `${RELEASES}/Sarthi-0.17.0-mac-arm64.dmg` }],
    icon: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.84-.86 3.3-.75 1.22.1 2.15.58 2.98 1.32-2.73 1.66-2.15 5.3.75 6.37-.63 1.86-1.45 3.7-2.11 5.23zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z",
  },
  {
    os: "Linux",
    kind: "Desktop app",
    note: "Pick the format that matches your distro.",
    downloads: [
      { label: "AppImage (any distro)", href: `${RELEASES}/Sarthi-0.17.0-linux-x86_64.AppImage` },
      { label: ".deb (Debian/Ubuntu)", href: `${RELEASES}/Sarthi-0.17.0-linux-amd64.deb` },
      { label: ".rpm (Fedora/RHEL)", href: `${RELEASES}/Sarthi-0.17.0-linux-x86_64.rpm` },
    ],
    icon: "M12 2c1.66 0 3 1.34 3 3v3.5c0 .83.34 1.63.93 2.22l2.57 2.57A5 5 0 0120 16.83V19a3 3 0 01-3 3H7a3 3 0 01-3-3v-2.17a5 5 0 011.5-3.54l2.57-2.57c.59-.59.93-1.39.93-2.22V5c0-1.66 1.34-3 3-3z",
  },
];

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <PageHero
        eyebrow="Download"
        title={<>SARTHI on <span className="text-brand-gradient">every desk</span></>}
        sub="A native desktop app for Windows, macOS, and Linux — plus the terminal CLI it's built on. All from one open-source repo."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {platforms.map((p) => (
          <div key={p.os} className="glass flex flex-col rounded-2xl p-6 transition hover:shadow-lift">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-ink/80" fill="currentColor" aria-hidden="true">
              <path d={p.icon} />
            </svg>
            <h2 className="mt-4 font-display text-xl font-semibold text-ink">{p.os}</h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-peacock">{p.kind}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.note}</p>
            <div className="mt-4 space-y-2">
              {p.downloads.map((d, i) => (
                <a
                  key={d.href}
                  href={d.href}
                  className={
                    i === 0
                      ? "block rounded-xl bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-white shadow-card transition hover:opacity-90"
                      : "block rounded-xl border border-ink/15 px-4 py-2.5 text-center text-sm font-medium text-ink/80 transition hover:border-royal/40 hover:text-royal"
                  }
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">Prefer the terminal?</h2>
          <p className="mt-2 text-sm text-ink/60">
            SARTHI is also a standalone CLI agent — same brain, no desktop shell. Build it from
            source for now:
          </p>
          <div className="mt-4 space-y-3">
            <CodeBlock
              title="clone and run the CLI"
              lines={[
                "git clone https://github.com/jitu06583/sarthi-agent_desktop.git",
                "cd sarthi-agent_desktop",
                "npm install",
                "python run_agent.py --help",
              ]}
            />
          </div>
          <p className="mt-4 text-xs text-ink/50">
            All desktop builds above are compiled automatically from this same repo via GitHub
            Actions — see the{" "}
            <a
              href="https://github.com/jitu06583/sarthi-agent_desktop/releases/latest"
              className="font-medium text-royal hover:underline"
            >
              latest release
            </a>{" "}
            for checksums and source archives.
          </p>
        </div>
      </div>
    </div>
  );
}
