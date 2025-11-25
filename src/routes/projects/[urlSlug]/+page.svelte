<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import ProjectDetailHeroSection from '$lib/components/ProjectDetailHeroSection/ProjectDetailHeroSection.svelte';
	import ProjectDetailsSectionList from '$lib/components/ProjectDetailsSectionList/ProjectDetailsSectionList.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { type Project } from '$lib/projects.js';

	type PageData = {
		project: Project;
	};

	export let data: PageData;
	const { project } = data;

	gsap.registerPlugin(ScrollTrigger);
</script>

<div class="w-svw overflow-x-hidden">
	<NavBar />
	<ProjectDetailHeroSection {project} technologies={project.technologies} />
	{#each project.sections as section, i}
		<ProjectDetailsSectionList {section} reverse={i % 2 == 0} />
	{/each}
	<Footer />
</div>
