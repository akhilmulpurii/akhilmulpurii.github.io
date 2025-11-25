# Agents

This project uses an LLM coding agent (Codex CLI) for automations and code generation. Keep these notes in mind when running or updating the agent workflow:

- **Sandbox context:** Current repo has workspace-write FS with restricted network; commands needing downloads should request escalation in the CLI.
- **Stack:** Next.js + Tailwind 3 + shadcn/ui wiring; components can be added via `npx shadcn@latest add <component>`. Framer Motion and Aceternity-inspired custom components will be used heavily.
- **Utilities:** Shared Tailwind helpers live in `src/lib/utils.ts` (`cn` with clsx/tailwind-merge). Global theme tokens/dark mode live in `src/app/globals.css`.
- **Scripts:** `npm run dev` for local preview, `npm run lint` for static checks, `npm run build` for production builds.
- **Conventions:** Keep edits ASCII-only unless the file already uses Unicode; prefer `apply_patch` for single-file changes; avoid destructive git commands unless explicitly requested.

## Portfolio scope (upcoming work)
- **Home:** Hero (name/role/tagline), sliding tech carousel, GitHub activity, featured project case studies, work principles, contact email form, footer.
- **Projects:** Dynamic projects list; each links to a `[urlSlug]` detail page with deep info.
- **AI Page:** Dynamic AI-driven feed surfacing news/articles (RSS or similar), “AI-fied” presentation layer.
- **Design:** Theming support, mostly custom Aceternity UI-inspired components, and Framer Motion animations across sections.
