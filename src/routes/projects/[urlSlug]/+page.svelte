<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import ProjectDetailHeroSection from '$lib/components/ProjectDetailHeroSection/ProjectDetailHeroSection.svelte';
	import ProjectDetailsSectionList from '$lib/components/ProjectDetailsSectionList/ProjectDetailsSectionList.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { type Project } from '$lib/projects.js';

	type PageData = {
		project: Project;
	};

	export let data: PageData;
	const { project } = data;

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'projectDetailsPageAnimation' });

	onMount(() => {
		const sections: HTMLElement[] = gsap.utils.toArray('.projectDetailsSectionList');

		sections.forEach((ref: HTMLElement, index: number) => {
			const headingEle = ref.querySelector('h2');
			const captionEle = ref.querySelector('h5');
			const imageEle = ref.querySelector('img');
			const sign = index % 2 === 0 ? 1 : -1;

			timeline
				.fromTo(
					headingEle,
					{
						opacity: 0,
						x: 100 * sign
					},
					{
						x: 0,
						opacity: 1,
						scrollTrigger: {
							trigger: ref.querySelector('.projectDetailsSectionContainer'),
							start: '=-500',
							end: '=+100',
							scrub: true
						}
					}
				)
				.fromTo(
					imageEle,
					{
						opacity: 0,
						x: 100 * -sign
					},
					{
						x: 0,
						opacity: 1,
						scrollTrigger: {
							trigger: ref.querySelector('.projectDetailsSectionContainer'),
							start: '=-500',
							end: '=+100',
							scrub: true
						}
					}
				)
				.fromTo(
					captionEle,
					{
						opacity: 0,
						x: 100 * sign
					},
					{
						x: 0,
						opacity: 1,
						scrollTrigger: {
							trigger: ref.querySelector('.projectDetailsSectionContainer'),
							start: '=-400',
							end: '=+100',
							scrub: true
						}
					}
				);
		});
		return () => {
			timeline.kill();
		};
	});
</script>

<div>
	<NavBar {timeline} />
	<ProjectDetailHeroSection {timeline} {project} technologies={project.technologies} />
	{#each project.sections as section, i}
		<ProjectDetailsSectionList {section} reverse={i % 2 == 0} />
	{/each}
	<Footer {timeline} />
</div>
