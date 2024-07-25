import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

type Snackbar = {
	id: string;
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
	timeout: number;
};

export const SnackbarStore = writable<Snackbar | null>(null);

SnackbarStore.subscribe((value) => {
	if (value) {
		setTimeout(() => {
			SnackbarStore.set(null);
		}, value.timeout);
	}
});

export const SnackbarUtils = {
	update: (message: string, timeout: number = 3000, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
		const newSnackber: Snackbar = {
			id: uuidv4(),
			type,
			message,
			timeout
		};
		SnackbarStore.set(newSnackber);
	}
};
