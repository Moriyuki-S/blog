import { describe, expect, it } from "vitest";
import { calculateTimeDifference } from "./time-format";
import dayjs from "dayjs";

describe('時間のフォーマット処理が出来ているかのテスト', () => {
    
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