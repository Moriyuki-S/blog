<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { BookmarkOutline, ClockOutline, FireOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import ArticleVerticalCardSkelton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkelton.svelte';

	export let data: PageData;
</script>

<div class="w-full pt-5 px-5 md:flex md:justify-between md:gap-x-6">
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

				{#await data.popularArticles}
					<ul class="grid grid-cols-2 gap-5">
						{#each Array(8) as _}
							<li class="w-auto">
								<ArticleVerticalCardSkelton />
							</li>
						{/each}
					</ul>
				{:then popularArticles}
					<ul class="grid grid-cols-2 gap-5">
						{#each popularArticles as article}
							<li class="w-auto">
								<ArticleVerticalCard {article} />
							</li>
						{/each}
					</ul>
				{/await}
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<ClockOutline size="md" />
					新着記事
				</div>
				<ul class="grid grid-cols-2 gap-5">
					{#await data.newArticles}
						{#each Array(8) as _}
							<li>
								<ArticleVerticalCardSkelton />
							</li>
						{/each}
					{:then newArticles}
						{#each newArticles as article}
							<li>
								<ArticleVerticalCard {article} />
							</li>
						{/each}
					{/await}
				</ul>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-x-2 md:text-xl">
					<BookmarkOutline size="md" />
					ブックマーク
				</div>
				{#if data.bookmarkedArticles.length === 0}
					<p>ブックマークした記事はありません</p>
				{:else}
					<ul class="grid grid-cols-2 gap-5">
						{#each data.bookmarkedArticles as article}
							<li>
								<ArticleVerticalCard {article} />
							</li>
						{/each}
					</ul>
				{/if}
			</TabItem>
		</Tabs>
	</main>
	<RightSidebar styleClass="w-1/3 pt-6"></RightSidebar>
</div>
