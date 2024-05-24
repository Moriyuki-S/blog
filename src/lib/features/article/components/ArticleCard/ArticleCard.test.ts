import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ArticleCard from './ArticleCard.svelte';
import type { Article } from '../../types/type';
import dayjs from 'dayjs';

describe('記事のカードコンポーネントのテスト', () => {
	it('記事のタイトルが表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			content: 'これはテストの記事です。',
			slug: '/',
			createdAt: new Date(),
			updatedAt: new Date(),
			tag: {
				id: '1',
				name: 'サンプルタグ',
				iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
				color: '#ff0000',
			}
		};
		render(ArticleCard, { article: SAMPLE_ARTICLE });
		const title = screen.queryByText(SAMPLE_ARTICLE.title);
		expect(title).toBeInTheDocument();
	});

	it('記事が更新されていないときは、投稿日時が表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			content: 'これはテストの記事です。',
			slug: '/',
			createdAt: dayjs().subtract(1, 'day').toDate(),
			updatedAt: dayjs().subtract(1, 'day').toDate(), 
			tag: {
				id: '1',
				name: 'サンプルタグ',
				iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
				color: '#ff0000',
			}
		};

		render(ArticleCard, { article: SAMPLE_ARTICLE });
		const date = screen.getByTestId('article-card-time');
		expect(date).toHaveTextContent('投稿 : 1日前');
	});

	it('記事が更新されているときは、更新日時が表示される', () => {
		const SAMPLE_ARTICLE: Article = {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			content: 'これはテストの記事です。',
			slug: '/',
			createdAt: dayjs().subtract(2, 'day').toDate(),
			updatedAt: dayjs().subtract(1, 'day').toDate(),
			tag: {
				id: '1',
				name: 'サンプルタグ',
				iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
				color: '#ff0000',
			},
		};
		render(ArticleCard, { article: SAMPLE_ARTICLE });
		const date = screen.getByTestId('article-card-time');
		expect(date).toHaveTextContent('更新 : 1日前');
	});
});
