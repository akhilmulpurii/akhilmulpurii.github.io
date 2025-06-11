<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection/AboutMeSection.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import LandingPorfolioSection from '$lib/components/LandingPorfolioSection/LandingPorfolioSection.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import SubHeroSection from '$lib/components/SubHeroSection/SubHeroSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'landingPageAnimation' });

	onMount(() => {
		return () => {
			timeline.kill();
		};
	});
</script>

<div class="w-svw overflow-x-hidden">
	<NavBar {timeline} />
	<HeroSection {timeline} />
	<SubHeroSection {timeline} />
	<AboutMeSection {timeline} />
	<LandingPorfolioSection {timeline} />
	<Footer {timeline} showQuote={true} />
</div>
