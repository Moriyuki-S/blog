import { render, screen, waitFor } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import ArticleVerticalCard from './ArticleVerticalCard.svelte';
import type { Article } from '../../types/type';
import dayjs from 'dayjs';
import {
	BOOK_MARKED_ARTICLES_KEY,
	BookmarkRepository
} from '../../repositories/localstorage/bookmark';
import { BookmarkArticles } from '../../application/usecases/bookmark-articles';
import { BookmarkedArticlesIdStore } from '../../stores/bookmarked-articlesID';

describe('記事のカードコンポーネントのUIテスト', () => {
	it('記事のタイトルが表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			body: 'これはテストの記事です。',
			slug: '/',
			createdAt: new Date(),
			updatedAt: new Date(),
			tags: [
				{
					id: '1',
					name: 'サンプルタグ',
					slug: 'sample-tag',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				}
			]
		};
		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });
		const title = screen.queryByText(SAMPLE_ARTICLE.title);
		expect(title).toBeInTheDocument();
	});

	it('記事が更新されていないときは、投稿日時が表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			body: 'これはテストの記事です。',
			slug: '/',
			createdAt: dayjs().subtract(1, 'day').toDate(),
			updatedAt: dayjs().subtract(1, 'day').toDate(),
			tags: [
				{
					id: '1',
					name: 'サンプルタグ',
					slug: 'sample-tag',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				}
			]
		};

		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });
		const date = screen.getByTestId(`article-card-time-${SAMPLE_ARTICLE.id}`);
		expect(date).toHaveTextContent('投稿 : 1日前');
	});

	it('記事が更新されているときは、更新日時が表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			body: 'これはテストの記事です。',
			slug: '/',
			createdAt: dayjs().subtract(2, 'day').toDate(),
			updatedAt: dayjs().subtract(1, 'day').toDate(),
			tags: [
				{
					id: '1',
					name: 'サンプルタグ',
					slug: 'samle-tag',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				}
			]
		};
		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });
		const date = screen.getByTestId(`article-card-time-${SAMPLE_ARTICLE.id}`);
		expect(date).toHaveTextContent('更新 : 1日前');
	});
});

describe('ブックマーク関連のテスト', () => {
	const SAMPLE_ARTICLE: Article = {
		id: '1',
		title: 'テスト記事',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		body: 'これはテストの記事です。',
		slug: '/',
		createdAt: dayjs().subtract(1, 'day').toDate(),
		updatedAt: dayjs().subtract(1, 'day').toDate(),
		tags: [
			{
				id: '1',
				name: 'サンプルタグ',
				slug: 'sample-tag',
				iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
				color: '#ff0000'
			}
		]
	};

	beforeEach(() => {
		// ローカルストレージをリセット
		localStorage.removeItem(BOOK_MARKED_ARTICLES_KEY);
		// ブックマークの状態をリセット
		BookmarkedArticlesIdStore.Store.set([]);
	});

	it('ブックマークに未登録の場合、ブックマークのボタンが表示される', () => {
		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });
		const bookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();

		// ブックマークに登録されていないことを確認
		expect(bookmarkedArticlesId).not.toContain(SAMPLE_ARTICLE.id);

		const bookmarkButton = screen.getByTestId(`bookmark-button-${SAMPLE_ARTICLE.id}`);
		const aleadyBookmarkedButton = screen.queryByTestId(`bookmarked-button-${SAMPLE_ARTICLE.id}`);

		// ブックマーク未登録の時にブックマークボタンが表示されていることを確認
		expect(bookmarkButton).toBeInTheDocument();

		// ブックマーク済みボタンが非表示であることを確認
		expect(aleadyBookmarkedButton).not.toBeInTheDocument();
	});

	it('ブックマークに登録済みの時はブックマーク済みのボタンが表示される', async () => {
		BookmarkArticles.bookmarkArticle(SAMPLE_ARTICLE.id);
		expect(BookmarkRepository.getBookmarkedArticlesId()).toContain(SAMPLE_ARTICLE.id);

		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });

		const bookmarkButton = screen.queryByTestId(`bookmark-button-${SAMPLE_ARTICLE.id}`);
		const alreadyBookmarkedButton = screen.getByTestId(`bookmarked-button-${SAMPLE_ARTICLE.id}`);
		// ブックマークボタンが非表示であることを確認
		expect(bookmarkButton).not.toBeInTheDocument();

		// ブックマーク済みボタンが表示されていることを確認
		expect(alreadyBookmarkedButton).toBeInTheDocument();
	});

	it('ブックマークの登録ができる', async () => {
		render(ArticleVerticalCard, { article: SAMPLE_ARTICLE });
		let bookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();

		// ブックマークに登録されていないことを確認
		expect(bookmarkedArticlesId).not.toContain(SAMPLE_ARTICLE.id);

		const bookmarkButton = screen.getByTestId(`bookmark-button-${SAMPLE_ARTICLE.id}`);

		bookmarkButton.click();

		bookmarkedArticlesId = BookmarkRepository.getBookmarkedArticlesId();

		// ブックマークに登録されたことを確認
		expect(bookmarkedArticlesId).toContain(SAMPLE_ARTICLE.id);

		// ブックマークボタンが非表示になり、ブックマーク済みボタンが表示されていることを確認
		await waitFor(() => {
			const bookmarkButtonAfterBookmarked = screen.queryByTestId(
				`bookmark-button-${SAMPLE_ARTICLE.id}`
			);
			const bookmarkedButtonAfterBookmarked = screen.getByTestId(
				`bookmarked-button-${SAMPLE_ARTICLE.id}`
			);
			expect(bookmarkButtonAfterBookmarked).not.toBeInTheDocument();
			expect(bookmarkedButtonAfterBookmarked).toBeInTheDocument();
		});
	});
});
