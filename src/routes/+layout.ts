import { BookmarkRepository } from '$lib/features/article/repositories/localstorage/bookmark';
import type { PageLoad } from './$types';
import { BookmarkedArticlesIdStore } from '$lib/features/article/stores/bookmarked-articlesID';
import { browser } from '$app/environment';
import type { Article } from '$lib/features/article/types/type';

export const load: PageLoad = async ({ data }) => {
	if (browser) {
		// ブックマークした記事をストアに格納
		const currentBookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		BookmarkedArticlesIdStore.Store.set(currentBookmarkedArticlesId);

		const bookmarkedArticles: Article[] = [];

		return {
			tags: data.tags,
			bookmarkedArticles
		};
	}

	return {
		tags: data.tags
	};
};
