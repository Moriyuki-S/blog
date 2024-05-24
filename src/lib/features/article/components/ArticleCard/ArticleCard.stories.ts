import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleCard from './ArticleCard.svelte';

const meta: Meta = {
	component: ArticleCard
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		article: {
			title: 'サンプル記事',
			imageUrl: 'https://www.pokemon.co.jp/PostImages/d86fdbe4e3d1e9d680b5217f7d947425caae82aa.jpg',
			body: 'これはサンプルの記事です。dfadfasdfasdfadf',
			createdAt: '2024-05-22T23:20:33.446Z',
			updatedAt: '2024-05-22T23:20:33.446Z'
		}
	}
};
