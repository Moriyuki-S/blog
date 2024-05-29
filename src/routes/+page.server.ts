import { fetchArticles } from '$lib/features/article/repositories/apis/fetch-articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const popularArticles = fetchArticles.fetchPopularArticles();
    const newArticles = fetchArticles.fetchNewArticles();
    return {
        popularArticles,
        newArticles
    };
};