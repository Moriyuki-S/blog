import type { IArticlesRepository } from "$lib/features/article/repositories/apis/fetch-articles";
import type { Article, ArticleId } from "$lib/features/article/types/type";
import client from "../client";

export class ContentfulArticlesRepository implements IArticlesRepository {

    private readonly _client;

    constructor() {
        this._client = client;
    }

    async getArticle(id: ArticleId): Promise<Article> {
        const entry = await this._client.getEntry(id);
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