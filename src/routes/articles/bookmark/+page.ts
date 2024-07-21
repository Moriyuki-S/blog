import type { PageLoad } from './$types';
import { ArticleAPIs } from '$lib/features/article/repositories/apis/fetch-articles';

export const load: PageLoad = async ({ depends }) => {
	const bookmarkedArticles = await ArticleAPIs.fetchBookmarkedArticles();

	// 再実行のトリガーを用意
	depends('articles:bookmark');

	return {
		articles: bookmarkedArticles
	};
};
