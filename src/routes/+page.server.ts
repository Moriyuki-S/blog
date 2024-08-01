import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);

	const newArticles = fetchArticlesUseCase.getLatestArticles();
	const popularArticles = fetchArticlesUseCase.getPopularArticles();

	return {
		newArticles,
		popularArticles
	}
};
