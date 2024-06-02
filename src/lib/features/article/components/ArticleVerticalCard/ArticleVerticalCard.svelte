<script lang="ts">
	import { calculateTimeDifference } from '$lib/utils/time-format';
	import { Card } from 'flowbite-svelte';
	import type { Article } from '../../types/type';
	import TagChip from '$lib/features/tag/components/TagChip/TagChip.svelte';
	export let article: Readonly<Article>; //読みこみのみ可能

	// 更新したかを判定
	const wasUpdated = article.updatedAt.toString() !== article.createdAt.toString();
</script>

<Card href={`/articles/${article.slug}`} img={article.imageUrl} class="cursor-pointer" size="sm">
	<div class="mb-4">
		<TagChip tag={article.tag} />
	</div>
	<h5 id="title" class="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{article.title}
	</h5>
	<time
		datetime={wasUpdated ? String(article.updatedAt) : String(article.createdAt)}
		class="w-fit min-w-8 block text-sm ml-auto"
		data-testid="article-card-time"
	>
		{wasUpdated
			? '更新 : ' + calculateTimeDifference(article.updatedAt)
			: '投稿 : ' + calculateTimeDifference(article.createdAt)}
	</time>
</Card>

<style>
	#title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>