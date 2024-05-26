import type { Meta, StoryObj } from "@storybook/svelte";
import ArticleContents from "./ArticleContents.svelte";

const meta: Meta = {
    component: ArticleContents
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        article: {
            id: '1',
            slug: 'test-article',
            title: 'Test Article',
            body: '<h2>Heading 1</h2><p>Paragraph 1</p><h3>Heading 1-1</h3><p>Paragraph 1-1</p><h2>Heading 2</h2><p>Paragraph 2</p>',
            imageUrl: 'https://placehold.jp/300x300.png',
            createdAt: new Date(),
            updatedAt: new Date(),
            tag: {
                id: '1',
                name: 'Test Tag'
            }
        }
    }
};