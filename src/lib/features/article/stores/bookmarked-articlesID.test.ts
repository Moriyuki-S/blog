import { describe, expect, it } from "vitest";
import { get } from "svelte/store";
import { BookmarkedArticlesIdStore } from "./bookmarked-articlesID";

describe('ブックマークのストア処理のテスト', () => {
    it('ブックマークを追加できる', () => {
        BookmarkedArticlesIdStore.bookmark('1');
        const bookmarked = get(BookmarkedArticlesIdStore.Store);
        expect(bookmarked).toEqual(['1']);
    });

    it('ブックマーク済みかを判定できる', () => {
        let isBookmarked = BookmarkedArticlesIdStore.isBookmarked('1');
        // ブックマークしてないのでfalse
        expect(isBookmarked).toBe(false);

        BookmarkedArticlesIdStore.bookmark('1');

        isBookmarked = BookmarkedArticlesIdStore.isBookmarked('1');

        // ブックマークしてるのでtrue
        expect(isBookmarked).toBe(true);
    });

    it('ブックマークを解除できる', () => {
        BookmarkedArticlesIdStore.bookmark('1');
        BookmarkedArticlesIdStore.removeBookmark('1');
        const bookmarked = get(BookmarkedArticlesIdStore.Store);

        expect(bookmarked).toEqual([]);
    });
});