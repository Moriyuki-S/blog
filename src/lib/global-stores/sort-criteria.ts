import { get, writable } from "svelte/store";

export interface SortCriteria {
    label: string;
    value: 'latest' | 'oldest' | 'popular';
    active: boolean;
};

const ALL_SORT_CRITERIA: SortCriteria[] = [
    {
        label: '新着順',
        value: 'latest',
        active: true,
    },
    {
        label: '古い順',
        value: 'oldest',
        active: false,
    },
    {
        label: '人気順',
        value: 'popular',
        active: false,
    }
];

const store = writable<SortCriteria[]>(ALL_SORT_CRITERIA);

const getAllCriteria = () => {
    return get(store);
};

const setCriteria = (criteria: SortCriteria) => {
    store.update((criteriaList) => {
        return criteriaList.map((c) => {
            return {
                ...c,
                active: c.value === criteria.value
            }
        });
    });
};

const resetCriteria = () => {
     store.set(ALL_SORT_CRITERIA);
};

export const SortCriteriaUtils = {
    getAllCriteria,
    setCriteria,
    resetCriteria
};