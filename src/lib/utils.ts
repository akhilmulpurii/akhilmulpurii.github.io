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
