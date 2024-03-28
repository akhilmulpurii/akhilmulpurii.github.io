<script lang="ts">
	import Galaxy from '$lib/assets/galaxy.png';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const tl = gsap.timeline();

		setTimeout(() => {
			tl.to('.splashscreen', { duration: 0.5, filter: 'blur(10px)', opacity: 0 });
		}, 1000);

		setTimeout(() => {
			// Dispatch a custom event to notify the parent component
			dispatchEvent(new CustomEvent('hide-splash'));
		}, 1500); // Adjust the delay (in milliseconds) as needed
	});
</script>

<section
	class="raleway splashscreen relative h-svh w-svw flex flex-col justify-center items-center"
>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
		<img
			src={Galaxy}
			class="w-full h-full grayscale opacity-10 animate-spin"
			style="animation: spin 5s linear infinite;"
			alt="galaxy"
		/>
	</div>
	<h1 class="text-center text-4xl z-10">
		THE FOLLOWING <b>WEBSITE</b> HAS BEEN APPROVED FOR<br /><b>ALL AUDIENCES</b><br />BY THE
		INTERNATIONAL COPY PASTE REPEAT GUILD
	</h1>
	<table class="z-10 border border-1 border-black mt-10">
		<tbody>
			<tr>
				<td class="border border-1 border-black">
					<div class="flex flex-col justify-center items-center">
						<div class="bg-black text-white font-extrabold py-3 px-10">RATED</div>
						<p class="text-6xl font-extrabold py-3">P</p>
					</div>
				</td>
				<td
					class="py-3 px-5 w-[25rem] align-middle text-left font-semibold text-2xl leading-normal tracking-wide"
					><p class="uppercase mx-auto">
						contains plagiarism from stack overlflow, github and google
					</p></td
				>
			</tr>
		</tbody>
	</table>
</section>
