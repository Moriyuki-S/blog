import { describe, expect, it } from 'vitest';
import { ContentfulArticlesRepository } from './repository';

describe('記事取得処理のテスト', () => {
	it('IDを指定して記事を取得できる', async () => {
		const articleRepository = new ContentfulArticlesRepository();
		const article = await articleRepository.getArticleBySlug('test');
		expect(article).not.toBe(null);
	});
});
