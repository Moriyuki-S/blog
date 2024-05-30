import type { Meta, StoryObj } from "@storybook/svelte";
import UserProfileCard from "./UserProfileCard.svelte";

const meta: Meta = {
    component: UserProfileCard
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        user: {
            name: 'サンプルユーザー',
            biography: 'サンプルのユーザーです。',
            iconUrl: 'https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_2.png'
        }
    }
};