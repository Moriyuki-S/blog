import { describe, expect, it } from "vitest";
import { ContentfulTagsRepository } from "./repository";

describe('Contentfulからタグを取得するテスト', () => {
    it.skip('タグが取得できる', async () => {
        const tagsRepository = new ContentfulTagsRepository();
        const tags = await tagsRepository.fetchTags();
        expect(tags).not.toBe([]);
    });
});