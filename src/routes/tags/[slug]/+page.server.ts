import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { slug } = params;

	const { tags } = await parent();

	const currentTag = tags.find(tag => tag.slug === slug);

	if (!currentTag) {
		error(404);
	}

	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);
	const articles = fetchArticlesUseCase.getArticlesByTag(currentTag);

	return {
		articles,
		currentTag,
	};
};
