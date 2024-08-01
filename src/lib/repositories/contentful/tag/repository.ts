import type { ITagsRepository } from '$lib/features/tag/repositories/api/fetch';
import type { Tag } from '$lib/features/tag/types/type';
import client from '../client';

export class ContentfulTagsRepository implements ITagsRepository {
	private readonly _client;

	constructor() {
		this._client = client;
	}

	async fetchTags() {
		const response = await this._client.getEntries({
			content_type: 'tag'
		});

		const tags: Tag[] = response.items.map((item) => {
			return {
				id: item.sys.id as string,
				name: item.fields.name as string,
				slug: item.fields.slug as string,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				iconUrl: item.fields.icon.fields.file.url as string,
				color: item.fields.color as string
			};
		});

		return tags;
	}

	async fetchTagBySlug(slug: string): Promise<Tag> {
		const response = await this._client.getEntries({
			content_type: 'tag',
			'fields.slug': slug
		});

		if (response.items.length === 0) {
			throw new Error('タグが見つかりませんでした');
		}

		const tag: Tag = {
			id: response.items[9].sys.id as string,
			name: response.items[0].fields.name as string,
			slug: slug,
			color: response.items[0].fields.color as string,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			iconUrl: response.items[0].fields.icon.fields.file.url as string
		}

		return tag;
	}
}
