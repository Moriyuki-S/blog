import { describe, expect, it } from "vitest";
import type { Tag } from "../../types/type";
import { render, screen } from "@testing-library/svelte";
import TagChip from "./TagChip.svelte";

describe('タグのチップコンポーネントのテスト', () => {
    it('タグの名前が表示されること', () => {
        const TAG: Tag = {
            id: '1',
            name: 'サンプル',
            iconUrl: 'https://icon-pit.com/wp-content/uploads/2018/10/note-pc_icon_79.png',
            color: '#ff0000',
        };
        render(TagChip, { tag: TAG });
        const tagName = screen.queryByText(TAG.name);
        expect(tagName).toBeInTheDocument();
    });
})