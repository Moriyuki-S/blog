import type { Meta, StoryObj } from '@storybook/svelte';
import NotFoundAlert from './NotFoundAlert.svelte';

const meta: Meta = {
	component: NotFoundAlert
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};