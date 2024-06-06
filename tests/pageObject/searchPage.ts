import type { Locator, Page } from '@playwright/test';

export class SearchPage {
	readonly page: Page;
	readonly searchInput: Locator;
	readonly submitButton: Locator;
	readonly tagsList: Locator;
	readonly articlesList: Locator | null;

	constructor(page: Page) {
		this.page = page;
		this.searchInput = page.getByRole('searchbox');
		this.submitButton = page.getByRole('button', { name: '検索する' });
		this.tagsList = page.locator('#tag-list');
		this.articlesList = page.locator('#article-list');
	}

	async goto() {
		await this.page.goto('/search');
	}

	async searchByKeyword(query: string) {
		await this.searchInput.fill(query);
		await this.submitButton.click();
	}

	async clickTag(tagName: string) {
		const tagLinkItem = this.tagsList.getByText(tagName);
		await tagLinkItem.click();
	}

	async clickArticle(articleTitle: string) {
		const articleLinkItem = this.articlesList?.getByText(articleTitle);
		await articleLinkItem?.click();
	}
}
