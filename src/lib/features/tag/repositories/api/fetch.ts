import type { Tag } from '../../types/type';

type TagAPIsType = {
	fetchTag: (slug: string) => Promise<Tag>;
};

const SAMPLE_TAG: Tag = {
	id: '1',
	name: 'Sample Tag',
	slug: 'sample-tag',
	iconUrl: 'https://placehold.jp/30x30.png',
	color: 'red'
};

const fetchTag: TagAPIsType['fetchTag'] = (slug: string) => {
	console.debug('fetchTag', slug);
	return Promise.resolve(SAMPLE_TAG);
};

export const TagAPIs: TagAPIsType = {
	fetchTag
};
