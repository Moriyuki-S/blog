import type { Meta, StoryObj } from "@storybook/svelte";
import TagChipList from "./TagChipList.svelte";

const meta: Meta = {
    component: TagChipList
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tags: [
            {
                id: '1',
                slug: 'sample-tag',
                name: 'Sample Tag',
                iconUrl: 'https://placehold.jp/30x30.png',
                color: '#000000'
            },
            {
                id: '2',
                slug: 'sample-tag',
                name: 'Sample Tag',
                iconUrl: 'https://placehold.jp/30x30.png',
                color: '#000000'
            },
            {
                id: '3',
                slug: 'sample-tag',
                name: 'Sample Tag',
                iconUrl: 'https://placehold.jp/30x30.png',
                color: '#000000'
            },
            {
                id: '4',
                slug: 'sample-tag',
                name: 'Sample Tag',
                iconUrl: 'https://placehold.jp/30x30.png',
                color: '#000000'
            },
            {
                id: '5',
                slug: 'sample-tag',
                name: 'Sample Tag',
                iconUrl: 'https://placehold.jp/30x30.png',
                color: '#000000'
            }
        ]
    }
}