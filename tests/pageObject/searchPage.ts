import type { Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly submitButton: Locator;
    readonly tagList: Locator;
    readonly articleList: Locator | null;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('searchbox');
        this.submitButton = page.getByRole('button', { name: '検索する'});
        this.tagList = page.locator('#tag-list');
        this.articleList = page.locator('#article-list');
    }

    async goto() {
        await this.page.goto('/search');
    }

    async searchByKeyword(query: string) {
        await this.searchInput.fill(query);
        await this.submitButton.click();
    }

    async clickTag(tagName: string) {
        const tagLinkItem = this.tagList.getByText(tagName);
        await tagLinkItem.click();
    }

    async clickArticle(articleTitle: string) {
        const articleLinkItem = this.articleList?.getByText(articleTitle);
        await articleLinkItem?.click();
    }
}