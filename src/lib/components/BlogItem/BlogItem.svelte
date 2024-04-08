<script lang="ts">
	export let slug: string = '';
	export let title: string = '';
	export let description: string = '';
	export let mainImage: string = '';
	export let isLast: boolean = false;
</script>

<a href="/blog/{slug}" class="flex flex-col md:flex-row decoration-0 justify-between my-3 mx-0">
	<div class="flex flex-col">
		<div class="flex mt-3 justify-between flex-col md:flex-row">
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
