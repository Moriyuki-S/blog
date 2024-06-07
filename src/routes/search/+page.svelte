<script lang="ts">
	import { Button, TabItem, Tabs } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import TagCard from '$lib/features/tag/components/TagCard/TagCard.svelte';

	let query: string = '';
	export let data: PageData;
	$: inputEmpty = query === '';
	$: areArticlesPresent = Boolean(data.articles);
</script>

<main class="pt-10">
	<form
		action="/search"
		method="GET"
		role="search"
		class="w-full flex gap-x-5 justify-center max-w-[64rem] lg:mx-auto"
	>
		<div class="w-2/3 relative">
			<input
				type="search"
				required
				name="q"
				bind:value={query}
				class="w-full h-10 md:h-14 pl-14 rounded-lg focus:border-sky-300"
				placeholder="検索したいキーワードを入力してください"
			/>
			<span class="absolute top-1/2 left-5 -translate-y-1/2"><SearchOutline /></span>
		</div>
		<Button id="submit-button" type="submit" disabled={inputEmpty}>検索する</Button>
	</form>
	<section class="w-full max-w-[60rem] mx-auto px-3 pt-5 md:pt-10">
		<Tabs>
			<TabItem open={!areArticlesPresent}>
				<div slot="title" class="w-24">
					<span>タグ一覧</span>
				</div>
				<ul id="tag-list" class="flex flex-col md:flex-row gap-5">
					{#each data.tags as tag}
						<li>
							<TagCard {tag} />
						</li>
					{/each}
				</ul>
			</TabItem>
			{#if data.articles}
				<TabItem open>
					<div slot="title" class="w-24">
						<span>検索結果</span>
					</div>
					<ul id="article-list" class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
						{#await data.articles}
							<li>
								<ArticleVerticalCardSkeleton />
							</li>
						{:then articles}
							{#each articles as article}
								<li>
									<ArticleVerticalCard {article} />
								</li>
							{/each}
						{/await}
					</ul>
				</TabItem>
			{/if}
		</Tabs>
	</section>
</main>
