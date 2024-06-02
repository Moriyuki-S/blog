import { ArticleAPIs } from '$lib/features/article/repositories/apis/fetch-articles';
import { TagAPIs } from '$lib/features/tag/repositories/api/fetch';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const tag = await TagAPIs.fetchTag(slug);
	const articles = ArticleAPIs.fetchArticles('1');

	return {
		tag,
		articles
	};
};
