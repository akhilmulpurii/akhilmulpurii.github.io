<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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

<GradientBackground className="pointer-events-none relative z-10 flex items-center justify-center">
	<div class="relative h-screen heroOuter w-full z-20 flex justify-center items-center">
		<div class="heroInner flex justify-center items-center">
			<h1
				class="title font-bold text-center opacity-100 text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50"
			>
				I'm Sai Akhil Mulpuri<br />Full Stack Developer
			</h1>
		</div>
	</div>
</GradientBackground>
