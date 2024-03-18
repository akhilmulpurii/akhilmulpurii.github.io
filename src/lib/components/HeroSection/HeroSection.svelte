<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.title',
			{
				opacity: '100%',
				scale: 1,
				y: 0
			},
			{
				scale: 0.75,
				y: '120vh',
				opacity: '50%',
				scrollTrigger: {
					trigger: '.heroSection',
					start: 'top top',
					endTrigger: '.porfolioSection',
					end: 'bottom top',
					markers: true,
					scrub: true
				}
			}
		);
	});
</script>

<section
	id="heroSection"
	class="flex items-center heroSection justify-center h-screen overflow-hidden"
>
	<h1 class="title text-8xl font-bold text-center opacity-100">
		I'm Sai Akhil Mulpuri<br />Full Stack Developer
	</h1>
</section>
