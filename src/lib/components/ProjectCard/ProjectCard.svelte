<script lang="ts">
	export let title: string;
	export let card_image: string | undefined;
	export let urlSlug: string;
	export let technologies: string[];
	export let platform: string;
	export let year: string;
</script>

<a href="/projects/{urlSlug}" class="project-card group">
	<div class=" bg-white aspect-square overflow-hidden">
		<img
			src={card_image}
			class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-500"
			alt="projectImage"
		/>
	</div>
	<div class="flex flex-col mt-2">
		<div>
			<p class="uppercase">Platform: {platform}</p>
		</div>
		<div class="flex items-end relative">
			<p
				class="text-4xl uppercase after:top-[95%] after:absolute after:transition-all after:bg-gradient-to-r after:from-amber-500 after:via-orange-300 after:to-amber-400 after:h-[3px] after:w-0 after:left-0 group-hover:after:w-20"
			>
				{title}
			</p>
			<p class="text-lg ml-2">/{year}</p>
		</div>
		<div>
			{#each technologies as tech}
				<div
					class="relative mr-2 mt-3 select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900 inline-block"
				>
					<span class="z-2 relative">{tech}</span>
				</div>
			{/each}
		</div>
	</div>
</a>
