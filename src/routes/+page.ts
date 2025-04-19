export const prerender = true;
import blogs from '$lib/api/blog.json';

export const load = async () => {
	return { blogs: blogs };
};
