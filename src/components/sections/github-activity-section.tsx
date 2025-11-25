"use client";

import activity from "@/../public/data/github-activity.json";

type Repo = {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  commits?: number;
  language: string | null;
  pushed_at: string;
  html_url: string;
  commit_activity?: { total: number; days: number[] }[];
};

const repos: Repo[] = Array.isArray(activity) ? (activity as Repo[]) : [];
const topRepos = repos.slice(0, 6);
const highlightNames = [
  "akhilmulpurii.github.io",
  "aperture",
  "jellyfin-androidtv",
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function GithubActivitySection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0705] px-4 py-16 text-[#f7f5ef] sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(244,162,97,0.12), transparent 32%), radial-gradient(circle at 80% 10%, rgba(231,111,81,0.1), transparent 30%), radial-gradient(circle at 50% 85%, rgba(255,214,170,0.1), transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,214,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,170,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.32), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.32), transparent 68%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="text-left">
          <div className="relative inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f0cfa2] shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur mb-4">
            GitHub activity
            <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#f4a261] shadow-[0_0_0_8px_rgba(244,162,97,0.18)]" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#f7f5ef] sm:text-4xl md:text-5xl drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
            Building in public
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#f3dfbe]/80 sm:text-base">
            Recent repos and contributions with the same motion-first craft I
            bring to client work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <ContributionTile className="md:col-span-3 md:row-span-1" />
          {topRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} className="md:col-span-3" />
          ))}
        </div>
      </div>
    </section>
  );
}

function RepoCard({
  repo,
  className = "",
}: {
  repo: Repo;
  className?: string;
}) {
  const activity = (repo.commit_activity ?? [])
    .slice(-12)
    .map((w) => w.total ?? 0);
  const isHighlight = [
    "akhilmulpurii.github.io",
    "aperture",
    "jellyfin-androidtv",
  ].includes(repo.name.toLowerCase());
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0d0907]/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#f4a261]">
        <span>{repo.language || "Multi"}</span>
        <span className="text-[#f4a261]">View →</span>
      </div>
      <div className="flex flex-col">
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold text-[#f7f5ef]">{repo.name}</h3>
          {repo.description && (
            <p className="text-sm leading-relaxed text-[#f3dfbe]/80">
              {repo.description}
            </p>
          )}
        </div>
        <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7f5ef]">
          <Metric label="Stars" value={repo.stars} />
          <Metric label="Commits" value={repo.commits ?? 0} />
          {isHighlight && (
            <div className="ml-auto w-40">
              <Sparkline
                values={activity}
                seed={repo.name.length + repo.stars + repo.forks}
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#f4a261]/30 bg-[#120a07]/70 px-3 py-1">
      <span className="text-[11px] uppercase tracking-[0.24em] text-[#f3dfbe]/85">
        {label}
      </span>
      <span className="text-sm font-semibold text-[#f7f5ef]">{value}</span>
    </span>
  );
}

function Sparkline({ values, seed }: { values: number[]; seed: number }) {
  const hasData = values.some((v) => v > 0);
  const fallback = Array.from({ length: 16 }, (_, i) => {
    const t = (i / 15) * Math.PI * 2;
    const wobble = Math.sin(t + seed) * 4 + Math.cos(t * 2.3 + seed) * 2;
    return Math.max(0, wobble + 6);
  });
  const data = hasData ? values : fallback;
  const max = Math.max(...data, 1);
  const minPositive = Math.min(...data.filter((v) => v > 0), max);
  const bias = Math.max(1, max * 0.2, minPositive * 0.4);
  const tone = Math.min(1, Math.max(0.25, max / (max + bias * 2)));
  const width = 160;
  const height = 40;
  const padX = 6;
  const padY = 8;
  const step = (width - padX * 2) / Math.max(data.length - 1, 1);
  const points = data.map((v, i) => {
    const x = padX + i * step;
    const y = height - padY - ((v + bias) / (max + bias)) * (height - padY * 2);
    return { x, y };
  });
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");
  const gradientId = `spark-${seed}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Commit activity sparkline"
      className="h-16 w-full"
    >
      <path
        d={d}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-[0_4px_12px_rgba(244,162,97,0.25)]"
      />
      {points.length > 0 && (
        <circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r={3.5}
          fill="#f4a261"
          className="drop-shadow-[0_6px_18px_rgba(244,162,97,0.35)]"
        />
      )}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={`rgba(247,215,163,${tone})`} />
          <stop
            offset="100%"
            stopColor={`rgba(244,162,97,${Math.max(tone, 0.35)})`}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ContributionTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0d0907]/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4a261]">
        Contributions
      </div>
      <div className="rounded-xl border border-[#f4a261]/30 bg-[#120a07]/60 p-2">
        <img
          src="https://ghchart.rshah.org/akhilmulpurii"
          alt="GitHub contributions chart"
          className="h-auto w-full rounded-md"
          loading="lazy"
          style={{
            filter:
              "saturate(1.4) hue-rotate(-18deg) brightness(0.95) contrast(1.05)",
          }}
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[#f3dfbe]/80">
        Rolling year of commits across public repos.
      </p>
    </div>
  );
}
