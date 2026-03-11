module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/AsciiArt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AsciiArt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ART_LINES = [
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
    ""
];
const STAR_CHARS = new Set([
    "✦",
    "✧",
    "·",
    "∗"
]);
const STAR_POSITIONS = ART_LINES.flatMap((line, li)=>[
        ...line
    ].flatMap((ch, ci)=>STAR_CHARS.has(ch) ? [
            `${li}-${ci}`
        ] : []));
function renderLine(line, li, dimmed) {
    const nodes = [];
    let buf = "";
    for(let ci = 0; ci < line.length; ci++){
        const ch = line[ci];
        if (STAR_CHARS.has(ch)) {
            if (buf) {
                nodes.push(buf);
                buf = "";
            }
            const key = `${li}-${ci}`;
            nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    opacity: dimmed.has(key) ? 0.08 : 1,
                    transition: "opacity 0.7s ease"
                },
                children: ch
            }, key, false, {
                fileName: "[project]/components/AsciiArt.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this));
        } else {
            buf += ch;
        }
    }
    if (buf) nodes.push(buf);
    return nodes;
}
function AsciiArt() {
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dimmed, setDimmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const done = revealed >= ART_LINES.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (done) return;
        const t = setTimeout(()=>setRevealed((r)=>r + 1), 38);
        return ()=>clearTimeout(t);
    }, [
        revealed,
        done
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!done) return;
        const tick = ()=>{
            const next = new Set();
            for (const pos of STAR_POSITIONS){
                if (Math.random() < 0.2) next.add(pos);
            }
            setDimmed(next);
        };
        tick();
        const id = setInterval(tick, 420);
        return ()=>clearInterval(id);
    }, [
        done
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                "aria-label": "ASCII art of Phanes emerging from the cosmic egg",
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    lineHeight: "1.28",
                    color: "#a78bfa",
                    userSelect: "none",
                    letterSpacing: "0.04em",
                    margin: 0,
                    overflowX: "auto"
                },
                children: [
                    ART_LINES.slice(0, revealed).map((line, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "block"
                            },
                            children: renderLine(line, li, dimmed)
                        }, li, false, {
                            fileName: "[project]/components/AsciiArt.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)),
                    !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#6d28d9",
                            display: "inline-block",
                            animation: "asciiCursor 0.75s step-end infinite"
                        },
                        children: "▋"
                    }, void 0, false, {
                        fileName: "[project]/components/AsciiArt.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AsciiArt.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-mono)",
                    borderLeft: "2px solid #6d28d9",
                    paddingLeft: "0.75rem",
                    opacity: done ? 1 : 0,
                    transition: "opacity 1s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#c4b5fd",
                            fontSize: "0.9rem",
                            letterSpacing: "0.08em",
                            marginBottom: "0.25rem"
                        },
                        children: "φάνης — phanes.net"
                    }, void 0, false, {
                        fileName: "[project]/components/AsciiArt.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#64748b",
                            fontSize: "0.72rem",
                            letterSpacing: "0.04em"
                        },
                        children: "Primordial god of creation. Born from the cosmic egg."
                    }, void 0, false, {
                        fileName: "[project]/components/AsciiArt.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AsciiArt.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes asciiCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/AsciiArt.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AsciiArt.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__679f5fb6._.js.map