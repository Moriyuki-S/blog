import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const convertRichTextToHtml = (richText: Document): string => {
	return documentToHtmlString(richText, {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				try {
					const { title, file } = node.data.target.fields;
					return `<img src="${file.url}" width="450" alt="${title}" />`;
				} catch (error) {
					console.error(error);
					return `
					    <div class="inline bg-red-100 text-red-700 border border-red-400 rounded p-4 text-center font-bold>画像を取得できませんでした</div>
					`;
				}
			},
			[BLOCKS.HEADING_2]: (node) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const text = node.content[0].value;
				const id = text.toLowerCase().replace(/ /g, '-');
				return `<a href="#${id}"><h2 id="${id}">${text}</h2></a>`;
			},
			[BLOCKS.HEADING_3]: (node) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const text = node.content[0].value;
				const id = text.toLowerCase().replace(/ /g, '-');
				return `<a href="#${id}"><h3 id="${id}">${text}</h3></a>`;
			},
			[BLOCKS.HEADING_4]: (node) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const text = node.content[0].value;
				const id = text.toLowerCase().replace(/ /g, '-');
				return `<a href="#${id}"><h3 id="${id}">${text}</h3></a>`;
			},
			[BLOCKS.QUOTE]: (node) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const text = node.content[0].content[0].value;
				return `<blockquote>${text}</blockquote>`;
			},
			[INLINES.HYPERLINK]: (node) => {
				const { uri } = node.data;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const text = node.content[0].value;
				return `<a href="${uri}" class="hyperlink" target="_blank" rel="noopener noreferrer">
				${text}<svg class="inline-block w-4 h-4 -translate-y-[1.8px] text-primary-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
				</a>`;
			},
			[INLINES.EMBEDDED_ENTRY]: (node) => {
				try {
					const { title, slug } = node.data.target.fields;
					return `<a href="/articles/${slug}" class="hyperlink" target="_blank" rel="noopener noreferrer">
				${title}<svg class="inline-block w-4 h-4 -translate-y-[1.8px] text-primary-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
				</a>`;
				} catch (error) {
					console.error(error);
					return `
					    <div class="inline bg-red-100 text-red-700 border border-red-400 rounded p-4 text-center font-bold>記事を取得できませんでした</div>
					`;
				}
			},
			[BLOCKS.EMBEDDED_ENTRY]: (node) => {
				try {
					const { title, slug, thumbnail } = node.data.target.fields;
					const thumbnailUrl = thumbnail.fields.file.url;
					return `<a href="/articles/${slug}" target="_blank" class="article-link flex items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img class="thumbnail !w-48 rounded-t-lg !max-h-32 md:h-auto md:rounded-none md:rounded-s-lg" src="${thumbnailUrl}" alt="${title}">
				<div class="flex flex-col justify-between px-4 leading-normal">
					<h5 class="mb-2 text-base md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
				</div>
			</a>`;
				} catch (error) {
					console.error(error);
					return `
					    <div class="w-full h-10 flex items-center bg-red-100 text-red-700 border border-red-400 rounded p-4 text-center font-bold>
						    記事を取得できませんでした
						</div>
					`;
				}
			}
		}
	});
};
