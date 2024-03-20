<script lang="ts">
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import { gsap } from 'gsap';

	function moveBox(e: MouseEvent) {
		gsap.to('#mouse-trail', {
			duration: 0.35,
			x: e.pageX,
			y: e.pageY,
			ease: 'cubic-bezier(0.26, 0.9, 0.5, 1)' // Example easing function, change as needed
		});
	}
</script>

<div on:mousemove={moveBox} role="presentation">
	<HeroSection />
	<div style="height: 60vh;" class="bg-red-400 porfolioSection relative" />
	<div style="height: 40vh;" id="" class="bg-blue-400 relative" />
</div>
