"use client";
import { useEffect, useRef, useState } from "react";

type Line = { kind: "cmd" | "out" | "ok" | "brand"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "sarthi" },
  { kind: "brand", text: "S A R T H I  ·  Knows You. Grow With You." },
  { kind: "out", text: "Loaded 42 skills · memory synced · model: sarthi default" },
  { kind: "cmd", text: "plan my week from my notes folder" },
  { kind: "out", text: "Reading notes… found 3 deadlines and 2 recurring habits." },
  { kind: "ok", text: "✓ Weekly plan created → plan-week-29.md" },
  { kind: "out", text: "I noticed you plan every Monday — want me to automate this?" },
  { kind: "cmd", text: "yes, every monday 8am on telegram" },
  { kind: "ok", text: "✓ Scheduled: weekly-plan · Mondays 08:00 → Telegram" },
  { kind: "ok", text: "✦ New skill learned: weekly-planning (self-improving)" },
];

const TYPE_MS = 34;
const LINE_PAUSE = 650;

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setStarted(true),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;

    (async () => {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      // loop forever
      // eslint-disable-next-line no-constant-condition
      while (!cancelled) {
        setLines([]);
        for (const line of SCRIPT) {
          if (cancelled) return;
          if (line.kind === "cmd") {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, i));
              await sleep(TYPE_MS);
            }
            await sleep(300);
            setTyping("");
          }
          setLines((prev) => [...prev, line]);
          await sleep(LINE_PAUSE);
        }
        await sleep(3500);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [started]);

  return (
    <div ref={ref} className="glass-deep overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-white/50">sarthi — terminal</span>
      </div>
      <div className="h-[21rem] space-y-2 overflow-hidden px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => (
          <p key={i}>
            {l.kind === "cmd" && (
              <>
                <span className="text-emerald-400">❯ </span>
                <span className="text-white">{l.text}</span>
              </>
            )}
            {l.kind === "out" && <span className="text-white/60">{l.text}</span>}
            {l.kind === "ok" && <span className="text-teal-300">{l.text}</span>}
            {l.kind === "brand" && (
              <span className="font-semibold tracking-widest text-brand-gradient">{l.text}</span>
            )}
          </p>
        ))}
        <p>
          <span className="text-emerald-400">❯ </span>
          <span className="text-white">{typing}</span>
          <span className="caret ml-0.5" />
        </p>
      </div>
    </div>
  );
}
