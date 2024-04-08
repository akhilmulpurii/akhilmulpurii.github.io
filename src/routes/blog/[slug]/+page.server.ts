import { getBlogPost } from '$lib/sanityClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return { blogPost: await getBlogPost(params.slug) };
};
