import type { Locator, Page } from '@playwright/test';

export class ContactPage {
	readonly page: Page;
	private readonly nameInput: Locator;
	private readonly emailInput: Locator;
	private readonly contentsInput: Locator;
	private readonly submitButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.nameInput = page.getByRole('textbox', { name: 'お名前' });
		this.emailInput = page.getByRole('textbox', { name: 'メールアドレス' });
		this.contentsInput = page.getByRole('textbox', { name: 'お問い合わせ内容' });
		this.submitButton = page.getByRole('button', { name: '送信する' });
	}

	async goto() {
		await this.page.goto('/contact');
	}

	async submitForm(name: string, email: string, contents: string) {
		await this.nameInput.fill(name);
		await this.emailInput.fill(email);
		await this.contentsInput.fill(contents);

		await this.submitButton.click();
	}
}
