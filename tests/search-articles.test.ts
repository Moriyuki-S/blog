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

	test('タグをクリックするとそのタグの付いた記事一覧のページに遷移する', async ({ page }) => {
		const tag: Tag = {
			id: '1',
			slug: 'sample-tag',
			name: 'Sample Tag',
			iconUrl: '',
			color: '#000000'
		};

		// タグをクリックしてそのタグの付いた記事一覧のページに遷移する
		const searchPage = new SearchPage(page);
		await searchPage.goto();
		await searchPage.clickTag(tag.name);

		// /tags/:tagId に遷移している
		await expect(page).toHaveURL(`/tags/${tag.slug}`);

		// 遷移後
		const taggedArticlesPage = new TaggedArticlesPage(page, tag);

		// タグ名が表示されている
		await expect(taggedArticlesPage.tagText).toHaveText(`タグ : ${tag.name}`);

		// タグの付いた記事が表示されている
		await expect(taggedArticlesPage.articlesList).toBeVisible();

		// 記事をクリックすると記事詳細ページに遷移する
		await taggedArticlesPage.clickArticle('Test Article 1');

		await expect(page).toHaveURL('/articles/test-article-1');
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
