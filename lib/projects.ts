export interface ProjectLink {
  label: string;
  href: string;
  dimPrefix?: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  details: string;
  links: ProjectLink[];
  githubRepo?: string; // "owner/repo" for last-commit sorting
}

export const projects: Project[] = [
  {
    slug: "solun",
    name: "Solun",
    subtitle: "solun.pm",
    description:
      "Minimal, secure text sharing. End-to-end encrypted or fast encrypted-at-rest — ephemeral by default.",
    details:
      "Solun has two modes. Quick pastes are AES-256-GCM encrypted at rest with a server-side key and deleted after the first read — zero effort for the sender. Secure pastes are end-to-end encrypted in the browser via the Web Crypto API; the decryption key lives only in the URL fragment and is never transmitted to the server. Both modes are burn-after-read by default. The stack is a pnpm monorepo: Next.js 16 frontend, Express + Prisma + PostgreSQL API, deployed via Docker. Available as a hosted service at solun.pm and fully self-hostable under MIT.",
    githubRepo: "solun-pm/solun",
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
    slug: "jsde-me",
    name: "jsde.me",
    subtitle: "personal site",
    description: "Personal site and digital identity hub.",
    details:
      "jsde.me is my primary digital identity — a lightweight static site that serves as a single source of truth for who I am and what I work on. It links out to projects, social presence, and contact info without any tracking or third-party requests. Built with Next.js, deployed to the edge.",
    githubRepo: "Jannik-Schroeder/jsde-me",
    links: [
      { label: "jsde.me", href: "https://jsde.me", dimPrefix: "→" },
      { label: "Jannik-Schroeder/jsde-me", href: "https://github.com/Jannik-Schroeder/jsde-me", dimPrefix: "gh/" },
    ],
  },
  {
    slug: "nyxproxy",
    name: "NyxProxy",
    subtitle: "rotating IPv6 proxy",
    description:
      "High-performance Go proxy that assigns a fresh IPv6 address to every request from your own /64 subnet.",
    details:
      "Every hosting provider that gives you a /64 IPv6 subnet hands you 18 quintillion addresses. NyxProxy puts them to work: a pre-populated pool of 200 IPs is kept ready, each replaced after 100 uses or 30 minutes. The result is a different exit IP per request with no coordination overhead. Single-IP proxies get rate-limited, fingerprinted, and blocked. NyxProxy makes each request look like a different user. Written in Go, MIT-licensed, ships with a one-command Debian/Ubuntu installer and a systemd unit. Typical use cases: web scraping without rate limits, multi-user API testing, and privacy-conscious browsing.",
    githubRepo: "Jannik-Schroeder/nyxproxy-oss",
    links: [
      {
        label: "Jannik-Schroeder/nyxproxy-oss",
        href: "https://github.com/Jannik-Schroeder/nyxproxy-oss",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "phanes-net",
    name: "phanes.net",
    subtitle: "this site",
    description: "Personal project showcase. Zero client-side JS, fully static, monospace purple.",
    details:
      "The site you're looking at. Built with Next.js 16 App Router, React Server Components, and Tailwind CSS v4. Zero client-side JavaScript except for the ASCII art animation. Fully static output — no database, no CMS, no tracking. Blog powered by MDX files in the repo. Projects sorted by last GitHub commit via the GitHub API with 6-hour ISR revalidation.",
    githubRepo: "Jannik-Schroeder/phanes-net",
    links: [
      { label: "phanes.net", href: "https://phanes.net", dimPrefix: "→" },
      { label: "Jannik-Schroeder/phanes-net", href: "https://github.com/Jannik-Schroeder/phanes-net", dimPrefix: "gh/" },
    ],
  },
];
