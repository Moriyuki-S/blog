import test, { expect } from '@playwright/test';
import { SearchPage } from './pageObject/searchPage';
import type { Tag } from '$lib/features/tag/types/type';
import { TaggedArticlesPage } from './pageObject/taggedArticlesPage';

test.describe('記事検索機能のテスト', () => {
	test('キーワードで記事の検索ができる', async ({ page }) => {
		// 検索ページでキーワードを入力する
		const searchPage = new SearchPage(page);
		await searchPage.goto();
		await searchPage.searchByKeyword('プログラミング');

		// クエリパラメータが付与され、検索した記事が表示される
		await expect(page).toHaveURL('/search?q=プログラミング');
	});

	test('キーワードが空文字だと検索できない', async ({ page }, testInfo) => {
		// 検索ページで空文字のまま検索ボタンを押そうとする
		const searchPage = new SearchPage(page);
		await searchPage.goto();
		const currentUrl = page.url();
		expect(searchPage.searchInput).toHaveAttribute('required');
		await searchPage.searchByKeyword('');

		// 空文字だとクエリパラメータが付与されない
		try {
			await page.waitForURL(currentUrl);
		} catch (err) {
			testInfo.fail(true, 'クエリパラメータが付与されました');
		}
	});
});
