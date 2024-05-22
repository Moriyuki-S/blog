import { render, screen } from '@testing-library/svelte';
import { Footer } from 'flowbite-svelte';
import { describe, expect, it } from 'vitest';

describe('FooterのUIテスト', () => {
	it('Footerが表示される', () => {
		render(Footer);
		const footer = screen.queryByRole('contentinfo');
		expect(footer).toBeInTheDocument();
	});
});
