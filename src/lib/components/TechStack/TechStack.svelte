<script lang="ts">
	export let technologies: string[];
	export let timeline: gsap.core.Timeline;
</script>

<section class="flex w-full mt-10 md:mt-14">
	<div
		class="max-w-[1440px] mx-auto flex w-full flex-wrap justify-center items-center px-4 py-5 flex-col md:flex-row"
	>
		<h4
			class="text-gray-700 text-2xl raleway font-light pr-5 relative after:h-full after:w-[1px] after:bg-gray-700 after:flex after:absolute after:right-2 after:top-0 after:bottom-0"
		>
			TECH STACK
		</h4>
		{#each technologies as tech}
			<div
				class="bg-gray-700 px-5 py-3 mx-3 rounded-lg raleway text-sm flex my-1 md:my-0 text-white"
			>
				{tech}
			</div>
		{/each}
	</div>
</section>
