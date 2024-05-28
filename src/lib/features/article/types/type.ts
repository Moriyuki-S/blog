import type { Tag } from '$lib/features/tag/types/type';

export type Article = {
	id: string;
	slug: string;
	title: string;
	body: string;
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
	tag: Tag; // 一つの記事に付けられるタグは一つまでにした（ややこしくなるのを防ぐため）
};

export type ArticleTableOfContents = {
	tagName: string;
	text: string;
};
