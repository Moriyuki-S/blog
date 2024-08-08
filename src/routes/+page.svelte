<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { ClockOutline, FireOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';

	export let data: PageData;
</script>

<div class="w-full pt-5 md:px-5 md:flex md:justify-between md:gap-x-6">
	<main class="w-full md:w-2/3">
		<Tabs
			tabStyle="pill"
			contentClass="pt-5"
			defaultClass="w-full border-t bg-white flex justify-center gap-x-5 items-center fixed bottom-0 right-0 md:static md:border-none md:justify-start"
		>
			<TabItem open>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<FireOutline size="md" />
					人気記事
				</div>

				<ul data-testid="popular-articles-list" class="grid grid-cols-1 gap-5">
					{#await data.popularArticles}
						{#each Array(8) as _}
							<li class="w-auto">
								<ArticleVerticalCardSkeleton />
							</li>
						{/each}
					{:then popularArticles}
						{#each popularArticles as article}
							<li data-article-id={article.id} class="w-auto">
								<ArticleVerticalCard {article} />
							</li>
						{/each}
					{/await}
				</ul>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<ClockOutline size="md" />
					新着記事
				</div>
				<ul data-testid="latest-articles-list" class="grid grid-cols-1 gap-5">
					{#await data.newArticles}
						{#each Array(8) as _}
							<li>
								<ArticleVerticalCardSkeleton />
							</li>
						{/each}
					{:then newArticles}
						{#each newArticles as article}
							<li data-article-id={article.id}>
								<ArticleVerticalCard {article} />
							</li>
						{/each}
					{/await}
				</ul>
			</TabItem>
		</Tabs>
	</main>
	<RightSidebar styleClass="w-1/3 pt-6"></RightSidebar>
</div>
