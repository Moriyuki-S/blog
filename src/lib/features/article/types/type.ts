import type { Tag } from "$lib/features/tags/types/type";

export type Article = {
    id: string;
    slug: string;
    title: string;
    abstract: string;
    content: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    tags: Tag[];
};