import { browser } from '$app/environment';
import type { Article, ArticleId } from '../../types/type';

export interface IArticlesRepository {
	getArticle: (id: ArticleId) => Promise<Article>;
};

const sampleArticles: Article[] = [
	{
		id: '1',
		slug: 'test-article-1',
		title: 'Test Article 1',
		body: '<h1>Test Article 1</h1><p>This is a test article.</p>',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
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
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		createdAt: new Date('2022-01-01T00:00:00.000Z'),
		updatedAt: new Date('2022-01-02T00:00:00.000Z'),
		tag: {
			id: '1',
			name: 'プログラミング',
			slug: 'programming',
			iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
			color: '#FF0000'
		}
	},
	{
		id: '3',
		slug: 'test-article-3',
		title: 'Test Article 3',
		body: '<h1>Test Article 3</h1><p>This is another test article.</p>',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		createdAt: new Date('2022-01-01T00:00:00.000Z'),
		updatedAt: new Date('2022-01-03T00:00:00.000Z'),
		tag: {
			id: '1',
			name: 'プログラミング',
			slug: 'programming',
			iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
			color: '#FF0000'
		}
	},
	{
		id: '4',
		slug: 'test-article-4',
		title: 'Test Article 4',
		body: '<h1>Test Article 4</h1><p>This is another test article.</p>',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		createdAt: new Date('2022-01-01T00:00:00.000Z'),
		updatedAt: new Date('2022-01-04T00:00:00.000Z'),
		tag: {
			id: '1',
			name: 'プログラミング',
			slug: 'programming',
			iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
			color: '#FF0000'
		}
	},
	{
		id: '5',
		slug: 'test-article-5',
		title: 'Test Article 5',
		body: '<h1>Test Article 5</h1><p>This is another test article.</p>',
		imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
		createdAt: new Date('2022-01-01T00:00:00.000Z'),
		updatedAt: new Date('2022-01-01T00:00:00.000Z'),
		tag: {
			id: '1',
			name: 'プログラミング',
			slug: 'programming',
			iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
			color: '#FF0000'
		}
	}
];

type ArticleAPIsType = {
	fetchArticle: () => Promise<Article>;
	fetchArticles: (id: string) => Promise<Article[]>;
	fetchBookmarkedArticles: () => Promise<Article[]>;
	fetchPopularArticles: (tag?: string) => Promise<Article[]>;
	fetchNewArticles: (tag?: string) => Promise<Article[]>;
};

/**
 * 記事単体を取得する関数
 *
 * @param id 記事ID
 * @param slug 記事のスラグ
 */
const fetchArticle = async () => {
	return sampleArticles[0];
};

/**
 * 記事を取得する関数
 *
 * ID, キーワード, タグで取得できるようにしたい
 * 今はとりあえずIDのみ
 */

const fetchArticles: ArticleAPIsType['fetchArticles'] = async () => {
	return sampleArticles;
};

const fetchBookmarkedArticles: ArticleAPIsType['fetchBookmarkedArticles'] = async () => {
	if (!browser) {
		console.error('ブックマークした記事はブラウザ側のみで取得できます');
		return [];
	}

	/*
    const bookmarkedArticlesIdOnCSV = localStorage.getItem('bookmarkedArticles');
    if (!bookmarkedArticlesIdOnCSV) {
        return [];
    }
    */

	// const bookmarkedArticlesId = bookmarkedArticlesIdOnCSV.split(',');

	return sampleArticles;
};

/**
 * 人気記事を取得する関数
 */

const fetchPopularArticles: ArticleAPIsType['fetchPopularArticles'] = async () => {
	return sampleArticles;
};

const fetchNewArticles: ArticleAPIsType['fetchNewArticles'] = async () => {
	return sampleArticles;
};

export const ArticleAPIs: ArticleAPIsType = {
	fetchArticle,
	fetchArticles,
	fetchBookmarkedArticles,
	fetchPopularArticles,
	fetchNewArticles
};
