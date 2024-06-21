import type { Meta, StoryObj } from "@storybook/svelte";
import Snackbar from "./Snackbar.svelte";

const meta: Meta = {
    component: Snackbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: "This is a snack bar message",
    }
};

