<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import ArticleDetail from '$lib/features/article/components/ArticleDetail/ArticleDetail.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { BookOutline, ListOutline } from 'flowbite-svelte-icons';
	import ArticleContents from '$lib/features/article/components/ArticleContents/ArticleContents.svelte';

	export let data: PageData;
	$: article = data.article;
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta name="description" content={article.body} />
</svelte:head>

<div class="pt-10 px-5 pb-10 md:flex md:justify-center md:items-start md:gap-x-4">
	<main class="md:w-2/3">
		<ArticleDetail {article} />
	</main>
	<RightSidebar styleClass="md:min-w-1/3 md:w-1/3 md:sticky md:top-28">
		<Tabs tabStyle="underline">
			<TabItem open>
				<div slot="title" class="flex">
					<ListOutline class="me-2" />
					<span>目次</span>
				</div>
				<div>
					<ArticleContents />
				</div>
			</TabItem>
			<TabItem>
				<div slot="title" class="flex">
					<BookOutline class="me-2" />
					<span>関連記事</span>
				</div>
				<ArticleContents />
			</TabItem>
		</Tabs>
	</RightSidebar>
</div>
