import type { Meta, StoryObj } from '@storybook/svelte';
import BottomNavigation from './BottomNavigation.svelte';

const meta: Meta = {
	component: BottomNavigation
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
