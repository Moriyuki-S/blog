<script lang="ts">
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { Tooltip } from 'flowbite-svelte';

	export let data: PageData;
</script>

<main class="pt-16 md:px-4">
	<div class="flex justify-center items-center gap-x-5">
		<h1 class="text-3xl text-center">
			<span class="text-secondory-500 me-2">#</span>
			{data.currentTag.name}
		</h1>
		<a
			id="refresh-tag-button"
			href="/search"
			class=" w-fit h-fit p-2 rounded-full hover:bg-slate-200"
		>
			<RefreshOutline />
		</a>
		<Tooltip triggeredBy="#refresh-tag-button" placement="right">変更する</Tooltip>
	</div>
	<ul
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
		data-testid="tagged-articles"
	>
		{#await data.articles}
			{#each Array(8) as _}
				<li class="w-full flex justify-center">
					<ArticleVerticalCardSkeleton />
				</li>
			{/each}
		{:then articles}
			{#each articles as article}
				<li class="mx-auto">
					<ArticleVerticalCard {article} />
				</li>
			{/each}
		{/await}
	</ul>
</main>
