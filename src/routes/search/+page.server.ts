import type { PageServerLoad } from './$types';
import { TagAPIs } from '$lib/features/tag/repositories/api/fetch';
import { ArticleAPIs } from '$lib/features/article/repositories/apis/fetch-articles';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const tags = await TagAPIs.fetchTags();
	if (searchQuery) {
		const articles = ArticleAPIs.fetchArticles(searchQuery);
		return {
			articles,
			tags
		};
	}

	return {
		tags
	};
};
