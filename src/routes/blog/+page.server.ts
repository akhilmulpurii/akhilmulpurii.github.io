import { getBlogPosts } from '$lib/sanityClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { blogPosts: await getBlogPosts() };
};
