<script lang="ts">
	import projects from '$lib/projects';
</script>

<section class="min-h-svh w-svw relative">
	<div class="w-full h-full grid grid-cols-3 gap-16 p-16">
		{#each projects as project}
			<a href="/projects/{project.urlSlug}">
				<div class=" bg-white aspect-square overflow-hidden">
					<img src={project.card_image} class="w-full h-full object-cover" alt="projectImage" />
				</div>
				<div class="flex flex-col mt-2">
					<div>
						<p class="uppercase">Platform: {project.platform}</p>
					</div>
					<div class="flex items-end">
						<p class="text-4xl uppercase">
							{project.title}
						</p>
						<p class="text-lg ml-2">/{project.year}</p>
					</div>
					<div>
						{#each project.technologies as tech}
							<div
								class="relative mr-2 mt-2 select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900 inline-block"
							>
								<span class="z-2 relative">{tech}</span>
							</div>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
