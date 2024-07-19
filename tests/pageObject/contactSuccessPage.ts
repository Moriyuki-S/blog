import type { Page } from "@playwright/test";

export class ContactSuccessPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/contact/thanks');
    }
}