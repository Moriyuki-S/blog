import { afterEach, describe, expect, it } from "vitest";
import { FAVORITE_TAGS_KEY, FavoriteTagsRepository } from "./favorite-tags";

describe('タグのお気に入り処理のUnitテスト', () => {
    
    afterEach(() => {
        // 各テストごとにローカルストレージをリセット
        localStorage.removeItem(FAVORITE_TAGS_KEY);
    });
    
    it('タグをお気に入りに登録できる', () => {
        FavoriteTagsRepository.setFavoriteTagId('1');
        const currentFavoriteTagId = localStorage.getItem(FAVORITE_TAGS_KEY);
        expect(currentFavoriteTagId).toEqual('1');
    });

    it('お気に入り登録したタグのIDを配列形式で取得できる', () => {
        
        // 登録されたIDが1つだけのとき
        FavoriteTagsRepository.setFavoriteTagId('1');
        let favoriteTagsId = FavoriteTagsRepository.getFavoriteTagsId();
        // 登録されたIDが一つでも配列に格納されている
        expect(favoriteTagsId).toEqual(['1']);

        // 登録されたIDが2つ以上のとき
        FavoriteTagsRepository.setFavoriteTagId('2');
        favoriteTagsId = FavoriteTagsRepository.getFavoriteTagsId();
        expect(favoriteTagsId).toEqual(['1', '2']);
    });

    it('お気に入り登録したタグを削除できる', () => {
        FavoriteTagsRepository.setFavoriteTagId('1');
        let favoriteTagsId = FavoriteTagsRepository.getFavoriteTagsId();
        // ID:1のタグが登録されている
        expect(favoriteTagsId).toEqual(['1']);

        FavoriteTagsRepository.deleteFavoriteTagId('1');
        favoriteTagsId = FavoriteTagsRepository.getFavoriteTagsId();
        // 登録したID:1のタグが削除されている
        expect(favoriteTagsId).toEqual([]);
    });
})