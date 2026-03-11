import AsciiArt from "@/components/AsciiArt";
import ProjectCard from "@/components/ProjectCard";
import ContactLinks from "@/components/ContactLinks";
import Link from "next/link";

const projects = [
  {
    name: "Solun",
    subtitle: "solun.pm",
    description:
      "Send encrypted text and files — privately. No accounts, no traces, no metadata.",
    links: [
      { label: "solun.pm", href: "https://solun.pm", dimPrefix: "→" },
      {
        label: "solun-pm/solun",
        href: "https://github.com/solun-pm/solun",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    name: "jsde.me",
    subtitle: "jsde.me",
    description: "Personal site and digital identity hub.",
    links: [
      { label: "jsde.me", href: "https://jsde.me", dimPrefix: "→" },
    ],
  },
  {
    name: "NyxProxy",
    subtitle: "rotating IPv6 proxy",
    description:
      "Open-source rotating IPv6 proxy. Each request exits on a different address. Named after Nyx, goddess of night.",
    links: [
      {
        label: "Jannik-Schroeder/nyxproxy-oss",
        href: "https://github.com/Jannik-Schroeder/nyxproxy-oss",
        dimPrefix: "gh/",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="page-shell">
        <div className="center-zone">
          <main className="page-grid">
            {/* LEFT: ASCII Art */}
            <aside className="ascii-column">
              <AsciiArt />
            </aside>

            {/* RIGHT: Content — projects first */}
            <section className="content-column">

              {/* Tagline — the thing this site is about */}
              <p className="tagline">
                Building tools for a more private, open web.
              </p>

              {/* Projects — main focus */}
              <div className="projects-block">
                {projects.map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
              </div>

              <div className="divider" />

              {/* Identity — present but in the background */}
              <div className="identity-block">
                <span className="identity-name">Jannik Schröder</span>
                <span className="identity-sep">·</span>
                <span className="identity-bio">
                  System Engineer. Privacy, open-source, infrastructure.
                </span>
              </div>

              {/* Contact */}
              <ContactLinks />

            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="page-footer">
          <span className="footer-text">phanes.net</span>
          <span className="footer-dot">·</span>
          <Link href="/impressum" className="footer-link">Legal Notice</Link>
          <span className="footer-dot">·</span>
          <Link href="/datenschutz" className="footer-link">Privacy Policy</Link>
          <span className="footer-spacer" />
          <a href="https://status.phanes.net" className="footer-link footer-status">Status</a>
        </footer>
      </div>

      <style>{`
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
        .ascii-column {
          display: none;
        }
        @media (min-width: 860px) {
          .page-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ascii-column {
            display: block;
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
        .footer-spacer { flex: 1; }
        .footer-status {
          color: #7c3aed !important;
        }
        .footer-status:hover {
          color: #a78bfa !important;
        }
      `}</style>
    </>
  );
}
