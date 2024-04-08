import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
	projectId: '5zirgpst',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2023-05-03'
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

export async function getBlogPosts() {
	const blogPosts = await client.fetch('*[_type == "blogPost"]');
	return blogPosts;
}
