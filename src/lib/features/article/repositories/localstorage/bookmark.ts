import type { ArticleId } from '../../types/type';
import { NotFoundError } from '$lib/features/error/models/NotFoundError';

export const BOOK_MARKED_ARTICLES_KEY = 'bookmarkedArticlesId';

type IBookmarkRepository = {
	getBookmarkedArticlesId: () => ArticleId[];
	setBookmarkedArticleId: (newBookmarkedArticleId: ArticleId) => void;
    deleteBookmarkedArticleId: (deletedBookmarkedArticleId: ArticleId) => void;
};

const getBookmarkedArticlesId: IBookmarkRepository['getBookmarkedArticlesId'] = (): ArticleId[] => {
    // ローカルストレージに保存されたIDを配列形式に変更して変数に格納
	const bookmarkedArticlesId = (localStorage.getItem(BOOK_MARKED_ARTICLES_KEY) || '').split(',').filter(Boolean) ?? [];
	return bookmarkedArticlesId;
};

const setBookmarkedArticleId: IBookmarkRepository['setBookmarkedArticleId'] = (newBookmarkedArticleId: ArticleId) => {
	const lastBookmarkedArticlesId = (localStorage.getItem(BOOK_MARKED_ARTICLES_KEY) || '').split(',').filter(Boolean) ?? [];
    // 新しいIDを追加
	lastBookmarkedArticlesId.push(newBookmarkedArticleId);
    const joinedBookmarkedArticlesId = lastBookmarkedArticlesId.join(',');

    // ローカルストレージに保存
    localStorage.setItem(BOOK_MARKED_ARTICLES_KEY, joinedBookmarkedArticlesId);
};

const deleteBookmarkedArticleId: IBookmarkRepository['deleteBookmarkedArticleId'] = (deletedBookmarkedArticleId: ArticleId) => {
    const lastBookmarkedArticlesId = localStorage.getItem(BOOK_MARKED_ARTICLES_KEY)?.split(',');
    if (!lastBookmarkedArticlesId) {
        throw new NotFoundError('articles', 'NOT_FOUND_ARTICLES', 'ブックマークした記事が見つかりませんでした');
    }

    const newBookmarkedArticlesId = lastBookmarkedArticlesId.filter(id => id !== deletedBookmarkedArticleId);

    if (newBookmarkedArticlesId.length === 0) {
        localStorage.removeItem(BOOK_MARKED_ARTICLES_KEY);
    }

    localStorage.setItem(BOOK_MARKED_ARTICLES_KEY, newBookmarkedArticlesId.join(','));
}

export const BookmarkRepository: IBookmarkRepository = {
	getBookmarkedArticlesId,
	setBookmarkedArticleId,
    deleteBookmarkedArticleId,
};
