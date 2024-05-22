import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from './Footer.svelte';

const meta: Meta = {
	component: Footer
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};