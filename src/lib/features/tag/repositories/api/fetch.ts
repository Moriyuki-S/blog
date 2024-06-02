import type { Tag } from '../../types/type';

type TagAPIsType = {
	fetchTag: (slug: string) => Promise<Tag>;
	fetchTags: () => Promise<Tag[]>;
};

const SAMPLE_TAG: Tag = {
	id: '1',
	name: 'Sample Tag',
	slug: 'sample-tag',
	iconUrl: 'https://placehold.jp/30x30.png',
	color: 'red'
};

const fetchTag: TagAPIsType['fetchTag'] = async (slug: string) => {
	console.debug('fetchTag', slug);
	return SAMPLE_TAG;
};

const fetchTags: TagAPIsType['fetchTags'] = async () => {
	return [SAMPLE_TAG];
}

export const TagAPIs: TagAPIsType = {
	fetchTag,
	fetchTags,
};
