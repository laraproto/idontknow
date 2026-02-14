import type { RequestHandler } from './$types';
import { makeEmail } from '$lib/server/what';

export const GET: RequestHandler = async ({ url }) => {
	return new Response(await makeEmail(), {
		headers: {
			'Content-Type': 'text/html'
		}
	});
};
