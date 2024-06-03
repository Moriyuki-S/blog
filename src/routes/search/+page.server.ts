import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { TagAPIs } from '$lib/features/tag/repositories/api/fetch';

export const load: PageServerLoad = async () => {
	const tags = await TagAPIs.fetchTags();
	return {
		tags
	};
};

export const actions: Actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query');

		// クエリーがからの場合はエラーを返す
		if (!query) {
			return fail(400, { empty: true });
		}

		redirect(303, `/search/results?q=${query}`);
	}
};
