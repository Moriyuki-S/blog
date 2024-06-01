import { ArticleAPIs } from '$lib/features/article/repositories/apis/fetch-articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const article = await ArticleAPIs.fetchArticle();
	const relatedArticles = ArticleAPIs.fetchArticles(article.tag.id);

	return {
		article,
		relatedArticles
	};
};
