<script lang="ts">
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import type { PageData } from './$types';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import PageTitleWrapper from '$lib/components/layouts/PageTitle/Wrapper/PageTitleWrapper.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle/PageTitle.svelte';
	import BreadcrumbWrapper from '$lib/components/layouts/Breadcrumb/BreadcrumbWrapper.svelte';
	import FadeOutAnimationWrapper from '$lib/components/layouts/FadeAnimation/FadeOutAnimationWrapper.svelte';
	import FadeInAnimationWrapper from '$lib/components/layouts/FadeAnimation/FadeInAnimationWrapper.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{`${data.currentTag.name}の記事一覧`}</title>
	<meta name="description" content={`${data.currentTag.name}の記事一覧`} />
</svelte:head>

<main class="py-16 md:px-4">
	<BreadcrumbWrapper>
		<Breadcrumb>
			<BreadcrumbItem href="/" home>ホーム</BreadcrumbItem>
			<BreadcrumbItem href="/search">検索</BreadcrumbItem>
		</Breadcrumb>
	</BreadcrumbWrapper>

	<PageTitleWrapper center>
		<PageTitle>
			<span class="text-secondory-500 me-4">#</span>
			{data.currentTag.name}
			<span class="ms-8 text-xl md:text-2xl font-medium whitespace-nowrap">を含む記事</span>
		</PageTitle>
	</PageTitleWrapper>

	<div class="mt-5 md:mt-10">
		{#await data.articles}
			<FadeOutAnimationWrapper>
				<GridList>
					{#each Array(8) as _}
						<li class="w-full">
							<ArticleVerticalCardSkeleton />
						</li>
					{/each}
				</GridList>
			</FadeOutAnimationWrapper>
		{:then articles}
			<FadeInAnimationWrapper>
				<ArticleGallery ulStyleClass="justify-items-center" {articles} sortCriteria={null} />
			</FadeInAnimationWrapper>
		{/await}
	</div>
</main>
