<script lang="ts">
	import { calculateTimeDifference } from '$lib/utils/time-format';
	import { Card, Tooltip } from 'flowbite-svelte';
	import type { Article, ArticleId } from '../../types/type';
	import { BookmarkOutline, BookmarkSolid } from 'flowbite-svelte-icons';
	import { BookmarkedArticlesIdStore } from '../../stores/bookmarked-articlesID';
	import { BookmarkArticles } from '../../application/usecases/bookmark-articles';
	import { SnackbarUtils } from '$lib/global-stores/snackbar-store';
	import TagChipList from '$lib/features/tag/components/TagChip/List/TagChipList.svelte';
	import { fade } from 'svelte/transition';
	import ImageWithLoading from '$lib/components/layouts/ImageWithLoading/ImageWithLoading.svelte';

	export let article: Readonly<Article>; //読みこみのみ可能
	export let functionOnBookmark: ((articleId: ArticleId) => void) | undefined = undefined;
	export let functionOnRemoveBookmark: ((articleId: ArticleId) => void) | undefined = undefined;

	// 更新したかを判定
	$: wasUpdated = article.updatedAt.toString() !== article.createdAt.toString();

	// ブックマークされているかを判定
	let isBookmarked: boolean = BookmarkedArticlesIdStore.isBookmarked(article.id);

	// ブックマーク処理
	const bookmarkArticle = (articleId: ArticleId) => {
		BookmarkArticles.bookmarkArticle(articleId);
		if (functionOnBookmark) {
			functionOnBookmark(articleId);
		}
		isBookmarked = true;
		SnackbarUtils.update('ブックマークしました');
	};

	// ブックマーク解除処理
	const removeBookmarkedArticle = (articleId: ArticleId) => {
		BookmarkArticles.removeBookmarkedArticle(articleId);
		if (functionOnRemoveBookmark) {
			functionOnRemoveBookmark(articleId);
		}
		isBookmarked = false;
		SnackbarUtils.update('ブックマークを解除しました');
	};
</script>

<div out:fade class="w-fit max-w-full">
	<Card data-article-id={article.id} class="h-[30rem]" size="sm" padding="none">
		<div>
			<a href={`/articles/${article.slug}`} class="hover:opacity-75">
				<ImageWithLoading
					src={article.imageUrl}
					alt={article.title}
					imageSkeletonClass="w-[365.84px] h-64"
					imageSkeletonHeight="240"
					width="365.84"
					height="240"
					class="h-64 rounded-t-lg"
				/>
			</a>
		</div>
		<div class="p-5 h-72 max-w-[365.84px]">
			<div class="mb-4 w-full flex justify-between items-center">
				<TagChipList shouldfilter tags={article.tags} />
				{#if isBookmarked}
					<button
						on:click|preventDefault={() => removeBookmarkedArticle(article.id)}
						id={`bookmarked-button-${article.id}`}
						data-testid={`bookmarked-button-${article.id}`}
						class="group w-12 flex justify-center items-center rounded-full aspect-square transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						<BookmarkSolid color="#FFD700" size="lg" class="group-active:scale-90 transition-all" />
					</button>
					<Tooltip placement="bottom" triggeredBy={`#bookmarked-button-${article.id}`}>
						<span>ブックマークをはずす</span>
					</Tooltip>
				{:else}
					<button
						on:click|preventDefault={() => bookmarkArticle(article.id)}
						id={`bookmark-button-${article.id}`}
						data-testid={`bookmark-button-${article.id}`}
						class="group w-12 flex justify-center items-center rounded-full aspect-square hover:bg-[#fdec93] transition-colors dark:hover:bg-[#2d3748]"
					>
						<BookmarkOutline size="lg" class="group-active:scale-90 transition-all" />
					</button>
					<Tooltip placement="bottom" triggeredBy={`#bookmark-button-${article.id}`}>
						<span>ブックマークする</span>
					</Tooltip>
				{/if}
			</div>
			<h5
				id="title"
				class="mb-10 text-2xl h-16 font-bold tracking-tight text-gray-900 dark:text-white"
			>
				<a href={`/articles/${article.slug}`} class="hover:underline">
					{article.title}
				</a>
			</h5>
			<time
				datetime={wasUpdated ? String(article.updatedAt) : String(article.createdAt)}
				class="w-fit min-w-8 block text-sm ml-auto text-gray-500"
				data-testid={`article-card-time-${article.id}`}
			>
				{wasUpdated
					? '更新 : ' + calculateTimeDifference(article.updatedAt)
					: '投稿 : ' + calculateTimeDifference(article.createdAt)}
			</time>
		</div>
	</Card>
</div>

<style>
	#title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
