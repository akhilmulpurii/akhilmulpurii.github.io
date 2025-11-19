agents.md

Purpose

This document defines the creative vision, architectural principles, and behavioral rules for building the portfolio from scratch using Next.js. It is designed to guide all design, interaction, and development decisions.

⸻

Core Creative Principles

The portfolio should feel cinematic, immersive, and alive. Focus on:
	•	Interactive, parallax-based UI elements rather than static layouts.
	•	Smooth, responsive micro-interactions to make the UI feel tactile.
	•	Layered depth through motion, shadows, and scaling, without using 3D models.
	•	Strong visual hierarchy using whitespace, typography, and layout rhythm.
	•	A fantasy-cinematic vibe inspired by DUNE, Game of Thrones, Lord of the Rings, and Narnia.
	•	Colorful yet restrained palette, used to guide attention and set mood.
	•	Clean, modern design with artistic touches reminiscent of inspirations like Figurefilm, Cappen, Anuchome, Symphony of Vines, and Eat Hungry Tiger.

⸻

Technical Principles (Next.js)

The project is built from scratch using Next.js (App Router). Component-driven architecture is essential.

Global Structure
	•	Use App Router (app/) with server components by default.
	•	Client components only for interactive sections.
	•	Maintain separation of UI, animations, and data logic.

Routing & Layout
	•	Nested layouts for shared UI.
	•	Lightweight pages with reusable components.
	•	Maintain cinematic full-page sections where appropriate.

Data & Content
	•	All projects, experience, and content stored in a single module (lib/data.ts) for easy refactoring.
	•	Optionally, fetch GitHub repos and auto-generate AI-summarized sections to include in the portfolio.

Animations & Interactivity
	•	Framer Motion for parallax, scroll-based, and hover interactions.
	•	Smooth transitions, layered motion, and responsive micro-interactions.
	•	Avoid 3D; use scale, opacity, and movement to create depth.

⸻

Visual System
	•	Typography: dramatic display fonts for hero sections, neutral fonts for body.
	•	Color palette: 3-5 complementary tones, used to emphasize content.
	•	Shadows & layering: subtle, cinematic to imply depth.
	•	Backgrounds can be interactive or slightly animated for a dynamic feel.

⸻

Interaction Philosophy
	•	All interactions should guide attention or enhance immersion.
	•	Avoid chaotic movements; every animation has purpose.
	•	Scroll-based storytelling: sections flow into each other cinematically.

⸻

Component Design Rules
	•	Small, focused, composable components.
	•	Motion logic isolated per component.
	•	Use Tailwind or modular CSS; avoid global styles.
	•	Components should be reusable and maintainable.

⸻

Performance & Optimization
	•	Server components preferred where possible.
	•	Lazy-load heavy sections with intersection observer.
	•	Prioritize TTI (Time to Interactive) over animation complexity.

⸻

Code Quality & Maintenance
	•	Absolute imports and TypeScript enforced.
	•	Each component folder includes:
	•	index.tsx
	•	styles.css or Tailwind classes
	•	Optional motion.ts for animation variants
	•	Update agents.md when foundational changes are needed.

⸻

Tooling & Libraries
	•	Next.js (App Router)
	•	Framer Motion
	•	Tailwind CSS
	•	TypeScript
	•	Vercel for deployment

⸻

Summary

This document ensures:
	•	Cohesive cinematic fantasy design.
	•	Interactive, layered parallax elements.
	•	Purpose-driven, tactile interactions.
	•	Clean, maintainable, component-driven Next.js architecture.
	•	Optional AI-generated GitHub summary sections integrated seamlessly.

End of agents.md.