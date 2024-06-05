import type { Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('searchbox');
        this.submitButton = page.getByRole('button', { name: '検索する'});
    }

    async goto() {
        await this.page.goto('/search');
    }

    async searchByKeyword(query: string) {
        await this.searchInput.fill(query);
        await this.submitButton.click();
    }
}