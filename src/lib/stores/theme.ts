import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type ThemePreference = 'system' | 'light' | 'dark';
export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

const themePreference = writable<ThemePreference>('system');
const resolvedTheme = writable<Theme>('light');

const systemPrefersDark = () =>
	browser && window.matchMedia('(prefers-color-scheme: dark)').matches;

const resolveTheme = (preference: ThemePreference): Theme => {
	if (preference === 'system') {
		return systemPrefersDark() ? 'dark' : 'light';
	}

	return preference;
};

const applyTheme = (preference: ThemePreference) => {
	const theme = resolveTheme(preference);

	resolvedTheme.set(theme);

	if (!browser) return;

	document.documentElement.dataset.theme = theme;
	document.documentElement.style.colorScheme = theme;
	localStorage.setItem(STORAGE_KEY, preference);
};

const handleSystemChange = (event: MediaQueryListEvent) => {
	if (get(themePreference) !== 'system') return;
	const nextTheme = event.matches ? 'dark' : 'light';
	resolvedTheme.set(nextTheme);
	document.documentElement.dataset.theme = nextTheme;
	document.documentElement.style.colorScheme = nextTheme;
};

export const initTheme = () => {
	if (!browser) return () => {};

	const stored = localStorage.getItem(STORAGE_KEY) as ThemePreference | null;
	const initialPreference: ThemePreference = stored === 'light' || stored === 'dark' || stored === 'system'
		? stored
		: 'system';

	themePreference.set(initialPreference);
	applyTheme(initialPreference);

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	media.addEventListener('change', handleSystemChange);

	const unsubscribe = themePreference.subscribe(applyTheme);

	return () => {
		media.removeEventListener('change', handleSystemChange);
		unsubscribe();
	};
};

export const setThemePreference = (preference: ThemePreference) => {
	themePreference.set(preference);
};

export const cycleThemePreference = () => {
	const current = get(themePreference);

	if (current === 'light') return themePreference.set('dark');
	if (current === 'dark') return themePreference.set('system');

	return themePreference.set('light');
};

export { resolvedTheme, themePreference };
