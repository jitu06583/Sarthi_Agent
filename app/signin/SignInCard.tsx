"use client";
import { signIn } from "next-auth/react";
import { BrandMark } from "@/components/BrandLogo";

export function SignInCard({ configured }: { configured: boolean }) {
  return (
    <div className="glass w-full max-w-md rounded-3xl p-8 text-center sm:p-10">
      <BrandMark size={80} className="mx-auto h-20 w-20" />
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
        Welcome to SARTHI
      </h1>
      <p className="mt-2 text-sm text-ink/60">
        Sign in to save your setup progress and manage your agent from the dashboard.
      </p>

      {configured ? (
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-card transition hover:border-royal/40 hover:shadow-lift"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4 5.5l6.3 5.3C41.4 35.4 44 30.2 44 24c0-1.3-.1-2.6-.4-3.9z"/>
          </svg>
          Continue with Google
        </button>
      ) : (
        <div className="mt-8 rounded-2xl border border-amber-400/40 bg-amber-50/70 p-4 text-left text-sm text-amber-900">
          <p className="font-semibold">Google sign-in isn&apos;t configured yet</p>
          <p className="mt-1 leading-relaxed">
            Add <code className="font-mono text-xs">GOOGLE_CLIENT_ID</code> and{" "}
            <code className="font-mono text-xs">GOOGLE_CLIENT_SECRET</code> to your{" "}
            <code className="font-mono text-xs">.env.local</code> (see{" "}
            <code className="font-mono text-xs">.env.example</code>), then restart. Full steps in
            the project README.
          </p>
        </div>
      )}

      <p className="mt-6 text-xs text-ink/40">
        We only use your Google profile for sign-in. Your agent and its data stay on your machines.
      </p>
    </div>
  );
}
