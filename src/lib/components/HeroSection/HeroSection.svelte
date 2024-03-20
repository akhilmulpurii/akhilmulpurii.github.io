<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import lines from '$lib/assets/lines.svg';
	import noise from '$lib/assets/noise.png';
	import GradientBackground from '../GradientBackground/GradientBackground.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scrollTrigger = {
			pin: '.heroOuter',
			trigger: '.heroSection',
			start: 'top top',
			endTrigger: '.porfolioSection',
			end: 'top top',
			markers: false,
			scrub: true
		};

		gsap.to('.heroInner', {
			scale: 0.5,
			scrollTrigger
		});
	});
</script>

<GradientBackground
	gradientBackgroundEnd="#0d0c09"
	gradientBackgroundStart="#101b43"
	firstColor="35, 7, 77"
	secondColor="115, 3, 192"
	thirdColor="28, 181, 224"
	fourthColor="0, 90, 167"
	pointerColor="78, 84, 200"
	fifthColor="102, 166, 255"
	className="pointer-events-none relative z-10 flex items-center justify-center"
>
	<div class="relative h-screen heroOuter w-full z-20 flex justify-center items-center">
		<div class="heroInner flex justify-center items-center">
			<h1
				class="title font-bold text-center opacity-100 text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50"
			>
				I'm Sai Akhil Mulpuri<br />Full Stack Developer
			</h1>
		</div>
	</div>
	<div class="absolute top-0 z-10 w-screen h-screen">
		<img
			class="inset-0 opacity-70 w-full h-full absolute z-20 pointer-events-none"
			src={noise}
			alt="noise"
		/>
		<img
			id="leftLine"
			class="opacity-10 absolute left-0 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
		<img
			id="rightLine"
			class="opacity-10 absolute right-0 rotate-180 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
	</div>
</GradientBackground>
