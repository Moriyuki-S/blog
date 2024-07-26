import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Snackbar from './Snackbar.svelte';

describe('SnackbarのUIテスト', () => {
	it('画面右下に表示される', () => {
		render(Snackbar, { message: 'テストメッセージ' });
		const snackbar = screen.getByRole('alert');
		expect(snackbar).toBeInTheDocument();
	});

	it('メッセージが表示される', () => {
		render(Snackbar, { message: 'テストメッセージ' });
		const snackbar = screen.getByRole('alert');
		expect(snackbar).toHaveTextContent('テストメッセージ');
	});
});
