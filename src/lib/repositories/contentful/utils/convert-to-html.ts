import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export const convertRichTextToHtml = (richText: Document): string => {
    return documentToHtmlString(richText, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, file } = node.data.target.fields;
                return `<img src="${file.url}" width="400" alt="${title}" />`;
            }
        }
    });
}