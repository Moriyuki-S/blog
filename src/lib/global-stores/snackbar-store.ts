import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export type SnackbarType = {
	id: string;
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
	timeout: number;
};

export const SnackbarStore = writable<SnackbarType[]>([]);

export const SnackbarUtils = {
	update: (message: string, timeout: number = 3000, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
		const newSnackber: SnackbarType = {
			id: uuidv4(),
			type,
			message,
			timeout
		};
		SnackbarStore.update(snackbar => [...snackbar, newSnackber]);
	}
};
