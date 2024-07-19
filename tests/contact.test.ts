import test, { expect } from "@playwright/test";
import { ContactPage } from "./pageObject/contactPage";

test.describe('問い合わせ機能のテスト', () => {
    test('問い合わせフォームが送信できる', async ({ page }) => {
        const contactPage = new ContactPage(page);
        await contactPage.goto();

        // フォームを送信
        await contactPage.submitForm('テスト', 'sample@example.com', 'フォームテスト');

        // 送信完了ページが表示されることを確認
        await expect(page).toHaveURL('/contact/thanks', { timeout: 6000 });
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
});