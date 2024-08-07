<script lang="ts">
	import type { Article, ArticleId, Criteria } from '../../types/type';
	import ArticleVerticalCard from '../ArticleVerticalCard/ArticleVerticalCard.svelte';
	import SortUtils from '../../utils/sort';
	import type { Tag } from '$lib/features/tag/types/type';
	import { flip } from 'svelte/animate';

	export let articles: Article[];
	export let sortCriteria: Criteria | null;
	export let sortTag: Tag | null = null;
	export let ulStyleClass: string = '';
	export let liStyleClass: string = '';
	export let functionOnBookmark: ( (articleId: ArticleId) => void )| undefined = undefined;
	export let functionOnRemoveBookmark: ( (articleId: ArticleId) => void ) | undefined = undefined;

	let sortedArticles: Article[] = articles;

	$: {
		if (sortCriteria?.value === 'latest') {
			sortedArticles = SortUtils.sortByDate(articles, 'latest');
		} else if (sortCriteria?.value === 'oldest') {
			sortedArticles = SortUtils.sortByDate(articles, 'oldest');
		} else {
			// 人気順はいったん後まわし
			sortedArticles = articles;
		}
	}

	$: {
		if (sortTag) {
			sortedArticles = SortUtils.sortArticlesByTag(articles, sortTag);
		}
	}
</script>

<ul class={`grid grid-cols-1 gap-5 sm:grid-cols-3 ${ulStyleClass}`}>
	{#each sortedArticles as article (article.id)}
		<li animate:flip class={`w-fit ${liStyleClass}`} data-articleID={article.id}>
			<ArticleVerticalCard {article} {functionOnBookmark} {functionOnRemoveBookmark} />
		</li>
	{/each}
</ul>
