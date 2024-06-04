import type { Locator, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('searchbox');
        this.submitButton = page.getByRole('button', { name: '検索する'});
        this.errorMessage = page.getByRole('alert');
    }

    async goto() {
        await this.page.goto('/search');
    }

    async searchByKeyword(query: string) {
        await this.searchInput.fill(query);
        await this.submitButton.click();
    }

    isErrorMessageVisible() {
        return this.errorMessage.isVisible();
    }

}