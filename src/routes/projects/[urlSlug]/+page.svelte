<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import ProjectDetailHeroSection from '$lib/components/ProjectDetailHeroSection/ProjectDetailHeroSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { type Project } from '$lib/projects.js';

	type PageData = {
		project: Project;
	};

	export let data: PageData;
	const { project } = data;

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'projectDetailsPageAnimation' });

	onMount(() => {
		return () => {
			timeline.kill();
		};
	});
</script>

<div>
	<NavBar {timeline} />
	<ProjectDetailHeroSection {timeline} {project} />
	<Footer {timeline} />
</div>
