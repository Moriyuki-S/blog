import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = async ({ status, message }) => {
	if (status === 404) {
		return {
			status,
			source: 'client',
			code: '404',
			message: 'ページが見つかりませんでした'
		};
	}

	if (status === 503) {
		return {
			status,
			source: 'client',
			code: '503',
			message: '現在メンテナンス中です'
		};
	}

	return {
		status,
		source: 'client',
		code: '500',
		message
	};
};
