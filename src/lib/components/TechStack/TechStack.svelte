<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let technologies: string[];
	export let timeline: gsap.core.Timeline;

	onMount(() => {
		timeline.fromTo(
			'#techStackText',
			{ x: 0, opacity: 1 },
			{
				x: -50,
				opacity: 0,
				scrollTrigger: {
					trigger: '#projectHeroSection',
					start: 'top 0',
					endTrigger: '#techStackSection',
					end: 'top 0',
					scrub: true
				}
			}
		);
		gsap.utils.toArray('.techStackChip').forEach((ele: any, index: number) => {
			const start = `top ${index * -30}`;
			const end = `top ${index * -30}`;
			timeline.fromTo(
				ele,
				{
					opacity: 1,
					x: 0
				},
				{
					x: 20,
					opacity: 0,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: start,
						endTrigger: '#techStackSection',
						end,
						scrub: true
					},
					ease: 'expo.out'
				}
			);
		});
	});
</script>

<section id="techStackSection" class="flex w-full mt-10 md:mt-14">
	<div
		class="max-w-[1440px] mx-auto flex w-full flex-wrap justify-center items-center px-4 py-5 flex-col md:flex-row"
	>
		<h4
			id="techStackText"
			class="text-gray-700 text-2xl raleway font-light pr-5 relative after:h-full after:w-[1px] after:bg-gray-700 after:flex after:absolute after:right-2 after:top-0 after:bottom-0"
		>
			TECH STACK
		</h4>
		{#each technologies as tech}
			<div
				class="techStackChip bg-gray-700 px-5 py-3 mx-3 rounded-lg raleway text-sm flex my-1 md:my-0 text-white"
			>
				{tech}
			</div>
		{/each}
	</div>
</section>
