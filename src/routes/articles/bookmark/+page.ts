import { browser } from '$app/environment';
import { BookmarkRepository } from '$lib/features/article/repositories/localstorage/bookmark';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
	if (browser) {
		const bookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		const query = new URLSearchParams();

		bookmarkedArticlesId.forEach((id) => {
			query.append('id', id);
		});

		const response = await fetch(`/api/articles?${query}`);
		const articles = await response.json();

		return {
			articles: articles
		};
	}
};
