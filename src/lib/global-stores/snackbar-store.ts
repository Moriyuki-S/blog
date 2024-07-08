import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';

type Snackbar = {
    id: string;
    message: string;
    timeout: number;
}

export const SnackbarStore = writable<Snackbar | null>(null);

SnackbarStore.subscribe(value => {
    if (value) {
        setTimeout(() => {
            SnackbarStore.set(null);
        }, value.timeout);
    }
});

export const SnackbarUtils = {
    update: (message: string, timeout: number = 3000) => {
        const newSnackber: Snackbar = {
            id: uuidv4(),
            message,
            timeout
        };
        SnackbarStore.set(newSnackber);
    }
}

