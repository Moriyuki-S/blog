<script lang="ts">
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { ClockOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';
	import HomeImage from '$lib/assets/images/home-image.png?enhanced';

	export let data: PageData;
</script>

<div class="w-full relative md:flex">
	<h1 class="absolute top-1/2 left-1/2 md:static">大学生活について</h1>
	<div class="w-full h-72 md:w-1/2">
		<enhanced:img class="h-full" src={HomeImage} alt="海の風景" />
	</div>
</div>
<div class="w-full pt-10 md:pt-5 md:px-5 md:flex md:justify-between md:gap-x-6">
	<main class="w-full 2xl:max-w-[80rem] 2xl:mx-auto">
		<Tabs
			tabStyle="pill"
			contentClass="pt-5"
			defaultClass="flex gap-x-8 border-none justify-center md:justify-start"
		>
			<TabItem open>
				<div slot="title" class="flex items-center gap-x-2 text-lg md:text-xl">
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
