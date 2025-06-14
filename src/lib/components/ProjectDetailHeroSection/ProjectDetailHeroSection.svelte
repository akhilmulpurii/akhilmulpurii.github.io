<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { type Project } from '$lib/projects';
	import { gsap } from 'gsap';
	export let project: Project;
	export let technologies: string[];
	export let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.utils.toArray('.techStackChip').forEach((ele: any, index: number) => {
			timeline.fromTo(
				ele,
				{
					opacity: 1,
					x: 0
				},
				{
					x: 20,
					opacity: 0,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 0',
						scrub: true
					},
					ease: 'expo.out'
				}
			);
		});
		timeline
			.fromTo(
				'#heroNav',
				{
					opacity: 0.5,
					duration: 0.5
				},
				{
					y: -100,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 5',
						scrub: true
					}
				}
			)
			.fromTo(
				'#projectLogo',
				{
					opacity: 1,
					scale: 1,
					y: 0
				},
				{
					opacity: 0,
					scale: 0.9,
					y: -50,

					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 0',
						scrub: true
					}
				}
			)
			.fromTo(
				'#projectYear',
				{
					opacity: 1,
					scale: 1,
					y: 0
				},
				{
					opacity: 0,
					scale: 0.9,
					y: -50,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 0',
						scrub: true
					}
				}
			)
			.fromTo(
				'#techStackText',
				{ x: 0, opacity: 1 },
				{
					x: -50,
					opacity: 0,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 0',
						scrub: true
					}
				}
			)
			.fromTo(
				'#projectShortDesc',
				{
					opacity: 1,
					scale: 1,
					y: 0
				},
				{
					opacity: 0,
					scale: 2,
					scrollTrigger: {
						trigger: '#projectHeroSection',
						start: 'top 0',
						scrub: true,
						pin: true
					}
				}
			);
	});
</script>

<section
	id="projectHeroSection"
	class="h-svh pb-20 w-svw flex flex-col items-center justify-between"
>
	<Header />
	<div class="flex flex-col items-center space-y-3 md:space-y-5">
		<img id="projectLogo" src={project.logo} alt="logo" class="h-7 md:h-10 invert" />
		<span
			id="projectYear"
			class="text-gray-500 text-sm font-medium orbitron tracking-wider uppercase"
		>
			{project.organizaton} - {project.year}
		</span>
	</div>
	<h1
		id="projectShortDesc"
		class="text-6xl w-5/6 mt-6 md:mt-0 md:w-1/2 text-center font-semibold opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
	>
		{project.short_description}
	</h1>
	<div id="techStackSection" class="flex w-full md:mt-14">
		<div
			class="max-w-[1440px] mx-auto flex w-full flex-wrap justify-center items-center px-4 py-5 flex-row"
		>
			<h4
				id="techStackText"
				class="text-gray-700 text-lg md:text-2xl raleway font-light pr-5 relative after:h-full after:w-[1px] after:bg-gray-700 after:flex after:absolute after:right-2 after:top-0 after:bottom-0"
			>
				TECH STACK
			</h4>
			{#each technologies as tech}
				<div
					class="techStackChip relative mr-[4px] mt-[4px] md:mr-2 md:mt-3 select-none items-center whitespace-nowrap rounded-sm bg-gray-900/10 py-1.5 px-2 md:px-3 font-sans text-xs font-semibold md:font-bold uppercase text-gray-900 inline-block"
				>
					<span class="z-2 relative">{tech}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
