import type { HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = async ({ status }) => {
	if (status === 404) {
		return {
			code: '404',
			source: 'server',
			message: 'ページが見つかりませんでした'
		};
	}

	if (status === 503) {
		return {
			code: '503',
			source: 'server',
			message: '現在メンテナンス中です'
		};
	}

	return {
		code: '500',
		source: 'server',
		message: 'サーバーエラーが発生しました'
	};
};
