<script lang="ts">
	import { onMount } from 'svelte';
	import Photography from '$lib/assets/photography.jpeg';
	import Portrait from '$lib/assets/aboutPortrait.jpeg';
	import Temple from '$lib/assets/aboutTemple.jpeg';
	import { gsap } from 'gsap';

	const filter =
		'brightness-[105%] grayscale-[100%] contrast-[100%] hue-rotate-0 invert-0 opacity-100 saturate-[100%] sepia-[20%]';

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
				})
				.fromTo(
					'#about-title',
					{
						opacity: 0,
						y: -50
					},
					{
						opacity: 1,
						y: 0,
						scrollTrigger: {
							trigger: container,
							start: 'top 80%',
							end: 'bottom 80%',
							scrub: true,
							pin: false
						}
					}
				)
				.fromTo(
					'.about-caption',
					{
						opacity: 0,
						x: 50
					},
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: container,
							start: 'top 50%',
							end: 'bottom 60%',
							scrub: true,
							pin: false
						}
					}
				)
				.fromTo(
					'.about-tile-img',
					{
						opacity: 0,
						scale: 0.7,
						y: 20
					},
					{
						opacity: 1,
						scale: 1,
						y: 0,
						scrollTrigger: {
							trigger: container,
							start: 'top 40%',
							end: 'bottom 40%',
							scrub: true,
							pin: false
						}
					}
				);
		});
	});
</script>

<section class="w-svw flex items-center justify-center md:h-[80vh]">
	<div
		class="playfair img-container w-full h-full p-8 relative overflow-hidden flex flex-col items-center md:items-start justify-center"
	>
		<h1
			id="about-title"
			class="z-10 text-[32px] leading-[32px] md:text-[38px] md:leading-[38px] tracking-[-1.4px] uppercase text-left font-normal w-full md:w-3/4 text-white"
		>
			I am a designer and website developer with a creative approach and an analytical mindset.
		</h1>
		<div class="z-10 grid mt-6 md:mt-16 grid-cols-[repeat(12,minmax(0,1fr))] grid-flow-dense gap-6">
			<span class="hidden md:block md:col-span-3" />
			<span class="about-caption text-xl text-white col-span-12 md:col-span-3">
				<span class="md:hidden">&#10238; </span>Designing websites that solve, captivate, and
				convert.
			</span>
			<span class="about-caption text-xl text-white col-span-12 md:col-span-3">
				<span class="md:hidden">&#10238; </span>Integrating analysis with creativity, I craft
				websites that solve tasks and inspire engagement.
			</span>
			<span class="hidden md:block md:col-span-3" />
			<span class="hidden md:block md:col-span-3" />
			<img
				class="{filter} about-tile-img aspect-square object-cover object-right-bottom col-span-6 md:col-span-3"
				src={Portrait}
				alt="portrait"
			/>
			<img
				class="{filter} about-tile-img aspect-square object-top object-cover col-span-6 md:col-span-3"
				src={Temple}
				alt="temple"
			/>
			<span />
		</div>
		<img
			id="parallax-img"
			class="w-full object-top {filter} blur-[1px] md:blur-none z-0 h-full absolute top-0 left-1/2 object-cover -translate-x-1/2 scale-150"
			alt="pict"
			src={Photography}
		/>
	</div>
</section>
