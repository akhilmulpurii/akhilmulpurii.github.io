<script lang="ts">
	import AboutMeSection from '$lib/components/AboutMeSection/AboutMeSection.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection/HeroSection.svelte';
	import LandingPorfolioSection from '$lib/components/LandingPorfolioSection/LandingPorfolioSection.svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import SubHeroSection from '$lib/components/SubHeroSection/SubHeroSection.svelte';
</script>

<div class="w-svw overflow-x-hidden">
	<NavBar />
	<HeroSection />
	<SubHeroSection />
	<AboutMeSection />
	<LandingPorfolioSection />
	<Footer showQuote={true} />
</div>
