import { NotFoundError } from "$lib/features/error/models/NotFoundError";
import type { TagId } from "../../types/type";

export const FAVORITE_TAGS_KEY = 'favoriteTagsId';

type IFavroteTagsRepository = {
    getFavoriteTagsId: () => TagId[];
    setFavoriteTagId: (favoriteTagId: TagId) => void;
    deleteFavoriteTagId: (deletedFavoriteTagId: TagId) => void;
};

const getFavoriteTagsId: IFavroteTagsRepository['getFavoriteTagsId'] = () => {
    const favoriteTagsId = localStorage.getItem(FAVORITE_TAGS_KEY)?.split(',') ?? [];
    return favoriteTagsId;
};

const setFavoriteTagId: IFavroteTagsRepository['setFavoriteTagId'] = (favoriteTagId: TagId) => {
    const currentFavoriteTagsId = getFavoriteTagsId();
    const newFavoriteTagsId = [...currentFavoriteTagsId, favoriteTagId];
    localStorage.setItem(FAVORITE_TAGS_KEY, newFavoriteTagsId.join(','));
}

const deleteFavoriteTagId: IFavroteTagsRepository['deleteFavoriteTagId'] = (deletedFavoriteTagId: TagId) => {
    const currentFavoriteTagsId = getFavoriteTagsId();
    if (currentFavoriteTagsId.length === 0) {
        throw new NotFoundError('tags', 'NOT_FOUND_TAG', 'タグが見つかりませんでした');
    }
    const favoriteTagsIdAfterDeleted = currentFavoriteTagsId.filter(tagId => tagId !== deletedFavoriteTagId);
    localStorage.setItem(FAVORITE_TAGS_KEY, favoriteTagsIdAfterDeleted.join(','));
};

export const FavoriteTagsRepository: IFavroteTagsRepository = {
    getFavoriteTagsId,
    setFavoriteTagId,
    deleteFavoriteTagId,
};