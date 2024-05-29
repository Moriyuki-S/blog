import { ArticleAPIs } from '$lib/features/article/repositories/apis/fetch-articles';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const bookmarkedArticles = await ArticleAPIs.fetchBookmarkedArticles();

	return {
		...data,
		bookmarkedArticles
	};
};
