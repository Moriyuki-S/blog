import type { IArticlesRepository } from '$lib/features/article/repositories/apis/fetch-articles';
import type { Article, ArticleId } from '$lib/features/article/types/type';
import type { Tag } from '$lib/features/tag/types/type';
import type { Entry, EntrySkeletonType } from 'contentful';
import client from '../client';
import { convertRichTextToHtml } from '../utils/convert-to-html';

export class ContentfulArticlesRepository implements IArticlesRepository {
	private readonly _client;

	constructor() {
		this._client = client;
	}

	static getTagsFromEntry(entry: Entry<EntrySkeletonType, undefined, string>): Tag[] {
		if (!entry.fields.tags) {
			return [];
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const tags = entry.fields.tags.map((tag) => {
			return {
				id: tag.sys.id,
				name: tag.fields.name,
				slug: tag.fields.slug,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				iconUrl: tag.fields.icon.fields.file.url,
				color: tag.fields.color
			} satisfies Tag;
		});

		return tags;
	}

	async getArticleBySlug(slug: string): Promise<Article> {
		const entries = await this._client.getEntries({
			content_type: 'article',
			'fields.slug': slug
		});

		if (entries.items.length === 0) {
			throw new Error('記事が見つかりませんでした');
		}

		const entry = entries.items[0];

		const article = {
			id: entry.sys.id,
			slug: entry.fields.slug,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			body: entry.fields.body ? convertRichTextToHtml(entry.fields.body) : '',
			title: entry.fields.title,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			imageUrl: entry.fields.thumbnail.fields.file.url,
			createdAt: new Date(entry.sys.createdAt),
			updatedAt: new Date(entry.sys.updatedAt),
			tags: ContentfulArticlesRepository.getTagsFromEntry(entry)
		} as Article;

		return article;
	}

	async getArticlesByTag(tag: Tag, excludedArticle?: Article): Promise<Article[]> {
		if (excludedArticle) {
			const entries = await this._client.getEntries({
				content_type: 'article',
				'fields.tags.sys.id[in]': tag.id,
				'sys.id[nin]': [excludedArticle.id]
			});

			const articles = entries.items.map((item) => {
				return {
					id: item.sys.id,
					slug: item.fields.slug as string,
					title: item.fields.title as string,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					imageUrl: item.fields.thumbnail.fields.file.url,
					createdAt: new Date(item.sys.createdAt),
					updatedAt: new Date(item.sys.updatedAt),
					tags: ContentfulArticlesRepository.getTagsFromEntry(item)
				} satisfies Article;
			});

			return articles;
		}

		const entries = await this._client.getEntries({
			content_type: 'article',
			'fields.tags.sys.id[in]': tag.id
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tags: ContentfulArticlesRepository.getTagsFromEntry(item)
			} satisfies Article;
		});

		return articles;
	}

	async getArticlesByKeyword(keyword: string): Promise<Article[]> {
		const entries = await this._client.getEntries({
			content_type: 'article',
			order: ['-sys.createdAt'],
			query: keyword
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url as string,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tags: ContentfulArticlesRepository.getTagsFromEntry(item)
			} satisfies Article;
		});

		return articles;
	}

	async getArticlesByIds(ids: ArticleId[]): Promise<Article[]> {
		const entries = await this._client.getEntries({
			content_type: 'article',
			'sys.id[in]': ids
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url as string,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tags: ContentfulArticlesRepository.getTagsFromEntry(item)
			} satisfies Article;
		});

		return articles;
	}

	async getLatestArticles(): Promise<Article[]> {
		const entries = await this._client.getEntries({
			content_type: 'article',
			order: ['-sys.createdAt']
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url as string,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tags: ContentfulArticlesRepository.getTagsFromEntry(item)
			} satisfies Article;
		});

		return articles;
	}

	async getPopularArticles(): Promise<Article[]> {
		// 仮の実装
		const entries = await this._client.getEntries({
			content_type: 'article',
			order: ['-sys.createdAt']
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? convertRichTextToHtml(item.fields.body) : '',
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url as string,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tags: ContentfulArticlesRepository.getTagsFromEntry(item)
			} satisfies Article;
		});

		return articles;
	}
}
