import type { IArticlesRepository } from '$lib/features/article/repositories/apis/fetch-articles';
import type { Article } from '$lib/features/article/types/type';
import type { Tag } from '$lib/features/tag/types/type';
import client from '../client';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export class ContentfulArticlesRepository implements IArticlesRepository {
	private readonly _client;

	constructor() {
		this._client = client;
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
			body: entry.fields.body ? documentToHtmlString(entry.fields.body) : '',
			title: entry.fields.title,
			imageUrl: entry.fields.thumbnail,
			createdAt: new Date(entry.sys.createdAt),
			updatedAt: new Date(entry.sys.updatedAt),
			// 型エラーを一旦無視
			tag: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				id: entry.fields.tag.sys.id as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				name: entry.fields.tag.fields.name as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				slug: entry.fields.tag.fields.slug
			}
		} as Article;

		return article;
	}

	async getArticlesByTag(tag: Tag, excludedArticle?: Article): Promise<Article[]> {
		if (excludedArticle) {
			const entries = await this._client.getEntries({
				content_type: 'article',
				'fields.tag.sys.id': tag.id,
				'fields.slug[ne]': excludedArticle.slug
			});

			const articles = entries.items.map((item) => {
				return {
					id: item.sys.id,
					slug: item.fields.slug as string,
					title: item.fields.title as string,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					body: item.fields.body ? documentToHtmlString(item.fields.body) : '',
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					imageUrl: item.fields.thumbnail.fields.file.url,
					createdAt: new Date(item.sys.createdAt),
					updatedAt: new Date(item.sys.updatedAt),
					tag: {
						id: tag.id,
						name: tag.name,
						slug: tag.slug,
						iconUrl: tag.iconUrl,
						color: tag.color
					}
				} satisfies Article;
			});

			return articles;
		}

		const entries = await this._client.getEntries({
			content_type: 'article',
			'fields.tag.sys.id': tag.id
		});

		const articles = entries.items.map((item) => {
			return {
				id: item.sys.id,
				slug: item.fields.slug as string,
				title: item.fields.title as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				body: item.fields.body ? documentToHtmlString(item.fields.body) : '',
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				imageUrl: item.fields.thumbnail.fields.file.url,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				tag: {
					id: tag.id,
					name: tag.name,
					slug: tag.slug,
					iconUrl: tag.iconUrl,
					color: tag.color
				}
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
				body: item.fields.body ? documentToHtmlString(item.fields.body) : '',
				title: item.fields.title as string,
				imageUrl: item.fields.thumbnail as string,
				createdAt: new Date(item.sys.createdAt),
				updatedAt: new Date(item.sys.updatedAt),
				// 型エラーを一旦無視
				tag: {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					id: item.fields.tag.sys.id as string,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					name: item.fields.tag.fields.name as string,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					slug: item.fields.tag.fields.slug,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					iconUrl: item.fields.tag.fields.icon.fields.file.url as string,
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					color: item.fields.tag.fields.color as string
				}
			} satisfies Article;
		});

		return articles;
	}
}
