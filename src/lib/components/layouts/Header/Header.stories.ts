import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta: Meta = {
	component: Header
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
