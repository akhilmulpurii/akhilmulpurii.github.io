<script lang="ts">
	import ContactHero from '$lib/components/ContactHero/ContactHero.svelte';
	import FormSection from '$lib/components/FormSection/FormSection.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'landingPageAnimation' });

	onMount(() => {
		return () => {
			timeline.kill();
		};
	});
</script>

<main>
	<NavBar {timeline} />
	<ContactHero />
	<FormSection />
	<Footer {timeline} showQuote={false} />
</main>
