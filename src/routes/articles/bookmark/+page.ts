import type { Article } from '$lib/features/article/types/type';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ depends }) => {
	const bookmarkedArticles: Article[] = [];

	// 再実行のトリガーを用意
	depends('articles:bookmark');

	return {
		articles: bookmarkedArticles
	};
};
