import { describe, expect, it } from 'vitest';
import { calculateTimeDifference, formatTimetoJapanese } from './time-format';
import dayjs from 'dayjs';

describe('時間の差分計算が出来ているかのテスト', () => {
	describe('現在時刻との差分を表示する', () => {
		it('1分前と表示する', () => {
			// 1分前を取得
			const oneMinuteAgo = dayjs().subtract(1, 'minute').toDate();
			const result = calculateTimeDifference(oneMinuteAgo);
			expect(result).toBe('1分前');
		});

		it('3時間前と表示する', () => {
			// 3時間前を取得
			const threeHoursAgo = dayjs().subtract(3, 'hour').toDate();
			const result = calculateTimeDifference(threeHoursAgo);
			expect(result).toBe('3時間前');
		});

		it('1日前と表示する', () => {
			// 1日前を取得
			const yesterday = dayjs().subtract(1, 'day').toDate();
			const result = calculateTimeDifference(yesterday);
			expect(result).toBe('1日前');
		});

		it('1年前と表示する', () => {
			// 1年前を取得
			const lastYear = dayjs().subtract(1, 'year').toDate();
			const result = calculateTimeDifference(lastYear);
			expect(result).toBe('1年前');
		});
	});
});

describe('時間の日本語フォーマットができているかのテスト', () => {
	it('YYYY年MM月DD日のフォーマットに変更される', () => {
		const date = new Date('2021-01-01T00:00:00');
		const result = formatTimetoJapanese(date);
		expect(result).toBe('2021年01月01日');
	});
});
