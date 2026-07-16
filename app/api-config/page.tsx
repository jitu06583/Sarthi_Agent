import type { Metadata } from "next";
import { CodeBlock, DocSection, PageHero } from "@/components/CodeBlock";

export const metadata: Metadata = { title: "LLM API configuration — SARTHI" };

const providers = [
  { name: "OpenRouter", detail: "200+ models behind one key — includes free-tier models", env: "OPENROUTER_API_KEY" },
  { name: "Nous Portal", detail: "300+ models + web search, image gen, TTS under one subscription", env: "sarthi setup --portal" },
  { name: "OpenAI", detail: "GPT models with your own key", env: "OPENAI_API_KEY" },
  { name: "NVIDIA NIM", detail: "Nemotron and hosted open models", env: "NVIDIA_API_KEY" },
  { name: "Hugging Face", detail: "Open models via Inference Providers", env: "HF_TOKEN" },
  { name: "Your own endpoint", detail: "Any OpenAI-compatible server — vLLM, llama.cpp, LM Studio", env: "custom base URL" },
];

export default function ApiConfigPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6">
      <PageHero
        eyebrow="Configuration"
        title={<>Connect <span className="text-brand-gradient">any LLM</span></>}
        sub="SARTHI is model-agnostic. Bring one API key — or point it at your own server — and switch models any time with no code changes."
      />

      <DocSection title="Pick a provider">
        <div className="grid gap-3 sm:grid-cols-2">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl border border-ink/10 bg-white/60 p-4">
              <p className="font-display font-semibold text-ink">{p.name}</p>
              <p className="mt-1 text-sm text-ink/60">{p.detail}</p>
              <code className="mt-2 block font-mono text-xs text-peacock">{p.env}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Configure in one command">
        <CodeBlock
          lines={[
            "sarthi model",
            "",
            "? Choose a provider:  openrouter",
            "? API key:            sk-or-…",
            "? Model:              anthropic/claude-sonnet-4.5",
            "✓ Saved. Switch anytime with /model",
          ]}
        />
        <p>
          Everything lives in <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">~/.sarthi/cli-config.yaml</code> — readable,
          versionable, yours. Set individual values with{" "}
          <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[13px]">sarthi config set</code>.
        </p>
      </DocSection>

      <DocSection title="Switch models mid-conversation">
        <CodeBlock
          lines={[
            "/model openrouter:deepseek/deepseek-chat     # cheap & capable",
            "/model openrouter:anthropic/claude-opus-4.6  # heavyweight",
            "/model nous:Hermes-4-405B                    # open frontier",
          ]}
        />
        <p>
          Different models for different jobs — your agent&apos;s memory and skills stay the same
          underneath.
        </p>
      </DocSection>

      <DocSection title="Skip the API-key collection">
        <p>
          If you&apos;d rather not manage separate keys for models, web search, image generation, and
          TTS, one subscription covers all of them:
        </p>
        <CodeBlock lines={["sarthi setup --portal"]} />
        <p>
          This logs you in via OAuth and enables the full tool gateway. See{" "}
          <a href="/pricing" className="font-semibold text-royal hover:underline">Pricing</a> — SARTHI
          itself is free either way.
        </p>
      </DocSection>
    </div>
  );
}
