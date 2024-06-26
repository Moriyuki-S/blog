import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Snackbar from './Snackbar.svelte';

describe('SnackbarのUIテスト', () => {
	it('画面右下に表示される', () => {
		render(Snackbar, { message: 'テストメッセージ' });
		const snackbar = screen.getByRole('alert');
		expect(snackbar).toBeInTheDocument();
		expect(snackbar).toHaveClass('right-8', 'bottom-8');
	});

	it('メッセージが表示される', () => {
		render(Snackbar, { message: 'テストメッセージ' });
		const snackbar = screen.getByRole('alert');
		expect(snackbar).toHaveTextContent('テストメッセージ');
	});
});
