import { TagAPIs } from '$lib/features/tag/repositories/api/fetch';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const tags = TagAPIs.fetchTags();

	return {
		tags
	};
};
