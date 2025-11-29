# Sai Akhil Mulpuri | Creative Developer Portfolio

An immersive, brutalist, and motion-first portfolio website built with Next.js. This project showcases my work as a creative developer, featuring WebGL shaders, dynamic content, and a unique "AI-fied" aesthetic.

## ✨ Features

- **Immersive Hero Sections**: Custom WebGL fluid simulations and geometric animations using Three.js.
- **Brutalist Design**: Bold typography (`Rozha One`, `Anton`), high contrast, and raw layout aesthetics.
- **Dynamic Project Case Studies**: detailed project pages with "deconstructed archive" layouts and cinematic gallery views.
- **"Chameleon" Theming**: The site dynamically adapts its color theme based on the project being viewed.
- **Trending Intelligence Feed**: A masonry-layout news feed for AI and tech trends.
- **GitHub Integration**: Automated fetching of commit activity and repo stats via GitHub API.
- **Custom 404**: A "Void" style error page with a liquid metal shader effect.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + `shadcn/ui` components
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D/WebGL**: [Three.js](https://threejs.org/) + Custom Shaders
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A GitHub Personal Access Token (for fetching stats)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/akhilmulpurii/akhilmulpurii.github.io.git
    cd akhilmulpurii.github.io
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your GitHub token:

    ```env
    GH_TOKEN=your_github_personal_access_token
    ```

4.  **Fetch Data (Optional for dev, required for build):**

    ```bash
    npm run fetch:github
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

This project is configured to deploy automatically to **GitHub Pages** via GitHub Actions.

- Pushing to the `main` branch triggers the `.github/workflows/deploy.yml` workflow.
- The workflow runs `npm run fetch:github` to generate static data before building.
- Ensure `GH_TOKEN` is set in your repository secrets.

## 📂 Project Structure

- `src/app`: Next.js App Router pages (`page.tsx`, `layout.tsx`).
- `src/components`: Reusable UI components and sections.
  - `sections/`: Large page sections (Hero, Projects, Footer).
  - `ui/`: Smaller interactive elements (Buttons, Cards, Shaders).
- `src/lib`: Utility functions and static data (`projects.ts`).
- `scripts/`: Node.js scripts for data fetching.

---

© 2025 Sai Akhil Mulpuri. All Rights Reserved.
