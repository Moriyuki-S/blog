<script lang="ts">
	import type { Article, ArticleId, Criteria } from '../../types/type';
	import ArticleVerticalCard from '../ArticleVerticalCard/ArticleVerticalCard.svelte';
	import SortUtils from '../../utils/sort';
	import { flip } from 'svelte/animate';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';

	export let articles: Article[];
	export let sortCriteria: Criteria | null;
	export let ulStyleClass: string = '';
	export let liStyleClass: string = '';
	export let functionOnBookmark: ((articleId: ArticleId) => void) | undefined = undefined;
	export let functionOnRemoveBookmark: ((articleId: ArticleId) => void) | undefined = undefined;

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
</script>

<GridList {ulStyleClass}>
	{#each sortedArticles as article (article.id)}
		<li animate:flip class={`w-fit max-w-full ${liStyleClass}`} data-articleID={article.id}>
			<ArticleVerticalCard {article} {functionOnBookmark} {functionOnRemoveBookmark} />
		</li>
	{/each}
</GridList>
