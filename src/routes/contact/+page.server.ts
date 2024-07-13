import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email');
			const name = formData.get('name');
			const contents = formData.get('contents');

			console.log(`email: ${email}`);
			console.log(`name: ${name}`);
			console.log(`contents: ${contents}`);

			redirect(301, '/');
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
