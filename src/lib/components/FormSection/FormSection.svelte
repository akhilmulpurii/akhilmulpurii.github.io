<script lang="ts">
	import { contactFormInputs as inputs } from '$lib/utils';
	import { validator } from '@felte/validator-yup';
	import FormSectionInput from '../FormSectionInput/FormSectionInput.svelte';
	import { createForm } from 'felte';
	import * as yup from 'yup';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		const formInputs: HTMLDivElement[] = gsap.utils.toArray('.form-input');

		formInputs.forEach((input) =>
			timeline.fromTo(
				input,
				{
					opacity: 0
				},
				{
					opacity: 1
				}
			)
		);
	});

	const schema = yup.object({
		name: yup.string().trim().required('Full name is required'),
		email: yup.string().trim().email('Please enter valid email').required('Email is required'),
		message: yup
			.string()
			.trim()
			.min(15, 'Please enter atleast 15 characters')
			.required('Message is required'),
		organization: yup.string().trim().required('Organization name is required'),
		services: yup.string().required('Services are required')
	});

	const { form, errors, touched } = createForm<yup.InferType<typeof schema>>({
		onSubmit: (values) => {
			alert('Work in Progress' + JSON.stringify(values, null, 2));
		},
		extend: validator({ schema })
	});
</script>

<section class="grid md:grid-cols-[3fr_2fr] md:p-16 p-6 grid-cols-1">
	<form use:form class="flex flex-col w-full">
		{#each inputs as input, index}
			<FormSectionInput
				name={input.name}
				label={input.label}
				placeholder={input.placeholder}
				type={input.type}
				position={index + 1}
				{errors}
				{touched}
			/>
		{/each}
		<button
			type="submit"
			class="w-fit flex justify-center items-center py-3 px-5 border-2 border-amber-500 rounded-3xl bg-transparent text-black font-semibold cursor-pointer outline-none transition-all duration-200 ease-in-out hover:text-white hover:bg-amber-500 active:scale-95"
		>
			SEND MESSAGE <span class="ml-3 font-black">→</span>
		</button>
	</form>
</section>
