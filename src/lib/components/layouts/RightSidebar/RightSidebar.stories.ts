import type { Meta, StoryObj } from "@storybook/svelte";
import RightSidebar from "./RightSidebar.svelte";

const meta: Meta = {
    component: RightSidebar
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        styleClass: "w-72 h-72 bg-sky-100"
    }
}