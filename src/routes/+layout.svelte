<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import SplashScreen from '$lib/components/SplashScreen/SplashScreen.svelte';

	let showSplash = true;

	// Listen for the custom event to hide the splash screen
	onMount(() => {
		window.addEventListener('hide-splash', () => {
			showSplash = false;
		});
	});
</script>

{#if showSplash}
	<SplashScreen />
{:else}
	<slot />
{/if}
