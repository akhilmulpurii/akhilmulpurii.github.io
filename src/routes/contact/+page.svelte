<script lang="ts">
	import ContactHero from '$lib/components/ContactHero/ContactHero.svelte';
	import FormSection from '$lib/components/FormSection/FormSection.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';

	gsap.registerPlugin(ScrollTrigger);
</script>

<main>
	<NavBar />
	<ContactHero />
	<FormSection />
	<Footer showQuote={false} />
</main>
