import type { Tag } from '$lib/features/tag/types/type';

export type ArticleId = string;

export type Article = {
	id: ArticleId;
	slug: string;
	title: string;
	body: string;
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
	tags: Tag[];
};

export type ArticleTableOfContents = {
	tagName: string;
	text: string;
};

export type Criteria = {
	label: string;
	value: 'latest' | 'oldest' | 'popular';
};
