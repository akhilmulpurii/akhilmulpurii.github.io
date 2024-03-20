<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	import lines from '$lib/assets/lines.svg';
	import noise from '$lib/assets/noise.png';
	export let gradientBackgroundEnd = '#0d0c09';
	export let gradientBackgroundStart = '#101b43';
	export let firstColor = '35, 7, 77';
	export let secondColor = '115, 3, 192';
	export let thirdColor = '28, 181, 224';
	export let fourthColor = '0, 90, 167';
	export let pointerColor = '78, 84, 200';
	export let fifthColor = '102, 166, 255';
	export let size = '80%';
	export let blendingValue = 'hard-light';
	export let containerClassName = '';
	export let className = '';

	let interactiveRef: HTMLDivElement | null;

	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	let isSafari = false;

	onMount(() => {
		document.body.style.setProperty('--gradient-background-start', gradientBackgroundStart);
		document.body.style.setProperty('--gradient-background-end', gradientBackgroundEnd);
		document.body.style.setProperty('--first-color', firstColor);
		document.body.style.setProperty('--second-color', secondColor);
		document.body.style.setProperty('--third-color', thirdColor);
		document.body.style.setProperty('--fourth-color', fourthColor);
		document.body.style.setProperty('--fifth-color', fifthColor);
		document.body.style.setProperty('--pointer-color', pointerColor);
		document.body.style.setProperty('--size', size);
		document.body.style.setProperty('--blending-value', blendingValue);

		// Detect Safari
		isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	});

	function handleMouseMove(event: MouseEvent) {
		if (interactiveRef) {
			const rect = interactiveRef.getBoundingClientRect();
			tgX = event.clientX - rect.left;
			tgY = event.clientY - rect.top;
		}
	}

	$: {
		function move() {
			if (!interactiveRef) {
				return;
			}
			curX = curX + (tgX - curX) / 20;
			curY = curY + (tgY - curY) / 20;
			interactiveRef.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
		}

		move();
	}
</script>

<div
	class={cn(
		'heroSection relative h-screen w-screen z-0 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
		containerClassName
	)}
>
	<svg class="hidden">
		<defs>
			<filter id="blurMe">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
					result="goo"
				/>
				<feBlend in="SourceGraphic" in2="goo" />
			</filter>
		</defs>
	</svg>
	<div class={cn('', className)}><slot /></div>
	<div class="absolute top-0 z-10 w-screen h-screen">
		<img
			class="inset-0 opacity-70 w-full h-full absolute z-20 pointer-events-none"
			src={noise}
			alt="noise"
		/>
		<img
			id="leftLine"
			class="opacity-10 absolute left-0 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
		<img
			id="rightLine"
			class="opacity-10 absolute right-0 rotate-180 top-0 bottom-0 object-contain h-full"
			src={lines}
			alt="lines"
		/>
	</div>
	<div
		class={cn(
			'gradients-container z-0 h-full w-full blur-lg absolute top-0 left-0 right-0 bottom-0',
			isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
		)}
	>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
				`[transform-origin:center_center]`,
				`animate-first`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
				`[transform-origin:calc(50%-400px)]`,
				`animate-second`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
				`[transform-origin:calc(50%+400px)]`,
				`animate-third`,
				`opacity-100`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
				`[transform-origin:calc(50%-200px)]`,
				`animate-fourth`,
				`opacity-70`
			)}
		></div>
		<div
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
				`[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
				`animate-fifth`,
				`opacity-100`
			)}
		></div>

		<div
			role="presentation"
			on:mousemove={handleMouseMove}
			bind:this={interactiveRef}
			class={cn(
				`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
				`[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
				`opacity-70`
			)}
		></div>
	</div>
</div>
