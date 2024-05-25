import { describe, expect, it } from "vitest";
import { extractHeadings } from "./parse-html";

describe('HTMLを解析する関数のテスト', () => {
    it('h2, h3タグのテキストを抽出できる', () => {
        const SAMPLE_HTML = '<h2>見出し1</h2><p>これは抽出されない</p><h3>見出し2</h3>';
        const result = extractHeadings(SAMPLE_HTML);
        expect(result).toEqual([
            {
                tagName: 'H2',
                text: '見出し1'
            },
            {
                tagName: 'H3',
                text: '見出し2'
            }
        ]);
    });
});