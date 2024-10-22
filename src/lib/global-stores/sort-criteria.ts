import { writable } from 'svelte/store';

export interface SortCriteria {
	label: string;
	value: 'latest' | 'oldest';
	active: boolean;
}

const ALL_SORT_CRITERIA: SortCriteria[] = [
	{
		label: '新着順',
		value: 'latest',
		active: true
	},
	{
		label: '古い順',
		value: 'oldest',
		active: false
	}
];

export const SortCriteriaStore = writable<SortCriteria[]>(ALL_SORT_CRITERIA);

const setCriteria = (criteria: SortCriteria) => {
	SortCriteriaStore.update((store) => {
		store.map((item) => {
			item.active = item.value === criteria.value;
			return item;
		});
		return store;
	});
};

const resetCriteria = () => {
	SortCriteriaStore.update((store) => {
		store.map((item) => {
			item.active = item.value === 'latest';
			return item;
		});
		return store;
	});
};

export const SortCriteriaUtils = {
	setCriteria,
	resetCriteria
};
