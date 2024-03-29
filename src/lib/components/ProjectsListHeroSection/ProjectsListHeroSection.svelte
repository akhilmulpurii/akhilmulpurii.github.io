<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../Header/Header.svelte';
	export let timeline: gsap.core.Timeline;

	onMount(() => {
		timeline
			.from('#heroNav', {
				opacity: 0.5,
				duration: 0.5
			})
			.to('#heroNav', {
				y: -100,
				scrollTrigger: {
					trigger: '#projectListHeroSection',
					start: 'top 100',
					scrub: true
				}
			})
			.fromTo(
				'#projectListTitle',
				{
					opacity: 1,
					scale: 1,
					x: 0
				},
				{
					opacity: 0,
					scale: 0.8,
					x: 100,
					scrollTrigger: {
						trigger: '.innerProjectListDiv',
						start: 'top 0',
						end: 'bottom 50%',
						scrub: true
					}
				}
			)
			.fromTo(
				'#projectListSubtitle',
				{
					opacity: 1,
					scale: 1,
					x: 0
				},
				{
					opacity: 0,
					scale: 0.8,
					x: -100,
					scrollTrigger: {
						trigger: '.innerProjectListDiv',
						start: 'top 0',
						end: 'bottom 50%',
						scrub: true,
						pin: true
					}
				}
			);
	});
</script>

<section id="projectListHeroSection" class="h-svh w-svw overflow-hidden">
	<div class="innerProjectListDiv w-full h-full flex flex-col justify-between items-center">
		<Header />
		<div class="text-right content-div">
			<h1
				id="projectListTitle"
				class="text-[12vw] font-medium h-[12vw] italic leading-[-100px] text-amber-500"
			>
				RECENT
			</h1>
			<h2 id="projectListSubtitle" class="text-[15vw] font-bold h-[15vw] leading-[100px]">WORK</h2>
		</div>
		<div />
	</div>
</section>
