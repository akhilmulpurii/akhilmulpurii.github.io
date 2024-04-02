<script lang="ts">
	import type { ProjectSection } from '$lib/projects';
	export let section: ProjectSection;
	export let reverse: boolean = false;
	const { heading, caption, image } = section;
</script>

<section class="flex w-full min-h-[80vh]">
	<div
		class="max-w-[1440px] mx-auto my-0 flex w-full px-8 py-6 flex-col md:flex-row md:p-0 xl:py-5 {reverse
			? 'md:flex-row-reverse'
			: ''}"
	>
		<div class="flex flex-col flex-[4] justify-center">
			<h2 class="text-4xl">{heading}</h2>
			<h5 class="text-xl mt-4">{caption}</h5>
		</div>
		<div class="flex-[3] flex justify-center items-center">
			<img class="w-full object-contain rounded-md" src={image} alt="{heading} image" />
		</div>
	</div>
</section>
