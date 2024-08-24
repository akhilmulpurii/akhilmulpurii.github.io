<script lang="ts">
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;

	function matrix(ctx: CanvasRenderingContext2D, ypos: number[], w: number, h: number) {
		ctx.fillStyle = '#12191B10';
		ctx.fillRect(0, 0, w, h);

		ctx.fillStyle = '#0CC77F';
		ctx.font = '15pt monospace';

		ypos.forEach((y, ind) => {
			const text = String.fromCharCode(Math.random() * 128);
			const x = ind * 20;
			ctx.fillText(text, x, y);
			if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
			else ypos[ind] = y + 20;
		});
	}

	onMount(() => {
		setTimeout(() => {
			// Dispatch a custom event to notify the parent component
			dispatchEvent(new CustomEvent('hide-splash'));
		}, 5000); // Adjust the delay (in milliseconds) as needed

		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
		if (ctx) {
			const w = (canvas.width = document.body.offsetWidth);
			const h = (canvas.height = document.body.offsetHeight);
			const cols = Math.floor(w / 20) + 1;
			const ypos = Array(cols).fill(0);

			ctx.fillStyle = '#12191B';
			ctx.fillRect(0, 0, w, h);

			setInterval(() => matrix(ctx!, ypos, w, h), 50);
		}
	});
</script>

<section class="splashscreen h-svh w-svw">
	<canvas bind:this={canvas} width="500" height="200"></canvas>
</section>
