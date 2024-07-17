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
});