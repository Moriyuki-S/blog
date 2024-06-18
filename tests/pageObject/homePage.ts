import type { Locator, Page } from "@playwright/test";
import type { ArticleVerticalCard } from "../types/components";

export class HomePage {
    readonly page: Page;
    readonly popularArticlesList: Locator;
    readonly latestArticlesList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popularArticlesList = page.getByTestId('popular-articles-list');
        this.latestArticlesList = page.getByTestId('latest-articles-list');
    }

    async goto() {
        await this.page.goto('/');
    }

    getArtcleCard(articlesSource: 'popular' | 'latest' = 'popular', index: number = 0): ArticleVerticalCard {
        if (articlesSource === 'popular') {
            const articleCard = this.popularArticlesList.nth(index);
            return articleCard;
        } else {
            const articleCard = this.latestArticlesList.nth(index);
            return articleCard;
        }
    }

    async getArticleIDFromCard(articleCard: ArticleVerticalCard): Promise<string> {
        const id = await articleCard.getAttribute('data-article-id');
        if (!id) {
            throw new Error('記事のIDが取得できませんでした');
        }
        return id;
    }

    /**
     * 記事をブックマークする
     * 
     */
    async bookmarkArticle(articleCard: ArticleVerticalCard) {
        const bookmarkButton = articleCard.getByTestId('bookmark-button');
        await bookmarkButton.click();
    }

    /**
     * ブックマークを外す
     * 
     * 返り値にブックマークした記事のLocatorを返す
     */

    async unbookmarkArticle(articleCard: ArticleVerticalCard) {
        const bookmarkedButton = articleCard.getByTestId('bookmarked-button');
        await bookmarkedButton.click();
    }



}