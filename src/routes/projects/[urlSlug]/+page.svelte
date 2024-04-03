<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import ProjectDetailHeroSection from '$lib/components/ProjectDetailHeroSection/ProjectDetailHeroSection.svelte';
	import ProjectDetailsSectionList from '$lib/components/ProjectDetailsSectionList/ProjectDetailsSectionList.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { type Project } from '$lib/projects.js';
	import TechStack from '$lib/components/TechStack/TechStack.svelte';

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
	<TechStack technologies={project.technologies} {timeline} />
	{#each project.sections as section, i}
		<ProjectDetailsSectionList {section} reverse={i % 2 == 0} />
	{/each}
	<Footer {timeline} />
</div>
