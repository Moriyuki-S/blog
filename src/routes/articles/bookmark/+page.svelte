<script lang="ts">
	import { BookmarkOutline } from "flowbite-svelte-icons";
	import type { PageData } from "./$types";
	import ArticleVerticalCardSkeleton from "$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte";
	import ArticleVerticalCard from "$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte";

    export let data: PageData;


</script>

<main class="pt-16 px-4">
	<h1 class="text-3xl text-center">
		<BookmarkOutline color="yellow" class="me-2" />
        ブックマークした記事
	</h1>
	<ul class="grid grid-cols-3 gap-5 mt-10" data-testid="tagged-articles">
		{#await data.articles}
			{#each Array(8) as _}
				<ArticleVerticalCardSkeleton />
			{/each}
		{:then articles}
			{#each articles as article}
				<ArticleVerticalCard {article} />
			{/each}
		{/await}
	</ul>
</main>