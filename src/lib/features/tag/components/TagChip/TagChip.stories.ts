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
			name: 'プログラミング',
			iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
			color: '#FF0000'
		}
	}
};
