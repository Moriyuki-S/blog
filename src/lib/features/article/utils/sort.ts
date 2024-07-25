import type { Tag } from '$lib/features/tag/types/type';
import type { Article } from '../types/type';

// 記事の作成順（更新順ではない）でソート
const sortByDate = (articles: Article[], criteria: 'latest' | 'oldest'): Article[] => {
	const articlesCopy = [...articles];
	if (criteria === 'oldest') {
		const sortedArticles = articlesCopy.sort((a, b) => {
			return a.createdAt.getTime() > b.createdAt.getTime() ? 1 : -1;
		});

		return sortedArticles;
	}

	const sortedArticles = articlesCopy.sort((a, b) => {
		return a.createdAt.getTime() < b.createdAt.getTime() ? 1 : -1;
	});

	return sortedArticles;
};

const sortArticlesByTag = (articles: Article[], tag: Tag): Article[] => {
	const sortedArticles = articles.filter(article => {
		return article.tag.id === tag.id;
	});

	return sortedArticles;
}

const SortUtils = {
	sortByDate,
	sortArticlesByTag,
};

export default SortUtils;
