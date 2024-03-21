<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import PinCard3d from '$lib/components/3DPinCard/3DPinCard.svelte';

	let horizontalSection: Element;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (horizontalSection !== null) {
			gsap.to('.horizontal', {
				x: () => horizontalSection.scrollWidth * -1,
				xPercent: 100,
				scrollTrigger: {
					trigger: '.horizontal',
					start: 'top top',

					pin: '#horizontal-scroll',
					scrub: true,
					invalidateOnRefresh: true
				}
			});
		}
	});
</script>

<section id="horizontal-scroll" class="porfolioSection relative h-screen">
	<div class="horizontal-scroll-wrapper">
		<div bind:this={horizontalSection} class="horizontal">
			<div class="text-white flex flex-col justify-center items-center w-2/5 p-10">
				<div>
					<h2 class="text-5xl mb-4">My Recent Projects</h2>
					<h3 class="text-lg max-w-[300px]">
						I've played a key role in developing impactful projects. Here's a curated selection
						showcasing my expertise and the achieved results.
					</h3>
					<a
						href="/contact"
						class="mt-16 flex uppercase justify-start items-center group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-sky-300 hover:before:[box-shadow:_20px_20px_20px_30px_#1c8daf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-sky-300 relative bg-background h-16 w-52 border border-teal-300 text-left p-3 text-white text-base font-mono rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-300 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-emerald-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
					>
						Contact
					</a>
				</div>
			</div>
			<div class="card">
				<PinCard3d><div>Card 1</div></PinCard3d>
			</div>
			<div class="card">
				<PinCard3d><div>Card 2</div></PinCard3d>
			</div>
			<div class="card">
				<PinCard3d><div>Card 3</div></PinCard3d>
			</div>
			<div class="card">
				<PinCard3d><div>Card 4</div></PinCard3d>
			</div>
			<div class="card">
				<PinCard3d><div>Card 5</div></PinCard3d>
			</div>
			<div class="card">
				<PinCard3d><div>Card 6</div></PinCard3d>
			</div>
		</div>
	</div>
</section>

<style>
	#horizontal-scroll {
		background: linear-gradient(20deg, #0d0c09, #10162c);
	}
	.horizontal-scroll-wrapper {
		overflow: hidden;
		height: 100vh;
	}

	.horizontal {
		display: flex;
		height: 100%;
	}

	.horizontal > div {
		display: flex;
		flex-shrink: 0;
		padding: 0 5px;
	}

	.horizontal .card {
		align-items: stretch;
		width: 540px;
		padding: 50px 40px;
		color: #f6f2e8;
	}
</style>
