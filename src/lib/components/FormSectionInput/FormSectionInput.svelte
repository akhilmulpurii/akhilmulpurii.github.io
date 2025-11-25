<script lang="ts">
	export let type: string;
	export let label: string;
	export let placeholder: string;
	export let name: string;
	export let position: number;
	export let errors: any;
	export let touched: any;
</script>

<div class="form-input flex flex-col mb-10 relative pl-16">
	<div
		class="absolute top-0 left-0 text-lg font-light text-[var(--color-ink-muted)] border soft-border py-0 px-4 rounded-3xl"
	>
		0{position}
	</div>
	<label class="my-1 tracking-wide" for={name}>
		{label}
	</label>
	{#if type === 'textarea'}
		<textarea
			class="bg-transparent shadow-none outline-none font-light border-b-2 border-[var(--color-border)] py-4 px-0 transition-all duration-200 ease-in-out placeholder:text-[var(--color-ink-muted)] focus:border-amber-500"
			{placeholder}
			{name}
			id={name}
		/>
	{:else}
		<input
			class="bg-transparent shadow-none outline-none font-light border-b-2 border-[var(--color-border)] py-4 px-0 transition-all duration-200 ease-in-out placeholder:text-[var(--color-ink-muted)] focus:border-amber-500"
			{type}
			{placeholder}
			{name}
			id={name}
		/>
	{/if}
	{#if $touched && $errors && $touched[name] && $errors[name]}
		<p class="text-red-500 font-light mt-1 absolute -bottom-5 text-xs">{$errors[name]}</p>
	{/if}
</div>
