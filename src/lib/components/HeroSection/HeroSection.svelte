<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import lines from '$lib/assets/lines.svg';
	import noise from '$lib/assets/noise.png';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scrollTrigger = {
			trigger: '.heroSection',
			start: 'top top',
			endTrigger: '.porfolioSection',
			end: 'bottom top',
			markers: true,
			scrub: true
		};

		gsap.fromTo('.lines', { opacity: '20%' }, { opacity: '0%', scrollTrigger });

		gsap.to('#leftLine', { scrollTrigger, x: -500 });
		gsap.to('#rightLine', { scrollTrigger, x: 500 });

		gsap.fromTo(
			'.title',
			{
				opacity: '100%',
				scale: 1,
				y: 0
			},
			{
				scale: 0.75,
				y: '120vh',
				opacity: '50%',
				scrollTrigger
			}
		);
	});
</script>

<section
	id="heroSection"
	class="flex relative items-center heroSection justify-center h-screen overflow-hidden"
>
	<div class="absolute w-screen h-screen">
		<img class="inset-0 w-full h-full absolute z-10 pointer-events-none" src={noise} alt="noise" />
		<img
			id="leftLine"
			class="lines opacity-20 absolute left-0 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
		<img
			id="rightLine"
			class="lines opacity-20 absolute right-0 rotate-180 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
	</div>

	<h1 class="title text-8xl font-bold text-center opacity-100">
		I'm Sai Akhil Mulpuri<br />Full Stack Developer
	</h1>
</section>
