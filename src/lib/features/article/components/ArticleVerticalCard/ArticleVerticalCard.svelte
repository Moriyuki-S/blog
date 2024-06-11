<script lang="ts">
	import { calculateTimeDifference } from '$lib/utils/time-format';
	import { Card, Tooltip } from 'flowbite-svelte';
	import type { Article, ArticleId } from '../../types/type';
	import TagChip from '$lib/features/tag/components/TagChip/TagChip.svelte';
	import { BookmarkOutline, BookmarkSolid } from 'flowbite-svelte-icons';
	import { BookmarkRepository } from '../../repositories/localstorage/bookmark';
	import { get } from 'svelte/store';
	import { BookmarkedArticlesIdStore } from '../../stores/bookmarked-articlesID';
	
	export let article: Readonly<Article>; //読みこみのみ可能

	// 更新したかを判定
	$: wasUpdated = article.updatedAt.toString() !== article.createdAt.toString();

	// ブックマークされているかを判定
	let isBookmarked: boolean = get(BookmarkedArticlesIdStore).includes(article.id);

	// ブックマーク処理
	const bookmarkArticle = (articleId: ArticleId) => {
		BookmarkRepository.setBookmarkedArticleId(articleId);
		isBookmarked = true;
	};

	// ブックマーク解除処理
	const removeBookmarkedArticle = (articleId: ArticleId) => {
		BookmarkRepository.deleteBookmarkedArticleId(articleId);
		isBookmarked = false;
	};

</script>

<Card href={`/articles/${article.slug}`} img={article.imageUrl} class="cursor-pointer" size="sm">
	<div class="mb-4 w-full flex justify-between items-center">
		<TagChip tag={article.tag} />
		{#if isBookmarked}
			<button
				on:click|preventDefault={() => removeBookmarkedArticle(article.id)}
				id={`bookmarked-button-${article.id}`}
				data-testid="bookmarked-button"
				class="w-12 flex justify-center items-center rounded-full aspect-square hover:bg-gray-200"
			>
				<BookmarkSolid color="#FFD700" size="lg"/>
			</button>
			<Tooltip placement="bottom" triggeredBy={`#bookmarked-button-${article.id}`}>
				<span>ブックマークをはずす</span>
			</Tooltip>
		{:else}
			<button
				on:click|preventDefault={() => bookmarkArticle(article.id)}
				id={`bookmark-button-${article.id}`}
				data-testid="bookmark-button"
				class="w-12 flex justify-center items-center rounded-full aspect-square hover:bg-[#fdec93]"
			>
				<BookmarkOutline size="lg" />
			</button>
			<Tooltip placement="bottom" triggeredBy={`#bookmark-button-${article.id}`}>
				<span>ブックマークする</span>
			</Tooltip>
		{/if}
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
