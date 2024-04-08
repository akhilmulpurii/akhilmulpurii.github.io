<script lang="ts">
	import moment from 'moment-timezone';

	export let slug: string = '';
	export let title: string = '';
	export let description: string = '';
	export let mainImage: string = '';
	export let isLast: boolean = false;
	export let author: string = '';
	export let authorRole: string = '';
	export let authorImg: string = '';
	export let publishedAt: Date = new Date();
</script>

<a href="/blog/{slug}" class="flex flex-col md:flex-row decoration-0 justify-between my-3 mx-0">
	<div class="flex flex-col">
		<div class="flex items-center mt-3">
			<img alt="author" class="w-10 h-10 rounded-full mr-2 bg-amber-100" src={authorImg} />
			<div class="flex flex-col">
				<div class="flex items-center">
					<span class="font-semibold text-lg leading-3">{author}</span>
					<span class="my-0 mx-2 text-gray-400">•</span>
					<span class="text-sm text-gray-400 font-medium"
						>{moment(publishedAt).format('MMM DD YYYY')}</span
					>
				</div>
				<span class="text-xs text-gray-400">{authorRole}</span>
			</div>
		</div>
		<div class="flex justify-between flex-col md:flex-row">
			<div class="flex flex-col flex-[1] md:max-w-[70vw] w-full tracking-[0.5px]">
				<h2 class="text-[2rem] font-semibold mb-4">{title}</h2>
				<p class="text-lg text-gray-500 text-justify text-ellipsis max-h-[400px] overflow-hidden">
					{description}
				</p>
			</div>
		</div>
	</div>
	<img
		src={mainImage}
		alt="Blog Main"
		class="object-cover aspect-wide w-full md:w-1/4 md:ml-8 ml-0 mt-3 md:mt-0"
	/>
</a>
{#if isLast}
	<div class="h-28" />
{:else}
	<hr />
{/if}
