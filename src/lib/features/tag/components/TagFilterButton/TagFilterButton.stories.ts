import type { Meta, StoryObj } from '@storybook/svelte';
import TagFilterButton from './TagFilterButton.svelte';

const meta: Meta = {
	component: TagFilterButton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tags: [
			{
				id: '1',
				slug: 'sample-tag',
				name: 'Sample Tag',
				iconUrl: 'https://placehold.jp/30x30.png',
				color: '#000000'
			}
		],
		currentTag: {}
	}
};
