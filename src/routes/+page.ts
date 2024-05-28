import { fetchArticles } from '$lib/features/article/repositories/apis/fetch-articles';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const popularArticles = await fetchArticles.fetchPopularArticles();
    return {
        popularArticles
    };
};