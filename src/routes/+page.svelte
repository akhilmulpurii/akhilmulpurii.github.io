<script lang="ts">
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
	<div style="height:100vh;" />
</div>
