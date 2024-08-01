import type { ITagsRepository } from "../../repositories/api/fetch";
import type { Tag } from "../../types/type";

export class FetchTagsUseCase {
    private readonly tagsRepository: ITagsRepository;

    constructor(tagsRepository: ITagsRepository) {
        this.tagsRepository = tagsRepository;
    }

    async getTags(): Promise<Tag[]> {
        try {
            const tags = await this.tagsRepository.fetchTags();
            return tags
        } catch (error) {
            throw new Error('タグの取得に失敗しました');
        }
    }

    async getTagBySlug(slug: string): Promise<Tag> {
        try {
            const tag = await this.tagsRepository.fetchTagBySlug(slug);
            return tag;
        } catch (error) {
            throw new Error('タグの取得に失敗しました');
        }
    }
}