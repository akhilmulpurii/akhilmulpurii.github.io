agents.md

Purpose

This document defines the core creative principles, architectural boundaries, and behavioral rules for building the portfolio from scratch using Next.js. It serves as a north-star for all decisions—design, code, interaction, and workflow.

⸻

Core Creative Principles

The portfolio should feel alive, but not noisy. Interactivity is the soul, not ornamentation. Focus on:
	•	Smooth parallax movement that responds to scroll and pointer activity.
	•	Subtle micro-interactions that make the UI feel tactile.
	•	Light, intentional animations—never ornamental flourishes that push users away from the content.
	•	Zero 3D elements unless absolutely required; depth should come from motion, shadows, and layering.
	•	Clean spatial hierarchy: whitespace, alignment, and rhythm.

Your aesthetic north star: fluid, modern, minimal, reactive.

⸻

Technical Principles (Next.js)

The project is built from scratch in Next.js (App Router). Everything follows a component-driven architecture.

Global structure
	•	Use the App Router (app/) with server components by default.
	•	Integrate client components only where interactivity is required.
	•	Maintain a clear separation between UI, animations, and logic.

Routing & Layout
	•	Use nested layouts to control shared UI sections.
	•	Keep pages lightweight; push complexity into reusable components.

Data & Content
	•	All project data, experience timelines, and text content should live in an isolated module (lib/data.ts) to avoid scattering literals.

Animations
	•	Use Framer Motion for motion primitives.
	•	Keep animation duration short and smooth.
	•	Use transforms (translate, scale, opacity) for performant rendering.

⸻

Visual System
	•	Typography: strong contrast between display style for hero sections and neutral readable body copy.
	•	Color: pick a restrained palette (3–5 tones) and stick to it.
	•	Layers: foreground elements should respond more dramatically to parallax than background elements.
	•	Shadows: use soft, cinematic shadows to hint at depth.

⸻

Interaction Intent

Interactions exist for two reasons:
	1.	Communicate personality.
	2.	Guide user attention.

Everything must have a purpose. Avoid clickbait micro-interactions or chaotic movements.

⸻

Component Design Rules
	•	Every component must be small, focused, and composable.
	•	No global CSS sprawl; use modular styles or Tailwind.
	•	Components with motion should isolate that logic.
	•	Avoid over-abstracting early. Let patterns emerge naturally.

⸻

Performance Philosophy
	•	Prefer server components where possible.
	•	Lazy-load heavy sections on scroll intersection.
	•	Always prioritize time-to-interaction over animation fidelity.

⸻

Code Quality Rules
	•	Absolute imports enabled.
	•	Each component folder gets:
	•	index.tsx
	•	styles.css or Tailwind class usage
	•	optional motion.ts (for animation variants)
	•	No mixing unrelated responsibilities.

⸻

Build & Maintenance Rules
	•	Keep agents.md and claude.md as architectural guidance.
	•	Update this file only when foundational constraints shift.
	•	Treat this document as the “constitution” of the portfolio.

⸻

Tooling Preferences
	•	Next.js App Router
	•	Framer Motion
	•	Tailwind CSS
	•	TypeScript
	•	Vercel for deployment

⸻

What This Document Prevents
	•	Feature creep.
	•	Over-engineering animations.
	•	Throwing random libraries into the mix.
	•	Letting the portfolio devolve into a chaotic experiment.

⸻

What This Document Encourages
	•	A cohesive identity.
	•	Purpose-driven interactions.
	•	Clean code architecture.
	•	A delightful experience that invites curiosity.

⸻

End of agents.md.