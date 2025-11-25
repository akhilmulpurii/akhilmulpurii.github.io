<script lang="ts">
	import { getCentralTime } from '$lib/utils';
	import Logo from '$lib/assets/logo.svg';
</script>

<div id="heroNav" class="flex w-full justify-between sm:p-10 p-5">
	<a href="/" class="flex z-[2] justify-center items-center">
		<img
			src={Logo}
			alt="Logo"
			class=" hover:scale-90 transition-all active:scale-110 h-6 cursor-pointer"
		/>
	</a>
	<div class="flex z-[2] items-center uppercase text-xs/[0.75rem] font-mono">
		<span class="hidden sm:block ink-muted">EDMOND, OK {getCentralTime()} CST</span>
		<div
			class="flex relative justify-center before:absolute before:left-2 items-center before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-400 before:animate-ping before:flex border border-1 soft-border rounded-2xl ml-4 p-2"
		>
			<div class="w-2 h-2 mr-2 rounded-full bg-green-600 z-10"></div>
			<span class="ink-muted">OPEN TO WORK</span>
		</div>
	</div>
</div>
