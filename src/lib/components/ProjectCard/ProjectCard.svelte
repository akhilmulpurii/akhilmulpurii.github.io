<script lang="ts">
	export let title: string;
	export let card_image: string | undefined;
	export let urlSlug: string;
	export let technologies: string[];
	export let platform: string;
	export let year: string;
</script>

<a href="/projects/{urlSlug}" class="project-card group">
	<div class="bg-[var(--color-surface-strong)] aspect-square overflow-hidden border soft-border">
		<img
			src={card_image}
			class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-500"
			alt="projectImage"
		/>
	</div>
	<div class="flex flex-col mt-2">
		<div>
			<p class="uppercase"><span class="hidden md:inline">Platform: </span>{platform}</p>
		</div>
		<div class="flex md:flex-row flex-col md:items-end relative">
			<p
				class="text-2xl leading-none md:text-4xl uppercase after:top-[95%] after:absolute after:transition-all after:bg-gradient-to-r after:from-amber-500 after:via-orange-300 after:to-amber-400 after:h-[3px] after:w-0 after:left-0 group-hover:after:w-20 ink-strong"
			>
				{title}
			</p>
			<p class="text-lg leading-none md:ml-2 md:mb-[6px]">
				<span class="hidden md:inline">/ </span>{year}
			</p>
		</div>
		<div class="mt-1 md:mt-0">
			{#each technologies as tech}
				<div
					class="relative mr-[4px] mt-[4px] md:mr-2 md:mt-3 select-none items-center whitespace-nowrap rounded-sm py-1.5 px-2 md:px-3 font-sans text-xs font-semibold md:font-bold uppercase inline-block bg-[var(--color-surface)] text-[var(--color-ink-strong)] border soft-border"
				>
					<span class="z-2 relative">{tech}</span>
				</div>
			{/each}
		</div>
	</div>
</a>
