<script lang="ts">
	import BlogContent from '$lib/components/BlogContent/BlogContent.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import { urlFor } from '$lib/sanityClient.js';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	let timeline: gsap.core.Timeline = gsap.timeline({ id: 'landingPageAnimation' });

	onMount(() => {
		return () => {
			timeline.kill();
		};
	});

	export let data;
	const { blogPost } = data;

	console.log(blogPost);
</script>

<main>
	<NavBar {timeline} />
	<Header />
	<BlogContent
		body={blogPost.body}
		tags={blogPost.tags}
		title={blogPost.title}
		description={blogPost.description}
		mainImage={urlFor(blogPost.mainImage).url()}
		author={blogPost.author}
		authorImg={urlFor(blogPost.authorImg).url()}
		authorRole={blogPost.authorRole}
		publishedAt={new Date(blogPost.publishedAt)}
	/>
	<Footer {timeline} />
</main>
