import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export const convertRichTextToHtml = (richText: Document): string => {
    return documentToHtmlString(richText, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, file } = node.data.target.fields;
                return `<img src="${file.url}" width="450" alt="${title}" />`;
            },
            [BLOCKS.HEADING_2]: (node) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
			    // @ts-ignore
                const text = node.content[0].value;
                const id = text.toLowerCase().replace(/ /g, "-");
                return `<a href="#${id}"><h2 id="${id}">${text}</h2></a>`;
            },
            [BLOCKS.HEADING_3]: (node) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
			    // @ts-ignore
                const text = node.content[0].value;
                const id = text.toLowerCase().replace(/ /g, "-");
                return `<a href="#${id}"><h3 id="${id}">${text}</h3></a>`;
            }
        }
    });
}