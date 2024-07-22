import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleGallery from './ArticleGallery.svelte';

const meta: Meta = {
	component: ArticleGallery
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		articles: [
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			},
			{
				title: 'サンプル記事',
				imageUrl:
					'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
				body: 'これはサンプルの記事です。dfadfasdfasdfadf',
				tag: {
					id: '1',
					name: 'サンプルタグ',
					iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
					color: '#ff0000'
				},
				createdAt: '2024-05-22T23:20:33.446Z',
				updatedAt: '2024-05-22T23:20:33.446Z'
			}
		],
		sortCriteria: 'latest'
	}
};
