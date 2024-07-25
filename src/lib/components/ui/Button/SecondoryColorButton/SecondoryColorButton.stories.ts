import type { Meta, StoryObj } from "@storybook/svelte";
import SecondoryColorButton from "./SecondoryColorButton.svelte";

const meta: Meta = {
    component: SecondoryColorButton
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};