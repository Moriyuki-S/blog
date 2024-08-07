import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);

	const article = await fetchArticlesUseCase.getArticleBySlug(slug);
	const relatedArticles = fetchArticlesUseCase.getArticlesByTag(article.tag, article);

	return {
		article,
		relatedArticles
	};
};
