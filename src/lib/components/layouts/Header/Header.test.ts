import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('ヘッダーのビジュアルテスト', () => {
	describe('ビューポートに無関係なテスト', () => {
		it('ヘッダータグが存在する', () => {
			render(Header);
			const header = screen.queryByRole('banner');
			expect(header).toBeInTheDocument();
		});

		it('ヘッダーのタイトルが存在する', () => {
			render(Header);
			const title = screen.queryByRole('heading');
			expect(title).toBeInTheDocument();
		});
	});
});

describe('ヘッダーのアクセシビリティテスト', () => {
	it('ナビゲーションに「desktop-navigation」というaria-labeledby属性がつけられている', () => {
		render(Header);
		const label = 'desktop-navigation';
		const nav = screen.getByRole('navigation');
		expect(nav).toHaveAttribute('aria-labelledby', label);
	});
});
