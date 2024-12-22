<script lang="ts">
	import { Button, Search, Spinner, TabItem, Tabs } from 'flowbite-svelte';
	import { SearchOutline, TagOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import TagCard from '$lib/features/tag/components/TagCard/TagCard.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import NotFoundAlert from '$lib/components/ui/Alert/NotFoundAlert/NotFoundAlert.svelte';
	import FadeInAnimationWrapper from '$lib/components/layouts/FadeAnimation/FadeInAnimationWrapper.svelte';

	export let data: PageData;
	let query: string = data.searchQuery ?? '';
	let tagSearchQuery: string = '';

	const allTags = [...data.tags];
	let filteredTags = allTags;
	const areArticlesPresent: boolean = Boolean(data.articles);
	$: inputEmpty = query === '';
	$: {
		if (tagSearchQuery) {
			filteredTags = allTags.filter((tag) =>
				tag.name.toLowerCase().includes(tagSearchQuery.toLowerCase())
			);
		} else if (tagSearchQuery === '') {
			filteredTags = allTags;
		}
	}
</script>

<svelte:head>
	<title>検索</title>
	<meta name="description" content="記事を検索するページです。" />
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="pt-10 md:px-5 2xl:max-w-[80rem] 2xl:mx-auto">
	<form
		action="/search"
		method="GET"
		role="search"
		class="w-full flex flex-col md:flex-row px-5 md:p-0 gap-y-4 md:gap-x-5 justify-center max-w-[60rem] lg:mx-auto"
	>
		<div class="w-full md:w-2/3 relative">
			<input
				type="search"
				required
				name="q"
				bind:value={query}
				class="w-full h-10 md:h-14 pl-14 rounded-lg focus:border-sky-300 dark:bg-gray-800"
				placeholder="検索したいキーワードを入力してください"
				data-testid="search-articles-input"
			/>
			<span class="absolute top-1/2 left-5 -translate-y-1/2"><SearchOutline /></span>
		</div>
		<Button
			id="submit-button"
			class="w-2/3 min-w-32 md:w-auto mx-auto"
			type="submit"
			disabled={inputEmpty}
		>
			{#await data.articles}
				<Spinner size="6" class="me-2" />
				検索中...
			{:then _}
				検索する
			{/await}
		</Button>
	</form>
	<section class="w-full mx-auto px-3 pt-5 md:pt-10">
		<Tabs tabStyle="underline">
			<TabItem
				open={!areArticlesPresent}
				activeClasses="inline-block text-sm font-medium text-center disabled:cursor-not-allowed p-4 text-secondory-600 border-b-2 border-secondory-600 dark:text-secondory-500 dark:border-secondory-500 active"
			>
				<div slot="title" class="w-24 flex gap-2">
					<TagOutline />
					<span>タグ一覧</span>
				</div>
				<div>
					<div class="mb-10">
						<Search
							bind:value={tagSearchQuery}
							class="focus:border-secondory-500 focus:ring-secondory-500 dark:border-secondory-500 dark:ring-secondory-500 dark:focus:ring-secondory-500"
							placeholder="キーワードでタグを絞り込む"
						/>
					</div>
					<ul
						id="tag-list"
						class="pb-20 md:pb-10 grid grid-cols-2 justify-items-center sm:grid-cols-4 md:grid-cols-5 gap-3"
					>
						{#each filteredTags as tag}
							<li class="w-fit">
								<TagCard {tag} />
							</li>
						{/each}
					</ul>
				</div>
			</TabItem>
			{#if data.articles}
				<TabItem open>
					<div slot="title" class="w-24 flex gap-2">
						<SearchOutline />
						<span>検索結果</span>
					</div>
					{#await data.articles}
						<GridList>
							<li>
								<ArticleVerticalCardSkeleton />
							</li>
						</GridList>
					{:then articles}
						{#if articles.length === 0}
							<FadeInAnimationWrapper>
								<div
									class="w-full h-32 flex justify-center items-center sm:w-4/5 mx-auto md:max-w-96"
								>
									<NotFoundAlert notFoundMessage="記事が見つかりませんでした" />
								</div>
							</FadeInAnimationWrapper>
						{:else}
							<FadeInAnimationWrapper>
								<ArticleGallery {articles} sortCriteria={null} />
							</FadeInAnimationWrapper>
						{/if}
					{/await}
				</TabItem>
			{/if}
		</Tabs>
	</section>
</main>
