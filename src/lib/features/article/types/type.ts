import type { Tag } from "$lib/features/tags/types/type";

export type Article = {
    id: string;
    slug: string;
    title: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];
};