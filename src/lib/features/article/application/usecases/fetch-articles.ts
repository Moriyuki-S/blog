import type { Tag } from "$lib/features/tag/types/type";
import type { IArticlesRepository } from "../../repositories/apis/fetch-articles";
import type { Article } from "../../types/type"

export class FetchArticlesUseCase {
    private readonly articlesRepository: IArticlesRepository;

    constructor(articlesRepository: IArticlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    async getArticleBySlug(slug: string): Promise<Article> {
        try {
            const article = await this.articlesRepository.getArticleBySlug(slug);
            return article;
        } catch (error) {
            throw new Error('記事の取得に失敗しました');
        }
    }

    async getArticlesByTag(tag: Tag, excludedArticle?: Article): Promise<Article[]> {
        try {
            const articles = await this.getArticlesByTag(tag, excludedArticle);
            return articles;
        } catch (error) {
            throw new Error('記事の取得に失敗しました');
        }
    }

    async getArticlesByKeyword(keyword: string): Promise<Article[]> {
        try {
            const articles = await this.articlesRepository.getArticlesByKeyword(keyword);
            return articles;
        } catch (error) {
            throw new Error('記事の取得に失敗しました');
        }
    }
}