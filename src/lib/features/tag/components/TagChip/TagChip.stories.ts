import type { Meta, StoryObj } from '@storybook/svelte';
import TagChip from './TagChip.svelte';

const meta: Meta = {
	component: TagChip
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tag: {
			id: '1',
			slug: 'programming',
			name: 'プログラミング',
			iconUrl: 'https://placehold.jp/30x30.png',
			color: '#FF0000'
		}
	}
};
