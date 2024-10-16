import type { Meta, StoryObj } from "@storybook/svelte";
import TagFilterDialog from "./TagFilterDialog.svelte";

const meta: Meta = {
    component: TagFilterDialog,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
    }
};