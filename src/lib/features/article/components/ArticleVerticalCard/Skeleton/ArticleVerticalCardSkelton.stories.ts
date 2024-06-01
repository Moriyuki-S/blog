import type { Meta, StoryObj } from '@storybook/svelte';
import ArticleVerticalCardSkelton from './ArticleVerticalCardSkelton.svelte';

const meta: Meta = {
	component: ArticleVerticalCardSkelton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
