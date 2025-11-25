<script lang="ts">
	import Header from '../Header/Header.svelte';
</script>

<section id="heroSection" class="h-svh w-svw overflow-hidden">
	<div class="heroTrigger h-full w-full">
		<div id="heroInnerDiv" class="flex flex-col h-full w-full items-center md:justify-between">
			<Header />
			<div id="hero-title" class="flex flex-col h-[100vh] justify-center items-center">
				<h1
					class="select-none playfair z-[2] text-[30vw] md:text-[33vw] leading-[33vw] font-bold text-center opacity-100 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[var(--color-heading-from)] to-[var(--color-heading-to)]"
				>
					AKHIL
				</h1>
			</div>
		</div>
	</div>
</section>
