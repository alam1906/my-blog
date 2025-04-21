import blogs from '$lib/api/blog.json';
import { slugify } from '$lib/utils/slugify.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ params }) => {
	const param = params.id;

	const blog = blogs.find((e) => slugify(e.title) === param);
	if (blog === undefined) {
		throw error(404, 'Page not found');
	}

	return { blog: blog || null };
};
