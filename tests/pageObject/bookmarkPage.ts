import type { Locator, Page } from '@playwright/test';

export class BookmarkPage {
	readonly page: Page;
	private readonly _resetBookmarkButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this._resetBookmarkButton = page.getByRole('button', { name: '解除する' });
	}

	async goto() {
		await this.page.goto('/articles/bookmark');
	}

	async resetBookmark() {
		await this._resetBookmarkButton.click();
	}
}
