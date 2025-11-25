<script lang="ts">
	import {
		BookOpenText,
		FolderGit2,
		Github,
		Home,
		Laptop,
		Linkedin,
		Mail,
		Moon,
		SquaresExclude,
		Sun,
		Twitter
	} from 'lucide-svelte';
	import { page } from '$app/stores';
	import { cycleThemePreference, resolvedTheme, themePreference } from '$lib/stores/theme';

	const navLinks = [
		{ href: '/', label: 'Home', icon: Home },
		{ href: '/projects', label: 'Projects', icon: FolderGit2 },
		{ href: '/blog', label: 'Blog', icon: BookOpenText },
		{ href: '/contact', label: 'Contact', icon: Mail }
	];

	const socials = [
		{ href: 'https://github.com/akhilmulpurii', label: 'GitHub', icon: Github },
		{ href: 'https://www.linkedin.com/in/sai-akhil-mulpuri/', label: 'LinkedIn', icon: Linkedin },
		{ href: 'https://twitter.com/FartVader02', label: 'Twitter', icon: Twitter }
	];

	const iconMap = {
		light: Sun,
		dark: Moon,
		system: Laptop
	} as const;

	const nextTheme = () => cycleThemePreference();

	const isActive = (href: string, current: string) =>
		href === '/' ? current === '/' : current.startsWith(href);
</script>

<div class="relative">
	<div class="hidden md:block">
		<aside class="rail rail-left" aria-label="Primary navigation">
			<a href="/" class="rail-btn" aria-label="Home">
				<SquaresExclude size={22} />
			</a>
			<nav class="flex flex-col items-center gap-3 w-full">
				{#each navLinks as link}
					<a
						href={link.href}
						class={`rail-btn ${isActive(link.href, $page.url.pathname) ? 'is-active' : ''}`}
						title={link.label}
					>
						<svelte:component this={link.icon} size={20} />
					</a>
				{/each}
			</nav>
		</aside>

		<aside class="rail rail-right" aria-label="Secondary navigation">
			<button type="button" on:click={nextTheme} class="rail-btn" title="Toggle theme">
				<svelte:component this={iconMap[$themePreference] ?? Sun} size={20} />
			</button>
			<div class="spacer" />
			<div class="flex flex-col items-center gap-3 pb-2">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer"
						class="rail-btn"
						title={social.label}
					>
						<svelte:component this={social.icon} size={20} />
					</a>
				{/each}
			</div>
		</aside>
	</div>

	<div
		class="md:hidden fixed bottom-[12px] left-1/2 -translate-x-1/2 inline-flex items-center gap-[10px] px-[14px] py-[12px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(135deg,rgba(0,0,0,0.42),rgba(0,0,0,0.12)),rgba(12,12,12,0.9)] shadow-[0_12px_44px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-[10px] rounded-none z-[30]"
	>
		<nav class="flex items-center gap-2">
			{#each navLinks as link}
				<a
					href={link.href}
					class={`rail-btn !h-11 !w-11 ${isActive(link.href, $page.url.pathname) ? 'is-active' : ''}`}
					title={link.label}
				>
					<svelte:component this={link.icon} size={18} />
					<span class="sr-only">{link.label}</span>
				</a>
			{/each}
		</nav>
		<div class="divider vertical" />
		<button type="button" on:click={nextTheme} class="rail-btn !h-11 !w-11" title="Toggle theme">
			<svelte:component this={$resolvedTheme === 'dark' ? Moon : Sun} size={18} />
			<span class="sr-only">Toggle theme</span>
		</button>
	</div>

	<main class="md:px-[120px] px-4">
		<slot />
	</main>
</div>

<style>
	.rail {
		position: fixed;
		top: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 14px 10px;
		width: 68px;
		border-radius: 0;
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.12)),
			rgba(12, 12, 12, 0.9);
		box-shadow:
			0 20px 70px rgba(0, 0, 0, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.02);
		z-index: 30;
		backdrop-filter: blur(16px);
		justify-content: space-between;
		align-items: center;
	}

	.rail-left {
		left: 0;
	}

	.rail-right {
		right: 0;
		align-items: center;
	}

	.rail-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		width: 48px;
		border-radius: 0;
		border: 1px solid transparent;
		color: var(--color-ink-strong);
		background-color: transparent;
		text-decoration: none;
		transition:
			background-color 150ms ease,
			transform 150ms ease,
			border-color 150ms ease;
	}

	.rail-btn:hover {
		background-color: rgba(255, 255, 255, 0.06);
		border-color: var(--color-border);
	}

	.rail-btn:active {
		transform: scale(0.98);
	}

	.rail-btn.is-active {
		background-color: rgba(255, 255, 255, 0.16);
		border-color: var(--color-accent);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.divider {
		width: 40px;
		height: 1px;
		border-top: 1px solid var(--color-border);
		opacity: 0.6;
	}

	.spacer {
		flex: 1;
		width: 100%;
	}

	.divider.vertical {
		width: 1px;
		height: 44px;
		border-top: 0;
		border-left: 1px solid var(--color-border);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
