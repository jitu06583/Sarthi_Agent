# SARTHI Website

Official website for **SARTHI Agent** — *Knows You. Grow With You.*
Notion-inspired, glassmorphism on paper texture, animated particle-S hero.

**Design & Developed by Jitendra Singh Thakur**

## Stack

Next.js 14 (App Router) · Tailwind CSS · NextAuth (Google sign-in) · deploys free on Vercel.

## Run locally (VS Code)

```bash
cd sarthi-website
npm install
npm run dev        # http://localhost:3000
```

## Enable Google sign-in (5 minutes, free)

1. Go to https://console.cloud.google.com/apis/credentials
2. Create a project (e.g. "SARTHI") → **Create credentials → OAuth client ID**
3. Configure the consent screen (External, app name SARTHI, your email)
4. Application type: **Web application**
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Copy the Client ID + Secret into `.env.local`:

```bash
cp .env.example .env.local
# fill GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
# NEXTAUTH_SECRET: run  openssl rand -base64 32  (or any long random string)
```

Restart `npm run dev` — the Sign in button now works.

## Deploy free on Vercel

1. Push this folder to a GitHub repo
2. https://vercel.com → **New Project** → import the repo (framework auto-detected)
3. Add environment variables: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`,
   and `NEXTAUTH_URL=https://YOUR-PROJECT.vercel.app`
4. In Google Cloud, add the production redirect URI:
   `https://YOUR-PROJECT.vercel.app/api/auth/callback/google`
5. Deploy. Free Hobby plan is enough.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero (animated S), live terminal demo, features, CTA |
| `/docs` | How to use SARTHI |
| `/create` | Create your own agent (soul, memory, skills, gateway, cron) |
| `/api-config` | LLM API / provider configuration |
| `/pricing` | Free & open source + model cost options |
| `/download` | Desktop app + CLI install |
| `/signin` | Google sign-in |
| `/dashboard` | Signed-in setup checklist |
