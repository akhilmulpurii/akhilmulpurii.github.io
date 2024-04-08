<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import moment from 'moment-timezone';

	export let body: any;
	export let tags: string[];
	export let title: string;
	export let description: string;
	export let author: string;
	export let authorImg: string;
	export let authorRole: string;
	export let publishedAt: Date;
	export let mainImage: string;
</script>

<section>
	<div class="p-8 mx-auto my-0 md:mt-8 flex flex-col items-center justify-center max-w-[800px]">
		<div class="flex flex-row flex-wrap w-full justify-center items-center mb-4">
			{#each tags as tag}
				<div class="text-[1rem] text-gray-400 uppercase font-light tracking-[0.08rem] mx-2 my-0">
					{tag}
				</div>
			{/each}
		</div>
		<div class="flex flex-col justify-center items-center w-full">
			<h1
				class="md:text-[4vw] text-[6vw] m-0 mb-6 md:mb-8 text-center leading-[4vw] tracking-[1px]"
			>
				{title}
			</h1>
			<p
				class="text-[0.8rem] md:text-[1.2rem] mx-auto my-0 text-center leading-[1.5] tracking-[0.08rem]"
			>
				{description}
			</p>
		</div>
		<div class="flex flex-row justify-center items-center mt-6">
			<div class="flex items-center">
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
		</div>
		<img class="w-full h-auto rounded-xl mt-10" src={mainImage} alt="Blog Hero" />
	</div>
	<div class="blogSection">
		<PortableText value={body} components={{}} />
	</div>
</section>
