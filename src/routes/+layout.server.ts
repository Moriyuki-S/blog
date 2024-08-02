import { FetchTagsUseCase } from '$lib/features/tag/application/usecases/fetch-tags';
import { ContentfulTagsRepository } from '$lib/repositories/contentful/tag/repository';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const contentfulTagsRepository = new ContentfulTagsRepository();
	const fetchTagsUseCase = new FetchTagsUseCase(contentfulTagsRepository);
	const tags = fetchTagsUseCase.getTags();

	return {
		tags
	};
};
