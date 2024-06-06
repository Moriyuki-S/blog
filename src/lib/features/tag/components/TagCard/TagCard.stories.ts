import type { Meta, StoryObj } from "@storybook/svelte";
import TagCard from "./TagCard.svelte";

const meta: Meta = {
    component: TagCard
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tag: {
            id: "1",
            slug: "sample-tag",
            name: "Sample Tag",
            iconUrl: "",
            color: "#000000"
        }
    }
};