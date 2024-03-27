<script lang="ts">
	import { onMount } from 'svelte';
	import Photography from '$lib/assets/photography.jpg';
	import { gsap } from 'gsap';

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.utils.toArray('.img-container').forEach((container: any) => {
			let image = container.querySelector('img');

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

<section class="w-svw flex items-center justify-center h-svh">
	<div class="img-container w-full h-full relative overflow-hidden">
		<img
			class="w-auto brightness-[105%] grayscale-[100%] contrast-[100%] hue-rotate-0 invert-0 opacity-100 saturate-[100%] sepia-[15%] h-full absolute top-0 left-1/2 object-fill -translate-x-1/2 scale-150"
			alt="pict"
			src={Photography}
		/>
	</div>
</section>
