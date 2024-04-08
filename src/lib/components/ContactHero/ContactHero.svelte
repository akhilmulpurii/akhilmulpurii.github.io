<script lang="ts">
	import { onMount } from 'svelte';
	import BadgePin from '../BadgePin/BadgePin.svelte';
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
					trigger: '#heroSection',
					start: 'top 5',
					scrub: true
				}
			})
			.fromTo(
				'.heading',
				{
					x: 0,
					opacity: 1
				},
				{
					x: -200,
					opacity: 0,
					scrollTrigger: {
						trigger: '#heroSection',
						start: 'top 0',
						end: 'center 400',
						scrub: true
					}
				}
			)
			.fromTo(
				'.subheading',
				{
					x: 0,
					opacity: 1
				},
				{
					x: -200,
					opacity: 0,
					scrollTrigger: {
						trigger: '#heroSection',
						start: 'top 0',
						end: 'center 100',
						scrub: true
					}
				}
			);
	});
</script>

<section>
	<Header />
	<div class="grid md:grid-cols-[3fr_1fr] md:p-16 p-6 grid-cols-[1fr]">
		<div class="flex flex-col md:text-left text-center md:m-0 mb-8 leading-[8vw]">
			<h1 class="heading text-[10vw] font-medium">Let's work together!</h1>
			<p class="subheading mt-8 md:text-2xl font-extralight text-lg">
				Let me help you become even greater at what you do.
				<br />
				Fill out the form below and I'll get back to you as soon as possible.
			</p>
		</div>
		<div class="md:mt-[5vw] mt-0 justify-self-center">
			<BadgePin />
		</div>
	</div>
</section>
