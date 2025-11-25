<script lang="ts">
	import projects from '$lib/projects';
	import _ from 'lodash';
	import ProjectCard from '../ProjectCard/ProjectCard.svelte';

	const [p1, p2] = _.chunk(_.take(projects, 4), 2);
</script>

<section id="landingPortfolioSection" class="title--works min-h-screen">
	<div class="px-[2vw] py-[16px] md:px-[50px] md:py-[32px]">
		<div class="flex flex-row">
			<div class="flex flex-col">
				<h2
					id="landingPortfolioTitle"
					class="text-6xl mb-4 text-center md:text-left leading-[3.75rem] md:text-[12rem] md:leading-[10rem] z-10 uppercase overflow-hidden bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[var(--color-heading-from)] to-[var(--color-heading-to)]"
					data-animation="split"
				>
					PORTFOLIO
				</h2>
				<p
					id="landingPortfolioCaption"
					class="h4 lh-130 text-xl max-w-xl md:text-2xl md:max-w-2xl text-center md:text-left"
				>
					Discover a glimpse into my portfolio, a culmination of recent endeavors where design meets
					purpose in website development.
				</p>
			</div>
		</div>
		<div
			class="overflow-hidden grid gap-x-[2vw] md:gap-x-[8vw] mt-12 grid-cols-2 md:grid-cols-[0.8fr_1.2fr]"
		>
			{#each p1 as project}
				<ProjectCard
					technologies={project.technologies}
					title={project.title}
					urlSlug={project.urlSlug}
					card_image={project.card_image}
					year={project.year}
					platform={project.platform}
				/>
			{/each}
		</div>
		<div
			class="overflow-hidden grid gap-x-[2vw] md:gap-x-[8vw] mt-12 grid-cols-2 md:grid-cols-[1.2fr_0.8fr]"
		>
			{#each p2 as project}
				<ProjectCard
					technologies={project.technologies}
					title={project.title}
					urlSlug={project.urlSlug}
					card_image={project.card_image}
					year={project.year}
					platform={project.platform}
				/>
			{/each}
		</div>
	</div>
</section>
