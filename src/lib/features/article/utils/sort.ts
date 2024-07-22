import type { Article } from '../types/type';

// 記事の作成順（更新順ではない）でソート
const sortByDate = (a: Article, b: Article, criteria: 'latest' | 'oldest'): 1 | -1 => {
	if (criteria === 'oldest') {
		return a.createdAt > b.createdAt ? 1 : -1;
	}

	return a.createdAt < b.createdAt ? 1 : -1;
};

const SortUtils = {
	sortByDate
};

export default SortUtils;
