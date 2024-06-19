import { afterEach, describe, expect, it } from 'vitest';
import { BOOK_MARKED_ARTICLES_KEY, BookmarkRepository } from './bookmark';

describe('ブックマーク処理のUnitテスト', () => {
	afterEach(() => {
		// ローカルストレージをリセット
		localStorage.removeItem(BOOK_MARKED_ARTICLES_KEY);
	});

	it('ブックマークの追加ができる', () => {
		BookmarkRepository.setBookmarkedArticleId('1');
		const bookmarkedArticleId = localStorage.getItem(BOOK_MARKED_ARTICLES_KEY);
		expect(bookmarkedArticleId).toBe('1');
	});

	it('ブックマークの取得ができる', () => {
		BookmarkRepository.setBookmarkedArticleId('1');
		const bookmarkedArticleId = BookmarkRepository.getBookmarkedArticlesId();
		expect(bookmarkedArticleId).toEqual(['1']);
	});

	it('ブックマークの削除ができる', () => {
		// ブックマークに登録
		BookmarkRepository.setBookmarkedArticleId('1');
		let currentBookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		expect(currentBookmarkedArticlesId).toEqual(['1']);

		// ブックマークから削除
		BookmarkRepository.deleteBookmarkedArticleId('1');

		// ブックマークが削除されているかを確認
		currentBookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		expect(currentBookmarkedArticlesId).toEqual([]);
	});

	it('ブックマークに複数登録できる', () => {
		// ブックマークに複数登録
		BookmarkRepository.setBookmarkedArticleId('1');
		BookmarkRepository.setBookmarkedArticleId('2');

		// ブックマークが登録されているか確認
		const bookmarkedArticlesId = localStorage.getItem(BOOK_MARKED_ARTICLES_KEY);
		expect(bookmarkedArticlesId).toBe('1,2');
	});

	it('ブックマークに複数登録されたIDを配列形式で取得できる', () => {
		// ブックマークに複数登録
		BookmarkRepository.setBookmarkedArticleId('1');
		BookmarkRepository.setBookmarkedArticleId('2');

		// ブックマークした記事のIDを取得
		const bookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();
		expect(bookmarkedArticlesId).toEqual(['1', '2']);
	});

	it('既に登録地味の記事をブックマークした場合はそのまま登録状態を維持する', () => {
		// ブックマークに複数登録
		BookmarkRepository.setBookmarkedArticleId('1');
		BookmarkRepository.setBookmarkedArticleId('2');

		// 既に登録されているIDを再度登録
		BookmarkRepository.setBookmarkedArticleId('1');

		// ブックマークがそのまま登録されているか確認
		const bookmarkedArticlesId = localStorage.getItem(BOOK_MARKED_ARTICLES_KEY);
		expect(bookmarkedArticlesId).toBe('1,2');
	});
});
