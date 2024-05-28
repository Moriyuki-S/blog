<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import ArticleCard from '$lib/features/article/components/ArticleCard/ArticleCard.svelte';

	export let data: PageData;
	$: popularArticles = data.popularArticles;
</script>

<div class="w-full flex">
	<main class="w-2/3">
		<div>
			<h3>人気記事</h3>
			<ul class="grid grid-cols-4 gap-5">
				{#each popularArticles as article}
					<li class="w-auto">
						<ArticleCard {article} />
					</li>
				{/each}
			</ul>
		</div>
	</main>
	<RightSidebar styleClass="w-1/3"></RightSidebar>
</div>
