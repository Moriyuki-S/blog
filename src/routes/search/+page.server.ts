import type { PageServerLoad } from './$types';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);

	if (searchQuery) {
		const articles = fetchArticlesUseCase.getArticlesByKeyword(searchQuery);
		return {
			articles
		};
	}

	return {};
};
