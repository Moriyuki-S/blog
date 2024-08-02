import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { FetchTagsUseCase } from '$lib/features/tag/application/usecases/fetch-tags';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import { ContentfulTagsRepository } from '$lib/repositories/contentful/tag/repository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const contentfulTagsRepository = new ContentfulTagsRepository();
	const fetchTagsUseCase = new FetchTagsUseCase(contentfulTagsRepository);

	const tag = await fetchTagsUseCase.getTagBySlug(slug);

	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);
	const articles = fetchArticlesUseCase.getArticlesByTag(tag);

	return {
		tag,
		articles
	};
};
