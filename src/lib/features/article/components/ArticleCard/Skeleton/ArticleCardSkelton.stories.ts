import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleCardSkelton from './ArticleCardSkelton.svelte';

const meta: Meta = {
	component: ArticleCardSkelton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
