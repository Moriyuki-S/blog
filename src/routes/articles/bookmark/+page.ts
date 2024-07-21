import type { PageLoad } from "./$types"; 
import { ArticleAPIs } from "$lib/features/article/repositories/apis/fetch-articles";

export const load: PageLoad = async () => {
    const bookmarkedArticles = await ArticleAPIs.fetchBookmarkedArticles();
    return {
        articles: bookmarkedArticles
    }
};