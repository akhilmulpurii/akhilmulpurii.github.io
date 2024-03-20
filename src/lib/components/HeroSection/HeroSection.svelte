<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import GradientBackground from '../GradientBackground/GradientBackground.svelte';
	import { getCentralTime } from '$lib/utils';
	import Logo from '$lib/assets/logo.svg';

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

		gsap.fromTo(
			'.heroInner',
			{ scale: 1, opacity: 1 },
			{
				scale: 0.5,
				opacity: 0.5,
				scrollTrigger
			}
		);
	});
</script>

<GradientBackground className=" relative z-10 flex flex-col items-center justify-center">
	<div class="absolute flex top-10 w-screen justify-between px-10">
		<a class="z-40" href="/">
			<img
				src={Logo}
				alt="Logo"
				class=" hover:scale-90 transition-all active:scale-110 h-6 cursor-pointer"
			/>
		</a>
		<div class="flex items-center uppercase text-xs/[0.75rem] font-mono">
			<span>EDMOND, OK {getCentralTime()} CST</span>
			<div
				class="flex relative justify-center before:absolute before:left-2 items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-400 before:animate-ping before:flex border border-1 rounded-2xl ml-4 p-2"
			>
				<div class="w-2 h-2 mr-2 rounded-full bg-green-600 z-10"></div>
				OPEN TO WORK
			</div>
		</div>
	</div>
	<div class="heroOuter relative h-screen w-full z-20 flex justify-center items-center flex-col">
		<div class="heroInner flex flex-col justify-center items-center">
			<h1
				class="title font-bold text-center opacity-100 text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50"
			>
				I'm Sai Akhil Mulpuri<br />Full Stack Developer
			</h1>
			<h2 class="text-center text-3xl font-light text-white mt-10 max-w-3xl">
				I develop accessible, responsive, interactive, and animated websites with a strong focus on
				performance.
			</h2>
		</div>
	</div>
</GradientBackground>
