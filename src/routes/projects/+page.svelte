<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import ProjectListSection from '$lib/components/ProjectListSection/ProjectListSection.svelte';
	import ProjectsListHeroSection from '$lib/components/ProjectsListHeroSection/ProjectsListHeroSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'projectListPageAnimation' });

	onMount(() => {
		return () => {
			timeline.kill();
		};
	});
</script>

<div class="w-svw overflow-x-hidden">
	<NavBar {timeline} />
	<ProjectsListHeroSection {timeline} />
	<ProjectListSection {timeline} />
	<Footer {timeline} />
</div>
