<script lang="ts">
	import { onMount } from 'svelte';

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		const scrollTrigger = {
			trigger: '#subheroSection',
			start: 'top top',
			end: '+=100vh', // End trigger 100vh (viewport height) from the top of the trigger
			pin: true,
			markers: true,
			scrub: true
		};
		// timeline
		// 	.fromTo(
		// 		'.right',
		// 		{
		// 			x: '100vw'
		// 		},
		// 		{
		// 			x: 0,
		// 			scrollTrigger
		// 		}
		// 	)
		// 	.fromTo(
		// 		'.left',
		// 		{
		// 			x: '-100vw'
		// 		},
		// 		{
		// 			x: 0,
		// 			scrollTrigger
		// 		}
		// 	)
		// 	.fromTo(
		// 		'.heroCaption',
		// 		{
		// 			scale: 0.98,
		// 			opacity: 0
		// 		},
		// 		{
		// 			scale: 1,
		// 			opacity: 1,
		// 			scrollTrigger
		// 		}
		// 	);
	});
</script>

<section id="subheroSection" class="h-svh w-svw overflow-hidden">
	<div id="subheroInner" class="flex flex-col justify-center my-auto w-full h-full">
		<h2 class="playfair font-semibold text-right left subheading">CREATIVE WEB</h2>
		<h2 class="playfair font-semibold text-right right subheading">DEVELOPER</h2>
		<h4 class="playfair font-medium text-center text-2xl heroCaption sm:w-1/3 mx-auto mt-20">
			Transforming tomorrow with tech-infused narratives, my software creates fair and fun
			experiences for all.
		</h4>
	</div>
</section>

<style>
	.subheading {
		font-size: 15vw;
		line-height: 10vw;
	}
</style>
