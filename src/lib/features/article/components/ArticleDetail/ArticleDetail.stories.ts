import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleDetail from './ArticleDetail.svelte';

const meta: Meta = {
	component: ArticleDetail
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		article: {
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
				color: '#ff0000'
			}
		}
	}
};

export const Updated: Story = {
	args: {
		article: {
			id: '1',
			title: 'テスト記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			content: 'これはテストの記事です。',
			slug: '/',
			createdAt: new Date('2021-01-01T00:00:00'),
			updatedAt: new Date('2021-01-02T00:00:00'),
			tag: {
				id: '1',
				name: 'サンプルタグ',
				iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
				color: '#ff0000'
			}
		}
	}
};
