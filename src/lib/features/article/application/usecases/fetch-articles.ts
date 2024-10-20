import type { Tag } from '$lib/features/tag/types/type';
import type { IArticlesRepository } from '../../repositories/apis/fetch-articles';
import type { Article, ArticleId } from '../../types/type';

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
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	async getArticlesByTag(tag: Tag): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getArticlesByTag(tag);
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	async getArticlesByTags(tags: Tag[], limit: number = 3, excludedArticle?: Article): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getArticlesByTags(tags, limit, excludedArticle);
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	async getArticlesByKeyword(keyword: string): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getArticlesByKeyword(keyword);
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	async getArticlesByIds(ids: ArticleId[]): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getArticlesByIds(ids);
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	async getLatestArticles(): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getLatestArticles();
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}

	// 仮の実装 一旦新しい記事を返す
	async getPopularArticles(): Promise<Article[]> {
		try {
			const articles = await this.articlesRepository.getPopularArticles();
			return articles;
		} catch (error) {
			console.error(error);
			throw new Error('記事の取得に失敗しました');
		}
	}
}
