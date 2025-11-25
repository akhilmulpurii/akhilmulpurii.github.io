<script lang="ts">
	import BlogContent from '$lib/components/BlogContent/BlogContent.svelte';
	import { urlFor } from '$lib/sanityClient.js';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let data;
	const { blogPost } = data;
</script>

<main>
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
</main>
