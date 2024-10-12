<script lang="ts">
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import { RefreshOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { Tooltip } from 'flowbite-svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{`${data.currentTag.name}の記事一覧`}</title>
	<meta name="description" content={`${data.currentTag.name}の記事一覧`} />
</svelte:head>

<main class="py-16 md:px-4">
	<div class="ml-5 mb-2 md:ml-8">
		<Breadcrumb>
		    <BreadcrumbItem href="/" home>ホーム</BreadcrumbItem>
			<BreadcrumbItem href="/search">検索</BreadcrumbItem>
		</Breadcrumb>
	</div>

	<div class="w-full h-24 flex justify-center items-center gap-x-5 px-2 md:h-48">
		<h1 class="text-4xl md:text-6xl text-center font-bold md:pl-5">
			<span class="text-secondory-500 me-4">#</span>
			{data.currentTag.name}
			<span class="ms-8 text-xl md:text-2xl font-medium whitespace-nowrap">を含む記事</span>
		</h1>
	</div>

	<div class="mt-5 md:mt-10">
		{#await data.articles}
			<GridList>
				{#each Array(8) as _}
					<li class="w-full">
						<ArticleVerticalCardSkeleton />
					</li>
				{/each}
			</GridList>
		{:then articles}
			<ArticleGallery ulStyleClass="justify-items-center" {articles} sortCriteria={null} />
		{/await}
	</div>
</main>
