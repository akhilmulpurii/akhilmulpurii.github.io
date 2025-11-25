<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import BlogSection from '$lib/components/BlogSection/BlogSection.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';

	gsap.registerPlugin(ScrollTrigger);

	export let data;
	const { blogPosts } = data;
</script>

<main>
	<Header />
	<NavBar />
	<BlogSection {blogPosts} />
	<Footer />
</main>
