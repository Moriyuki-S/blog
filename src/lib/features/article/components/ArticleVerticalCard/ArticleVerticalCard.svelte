<script lang="ts">
	import { calculateTimeDifference } from '$lib/utils/time-format';
	import { Card, Tooltip } from 'flowbite-svelte';
	import type { Article, ArticleId } from '../../types/type';
	import TagChip from '$lib/features/tag/components/TagChip/TagChip.svelte';
	import { BookmarkOutline } from 'flowbite-svelte-icons';
	import { BookmarkRepository } from '../../repositories/localstorage/bookmark';
	import ArticleContents from '../ArticleContents/ArticleContents.svelte';
	export let article: Readonly<Article>; //読みこみのみ可能

	// 更新したかを判定
	$: wasUpdated = article.updatedAt.toString() !== article.createdAt.toString();

	// ブックマーク処理
	const bookmarkArticle = (articleId: ArticleId) => {
		BookmarkRepository.setBookmarkedArticleId(articleId);
	};
</script>

<Card href={`/articles/${article.slug}`} img={article.imageUrl} class="cursor-pointer" size="sm">
	<div class="mb-4 w-full flex justify-between items-center">
		<TagChip tag={article.tag} />
		<button on:click|preventDefault={() => bookmarkArticle(article.id)} id="bookmark-icon" class="w-12 flex justify-center items-center rounded-full aspect-square hover:bg-yellow-100">
			<BookmarkOutline size="lg"/>
		</button>
		<Tooltip placement="bottom" triggeredBy="#bookmark-icon" >
			<span>ブックマークする</span>
		</Tooltip>
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
