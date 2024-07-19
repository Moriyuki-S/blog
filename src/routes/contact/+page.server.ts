import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ContactSuccessStore } from '$lib/global-stores/contact-success-store';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const name = formData.get('name');
		const contents = formData.get('contents');

		console.log(`email: ${email}`);
		console.log(`name: ${name}`);
		console.log(`contents: ${contents}`);

		// 問い合わせが成功したことをストアに保存
		ContactSuccessStore.set(true);

		redirect(301, '/contact/thanks');
	}
} satisfies Actions;
