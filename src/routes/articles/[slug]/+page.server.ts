import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);

	const article = fetchArticlesUseCase.getArticleBySlug(slug);

	const relatedArticles = fetchArticlesUseCase.getArticlesByTag((await article).tag, (await article));
	return {
		article,
		relatedArticles
	}
};
