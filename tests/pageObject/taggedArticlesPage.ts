import type { Tag } from '$lib/features/tag/types/type';
import type { Locator, Page } from '@playwright/test';

export class TaggedArticlesPage {
	readonly page: Page;
	readonly tag: Tag;
	readonly tagText: Locator;
	readonly articlesList: Locator;

	constructor(page: Page, tag: Tag) {
		this.page = page;
		this.tag = tag;
		this.tagText = page.getByRole('heading', { name: tag.name });
		this.articlesList = page.getByRole('listbox');
	}

	async goto() {
		await this.page.goto(`/tags/${this.tag.id}`);
	}

	async clickArticle(articleTitle: string) {
		const articleLinkItem = this.articlesList.getByText(articleTitle);
		await articleLinkItem.click();
	}
}
