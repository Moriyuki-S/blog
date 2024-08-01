import type { Article } from '$lib/features/article/types/type';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const bookmarkedArticles: Article[] = [];

	return {
		...data,
		bookmarkedArticles
	};
};
