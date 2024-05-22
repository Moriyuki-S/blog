import type { Tag } from "$lib/features/tags/types/type";

export type Article = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    tags: Tag[];
};