import { twMerge } from 'tailwind-merge';

export function cn(...inputs: string[]) {
	return twMerge(inputs.join(' '));
}

export function getCentralTime() {
	const d = new Date();

	// convert to msec
	// add local time zone offset
	// get UTC time in msec
	const utc = d.getTime() + d.getTimezoneOffset() * 60000;

	// create new Date object for different city
	// using supplied offset
	const nd = new Date(utc + 3600000 * -6);

	return nd.toLocaleTimeString();
}

export const contactFormInputs = [
	{
		label: "What's your name?",
		type: 'text',
		placeholder: 'Type your full name',
		name: 'name'
	},
	{
		label: "What's your email address?",
		type: 'email',
		placeholder: 'example@gmail.com',
		name: 'email'
	},
	{
		label: "What's your organization's name?",
		type: 'text',
		placeholder: "Type your organization's name",
		name: 'organization'
	},
	{
		label: 'What services are you interested in?',
		type: 'text',
		placeholder: 'Enter your services of interest',
		name: 'services'
	},
	{
		label: 'Tell me about your project',
		type: 'textarea',
		placeholder: 'Please describe your project in detail',
		name: 'message'
	}
];
