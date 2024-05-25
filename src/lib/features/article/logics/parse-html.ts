import type { ArticleTableOfContents } from "../types/type";

export const extractHeadings = (html: string): ArticleTableOfContents[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = doc.querySelectorAll('h2, h3, h4');
    const tableOfContents = Array.from(headings).map(heading => {
        return {
            tagName: heading.tagName,
            text: heading.textContent ?? ''
        }
    });
    return tableOfContents;
};