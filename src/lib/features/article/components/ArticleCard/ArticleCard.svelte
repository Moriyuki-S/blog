<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { Article } from '../../types/type';
	export let article: Readonly<Article>; //読みこみのみ可能

	const wasUpdated = article.updatedAt !== article.createdAt;
</script>

<Card href="/" img={article.imageUrl} class="cursor-pointer" size="sm">
	<h5 class="min-h-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{article.title}
	</h5>
	<time
		datetime={wasUpdated ? article.updatedAt : article.createdAt}
		class="w-1/3 min-w-8 block text-sm ml-auto"
	>
		{wasUpdated ? '更新: ' + article.updatedAt : '投稿: ' + article.createdAt}
	</time>
</Card>
