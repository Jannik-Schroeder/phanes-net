import { projects, type Project } from "./projects";

const REVALIDATE = 21600; // 6 hours

export type ProjectWithMeta = Project & { lastUpdated: string | null };

async function fetchLastCommit(repo: string): Promise<{ ts: number; date: string | null }> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/commits?per_page=1`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: REVALIDATE },
      }
    );
    if (!res.ok) return { ts: 0, date: null };
    const data = await res.json();
    const raw = data[0]?.commit?.committer?.date ?? data[0]?.commit?.author?.date ?? null;
    if (!raw) return { ts: 0, date: null };
    const d = new Date(raw);
    const date = d.toLocaleDateString("en-CA"); // YYYY-MM-DD
    return { ts: d.getTime(), date };
  } catch {
    return { ts: 0, date: null };
  }
}

export async function getSortedProjects(): Promise<ProjectWithMeta[]> {
  const results = await Promise.all(
    projects.map((p) =>
      p.githubRepo ? fetchLastCommit(p.githubRepo) : Promise.resolve({ ts: 0, date: null })
    )
  );

  const indexed = projects.map((p, i) => ({ p, ...results[i] }));
  indexed.sort((a, b) => b.ts - a.ts);

  return indexed.map(({ p, date }) => ({ ...p, lastUpdated: date }));
}
