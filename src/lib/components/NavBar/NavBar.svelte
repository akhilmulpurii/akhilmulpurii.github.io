<script lang="ts">
	import { cycleThemePreference, resolvedTheme, themePreference } from '$lib/stores/theme';

	const labelMap = {
		light: 'Light',
		dark: 'Dark',
		system: 'Auto'
	} as const;

	const nextTheme = () => cycleThemePreference();
</script>

<div
	class="fixed z-[999999999] bottom-6 left-1/2 -translate-x-1/2 transition-transform duration-300 flex justify-center"
>
	<nav
		style="box-shadow: 0.01rem 0.01rem 0.5rem hsla(0,0%,0%,0.12); background-color: var(--color-surface);"
		class="relative z-[999999999] rounded-full backdrop-blur-3xl border soft-border"
	>
		<ul class="flex p-2 items-center list-none">
			<li>
				<a
					href="/"
					class="hover:underline hover:text-[var(--color-ink-strong)] transition-all block px-4 py-2 font-medium raleway text-sm text-[var(--color-ink-muted)] underline-offset-4 decoration-amber-600 rounded-full border-0 bg-transparent"
				>
					Home
				</a>
			</li>
			<li>
				<a
					href="/projects"
					class="hover:underline hover:text-[var(--color-ink-strong)] transition-all block px-4 py-2 font-medium raleway text-sm text-[var(--color-ink-muted)] underline-offset-4 decoration-amber-600 rounded-full border-0 bg-transparent"
				>
					Projects
				</a>
			</li>
			<li>
				<a
					href="/blog"
					class="hover:underline hover:text-[var(--color-ink-strong)] transition-all block px-4 py-2 font-medium raleway text-sm text-[var(--color-ink-muted)] underline-offset-4 decoration-amber-600 rounded-full border-0 bg-transparent"
				>
					Blog
				</a>
			</li>
			<li>
				<a
					href="/contact"
					class="hover:underline hover:text-[var(--color-ink-strong)] transition-all block px-4 py-2 font-medium raleway text-sm text-[var(--color-ink-muted)] underline-offset-4 decoration-amber-600 rounded-full border-0 bg-transparent"
				>
					Contact
				</a>
			</li>
			<li>
				<button
					type="button"
					on:click={nextTheme}
					class="flex items-center gap-2 px-4 py-2 text-sm font-semibold raleway rounded-full border soft-border bg-[var(--color-surface-strong)] text-[var(--color-ink-strong)] hover:bg-[var(--color-surface)] active:scale-95 transition"
				>
					<span class="text-lg">{$resolvedTheme === 'dark' ? '🌙' : '☀️'}</span>
					<span>{$themePreference ? labelMap[$themePreference] : ''}</span>
				</button>
			</li>
		</ul>
		<span
			style="translate: none; rotate: none; scale: none; opacity: 0; visibility: hidden; height: 46px; width: 110px; transform: translate(157px, 7px) scale(0, 0);"
		></span>
	</nav>
</div>
