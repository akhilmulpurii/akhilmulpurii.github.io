<script lang="ts">
	import ContactHero from '$lib/components/ContactHero/ContactHero.svelte';
	import FormSection from '$lib/components/FormSection/FormSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
</script>

<main>
	<ContactHero />
	<FormSection />
</main>
