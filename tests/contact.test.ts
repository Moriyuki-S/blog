import test, { expect } from '@playwright/test';
import { ContactPage } from './pageObject/contactPage';
import { ContactSuccessPage } from './pageObject/contactSuccessPage';
import { get } from 'svelte/store';
import { ContactSuccessStore } from '$lib/global-stores/contact-success-store';

test.describe('問い合わせ機能のテスト', () => {
	test('問い合わせフォームが送信できる', async ({ page }) => {
		const contactPage = new ContactPage(page);
		await contactPage.goto();

		// フォームを送信
		await contactPage.submitForm('テスト', 'sample@example.com', 'フォームテスト');

		// 問い合わせ完了のストアがリセットされていることを確認
		const isContactSuccess = get(ContactSuccessStore);
		expect(isContactSuccess).toBe(false);
	});

	test('名前を入れないと送信できない', async ({ page }) => {
		const contactPage = new ContactPage(page);
		await contactPage.goto();

		await contactPage.submitForm('', 'sample@example.com', 'フォームテスト');

		// 送信完了ページが表示されない
		await expect(page).not.toHaveURL('/contact/thanks');
	});

	test('メールアドレスを入れないと送信できない', async ({ page }) => {
		const contactPage = new ContactPage(page);
		await contactPage.goto();

		await contactPage.submitForm('テスト', '', 'フォームテスト');

		// 送信完了ページが表示されない
		await expect(page).not.toHaveURL('/contact/thanks');
	});

	test('内容を入れないと送信できない', async ({ page }) => {
		const contactPage = new ContactPage(page);
		await contactPage.goto();

		await contactPage.submitForm('テスト', 'sample@example.com', '');

		// 送信完了ページが表示されない
		await expect(page).not.toHaveURL('/contact/thanks');
	});

	test('問い合わせせずに完了ページを開くと問い合わせページにリダイレクトされる', async ({
		page
	}) => {
		const contactSuccessPage = new ContactSuccessPage(page);

		await contactSuccessPage.goto();

		// 問い合わせページにリダイレクトされる
		await expect(page).toHaveURL('/contact');
	});
});
