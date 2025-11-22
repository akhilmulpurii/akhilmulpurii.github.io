<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let cursorR: HTMLDivElement;
	let cursorG: HTMLDivElement;
	let cursorB: HTMLDivElement;

	onMount(() => {
		// RGB Split Cursor Logic
		const moveCursor = (e: MouseEvent) => {
			// Red channel - Fast
			gsap.to(cursorR, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.1,
				ease: 'power2.out'
			});
			// Green channel - Medium
			gsap.to(cursorG, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.2,
				ease: 'power2.out'
			});
			// Blue channel - Slow (Laggy)
			gsap.to(cursorB, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.3,
				ease: 'power2.out'
			});
		};
		window.addEventListener('mousemove', moveCursor);

		// Hero Animations
		const tl = gsap.timeline();
		tl.from('.hero-title span', {
			y: 200,
			skewY: 10,
			opacity: 0,
			duration: 1.5,
			stagger: 0.1,
			ease: 'power4.out'
		});

		// Scroll Animations
		gsap.utils.toArray('.reveal-text').forEach((elem: any) => {
			gsap.from(elem, {
				scrollTrigger: {
					trigger: elem,
					start: 'top 80%',
					toggleActions: 'play none none reverse'
				},
				y: 50,
				opacity: 0,
				duration: 1,
				ease: 'power2.out'
			});
		});

		gsap.to('.marquee-content', {
			xPercent: -50,
			ease: 'none',
			duration: 20,
			repeat: -1
		});

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<div
	class="relative w-full min-h-screen bg-void text-off-white overflow-hidden cursor-none selection:bg-acid-green selection:text-void"
>
	<!-- RGB Split Cursor -->
	<div
		bind:this={cursorR}
		class="fixed top-0 left-0 w-4 h-4 border border-red-500 rounded-full pointer-events-none z-[9999] mix-blend-screen -translate-x-1/2 -translate-y-1/2"
	></div>
	<div
		bind:this={cursorG}
		class="fixed top-0 left-0 w-4 h-4 border border-green-500 rounded-full pointer-events-none z-[9999] mix-blend-screen -translate-x-1/2 -translate-y-1/2"
	></div>
	<div
		bind:this={cursorB}
		class="fixed top-0 left-0 w-4 h-4 border border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen -translate-x-1/2 -translate-y-1/2"
	></div>

	<!-- Background Ambient Light -->
	<div
		class="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-hyper-violet/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none z-0"
	></div>
	<div
		class="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-acid-green/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none z-0"
		style="animation-delay: 2s;"
	></div>

	<!-- Navigation -->
	<nav class="fixed top-8 left-1/2 -translate-x-1/2 z-50">
		<div class="glass px-8 py-3 rounded-full flex gap-8 items-center">
			<a
				href="#work"
				class="text-sm font-mono uppercase tracking-widest hover:text-acid-green transition-colors"
				>Work</a
			>
			<a
				href="#about"
				class="text-sm font-mono uppercase tracking-widest hover:text-acid-green transition-colors"
				>About</a
			>
			<a
				href="#contact"
				class="text-sm font-mono uppercase tracking-widest hover:text-acid-green transition-colors"
				>Contact</a
			>
		</div>
	</nav>

	<!-- HERO SECTION -->
	<section class="relative h-screen flex flex-col justify-center items-center z-10 px-4">
		<h1
			class="hero-title font-sans font-bold text-[12vw] leading-[0.8] text-center uppercase mix-blend-overlay opacity-80"
		>
			<span class="block">Creative</span>
			<span class="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
				>Developer</span
			>
		</h1>
	</section>

	<!-- SELECTED WORKS -->
	<section id="work" class="relative py-32 px-4 z-10">
		<div class="max-w-7xl mx-auto">
			<div class="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
				<h2 class="reveal-text font-sans text-[8vw] leading-none text-white">
					SELECTED<br /><span class="text-white/20">WORKS</span>
				</h2>
				<span class="font-mono text-acid-green text-xl">(004)</span>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
				<!-- Project 1 -->
				<div class="reveal-text group relative">
					<div class="aspect-[4/5] bg-charcoal overflow-hidden relative">
						<div
							class="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60 z-10"
						></div>
						<!-- Placeholder for Project Image -->
						<div
							class="w-full h-full bg-white/5 group-hover:scale-105 transition-transform duration-700"
						></div>

						<div
							class="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
						>
							<div class="glass p-6 border-l-2 border-acid-green">
								<h3 class="font-sans text-4xl mb-2">Project Alpha</h3>
								<p class="font-mono text-xs text-off-white/60">NEXT.JS / WEBGL / TAILWIND</p>
							</div>
						</div>
					</div>
					<div class="mt-4 flex justify-between items-baseline">
						<h3 class="font-serif text-3xl italic group-hover:text-acid-green transition-colors">
							E-Commerce Redesign
						</h3>
						<span class="font-mono text-sm text-white/40">2024</span>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="reveal-text group relative md:mt-32">
					<div class="aspect-[4/5] bg-charcoal overflow-hidden relative">
						<div
							class="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60 z-10"
						></div>
						<div
							class="w-full h-full bg-white/5 group-hover:scale-105 transition-transform duration-700"
						></div>

						<div
							class="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
						>
							<div class="glass p-6 border-l-2 border-hyper-violet">
								<h3 class="font-sans text-4xl mb-2">Neon Dashboard</h3>
								<p class="font-mono text-xs text-off-white/60">SVELTE / D3.JS / SUPABASE</p>
							</div>
						</div>
					</div>
					<div class="mt-4 flex justify-between items-baseline">
						<h3 class="font-serif text-3xl italic group-hover:text-hyper-violet transition-colors">
							SaaS Analytics
						</h3>
						<span class="font-mono text-sm text-white/40">2024</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- TECH STACK MARQUEE -->
	<section class="py-32 overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/5">
		<div class="marquee-container whitespace-nowrap flex">
			<div class="marquee-content flex gap-16 items-center animate-marquee">
				{#each ['SVELTEKIT', 'TYPESCRIPT', 'TAILWIND', 'WEBGL', 'THREE.JS', 'NODE.JS', 'POSTGRES', 'FIGMA'] as tech}
					<span
						class="text-[8vw] font-sans font-bold text-transparent stroke-text hover:text-acid-green transition-colors duration-300 cursor-default"
						>{tech}</span
					>
					<span class="text-4xl text-hyper-violet">✦</span>
				{/each}
				{#each ['SVELTEKIT', 'TYPESCRIPT', 'TAILWIND', 'WEBGL', 'THREE.JS', 'NODE.JS', 'POSTGRES', 'FIGMA'] as tech}
					<span
						class="text-[8vw] font-sans font-bold text-transparent stroke-text hover:text-acid-green transition-colors duration-300 cursor-default"
						>{tech}</span
					>
					<span class="text-4xl text-hyper-violet">✦</span>
				{/each}
			</div>
		</div>
	</section>

	<!-- PHILOSOPHY -->
	<section id="about" class="py-32 px-4 max-w-5xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
			<div class="md:col-span-4">
				<h2 class="reveal-text font-mono text-acid-green text-sm tracking-widest mb-8">
					/// PHILOSOPHY
				</h2>
			</div>
			<div class="md:col-span-8">
				<p class="reveal-text font-serif text-4xl md:text-6xl leading-tight mb-12">
					I don't build websites. I build <span
						class="italic text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-400"
						>digital monuments</span
					>.
				</p>
				<div class="reveal-text glass p-8 md:p-12 relative overflow-hidden">
					<div
						class="absolute top-0 right-0 w-32 h-32 bg-hyper-violet/20 blur-[50px] rounded-full"
					></div>
					<p class="font-sans text-xl md:text-2xl leading-relaxed text-off-white/80">
						In an era of templates and AI-generated mediocrity, I stand for <strong
							class="text-white">radical craftsmanship</strong
						>. Every pixel is intentional. Every interaction is a story. I combine brutalist
						structure with fluid motion to create interfaces that don't just inform—they make you
						feel.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FOOTER -->
	<section
		id="contact"
		class="min-h-screen flex flex-col justify-between py-12 px-4 bg-charcoal relative overflow-hidden"
	>
		<div
			class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
		></div>

		<div class="relative z-10">
			<span class="font-mono text-acid-green text-sm">/// INITIATE_CONTACT</span>
		</div>

		<div class="relative z-10 text-center">
			<a href="mailto:hello@akhil.dev" class="group block">
				<h2
					class="font-sans text-[15vw] leading-[0.8] text-white group-hover:text-transparent group-hover:stroke-text transition-all duration-500"
				>
					LET'S<br />TALK
				</h2>
			</a>
		</div>

		<div
			class="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8"
		>
			<div class="flex gap-4">
				<a
					href="#"
					class="glass px-6 py-2 rounded-full hover:bg-white/10 transition-colors font-mono text-sm"
					>GITHUB</a
				>
				<a
					href="#"
					class="glass px-6 py-2 rounded-full hover:bg-white/10 transition-colors font-mono text-sm"
					>LINKEDIN</a
				>
				<a
					href="#"
					class="glass px-6 py-2 rounded-full hover:bg-white/10 transition-colors font-mono text-sm"
					>TWITTER</a
				>
			</div>
			<p class="font-mono text-xs text-white/30">© 2025 AKHIL MULPURI. ALL RIGHTS RESERVED.</p>
		</div>
	</section>
</div>

<style>
	.stroke-text {
		-webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
	}
	.stroke-text:hover {
		-webkit-text-stroke: 2px #ccff00;
	}
</style>
