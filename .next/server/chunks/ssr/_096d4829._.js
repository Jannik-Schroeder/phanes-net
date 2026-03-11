module.exports=[70864,a=>{a.n(a.i(33290))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},64240,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},56116,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/AsciiArt.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/AsciiArt.tsx <module evaluation>","default")},69238,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/AsciiArt.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/AsciiArt.tsx","default")},41858,a=>{"use strict";a.i(56116);var b=a.i(69238);a.n(b)},50708,a=>{"use strict";var b=a.i(7997),c=a.i(41858);function d({name:a,subtitle:c,description:d,links:e}){return(0,b.jsxs)("article",{className:"project-card",style:{borderLeft:"1px solid #1e1b2e",paddingLeft:"1rem",paddingTop:"0.125rem",paddingBottom:"0.25rem",transition:"border-color 0.2s ease"},children:[(0,b.jsxs)("div",{style:{marginBottom:"0.3rem",display:"flex",alignItems:"baseline",gap:"0.5rem",flexWrap:"wrap"},children:[(0,b.jsx)("span",{style:{color:"#e2e8f0",fontWeight:"600",fontSize:"0.8125rem",letterSpacing:"0.03em",fontFamily:"var(--font-mono)"},children:a}),c&&(0,b.jsx)("span",{style:{color:"#475569",fontSize:"0.72rem",fontFamily:"var(--font-mono)"},children:c})]}),(0,b.jsx)("p",{style:{color:"#64748b",fontSize:"0.78rem",lineHeight:"1.6",marginBottom:"0.6rem",fontFamily:"var(--font-mono)"},children:d}),(0,b.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0 1.25rem"},children:e.map(a=>(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"baseline",gap:"0.2rem"},children:[a.dimPrefix&&(0,b.jsx)("span",{style:{color:"#334155",fontSize:"0.72rem",fontFamily:"var(--font-mono)",letterSpacing:"0.02em"},children:a.dimPrefix}),(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",style:{color:"#7c3aed",fontSize:"0.75rem",fontFamily:"var(--font-mono)",letterSpacing:"0.02em",transition:"color 0.15s ease"},children:a.label})]},a.href))})]})}let e=[{label:"GitHub",value:"github.com/Jannik-Schroeder",href:"https://github.com/Jannik-Schroeder",external:!0},{label:"Email",value:"hello@phanes.net",href:"mailto:hello@phanes.net",external:!1}];function f(){return(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:e.map(a=>(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem"},children:[(0,b.jsx)("span",{style:{color:"#64748b",fontSize:"0.75rem",minWidth:"3.5rem",letterSpacing:"0.03em"},children:a.label}),(0,b.jsx)("span",{style:{color:"#4c1d95",fontSize:"0.75rem"},children:"→"}),(0,b.jsx)("a",{href:a.href,...a.external?{target:"_blank",rel:"noopener noreferrer"}:{},style:{color:"#a78bfa",fontSize:"0.8125rem",letterSpacing:"0.02em"},children:a.value})]},a.label))})}var g=a.i(95936);let h=[{name:"Solun",subtitle:"solun.pm",description:"Send encrypted text and files — privately. No accounts, no traces, no metadata.",links:[{label:"solun.pm",href:"https://solun.pm",dimPrefix:"→"},{label:"solun-pm/solun",href:"https://github.com/solun-pm/solun",dimPrefix:"gh/"}]},{name:"jsde.me",subtitle:"jsde.me",description:"Personal site and digital identity hub.",links:[{label:"jsde.me",href:"https://jsde.me",dimPrefix:"→"}]},{name:"NyxProxy",subtitle:"rotating IPv6 proxy",description:"Open-source rotating IPv6 proxy. Each request exits on a different address. Named after Nyx, goddess of night.",links:[{label:"Jannik-Schroeder/nyxproxy-oss",href:"https://github.com/Jannik-Schroeder/nyxproxy-oss",dimPrefix:"gh/"}]}];function i(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"page-shell",children:[(0,b.jsx)("div",{className:"center-zone",children:(0,b.jsxs)("main",{className:"page-grid",children:[(0,b.jsx)("aside",{className:"ascii-column",children:(0,b.jsx)(c.default,{})}),(0,b.jsxs)("section",{className:"content-column",children:[(0,b.jsx)("p",{className:"tagline",children:"Building tools for a more private, open web."}),(0,b.jsx)("div",{className:"projects-block",children:h.map(a=>(0,b.jsx)(d,{...a},a.name))}),(0,b.jsx)("div",{className:"divider"}),(0,b.jsxs)("div",{className:"identity-block",children:[(0,b.jsx)("span",{className:"identity-name",children:"Jannik Schröder"}),(0,b.jsx)("span",{className:"identity-sep",children:"·"}),(0,b.jsx)("span",{className:"identity-bio",children:"System Engineer. Privacy, open-source, infrastructure."})]}),(0,b.jsx)(f,{})]})]})}),(0,b.jsxs)("footer",{className:"page-footer",children:[(0,b.jsx)("span",{className:"footer-text",children:"phanes.net"}),(0,b.jsx)("span",{className:"footer-dot",children:"·"}),(0,b.jsx)(g.default,{href:"/impressum",className:"footer-link",children:"Impressum"}),(0,b.jsx)("span",{className:"footer-dot",children:"·"}),(0,b.jsx)(g.default,{href:"/datenschutz",className:"footer-link",children:"Datenschutz"})]})]}),(0,b.jsx)("style",{children:`
        /* ─── Shell ──────────────────────────────────────────────── */
        .page-shell {
          min-height: 100vh;
          background-color: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .center-zone {
          flex: 1;
          width: 100%;
          max-width: 1080px;
          padding: 2.5rem 1.5rem;
          display: flex;
          align-items: safe center;
          justify-content: center;
        }

        /* ─── Grid ───────────────────────────────────────────────── */
        .page-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 860px) {
          .page-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ascii-column {
            position: sticky;
            top: 2.5rem;
          }
        }

        /* ─── Content column ─────────────────────────────────────── */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ─── Tagline ────────────────────────────────────────────── */
        .tagline {
          color: #a78bfa;
          font-size: 0.9rem;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
          line-height: 1.5;
          margin: 0;
        }

        /* ─── Projects ───────────────────────────────────────────── */
        .projects-block {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .project-card:hover {
          border-left-color: #4c1d95 !important;
        }
        .project-card a:hover {
          color: #c4b5fd !important;
        }

        /* ─── Divider ────────────────────────────────────────────── */
        .divider {
          height: 1px;
          background-color: #13131e;
          width: 100%;
        }

        /* ─── Identity ───────────────────────────────────────────── */
        .identity-block {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-family: var(--font-mono);
        }
        .identity-name {
          color: #94a3b8;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
        }
        .identity-sep {
          color: #1e293b;
          font-size: 0.78rem;
        }
        .identity-bio {
          color: #475569;
          font-size: 0.75rem;
          letter-spacing: 0.02em;
        }

        /* ─── Footer ─────────────────────────────────────────────── */
        .page-footer {
          width: 100%;
          max-width: 1080px;
          padding: 1.1rem 1.5rem;
          border-top: 1px solid #13131e;
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .footer-text {
          color: #334155;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }
        .footer-dot { color: #1e293b; font-size: 0.72rem; }
        .footer-link {
          color: #334155 !important;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
          text-shadow: none !important;
        }
        .footer-link:hover {
          color: #64748b !important;
          text-shadow: none !important;
        }
      `})]})}a.s(["default",()=>i],50708)}];

//# sourceMappingURL=_096d4829._.js.map