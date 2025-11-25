<script lang="ts">
	import projects from '$lib/projects';
	import ProjectCard from '../ProjectCard/ProjectCard.svelte';
</script>

<section class="min-h-svh w-svw relative">
	<div
		class="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-16 p-2 md:p-16 projectListGrid"
	>
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
