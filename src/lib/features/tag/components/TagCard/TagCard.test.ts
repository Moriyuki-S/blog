import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TagCard from './TagCard.svelte';
import type { Tag } from '../../types/type';

describe('TagCardのUIテスト', () => {
	const SAMPLE_TAG: Tag = {
		id: '1',
		slug: 'sample-tag',
		name: 'Sample Tag',
		iconUrl: 'https://placehold.jp/30x30.png',
		color: '#000000'
	};

	it('カードにタグのリンクがついている', () => {
		render(TagCard, { tag: SAMPLE_TAG });

		const tagLink = screen.getByRole('link');
		expect(tagLink).toBeInTheDocument(); // リンクが表示されている
		expect(tagLink).toHaveAttribute('href', `/tags/${SAMPLE_TAG.slug}`);
	});

	it('タグ名とタグの画像が表示されている', () => {
		render(TagCard, { tag: SAMPLE_TAG });

		const tagName = screen.getByText(SAMPLE_TAG.name);
		// タグ名が表示されている
		expect(tagName).toBeInTheDocument();

		const tagIcon = screen.getByAltText(`${SAMPLE_TAG.name}のアイコン`);
		// タグのアイコンが表示されている
		expect(tagIcon).toBeInTheDocument();
		// タグのアイコンのURLが正しい
		expect(tagIcon).toHaveAttribute('src', SAMPLE_TAG.iconUrl);
	});
});
