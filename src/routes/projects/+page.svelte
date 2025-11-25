<script lang="ts">
	import ProjectListSection from '$lib/components/ProjectListSection/ProjectListSection.svelte';
	import ProjectsListHeroSection from '$lib/components/ProjectsListHeroSection/ProjectsListHeroSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
</script>

<div class="w-svw overflow-x-hidden">
	<ProjectsListHeroSection />
	<ProjectListSection />
</div>
