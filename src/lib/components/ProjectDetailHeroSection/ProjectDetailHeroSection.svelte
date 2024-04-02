<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { type Project } from '$lib/projects';

	export let project: Project;

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		timeline.fromTo(
			'#heroNav',
			{
				opacity: 0.5,
				duration: 0.5
			},
			{
				y: -100,
				scrollTrigger: {
					trigger: '#projectHeroSection',
					start: 'top 50',
					scrub: true
				}
			}
		);
	});
</script>

<section id="projectHeroSection" class="h-[50vh] w-svw flex flex-col items-center justify-between">
	<Header />
	<div class="flex flex-col items-center space-y-5">
		<img src={project.logo} alt="logo" class="h-10 invert" />
		<span class="text-gray-500 text-sm font-medium orbitron tracking-wider uppercase">
			{project.organizaton} - {project.year}
		</span>
	</div>
	<h1
		class="text-6xl w-1/2 text-center font-semibold opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
	>
		{project.short_description}
	</h1>
</section>
