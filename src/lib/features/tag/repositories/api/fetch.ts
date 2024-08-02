import type { Tag } from '../../types/type';

export interface ITagsRepository {
	fetchTags: () => Promise<Tag[]>;
	fetchTagBySlug: (slug: string) => Promise<Tag>;
}
