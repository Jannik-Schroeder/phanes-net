"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

// Phanes — winged deity emerging from the cosmic egg, snake coiling below
// 5 lines tall, ~24 chars wide → fits neatly beside a header block
const ART_LINES = [
  "  ✦  \\   ∗   /  ✦  ",
  " ·  ══\\╔═════╗/══  ·",
  " ∗  · ║▓█✦█▓║ ·  ∗ ",
  " ·  ══/╚═════╝\\══  ✦",
  "  ✧  /  ~∿~  \\  ·  ",
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
      if (buf) { nodes.push(buf); buf = ""; }
      const key = `${li}-${ci}`;
      nodes.push(
        <span
          key={key}
          style={{
            opacity: dimmed.has(key) ? 0.07 : 1,
            transition: "opacity 0.75s ease",
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

export default function BlogAsciiArt() {
  const [dimmed, setDimmed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const tick = () => {
      const next = new Set<string>();
      for (const pos of STAR_POSITIONS) {
        if (Math.random() < 0.25) next.add(pos);
      }
      setDimmed(next);
    };
    tick();
    const id = setInterval(tick, 420);
    return () => clearInterval(id);
  }, []);

  return (
    <pre
      aria-hidden="true"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.56rem",
        lineHeight: "1.45",
        color: "#4c1d95",
        userSelect: "none",
        letterSpacing: "0.03em",
        margin: 0,
        whiteSpace: "pre",
      }}
    >
      {ART_LINES.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {renderLine(line, li, dimmed)}
        </span>
      ))}
    </pre>
  );
}
