<script lang="ts">
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { Tooltip } from 'flowbite-svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';

	export let data: PageData;
</script>

<main class="py-16 md:px-4">
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
	<div class="mt-10">
		{#await data.articles}
			<ul class="grid grid-cols-1 gap-5">
				{#each Array(8) as _}
					<li class="w-autor">
						<ArticleVerticalCardSkeleton />
					</li>
				{/each}
			</ul>
		{:then articles}
			<ArticleGallery ulStyleClass="justify-items-center" {articles} sortCriteria={null} />
		{/await}
	</div>
</main>
