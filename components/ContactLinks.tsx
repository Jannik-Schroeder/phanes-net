import Link from "next/link";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  internal?: boolean;
}

const links: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/Jannik-Schroeder",
    href: "https://github.com/Jannik-Schroeder",
    external: true,
  },
  {
    label: "Email",
    value: "hello@phanes.net",
    href: "mailto:hello@phanes.net",
  },
  {
    label: "Blog",
    value: "phanes.net/blog",
    href: "/blog",
    internal: true,
  },
];

export default function ContactLinks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      {links.map((link) => (
        <div
          key={link.label}
          style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}
        >
          <span
            style={{
              color: "#64748b",
              fontSize: "0.75rem",
              minWidth: "3.5rem",
              letterSpacing: "0.03em",
            }}
          >
            {link.label}
          </span>
          <span style={{ color: "#4c1d95", fontSize: "0.75rem" }}>→</span>
          {link.internal ? (
            <Link
              href={link.href}
              style={{
                color: "#a78bfa",
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
              }}
            >
              {link.value}
            </Link>
          ) : (
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                color: "#a78bfa",
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
              }}
            >
              {link.value}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
