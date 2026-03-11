"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

const ART_LINES = [
  "",
  "",
  "",
  "",
  "",
  "",
  "                          .'    ·    '.      ∗",
  "                         /    ·   ∗✦ ✧  ·   \\",
  "                        /   ·  ✦░░░░░░░░   ·   \\",
  "                ∗      /✦  ·   ░░▓▓▓▓▓▓▓▓░░   ·   \\             ·",
  "                      /  ·   ░░▓▓▓████████▓░░   ·   \\",
  "                     |   ·   ░░▓▓███·✦·✦·███▓░░   ·   |       ∗         ·",
  "                     | ∗ ·   ░░▓████\\______/████░░  ·   |",
  "                ·    |   ·   ░░▓████/══════\\████░░  ·   |            ·",
  "                ·∗   |   ░░░░░░░░░/·           ·\\░░░░░  |               ✦",
  "                     |  ░░░░░░░░/   ·   ─┬─   ·   \\░░░░  |             ✦",
  "                     |  ░░░░░░/   ·      ══╪══      \\░░░  |",
  "              ·      |  ░░░░░/   ·     ════╪════      \\░░  |                ✦",
  "                ·    |  ░░░░│  ·    ══════╪══════   ·   │░░  |          ·",
  "               ∗     |  ░░░│  ·   ════════╪════════    │░░  |            ✧ ✧",
  "       ·    ∗·       |  ░░░│  ·  ══════════╪══════════  │░░  |          ·",
  "       ·             |  ░░░│  · ════════════╪════════════│░░  |",
  "              ·      |  ░░░│ ·══════════════╪══════════════│░░  |       ✧",
  "                     |  ░░░│  · ════════════╪════════════│░░  |         ··✧",
  "               ✦     |  ░░░│   ·══════════╪══════════    │░░  |         · ∗",
  "            ✦  ·     |  ░░░│  ·  ═════════╪═════════  ·   │░░  |",
  "            ∗·       |  ░░░│   ·  ════════╪════════  ·    │░░  |            ·",
  "                     |  ░░░│   ·  ═══════╪═══════  ·      │░░  |",
  "      ··             |  ░░░│   ·   ══════╪══════  ·  ·    │░░  |            ∗",
  "            ·   ✧    |  ░░░│  ·    ═════╪═════  ·  ·      │░░  |",
  "                     |  ░░░│  ·    ════╪════  ·  ·  ·     │░░  |        ·✧ ∗",
  "                     |  ░░░│   ·   ═══╪═══  ·  ·  ·       │░░  |     · · ·✦",
  "                  ·  |  ░░│   ·    ══╪══  ·  ·   ·         │░░  |   ·",
  "                     |  ░░│  ·    ═╪═   ·  ·   ·   ·       │░░  |   ✦       ✧",
  "                ·   ·   \\░│   ·    ╪   ·  ·   ·   ·    │░/          ·",
  "                      · \\░░\\ ·   ═╪═  ·  ·   ·  · /░░/  ·          · ·",
  "                   ··  ✧'.\\ ░░\\ ·  ─┴─  ·  ·  · /░░/ .'              ✧",
  "                      · ·  '.\\░░░░░░░░░░░░░░░░/.'                ·",
  "                  ✦    ·  · '.\\░░░░░░░░░░░/.'               ·",
  "                    ·    ·   ·  '·\\░░░░░░░/·'                 ∗",
  "                               ·✧  '·\\░░/·'           ·      ✧",
  "                              ✧      '·'   ✧        ·",
  "                                                          ·",
  "                                 ·     ·",
  "",
  "",
];

const STAR_CHARS = new Set(["✦", "✧", "·", "∗"]);

const STAR_POSITIONS: string[] = ART_LINES.flatMap((line, li) =>
  [...line].flatMap((ch, ci) => (STAR_CHARS.has(ch) ? [`${li}-${ci}`] : []))
);

function renderLine(line: string, li: number, dimmed: Set<string>): ReactNode[] {
  const nodes: ReactNode[] = [];
  let buf = "";
  for (let ci = 0; ci < line.length; ci++) {
    const ch = line[ci];
    if (STAR_CHARS.has(ch)) {
      if (buf) {
        nodes.push(buf);
        buf = "";
      }
      const key = `${li}-${ci}`;
      nodes.push(
        <span
          key={key}
          style={{
            opacity: dimmed.has(key) ? 0.08 : 1,
            transition: "opacity 0.7s ease",
          }}
        >
          {ch}
        </span>
      );
    } else {
      buf += ch;
    }
  }
  if (buf) nodes.push(buf);
  return nodes;
}

export default function AsciiArt() {
  const [revealed, setRevealed] = useState(0);
  const [dimmed, setDimmed] = useState<Set<string>>(new Set());
  const done = revealed >= ART_LINES.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), 38);
    return () => clearTimeout(t);
  }, [revealed, done]);

  useEffect(() => {
    if (!done) return;
    const tick = () => {
      const next = new Set<string>();
      for (const pos of STAR_POSITIONS) {
        if (Math.random() < 0.2) next.add(pos);
      }
      setDimmed(next);
    };
    tick();
    const id = setInterval(tick, 420);
    return () => clearInterval(id);
  }, [done]);

  return (
    <div>
      <pre
        aria-label="ASCII art of Phanes emerging from the cosmic egg"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          lineHeight: "1.28",
          color: "#a78bfa",
          userSelect: "none",
          letterSpacing: "0.04em",
          margin: 0,
          overflowX: "auto",
        }}
      >
        {ART_LINES.slice(0, revealed).map((line, li) => (
          <span key={li} style={{ display: "block" }}>
            {renderLine(line, li, dimmed)}
          </span>
        ))}
        {!done && (
          <span
            style={{
              color: "#6d28d9",
              display: "inline-block",
              animation: "asciiCursor 0.75s step-end infinite",
            }}
          >
            ▋
          </span>
        )}
      </pre>

      <style>{`
        @keyframes asciiCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
