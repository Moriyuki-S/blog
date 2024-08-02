import { FetchArticlesUseCase } from '$lib/features/article/application/usecases/fetch-articles';
import { ContentfulArticlesRepository } from '$lib/repositories/contentful/article/repository';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const articlesID = url.searchParams.getAll('id');
	const contentfulArticlesRepository = new ContentfulArticlesRepository();
	const fetchArticlesUseCase = new FetchArticlesUseCase(contentfulArticlesRepository);
	const articles = await fetchArticlesUseCase.getArticlesByIds(articlesID);

	return new Response(JSON.stringify(articles));
};
