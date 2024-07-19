import { ContactSuccessStore } from '$lib/global-stores/contact-success-store';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const isContactSuccess = get(ContactSuccessStore);

	if (!isContactSuccess) {
		redirect(307, '/contact');
	}

	ContactSuccessStore.set(false);
};
