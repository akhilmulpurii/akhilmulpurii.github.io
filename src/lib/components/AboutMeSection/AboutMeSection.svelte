<script lang="ts">
	import { onMount } from 'svelte';
	import Photography from '$lib/assets/photography.jpeg';
	import Portrait from '$lib/assets/aboutPortrait.jpeg';
	import Temple from '$lib/assets/aboutTemple.jpeg';
	import { gsap } from 'gsap';

	const filter =
		'brightness-[105%] grayscale-[100%] contrast-[100%] hue-rotate-0 invert-0 opacity-100 saturate-[100%] sepia-[15%]';

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.utils.toArray('.img-container').forEach((container: any) => {
			const image = document.getElementById('parallax-img');

			timeline
				.from(image, {
					yPercent: -30,
					ease: 'none'
				})
				.to(image, {
					yPercent: 30,
					ease: 'none',
					scrollTrigger: {
						trigger: container,
						scrub: true,
						pin: false
					}
				});
		});
	});
</script>

<section class="w-svw flex items-center justify-center h-[80vh]">
	<div
		class="playfair img-container w-full h-full p-8 relative overflow-hidden flex flex-col items-start justify-center"
	>
		<h1
			class="z-10 text-[38px] leading-[38px] tracking-[-1.4px] uppercase text-left font-normal w-3/4 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/80"
		>
			I am a designer and website developer with a creative approach and an analytical mindset.
		</h1>
		<div class="z-10 grid mt-5 grid-cols-4 gap-6">
			<span />
			<span class="text-xl text-white">Designing websites that solve, captivate, and convert.</span>
			<span class="text-xl text-white">
				Integrating analysis with creativity, I craft websites that solve tasks and inspire
				engagement.
			</span>
			<span />
			<span />
			<img
				class="{filter} aspect-square object-cover object-right-bottom"
				src={Portrait}
				alt="portrait"
			/>
			<img class="{filter} aspect-square object-cover" src={Temple} alt="temple" />
			<span />
		</div>
		<img
			id="parallax-img"
			class="w-full object-top {filter} z-0 h-full absolute top-0 left-1/2 object-cover -translate-x-1/2 scale-150"
			alt="pict"
			src={Photography}
		/>
	</div>
</section>
