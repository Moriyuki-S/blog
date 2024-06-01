import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleVerticalCardSkeleton from './ArticleVerticalCardSkeleton.svelte';

const meta: Meta = {
	component: ArticleVerticalCardSkeleton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
