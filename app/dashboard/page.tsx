import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = { title: "Dashboard — SARTHI Agent" };

const checklist = [
  { label: "Install the SARTHI CLI", href: "/docs", cmd: "curl -fsSL …/install.sh | bash" },
  { label: "Connect your LLM provider", href: "/api-config", cmd: "sarthi model" },
  { label: "Give your agent a soul", href: "/create", cmd: "~/.sarthi/SOUL.md" },
  { label: "Connect a messaging platform", href: "/create", cmd: "sarthi gateway setup" },
  { label: "Schedule your first automation", href: "/docs", cmd: '"every morning 7am…"' },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const first = session.user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="mx-auto max-w-4xl px-6 pt-14">
      <div className="glass rounded-3xl p-8 sm:p-10">
        <div className="flex items-center gap-4">
          {session.user?.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={session.user.image}
              alt=""
              className="h-14 w-14 rounded-full border-2 border-white shadow-card"
            />
          )}
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Namaste, {first} 🙏
            </h1>
            <p className="text-sm text-ink/60">{session.user?.email}</p>
          </div>
        </div>
        <p className="mt-4 max-w-lg text-ink/65">
          Your SARTHI journey starts here. Work through the checklist and your agent will know you
          — and grow with you.
        </p>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink">Setup checklist</h2>
      <div className="mt-4 space-y-3">
        {checklist.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:shadow-lift"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-white">
              {i + 1}
            </span>
            <span className="flex-1 font-medium text-ink">{item.label}</span>
            <code className="hidden font-mono text-xs text-ink/45 sm:block">{item.cmd}</code>
            <svg className="h-4 w-4 text-ink/30" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.2 14.8a1 1 0 010-1.4L10.6 10 7.2 6.6a1 1 0 111.4-1.4l4.1 4.1a1 1 0 010 1.4l-4.1 4.1a1 1 0 01-1.4 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold text-ink">Download the desktop app</h3>
          <p className="mt-1 text-sm text-ink/60">The full SARTHI experience, native on your OS.</p>
          <Link href="/download" className="mt-3 inline-block text-sm font-semibold text-royal hover:underline">
            Go to downloads →
          </Link>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold text-ink">Learn to build skills</h3>
          <p className="mt-1 text-sm text-ink/60">Teach your agent procedures it will keep forever.</p>
          <Link href="/create" className="mt-3 inline-block text-sm font-semibold text-royal hover:underline">
            Create your agent →
          </Link>
        </div>
      </div>
    </div>
  );
}
