<script>
	import { getCentralTime } from '$lib/utils';
	import Logo from '$lib/assets/logo.svg';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({ id: 'heroSectionAnimation' });

		const commonScrollProps = {
			start: 'top 0',
			end: '+=500',
			markers: true,
			scrub: true
		};

		timeline
			.to('#heroNav', {
				y: -100,
				scrollTrigger: { ...commonScrollProps }
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
						pin: '.heroInnerDiv',
						...commonScrollProps
					}
				},
				0
			);
	});
</script>

<section id="heroSection" class="relative h-svh w-svw overflow-hidden">
	<div id="heroInnerDiv" class="flex flex-col h-full w-full items-center justify-between">
		<div id="#heroNav" class="flex w-full justify-between sm:p-10 p-5">
			<a href="/" class="flex z-[2] justify-center items-center">
				<img
					src={Logo}
					alt="Logo"
					class=" hover:scale-90 transition-all active:scale-110 h-6 cursor-pointer"
				/>
			</a>
			<div class="flex z-[2] items-center uppercase text-xs/[0.75rem] font-mono">
				<span class="hidden sm:block">EDMOND, OK {getCentralTime()} CST</span>
				<div
					class="flex relative justify-center before:absolute before:left-2 items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-400 before:animate-ping before:flex border border-1 rounded-2xl ml-4 p-2"
				>
					<div class="w-2 h-2 mr-2 rounded-full bg-green-600 z-10"></div>
					OPEN TO WORK
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center">
			<h1
				style="font-size:33vw;line-height:33vw;"
				id="hero-title"
				class="select-none playfair z-[2] font-bold text-center opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50"
			>
				AKHIL
			</h1>
		</div>
	</div>
</section>
