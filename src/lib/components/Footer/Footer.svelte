<script lang="ts">
	import Logo from '$lib/assets/logo.svg';
	import moment from 'moment-timezone';
	export let showQuote = false;
</script>

<section
	class="footer-section w-full mt-12 md:mt-24 flex flex-col items-center justify-center surface-card"
>
	<div class="w-full px-[16px] md:px-[50px] text-[var(--color-ink-strong)] flex flex-col">
		{#if showQuote}
			<div class="w-full text-7xl">
				<h1
					id="footer-title"
					class="khand font-light text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[var(--color-heading-from)] to-[var(--color-heading-to)]"
				>
					<span class="text-8xl">“</span>कर्मण्ये वाधिकारस्ते मा फलेषु कदाचन |<br />मा कर्मफलहेतु
					र्भूर्मा ते सङ्गो ऽस्त्वकर्मणि ||<span class="text-8xl">”</span>
				</h1>
			</div>
			<div class="flex flex-col mt-8 justify-center md:w-2/4 mx-auto w-full">
				<p id="footer-caption-1" class="w-full ink-muted text-justify">
					<i>Translation:</i> “You have control over your actions alone, never over their fruits. Live
					not for the fruits of action, nor attach yourself to inaction.”
				</p>
				<br />
				<p id="footer-caption-2" class="ml-auto text-justify ink-muted">
					- Bhagavad Gita (Chapter 2, Verse 47) spoken by Lord Krishna to Arjuna.
				</p>
			</div>
		{/if}
		<div class="flex flex-col">
			<div class="flex mt-24 mb-12 flex-row justify-between items-center">
				<div>
					<img src={Logo} class="h-7 w-auto footer-logo" alt="logo" />
				</div>
				<p class="ink-muted text-sm">Find links in the right rail.</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col w-full">
		<hr class="border soft-border" />
		<p
			class="font-extralight text-center my-3 mx-[50px] ink-muted opacity-0 md:opacity-100 flex items-center justify-start"
		>
			Manifested with 💛 {moment().format('YYYY')} Sai Akhil Mulpuri
		</p>
	</div>
</section>
