import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import UserProfileCard from './UserProfileCard.svelte';
import type { Administrator } from '../../types/type';

describe('ユーザープロフィールのUIテスト', () => {
	const ADMINISTRATOR: Administrator = {
		name: 'サンプルユーザー',
		biography: 'サンプルのユーザーです',
		iconUrl: ''
	};

	it('ユーザーの名前が表示される', () => {
		render(UserProfileCard, { user: ADMINISTRATOR });
		const name = screen.getByText(ADMINISTRATOR.name);
		expect(name).toBeInTheDocument();
	});

	it('ユーザーの自己紹介文が表示される', () => {
		render(UserProfileCard, { user: ADMINISTRATOR });
		const biography = screen.getByText(ADMINISTRATOR.biography);
		expect(biography).toBeInTheDocument();
	});

	it('「詳しく見るボタン」が表示される', () => {
		render(UserProfileCard, { user: ADMINISTRATOR });
		const button = screen.getByRole('button', { name: '詳しく見る' });
		expect(button).toBeInTheDocument();
	});
});
