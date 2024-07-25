import { describe, expect, it } from 'vitest';
import type { Article } from '../types/type';
import SortUtils from './sort';

describe('日付関連の並べ替え', () => {
	describe('sortByDateのテスト', () => {
		const articles1: Article[] = [
			{
				id: '1',
				slug: 'test-article-1',
				title: 'Test Article 1',
				body: '<h1>Test Article 1</h1><p>This is a test article.</p>',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				createdAt: new Date('2022-01-01T00:00:00.000Z'),
				updatedAt: new Date('2022-01-01T00:00:00.000Z'),
				tag: {
					id: '1',
					slug: 'programming',
					name: 'プログラミング',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#FF0000'
				}
			},
			{
				id: '2',
				slug: 'test-article-2',
				title: 'Test Article 2',
				body: '<h1>Test Article 2</h1><p>This is another test article.</p>',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				createdAt: new Date('2019-01-01T00:00:00.000Z'),
				updatedAt: new Date('2022-01-02T00:00:00.000Z'),
				tag: {
					id: '1',
					name: 'プログラミング',
					slug: 'programming',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#FF0000'
				}
			}
		];

		const articles2: Article[] = [
			{
				id: '1',
				slug: 'test-article-1',
				title: 'Test Article 1',
				body: '<h1>Test Article 1</h1><p>This is a test article.</p>',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				createdAt: new Date('2020-01-01T00:00:00.000Z'),
				updatedAt: new Date('2022-01-01T00:00:00.000Z'),
				tag: {
					id: '1',
					slug: 'programming',
					name: 'プログラミング',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#FF0000'
				}
			},
			{
				id: '2',
				slug: 'test-article-2',
				title: 'Test Article 2',
				body: '<h1>Test Article 2</h1><p>This is another test article.</p>',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				createdAt: new Date('2022-01-01T00:00:00.000Z'),
				updatedAt: new Date('2022-01-02T00:00:00.000Z'),
				tag: {
					id: '1',
					name: 'プログラミング',
					slug: 'programming',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#FF0000'
				}
			}
		];

		it('古い順に並べる', () => {
			const sortedArticles = SortUtils.sortByDate(articles1, 'oldest');
			expect(sortedArticles).toEqual([articles1[1], articles1[0]]);
		});

		it('新しい順に並べる', () => {
			const sortedArticles = SortUtils.sortByDate(articles2, 'latest');
			expect(sortedArticles).toEqual([articles2[1], articles2[0]]);
		});
	});
});
