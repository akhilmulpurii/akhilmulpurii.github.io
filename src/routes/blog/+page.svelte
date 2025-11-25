<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import BlogSection from '$lib/components/BlogSection/BlogSection.svelte';

	gsap.registerPlugin(ScrollTrigger);

	export let data;
	const { blogPosts } = data;
</script>

<main>
	<BlogSection {blogPosts} />
</main>
