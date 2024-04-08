<script lang="ts">
	import _ from 'lodash';
	import SearchImage from '$lib/assets/search.png';
	import BlogItem from '../BlogItem/BlogItem.svelte';
	import { urlFor } from '$lib/sanityClient';
	export let blogPosts: any;
	let searchText = '';

	const topics = ['Frontend', 'Backend', 'Design UI/UX', 'DevOps', 'Gaming'];

	const handleSelectTopic = (topic: string) => (selectedTopics = _.xor(selectedTopics, [topic]));

	let selectedTopics: typeof topics = [];

	let filteredBlogs: any = [];

	$: {
		filteredBlogs = blogPosts.filter((blog: any) => {
			if (
				searchText &&
				!blog.title.includes(searchText) &&
				!blog.description.includes(searchText)
			) {
				return false;
			}

			if (selectedTopics.length > 0) {
				// If selectedTopics is not empty
				// then filter based on selected topics
				return selectedTopics.some((topic) => blog.tags.includes(topic));
			}

			return true;
		});
	}
</script>

<div class="flex flex-col py-5 px-8">
	<div class="flex flex-wrap items-center justify-between p-0">
		<input
			style="background: white url({SearchImage}) no-repeat 10px center;background-size: 20px;"
			class="w-full m-5 md:m-0 md:w-80 h-10 rounded-3xl border border-gray-200 py-0 px-5 box-border pl-10 font-medium focus:border-gray-900 outline-none"
			placeholder="Search..."
			bind:value={searchText}
		/>
		<div class="md:flex flex-wrap items-center hidden">
			<span class="raleway uppercase text-lg mr-3">My topics :</span>
			{#each topics as topic}
				<button
					class="py-3 px-6 text-black border {selectedTopics.includes(topic)
						? 'bg-amber-500'
						: 'bg-slate-200'} border-gray-200 raleway rounded-3xl md:mx-1 md:my-0 m-1 cursor-pointer duration-500 select-none text-sm hover:bg-orange-300 active:scale-90"
					on:click={() => handleSelectTopic(topic)}
				>
					{topic}
				</button>
			{/each}
		</div>
	</div>
	<h1
		class="text-8xl font-bold mt-6 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
	>
		Posts
	</h1>
	<hr class="my-5 border border-gray-200" />
	{#if filteredBlogs.length}
		{#each filteredBlogs as blog, index}
			<BlogItem
				title={blog.title}
				description={blog.description}
				slug={blog.slug.current}
				mainImage={urlFor(blog.mainImage).url()}
				isLast={index === filteredBlogs.length - 1}
				author={blog.author}
				authorImg={urlFor(blog.authorImg).url()}
				authorRole={blog.authorRole}
				publishedAt={new Date(blog.publishedAt)}
			/>
		{/each}
	{:else}
		<div class="flex justify-center items-center h-full text-2xl font-semibold min-h-[50vh]">
			<h1
				class="text-5xl font-light bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/100 to-black/80"
			>
				No blogs found
			</h1>
		</div>
	{/if}
</div>
