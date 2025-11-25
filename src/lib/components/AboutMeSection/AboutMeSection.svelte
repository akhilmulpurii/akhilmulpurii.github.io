<script lang="ts">
	import Photography from '$lib/assets/photography.jpeg';
	import Portrait from '$lib/assets/aboutPortrait.jpeg';
	import Temple from '$lib/assets/aboutTemple.jpeg';

	const filter =
		'brightness-[105%] grayscale-[100%] contrast-[100%] hue-rotate-0 invert-0 opacity-100 saturate-[100%] sepia-[20%]';
</script>

<section class="w-svw flex items-center justify-center md:min-h-[80vh]">
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
