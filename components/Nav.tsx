"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { BrandNavLockup } from "./BrandLogo";

const links = [
  { href: "/docs", label: "How to use" },
  { href: "/create", label: "Create your agent" },
  { href: "/api-config", label: "LLM APIs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/download", label: "Download" },
];

export function Nav() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <nav className="glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl pl-5 pr-3 sm:pl-6 sm:pr-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="SARTHI home"
        >
          <BrandNavLockup className="h-9 sm:h-10" />
        </Link>

        {/* Center nav links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-royal"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-2 md:flex">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-3 py-2 text-sm font-semibold text-royal hover:underline"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-xl border border-ink/15 px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-royal/40 hover:text-royal"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-royal"
              >
                Sign in
              </Link>
              <Link
                href="/download"
                className="rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
              >
                Get SARTHI free
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="p-2 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 transition hover:bg-ink/5 hover:text-royal"
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-2 border-ink/10" />
            {session ? (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-royal"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-royal"
                >
                  Sign in with Google
                </Link>
                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-white shadow-card"
                >
                  Get SARTHI free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
