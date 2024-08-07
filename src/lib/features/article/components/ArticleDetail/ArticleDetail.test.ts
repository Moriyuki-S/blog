import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { Article } from '../../types/type';
import ArticleDetail from './ArticleDetail.svelte';
import { formatTimetoJapanese } from '$lib/utils/time-format';

describe('記事詳細ページのUIテスト', () => {
	const SAMPLE_ARTICLE: Article = {
		id: '1',
		title: 'テスト記事',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		body: 'テスト記事です',
		slug: '/sample',
		createdAt: new Date('2021-01-01T00:00:00'),
		updatedAt: new Date('2021-01-01T00:00:00'),
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

	const SAMPLE_UPDATED_ARTICLE: Article = {
		...SAMPLE_ARTICLE,
		updatedAt: new Date('2021-01-02T00:00:00')
	};

	it('記事のタイトルが表示される', () => {
		render(ArticleDetail, { article: SAMPLE_ARTICLE });
		const title = screen.queryByText(SAMPLE_ARTICLE.title);
		expect(title).toBeInTheDocument();
	});

	it('記事の画像が表示される', () => {
		render(ArticleDetail, { article: SAMPLE_ARTICLE });
		const image = screen.queryByAltText(`「${SAMPLE_ARTICLE.title}」のイメージ画像`);
		expect(image).toBeInTheDocument();
	});

	it('記事の内容が表示される', () => {
		render(ArticleDetail, { article: SAMPLE_ARTICLE });
		const content = screen.queryByText(SAMPLE_ARTICLE.body);
		expect(content).toBeInTheDocument();
	});

	it('記事の投稿日時が表示される', () => {
		render(ArticleDetail, { article: SAMPLE_ARTICLE });
		const formatCreadedAt = formatTimetoJapanese(SAMPLE_ARTICLE.createdAt);
		const date = screen.queryByText(formatCreadedAt);
		expect(date).toBeInTheDocument();
	});

	it('記事が更新されていないときは、更新日時は表示されない', () => {
		render(ArticleDetail, { article: SAMPLE_ARTICLE });
		const updatedAt = screen.queryByText('更新 : ');
		expect(updatedAt).not.toBeInTheDocument();
	});

	it('記事が更新されているときは、更新日時が表示される', () => {
		render(ArticleDetail, { article: SAMPLE_UPDATED_ARTICLE });
		const formatUpdatedAt = formatTimetoJapanese(SAMPLE_UPDATED_ARTICLE.updatedAt);
		const updatedAt = screen.queryByText(formatUpdatedAt);
		expect(updatedAt).toBeInTheDocument();
	});
});
