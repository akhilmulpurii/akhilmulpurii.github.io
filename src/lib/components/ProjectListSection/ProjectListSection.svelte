<script lang="ts">
	import projects from '$lib/projects';
	import { onMount } from 'svelte';
	import ProjectCard from '../ProjectCard/ProjectCard.svelte';
	import gsap from 'gsap';
	export let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.utils.toArray('.project-card').forEach((projectCard: any, index) => {
			const start = `top ${5 * (index || 0.8) * 10}`;
			const end = `top ${-5 * (index * 10)}`;
			timeline.fromTo(
				projectCard,
				{ opacity: 0, x: 100, scale: 0.9 },
				{
					opacity: 1,
					x: 0,
					scale: 1,
					scrollTrigger: {
						trigger: '.projectListGrid',
						start,
						end,
						scrub: true
					}
				}
			);
		});
	});
</script>

<section class="min-h-svh w-svw relative">
	<div class="w-full h-full grid grid-cols-3 gap-16 p-16 projectListGrid">
		{#each projects as project}
			<ProjectCard
				title={project.title}
				year={project.year}
				card_image={project.card_image}
				urlSlug={project.urlSlug}
				platform={project.platform}
				technologies={project.technologies}
			/>
		{/each}
	</div>
</section>
