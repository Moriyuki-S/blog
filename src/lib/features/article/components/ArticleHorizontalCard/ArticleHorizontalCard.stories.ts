import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleHorizontalCard from './ArticleHorizontalCard.svelte';

const meta: Meta = {
	component: ArticleHorizontalCard
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Defualt: Story = {
	args: {
		article: {
			title: 'サンプル記事',
			imageUrl: 'https://placehold.jp/300x300.png',
			body: 'これはサンプルの記事です。dfadfasdfasdfadf',
			tag: {
				id: '1',
				name: 'サンプルタグ',
				iconUrl: 'https://placehold.jp/30x30.png',
				color: '#ff0000'
			},
			createdAt: new Date(),
			updatedAt: new Date()
		}
	}
};
