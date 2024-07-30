import type { IArticlesRepository } from "$lib/features/article/repositories/apis/fetch-articles";
import type { Article } from "$lib/features/article/types/type";
import client from "../client";

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
            body: entry.fields.body,
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
                slug: entry.fields.tag.fields.slug,
            }
        } as Article;

        return article;
    }

}