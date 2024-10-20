import type { Tag } from '$lib/features/tag/types/type';
import type { Article, ArticleId } from '../../types/type';

export interface IArticlesRepository {
	getArticleBySlug: (slug: string) => Promise<Article>;
	getArticlesByTag: (tag: Tag) => Promise<Article[]>;
	getArticlesByTags: (tags: Tag[], limit: number, excludedArticle?: Article) => Promise<Article[]>;
	getArticlesByIds: (ids: ArticleId[]) => Promise<Article[]>;
	getArticlesByKeyword: (keyword: string) => Promise<Article[]>;
	getLatestArticles: () => Promise<Article[]>;
	getPopularArticles: () => Promise<Article[]>;
}
