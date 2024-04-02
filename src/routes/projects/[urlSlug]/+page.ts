import { error } from '@sveltejs/kit';
import _ from 'lodash';
import projects, { type Project } from '$lib/projects';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project: Project | undefined = _.find(
		projects,
		({ urlSlug }) => urlSlug === params.urlSlug
	);
	if (_.isUndefined(project)) error(404, 'Not found');
	else return { project };
}
