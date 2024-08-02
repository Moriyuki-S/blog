import type { PageServerLoad } from './$types';
import { ContentfulTagsRepository } from '$lib/repositories/contentful/tag/repository';
import { FetchTagsUseCase } from '$lib/features/tag/application/usecases/fetch-tags';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('q');
	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);

	const contentfulTagsRepository = new ContentfulTagsRepository();
	const fetchTagsUseCase = new FetchTagsUseCase(contentfulTagsRepository);
	const tags = await fetchTagsUseCase.getTags();
	if (searchQuery) {
		const articles = fetchArticlesUseCase.getArticlesByKeyword(searchQuery);
		return {
			articles,
			tags
		};
	}

	return {
		tags
	};
};
