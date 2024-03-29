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
			.fromTo(
				'#hero-title',
				{
					opacity: 1,
					scale: 1
				},
				{
					opacity: 0,
					scale: 0.9,
					scrollTrigger: {
						trigger: '#heroSection',
						start: 'top top',
						endTrigger: '#subheroSection',
						end: 'bottom 0%',
						scrub: true,
						pin: true,
						markers: false
					}
				},
				0
			)
			.to('#heroNav', {
				y: -100,
				scrollTrigger: {
					trigger: '#heroSection',
					start: 'top 100',
					scrub: true
				}
			});
	});
</script>

<section id="heroSection" class="h-svh w-svw overflow-hidden">
	<div class="heroTrigger h-full w-full">
		<div id="heroInnerDiv" class="flex flex-col h-full w-full items-center justify-between">
			<Header />
			<div id="hero-title" class="flex flex-col justify-center items-center">
				<h1
					style="font-size:33vw;line-height:33vw;"
					class="select-none playfair z-[2] font-bold text-center opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
				>
					AKHIL
				</h1>
			</div>
		</div>
	</div>
</section>
