<script lang="ts">
	import type { Article } from '../../types/type';
	import ArticleVerticalCard from '../ArticleVerticalCard/ArticleVerticalCard.svelte';
	import SortUtils from '../../utils/sort';

	export let articles: Article[];
	export let sortCriteria: 'latest' | 'popular' | 'oldest' | null;

	let sortedArticles: Article[] = articles;
	let sorting: boolean = false;

	$: {
		sorting = true;
		if (sortCriteria === 'latest') {
			sortedArticles = SortUtils.sortByDate(articles, 'latest');
		} else if (sortCriteria === 'oldest') {
			sortedArticles = SortUtils.sortByDate(articles, 'oldest');
		} else {
			// 人気順はいったん後まわし
			sortedArticles = articles;
		}
		sorting = false;
	}
</script>

<ul class="grid grid-cols-1 gap-5 sm:grid-cols-2">
	{#each sortedArticles as article}
		<li class="w-fit">
			<ArticleVerticalCard {article} />
		</li>
	{/each}
</ul>
