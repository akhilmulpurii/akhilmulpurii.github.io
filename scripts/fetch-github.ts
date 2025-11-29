import fs from "fs";
import path from "path";

const USER = "akhilmulpurii";
const OUT_PATH = path.join(process.cwd(), "public", "data", "github-activity.json");
const IGNORE_REPOS = new Set<string>(["akhilmulpurii/akhilmulpurii"]);
const shouldInclude = (repo: any) =>
  !repo.archived &&
  !repo.disabled &&
  !repo.private &&
  !IGNORE_REPOS.has(repo.full_name);

const GH_TOKEN = process.env.GH_TOKEN;

const headers: Record<string, string> = {
  "User-Agent": "akhilmulpurii-portfolio",
};
if (GH_TOKEN) {
  headers.Authorization = `Bearer ${GH_TOKEN}`;
}

type WeeklyStat = { total: number; days: number[] };

async function fetchCommitActivity(fullName: string): Promise<WeeklyStat[] | null> {
  // stats/commit_activity can return 202 while GitHub computes the stats; retry a few times.
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(
      `https://api.github.com/repos/${fullName}/stats/commit_activity`,
      { headers },
    );
    if (res.status === 202) {
      await new Promise((r) => setTimeout(r, 1500));
      continue;
    }
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as { total: number; days: number[] }[];
    if (!Array.isArray(data) || !data.length) return null;
    return data
      .map((w) => ({
        total: w.total ?? 0,
        days: Array.isArray(w.days) ? w.days : Array(7).fill(0),
      }))
      .slice(-52);
  }
  return null;
}

async function fetchPushEventsTotal(fullName: string) {
  const res = await fetch(
    `https://api.github.com/repos/${fullName}/events?per_page=100`,
    { headers },
  );
  if (!res.ok) return 0;
  const data = (await res.json()) as any[];
  if (!Array.isArray(data)) return 0;
  return data
    .filter((e) => e.type === "PushEvent" && e.payload)
    .reduce((sum, e) => sum + (e.payload.size || 0), 0);
}

async function fetchTotalCommitsViaLink(fullName: string) {
  const res = await fetch(
    `https://api.github.com/repos/${fullName}/commits?per_page=1`,
    { headers },
  );
  if (res.status === 409) return 0; // empty repo
  if (!res.ok) return 0;
  const link = res.headers.get("link");
  if (!link) {
    const body = await res.json();
    return Array.isArray(body) && body.length ? body.length : 0;
  }
  const match = link.match(/&page=(\d+)>;\s*rel="last"/);
  if (match) {
    return parseInt(match[1], 10) || 0;
  }
  return 0;
}

async function fetchReposGraphql() {
  if (!GH_TOKEN) {
    throw new Error("GH_TOKEN is required for GraphQL repo fetch.");
  }
  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(first: 12, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            name
            description
            stargazerCount
            forkCount
            primaryLanguage { name }
            pushedAt
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      ...headers,
      Authorization: `Bearer ${GH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: USER } }),
  });
  if (!res.ok) {
    throw new Error(`GitHub GraphQL error: ${res.status} ${res.statusText}`);
  }
  const body = await res.json();
  const nodes = body?.data?.user?.repositories?.nodes ?? [];
  return nodes.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    stars: repo.stargazerCount || 0,
    forks: repo.forkCount || 0,
    language: repo.primaryLanguage?.name || null,
    pushed_at: repo.pushedAt,
    html_url: repo.url,
    commits: repo.defaultBranchRef?.target?.history?.totalCount ?? 0,
  }));
}

async function fetchRepos() {
  const baseRepos =
    GH_TOKEN !== undefined ? await fetchReposGraphql() : await fetchReposRest();
  const result = [];
  for (const repo of baseRepos) {
    // Skip ignored/archived/private from REST when using GraphQL (already filtered).
    if (!shouldInclude({ full_name: `${USER}/${repo.name}`, archived: false, disabled: false, private: false })) continue;
    const commit_activity = await fetchCommitActivity(`${USER}/${repo.name}`);
    let totalCommits =
      Array.isArray(commit_activity) && commit_activity.length
        ? commit_activity.reduce((sum, w) => sum + (w.total ?? 0), 0)
        : repo.commits || 0;
    if (totalCommits === 0) {
      totalCommits = await fetchPushEventsTotal(`${USER}/${repo.name}`);
    }
    if (totalCommits === 0) {
      totalCommits = await fetchTotalCommitsViaLink(`${USER}/${repo.name}`);
    }
    result.push({
      name: repo.name,
      description: repo.description,
      stars: repo.stars,
      forks: repo.forks,
      commits: totalCommits,
      language: repo.language,
      pushed_at: repo.pushed_at,
      html_url: repo.html_url,
      commit_activity: commit_activity ?? [],
    });
    await new Promise((r) => setTimeout(r, 150));
  }
  return result;
}

async function fetchReposRest() {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?sort=updated&per_page=12`,
    { headers },
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }
  const data = (await res.json()) as any[];
  const result = [];
  for (const repo of data) {
    if (!shouldInclude(repo)) continue;
    const commit_activity = await fetchCommitActivity(repo.full_name);
    let totalCommits =
      Array.isArray(commit_activity) && commit_activity.length
        ? commit_activity.reduce((sum, w) => sum + (w.total ?? 0), 0)
        : 0;
    if (totalCommits === 0) {
      totalCommits = await fetchPushEventsTotal(repo.full_name);
    }
    result.push({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      commits: totalCommits,
      language: repo.language,
      pushed_at: repo.pushed_at,
      html_url: repo.html_url,
      commit_activity: commit_activity ?? [],
    });
    await new Promise((r) => setTimeout(r, 150));
  }
  return result;
}

async function main() {
  const repos = await fetchRepos();
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(repos, null, 2));
  console.log(`Wrote ${repos.length} repos to ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
