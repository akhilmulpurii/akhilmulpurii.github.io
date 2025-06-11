<script lang="ts">
	import { onMount } from 'svelte';
	import BadgePin from '../BadgePin/BadgePin.svelte';
	import Header from '../Header/Header.svelte';
</script>

<section>
	<Header />
	<div class="grid md:grid-cols-[3fr_1fr] md:p-16 p-6 grid-cols-[1fr]">
		<div class="flex flex-col md:text-left text-center md:m-0 mb-8 leading-[8vw]">
			<h1 class="heading text-[10vw] font-medium">Let's work together!</h1>
			<p class="subheading mt-8 md:text-2xl font-extralight text-lg">
				Let me help you become even greater at what you do.
				<br />
				Fill out the form below and I'll get back to you as soon as possible.
			</p>
		</div>
		<div class="md:mt-[5vw] mt-0 justify-self-center">
			<BadgePin />
		</div>
	</div>
</section>
