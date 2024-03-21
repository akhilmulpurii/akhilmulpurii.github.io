<script lang="ts">
	import { onMount } from 'svelte';

	export let className = '';
	export let bgColor = '#000';
	export let textColor = '#fff';
	export let projectName = '';
	export let year = '';
	export let image = '';
	export let logo = '';

	let transform = 'translate(-50%,-50%) rotateX(0deg)';
	let isHovered = false;

	const onMouseEnter = () => {
		transform = 'translate(-50%,-50%) rotateX(12deg) scale(0.9)';
		isHovered = true;
	};

	const onMouseLeave = () => {
		transform = 'translate(-50%,-50%) rotateX(0deg) scale(1)';
		isHovered = false;
	};

	onMount(() => {
		// Additional initialization code if needed
	});
</script>

<div
	class="w-full h-4/5 my-auto relative group/pin z-50 cursor-pointer"
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
	role="presentation"
>
	<div
		style="perspective: 1000px; transform: rotateX(70deg) translateZ(0deg);"
		class="card-container w-full h-full absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
	>
		<div
			style="background-color: {bgColor};transform: {transform};color: {textColor}"
			class="w-full h-full absolute left-1/2 p-6 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
		>
			<div class="{className} relative z-50">
				<div class="flex items-center justify-between">
					{#if logo}
						<img class="h-10" src={logo} alt="logo" />
					{:else}
						<h2 class="text-xl font-medium">{projectName}</h2>
					{/if}
					<h6 class="year">{year}</h6>
				</div>
				<img src={image} alt={projectName} />
			</div>
		</div>
	</div>
</div>

<style>
	.card-container:hover .year {
		opacity: 100%;
		transform: translate3d(0px, 0px, 0px);
	}

	.year {
		opacity: 0%;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
		transform: translate3d(0px, -15px, 0px);
	}
</style>
