import { BookmarkRepository } from '../../repositories/localstorage/bookmark';
import type { ArticleId } from '../../types/type';
import { BookmarkedArticlesIdStore } from '../../stores/bookmarked-articlesID';

type BookmarkArticles = {
	bookmarkArticle: (articleId: ArticleId) => void;
	removeBookmarkedArticle: (articleId: ArticleId) => void;
	resetBookmarkedArticles: () => void;
};

const bookmarkArticle: BookmarkArticles['bookmarkArticle'] = (articleId: ArticleId) => {
	BookmarkRepository.setBookmarkedArticleId(articleId);
	BookmarkedArticlesIdStore.bookmark(articleId);
};

const removeBookmarkedArticle: BookmarkArticles['removeBookmarkedArticle'] = (
	articleId: ArticleId
) => {
	BookmarkRepository.deleteBookmarkedArticleId(articleId);
	BookmarkedArticlesIdStore.removeBookmark(articleId);
};

const resetBookmarkedArticles: BookmarkArticles['resetBookmarkedArticles'] = () => {
	BookmarkRepository.reset();
	BookmarkedArticlesIdStore.resetBookmark();
};

export const BookmarkArticles: BookmarkArticles = {
	bookmarkArticle,
	removeBookmarkedArticle,
	resetBookmarkedArticles
};
