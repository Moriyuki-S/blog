import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = async ({ status, message }) => {
    if (status === 404) {
        return {
            status,
            source: 'client',
            code: '404',
            message: 'ページが見つかりませんでした',
        };
    }

    return {
        status,
        source: 'client',
        code: '500',
        message,
    }
}