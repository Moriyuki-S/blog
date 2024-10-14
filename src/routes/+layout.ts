import { BookmarkRepository } from '$lib/features/article/repositories/localstorage/bookmark';
import type { LayoutLoad } from './$types';
import { BookmarkedArticlesIdStore } from '$lib/features/article/stores/bookmarked-articlesID';
import { browser } from '$app/environment';

export const load: LayoutLoad = async ({ data }) => {
	if (browser) {
		// ブックマークした記事をストアに格納
		const currentBookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		BookmarkedArticlesIdStore.Store.set(currentBookmarkedArticlesId);
	}

	return {
		...data
	};
};
