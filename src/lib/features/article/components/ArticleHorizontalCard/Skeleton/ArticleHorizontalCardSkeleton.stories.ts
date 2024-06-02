import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleHorizontalCardSkeleton from './ArticleHorizontalCardSkeleton.svelte';

const meta: Meta = {
	component: ArticleHorizontalCardSkeleton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Defualt: Story = {};
