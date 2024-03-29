<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'projectListPageAnimation' });
</script>

<main>
	<NavBar {timeline} />
	PROJECTS W.I.P
	<Footer {timeline} />
</main>
