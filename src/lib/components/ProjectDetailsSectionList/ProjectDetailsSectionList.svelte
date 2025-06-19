<script lang="ts">
	import type { ProjectSection } from '$lib/projects';

	export let section: ProjectSection;
	export let reverse: boolean = false;

	const { heading, caption, image } = section;
</script>

<section class="projectDetailsSectionList flex w-full min-h-[80vh]">
	<div
		class="projectDetailsSectionContainer items-center justify-center md:space-x-16 my-0 flex w-full px-8 py-0 md:py-12 md:px-16 mt-6 md:mt-12 flex-col md:flex-row {reverse
			? 'md:flex-row-reverse'
			: ''}"
	>
		<div class="flex flex-col justify-center {reverse ? 'pl-0 md:pl-12' : 'pr-0 md:pr-12'}">
			<h2 class="text-4xl">{heading}</h2>
			<h5 class="text-xl mt-4">{caption}</h5>
		</div>
		<div class="flex justify-center items-center mt-6 md:mt-0 w-full">
			<img
				class="w-full aspect-square object-contain rounded-md"
				src={image}
				alt="{heading} image"
			/>
		</div>
	</div>
</section>
