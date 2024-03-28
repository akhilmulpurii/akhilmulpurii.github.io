import { error } from '@sveltejs/kit';
import _ from 'lodash';
import projects from '$lib/projects';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = _.find(projects, ({ urlSlug }) => urlSlug === params.urlSlug);
	if (_.isEmpty(project)) error(404, 'Not found');
	else return { project };
}
