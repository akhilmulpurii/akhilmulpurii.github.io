<script lang="ts">
	import projects from '$lib/projects';
	import _ from 'lodash';
	import ProjectCard from '../ProjectCard/ProjectCard.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.utils.toArray('.landingProjectCardContainer').forEach((container: any) => {
			const image = container.querySelector('img');

			timeline
				.from(image, {
					yPercent: -15,
					ease: 'none'
				})
				.to(image, {
					yPercent: 15,
					ease: 'none',
					scrollTrigger: {
						trigger: container,
						scrub: true,
						pin: false
					}
				});
		});
	});

	const [p1, p2] = _.chunk(_.take(projects, 4), 2);
</script>

<section class="title--works min-h-screen">
	<div class="px-[50px] py-[32px]">
		<div class="flex flex-row">
			<div class="flex flex-col">
				<h2
					class="text-[12rem] uppercase overflow-hidden leading-[10rem] bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
					data-animation="split"
				>
					PORTFOLIO
				</h2>
				<p class="h4 lh-130 text-2xl max-w-2xl">
					Discover a glimpse into my portfolio, a culmination of recent endeavors where design meets
					purpose in website development.
				</p>
			</div>
		</div>
		<div class="overflow-hidden grid gap-x-[8vw] mt-12" style="grid-template-columns: 0.8fr 1.2fr;">
			{#each p1 as project}
				<ProjectCard
					technologies={project.technologies}
					title={project.title}
					urlSlug={project.urlSlug}
					card_image={project.card_image}
				/>
			{/each}
		</div>
		<div class="overflow-hidden grid gap-x-[8vw] mt-12" style="grid-template-columns: 1.2fr 0.8fr;">
			{#each p2 as project}
				<ProjectCard
					technologies={project.technologies}
					title={project.title}
					urlSlug={project.urlSlug}
					card_image={project.card_image}
				/>
			{/each}
		</div>
	</div>
</section>
