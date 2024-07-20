<script lang="ts">
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { Tooltip } from 'flowbite-svelte';

	export let data: PageData;
</script>

<main class="pt-16 px-4">
	<h1 class="text-3xl text-center">
		<span class="text-primary-500 me-2">#</span>
		{data.tag.name}
		<button id="refresh-tag-button" class="w-fit h-fit p-2 rounded-full hover:bg-slate-200">
			<RefreshOutline />
		</button>
		<Tooltip triggeredBy="#refresh-tag-button" placement="right">変更する</Tooltip>
	</h1>
	<ul class="grid grid-cols-3 gap-5 mt-10" data-testid="tagged-articles">
		{#await data.articles}
			{#each Array(8) as _}
				<ArticleVerticalCardSkeleton />
			{/each}
		{:then articles}
			{#each articles as article}
				<ArticleVerticalCard {article} />
			{/each}
		{/await}
	</ul>
</main>
