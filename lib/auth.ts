import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
);

export const authOptions: AuthOptions = {
  providers: authConfigured
    ? [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ]
    : [],
  pages: { signIn: "/signin" },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET ?? "sarthi-dev-secret-change-me",
};
