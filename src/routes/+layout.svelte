<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Noise from '$lib/assets/noise.png';
	import Lenis from '@studio-freight/lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { initTheme } from '$lib/stores/theme';
	import Sidebars from '$lib/components/Sidebars/Sidebars.svelte';

	// Listen for the custom event to hide the splash screen

	onMount(() => {
		const cleanupTheme = initTheme();

		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 2000);
		});
		gsap.ticker.lagSmoothing(0);

		return () => {
			cleanupTheme();
		};
	});
</script>

<div>
	<div
		style="background: url({Noise})"
		class="inset-0 w-screen h-screen opacity-40 fixed top-0 left-0 right-0 bottom-0 z-[1] pointer-events-none"
	/>
	<Sidebars>
		<slot />
	</Sidebars>
</div>
