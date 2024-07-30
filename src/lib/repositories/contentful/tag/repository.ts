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
}
