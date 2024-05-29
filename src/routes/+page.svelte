<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { ClockOutline, FireOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleCard from '$lib/features/article/components/ArticleCard/ArticleCard.svelte';
	import ArticleCardSkelton from '$lib/features/article/components/ArticleCard/Skeleton/ArticleCardSkelton.svelte';

	export let data: PageData;
</script>

<div class="w-full px-5 md:flex md:justify-between md:gap-x-6">
	<main class="w-full md:w-2/3 pt-5">
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
								<ArticleCardSkelton />
							</li>
						{/each}
					</ul>
				{:then popularArticles}
					<ul class="grid grid-cols-2 gap-5">
						{#each popularArticles as article}
							<li class="w-auto">
								<ArticleCard {article} />
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
								<ArticleCardSkelton />
							</li>
						{/each}
					{:then newArticles} 
						{#each newArticles as article}
							<ArticleCard {article} />
						{/each}
					{/await}
				</ul>
			</TabItem>
		</Tabs>
	</main>
	<RightSidebar styleClass="w-1/3"></RightSidebar>
</div>
