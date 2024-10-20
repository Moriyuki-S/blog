import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ArticleHorizontalCard from './ArticleHorizontalCard.svelte';
import type { Article } from '../../types/type';

describe('ArticleHorizontalCardのUIテスト', () => {
	const sampleArticle: Article = {
		id: '1',
		slug: 'sample',
		title: 'サンプル記事',
		imageUrl: 'https://placehold.jp/300x300.png',
		body: 'これはサンプルの記事です。dfadfasdfasdfadf',
		tags: [
			{
				id: '1',
				name: 'サンプルタグ',
				slug: 'sample-tag',
				iconUrl: 'https://placehold.jp/30x30.png',
				color: '#ff0000'
			}
		],
		createdAt: new Date(),
		updatedAt: new Date()
	};

	it('記事のタイトルが表示される', () => {
		render(ArticleHorizontalCard, {
			article: sampleArticle
		});

		const title = screen.getByText(sampleArticle.title);
		expect(title).toBeInTheDocument();
	});
});
