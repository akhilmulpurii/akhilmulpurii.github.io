<script lang="ts">
	export let title: string;
	export let card_image: string | undefined;
	export let urlSlug: string;
	export let technologies: string[];
</script>

<div>
	<div class="relative group transition-all duration-700">
		<div
			class="landingProjectCardContainer w-full aspect-square transition-transform overflow-hidden relative bg-white group-hover:scale-95"
		>
			<img
				src={card_image}
				alt="{title} card image"
				class="landingProjectCard w-full object-center z-0 h-full absolute top-0 left-1/2 object-cover -translate-x-1/2 scale-125 group-hover:scale-110 transition-transform"
			/>
		</div>
		<div class="mt-6">
			<h4 class="text-2xl">
				{title}
			</h4>
			<div class="pt-[0.4vw]">
				{#each technologies as tech}
					<div
						style="box-shadow: inset 0 0 0 2px rgba(60,60,60,0.7);"
						class="mt-4 text-lg h-10 leading-10 px-4 rounded-full raleway inline-block mr-3"
					>
						<span class="z-2 relative">{tech}</span>
					</div>
				{/each}
			</div>
		</div>
		<!-- svelte-ignore a11y-missing-content -->
		<a href="/projects/{urlSlug}" class="absolute top-0 left-0 right-0 bottom-0 z-10"></a>
	</div>
</div>
