<script>
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	export let className = '';

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
		class="w-full h-full absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
	>
		<div
			style="transform: {transform}"
			class="w-full h-full absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
		>
			<div class="{className} relative z-50"><slot /></div>
		</div>
	</div>
</div>
