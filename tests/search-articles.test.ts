import test, { expect } from '@playwright/test';
import { SearchPage } from './pageObject/searchPage';

test.describe('記事検索機能のテスト', () => {
	test('キーワードで記事の検索ができる', async ({ page }) => {

        // 検索ページでキーワードを入力する
		const searchPage = new SearchPage(page);
		await searchPage.goto();
		await searchPage.searchByKeyword('プログラミング');

        // 検索結果ページに遷移し、検索結果が表示されていることを確認する
	});

    test('キーワードが空文字だとエラーが表示される', async ({ page }) => {

        // 検索ページで空文字のまま検索ボタンを押す
        const searchPage = new SearchPage(page);
        await searchPage.goto();
        await searchPage.searchByKeyword('');

        // /search/resultsにリダイレクトされない
        expect(page).toHaveURL('/search');

        // エラーメッセージが表示される
        expect(searchPage.isErrorMessageVisible()).toBeTruthy();

        // エラーメッセージの内容が正しいかを確認
        expect(searchPage.errorMessage).toHaveText('キーワードを入力してください');

        // キーワードを一文字でも入力するとエラーメッセージが消える
        await searchPage.searchInput.fill('a');
        expect(await (searchPage.isErrorMessageVisible())).toBeFalsy();

        // 空文字にすると再びエラーメッセージが表示される
        await searchPage.searchInput.fill('');
        expect(await (searchPage.isErrorMessageVisible())).toBeTruthy();

    });
});
