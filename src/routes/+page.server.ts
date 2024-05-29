import { ArticleAPIs} from '$lib/features/article/repositories/apis/fetch-articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const popularArticles = ArticleAPIs.fetchPopularArticles();
    const newArticles = ArticleAPIs.fetchNewArticles();
    return {
        popularArticles,
        newArticles
    };
};