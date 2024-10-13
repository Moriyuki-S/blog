<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import ArticleDetail from '$lib/features/article/components/ArticleDetail/ArticleDetail.svelte';
	import { Modal, SpeedDial, SpeedDialButton, TabItem, Tabs } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { ArrowUpOutline, BookOutline, ListOutline } from 'flowbite-svelte-icons';
	import ArticleContents from '$lib/features/article/components/ArticleContents/ArticleContents.svelte';
	import ColumnList from '$lib/components/layouts/List/ColumnList/ColumnList.svelte';
	import ArticleHorizontalCardSkeleton from '$lib/features/article/components/ArticleHorizontalCard/Skeleton/ArticleHorizontalCardSkeleton.svelte';
	import ArticleHorizontalCard from '$lib/features/article/components/ArticleHorizontalCard/ArticleHorizontalCard.svelte';
	import { blur, fade } from 'svelte/transition';
	import NotFoundAlert from '$lib/components/ui/Alert/NotFoundAlert/NotFoundAlert.svelte';

	export let data: PageData;
	$: article = data.article;

	let speedDialOpen: boolean = false;
	let tocModalOpen: boolean = false;
	let relatedArticlesModalOpen: boolean = false;

	const openTocModal = () => {
		tocModalOpen = true;
	};

	const openRelatedArticlesModal = () => {
		relatedArticlesModalOpen = true;
	};

	const closeRelatedArticlesModal = () => {
		relatedArticlesModalOpen = false;
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		speedDialOpen = false;
	};
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta name="description" content={article.body} />
</svelte:head>

<div class="pt-10 px-2 md:px-5 pb-10 md:flex md:justify-center md:items-start md:gap-x-10">
	<main class="w-full md:w-fit md:min-w-96">
		<ArticleDetail {article} />
	</main>
	<RightSidebar styleClass="md:w-72 md:*:w-72 lg:w-96 lg:*:w-96 md:sticky md:top-20 lg:top-28">
		<Tabs tabStyle="underline">
			<TabItem open>
				<div slot="title" class="flex">
					<ListOutline class="me-2" />
					<span>目次</span>
				</div>
				<div class="">
					<ArticleContents />
				</div>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex">
					<BookOutline class="me-2" />
					<span>関連記事</span>
				</div>
				<div transition:blur>
					<ColumnList>
						{#await data.relatedArticles}
							{#each Array(3) as _}
								<li>
									<ArticleHorizontalCardSkeleton />
								</li>
							{/each}
						{:then relatedArticles}
							{#if relatedArticles.length === 0}
								<NotFoundAlert notFoundMessage="関連する記事がありません" />
							{:else}
								{#each relatedArticles as relatedArticle}
									<li>
										<ArticleHorizontalCard article={relatedArticle} />
									</li>
								{/each}
							{/if}
						{/await}
					</ColumnList>
				</div>
			</TabItem>
		</Tabs>
	</RightSidebar>
</div>

{#if speedDialOpen}
	<div
		in:fade
		out:fade
		class={`w-full h-full md:hidden bg-gray-900 bg-opacity-50 fixed top-0 left-0 z-10`}
	></div>
{/if}

<SpeedDial
	color="cyanToBlue"
	gradient
	bind:open={speedDialOpen}
	defaultClass="md:hidden fixed end-6 bottom-20 z-30"
	tooltip="none"
	textOutside
>
	<SpeedDialButton
		name="関連記事"
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
		on:click={openRelatedArticlesModal}
	>
		<BookOutline />
	</SpeedDialButton>
	<SpeedDialButton
		name="目次"
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
		on:click={openTocModal}
	>
		<ListOutline />
	</SpeedDialButton>
	<SpeedDialButton
		name="先頭へ"
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
		on:click={scrollToTop}
	>
		<ArrowUpOutline />
	</SpeedDialButton>
</SpeedDial>

<Modal bind:open={tocModalOpen} class="md:hidden" outsideclose autoclose>
	<div slot="header">
		<h5 class="text-xl font-bold pl-5">目次</h5>
	</div>
	<button
		type="button"
		class="mx-auto block"
		on:click={() => (tocModalOpen = false)}
		on:keydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				tocModalOpen = false;
			}
		}}
	>
		<ArticleContents />
	</button>
</Modal>

<Modal
	title="関連記事"
	bind:open={relatedArticlesModalOpen}
	class="md:hidden"
	autoclose
	outsideclose
>
	<div>
		<ColumnList>
			{#await data.relatedArticles}
				{#each Array(3) as _}
					<li>
						<ArticleHorizontalCardSkeleton />
					</li>
				{/each}
			{:then relatedArticles}
				{#if relatedArticles.length === 0}
					<NotFoundAlert notFoundMessage="関連する記事がありません" />
				{:else}
					{#each relatedArticles as relatedArticle}
						<li>
							<ArticleHorizontalCard onClick={closeRelatedArticlesModal} article={relatedArticle} />
						</li>
					{/each}
				{/if}
			{/await}
		</ColumnList>
	</div>
</Modal>

<style>
	:global(:where(h1, h2, h3, h4)) {
		scroll-margin-top: 98px;
	}

	@media (max-widt: 768px) {
		:global(:where(h1, h2, h3, h4)) {
			scroll-margin-top: 64px;
		}
	}
</style>
