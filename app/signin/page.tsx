import type { Metadata } from "next";
import { authConfigured } from "@/lib/auth";
import { SignInCard } from "./SignInCard";

export const metadata: Metadata = { title: "Sign in — SARTHI Agent" };

export default function SignInPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-10">
      <SignInCard configured={authConfigured} />
    </div>
  );
}
