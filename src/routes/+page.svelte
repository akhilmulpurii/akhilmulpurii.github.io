<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection/AboutMeSection.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import SubHeroSection from '$lib/components/SubHeroSection/SubHeroSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'landingPageAnimation' });
</script>

<div>
	<HeroSection {timeline} />
	<SubHeroSection {timeline} />
	<AboutMeSection {timeline} />
	<div style="height:100vh;" />
</div>
