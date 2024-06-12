import { writable, type Writable } from "svelte/store";
import type { ArticleId } from "../types/type";

type BookmarkedArticlesIdStoreType = {
    Store: Writable<ArticleId[]>;
    isBookmarked: (articleId: ArticleId) => boolean;
    bookmark: (articleId: ArticleId) => void;
    removeBookmark: (articleId: ArticleId) => void;
}

const Store: BookmarkedArticlesIdStoreType['Store'] = writable<ArticleId[]>([]);

/**
 * ブックマーク済みかどうかを返す
 *
 * ブックマーク済みであればtrueを返す
 */
const isBookmarked: BookmarkedArticlesIdStoreType['isBookmarked'] = (articleId: ArticleId) => {
    let isBookmarked = false;
    Store.subscribe(value => {
        isBookmarked = value.includes(articleId);
    });

    return isBookmarked;
};

/**
 * ブックマークする
 * 
 * すでにブックマーク済みであればアラートを表示する
 */
const bookmark: BookmarkedArticlesIdStoreType['bookmark'] = (articleId: ArticleId) => {
    Store.update(prev => {
        // すでにブックマーク済みであればそのままにする
        if (prev.includes(articleId)) {
            alert('すでにブックマーク済みです');
            return prev;
        }
        return [...prev, articleId];
    });
};

/**
 * 
 * ブックマークを解除する
 */
const removeBookmark: BookmarkedArticlesIdStoreType['removeBookmark'] = (articleId: ArticleId) => {
    Store.update(prev => prev.filter(id => id !== articleId));
};

export const BookmarkedArticlesIdStore: BookmarkedArticlesIdStoreType = {
    Store,
    isBookmarked,
    bookmark,
    removeBookmark
};