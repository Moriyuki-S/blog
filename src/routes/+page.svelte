<script lang="ts">
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { ClockOutline, FireOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';

	export let data: PageData;
</script>

<div class="w-full pt-5 md:px-5 md:flex md:justify-between md:gap-x-6">
	<main class="w-full 2xl:max-w-[80rem] 2xl:mx-auto">
		<Tabs
			tabStyle="pill"
			contentClass="pt-5"
			defaultClass="hidden md:block md:flex md:gap-x-8 md:border-none md:justify-start"
		>
			<TabItem open>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<FireOutline size="md" />
					人気記事
				</div>
				<div>
					{#await data.popularArticles}
						<GridList>
							{#each Array(8) as _}
								<li class="w-auto">
									<ArticleVerticalCardSkeleton />
								</li>
							{/each}
						</GridList>
					{:then popularArticles}
						<ArticleGallery
							ulStyleClass="justify-items-center"
							articles={popularArticles}
							sortCriteria={null}
						/>
					{/await}
				</div>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<ClockOutline size="md" />
					新着記事
				</div>
				<div>
					{#await data.newArticles}
						<GridList>
							{#each Array(8) as _}
								<li>
									<ArticleVerticalCardSkeleton />
								</li>
							{/each}
						</GridList>
					{:then newArticles}
						<ArticleGallery
							ulStyleClass="justify-items-center"
							articles={newArticles}
							sortCriteria={null}
						/>
					{/await}
				</div>
			</TabItem>
		</Tabs>
	</main>
</div>
