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
						start: 'top 50',
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
	<div class="flex flex-col items-center space-y-5">
		<img id="projectLogo" src={project.logo} alt="logo" class="h-10 invert" />
		<span
			id="projectYear"
			class="text-gray-500 text-sm font-medium orbitron tracking-wider uppercase"
		>
			{project.organizaton} - {project.year}
		</span>
	</div>
	<h1
		id="projectShortDesc"
		class="text-6xl w-1/2 text-center font-semibold opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
	>
		{project.short_description}
	</h1>
	<div id="techStackSection" class="flex w-full mt-10 md:mt-14">
		<div
			class="max-w-[1440px] mx-auto flex w-full flex-wrap justify-center items-center px-4 py-5 flex-col md:flex-row"
		>
			<h4
				id="techStackText"
				class="text-gray-700 text-2xl raleway font-light pr-5 relative after:h-full after:w-[1px] after:bg-gray-700 after:flex after:absolute after:right-2 after:top-0 after:bottom-0"
			>
				TECH STACK
			</h4>
			{#each technologies as tech}
				<div
					class="techStackChip bg-gray-700 px-5 py-3 mx-3 rounded-lg raleway text-sm flex my-1 md:my-0 text-white"
				>
					{tech}
				</div>
			{/each}
		</div>
	</div>
</section>
