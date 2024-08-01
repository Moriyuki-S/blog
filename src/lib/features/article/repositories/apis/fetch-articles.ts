import type { Tag } from '$lib/features/tag/types/type';
import type { Article } from '../../types/type';

export interface IArticlesRepository {
	getArticleBySlug: (slug: string) => Promise<Article>;
	getArticlesByTag: (tag: Tag, excludedArticle?: Article) => Promise<Article[]>;
	getArticlesByKeyword: (keyword: string) => Promise<Article[]>;
	getLatestArticles: () => Promise<Article[]>;
	getPopularArticles: () => Promise<Article[]>;
}
