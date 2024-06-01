import { test, expect } from '@playwright/test';

test.describe('ホーム画面の表示に関するテスト', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:4173/');
	});

	test('「人気記事」、「新着記事」、「ブックマーク」の3つのボタンが表示され、最初は「人気記事」のボタンがアクティブになっている', async ({
		page
	}) => {
		const popularArticleButton = page
			.getByRole('button')
			.filter({ has: page.getByText('人気記事') });
		const latestArticleButton = page.getByRole('button', { name: '新着記事 ' });
		const bookmarkButton = page.getByRole('button', { name: 'ブックマーク' });
		expect(popularArticleButton).toBeTruthy();
		expect(latestArticleButton).toBeTruthy();
		expect(bookmarkButton).toBeTruthy();
	});
});
